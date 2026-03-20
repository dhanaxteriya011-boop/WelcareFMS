<?php

namespace App\Mail;

use App\Models\Enquiry;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class AdminEnquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Enquiry $enquiry) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(
                env('MAIL_FROM_ADDRESS', 'noreply@welcarefms.com'),
                env('MAIL_FROM_NAME', 'Welcare FMS Website')
            ),
            replyTo: [
                new Address($this->enquiry->email, $this->enquiry->name),
            ],
            subject: '🔔 New Enquiry: ' . $this->enquiry->name
                   . ($this->enquiry->service ? ' — ' . $this->enquiry->service : '')
                   . ' | Welcare FMS',
        );
    }

    public function content(): Content
    {
        return new Content(view: 'emails.admin-enquiry');
    }
}
