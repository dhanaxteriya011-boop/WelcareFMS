<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;
use App\Mail\AdminEnquiryMail;
use App\Mail\UserThankYouMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validate
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:120',
            'phone'   => 'required|string|max:20',
            'email'   => 'required|email|max:180',
            'service' => 'nullable|string|max:100',
            'message' => 'nullable|string|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors'  => $validator->errors(),
            ], 422);
        }

        // 2. Save enquiry to DB
        $enquiry = Enquiry::create([
            'name'    => $request->name,
            'phone'   => $request->phone,
            'email'   => $request->email,
            'service' => $request->service ?? null,
            'message' => $request->message ?? null,
            'status'  => 'new',
        ]);

        $adminEmail = env('ADMIN_MAIL', 'info@welcarefms.com');
        $mailErrors = [];

        // 3. Send email to ADMIN
        try {
            Mail::to($adminEmail)->send(new AdminEnquiryMail($enquiry));
            Log::info("Admin enquiry email sent to {$adminEmail} for enquiry #{$enquiry->id}");
        } catch (\Exception $e) {
            Log::error("Admin mail FAILED for enquiry #{$enquiry->id}: " . $e->getMessage());
            $mailErrors[] = 'admin';
        }

        // 4. Send auto-reply thank-you email to USER
        try {
            Mail::to($enquiry->email)->send(new UserThankYouMail($enquiry));
            Log::info("Thank-you email sent to user {$enquiry->email} for enquiry #{$enquiry->id}");
        } catch (\Exception $e) {
            Log::error("User thank-you mail FAILED for {$enquiry->email}: " . $e->getMessage());
            $mailErrors[] = 'user';
        }

        return response()->json([
            'success'    => true,
            'enquiry_id' => $enquiry->id,
            'message'    => 'Enquiry received! We will contact you within 24 hours.',
            'mail_sent'  => empty($mailErrors),
            'mail_errors'=> $mailErrors, // for debug only
        ], 201);
    }

    public function index(Request $request)
    {
        $enquiries = Enquiry::orderByDesc('created_at')
            ->when($request->status, fn($q) => $q->where('status', $request->status))
            ->paginate(20);

        return response()->json($enquiries);
    }

    public function updateStatus(Request $request, $id)
    {
        $enquiry = Enquiry::findOrFail($id);
        $request->validate(['status' => 'required|in:new,read,replied,closed']);
        $enquiry->update(['status' => $request->status]);
        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        Enquiry::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
