<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class AdminEnquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public array $data) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(
                env('MAIL_FROM_ADDRESS', 'admin@welcarefms.com'),
                env('MAIL_FROM_NAME', 'Welcare FMS Website')
            ),
            replyTo: [
                new Address($this->data['email'], $this->data['name']),
            ],
            subject: '🔔 New Enquiry: ' . $this->data['name']
                   . (!empty($this->data['service']) ? ' — ' . $this->data['service'] : '')
                   . ' | Welcare FMS',
        );
    }

    public function content(): Content
    {
        return new Content(view: 'emails.admin-enquiry');
    }
}