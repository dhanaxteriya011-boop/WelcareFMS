<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminEnquiryMail;
use App\Mail\UserThankYouMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:120',
            'phone'   => 'required|string|max:20',
            'email'   => 'required|email|max:180',
            'service' => 'nullable|string|max:100',
            'message' => 'nullable|string|max:2000',
        ]);

        // ✅ Add these two lines — required by both Blade templates
        $data['ref']          = strtoupper(substr(md5($data['email'] . microtime()), 0, 8));
        $data['submitted_at'] = now()->format('d M Y, h:i A');

        Mail::to(env('ADMIN_MAIL', 'dhanaxteriya011@gmail.com'))
            ->send(new AdminEnquiryMail($data));

        Mail::to($data['email'])
            ->send(new UserThankYouMail($data));

        return response()->json([
            'success' => true,
            'message' => 'Enquiry received! We will contact you within 24 hours.',
        ], 200);
    }
}