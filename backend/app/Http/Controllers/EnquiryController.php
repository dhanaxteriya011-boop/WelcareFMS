<?php

namespace App\Http\Controllers;

use App\Mail\AdminEnquiryMail;
use App\Mail\UserThankYouMail;
use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        // ── Validate
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'phone'   => 'required|string|max:20',
            'email'   => 'required|email|max:150',
            'service' => 'nullable|string|max:100',
            'message' => 'nullable|string|max:2000',
        ]);

        // ── Save to DB
        $enquiry = Enquiry::create($validated);

        // ── Send email to admin
        Mail::to(env('ADMIN_MAIL', 'info@welcarefms.com'))
            ->send(new AdminEnquiryMail($enquiry));

        // ── Send auto-reply to user
        Mail::to($enquiry->email)
            ->send(new UserThankYouMail($enquiry));

        return response()->json([
            'message' => 'Enquiry submitted successfully.',
            'id'      => $enquiry->id,
        ], 201);
    }
}