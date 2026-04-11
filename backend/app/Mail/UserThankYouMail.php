<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class UserThankYouMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public array $data) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(
                env('MAIL_FROM_ADDRESS', 'dhanaxteriya011@gmail.com'),
                env('MAIL_FROM_NAME', 'Welcare FMS')
            ),
            replyTo: [
                new Address(
                    env('ADMIN_MAIL', 'dhanaxteriya011@gmail.com'),
                    'Welcare FMS Team'
                ),
            ],
            subject: 'Thank You for Contacting Welcare FMS — We\'ll Be in Touch!',
        );
    }

    public function content(): Content
    {
        return new Content(view: 'emails.user-thankyou');
    }
}