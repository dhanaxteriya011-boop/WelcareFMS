<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Enquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'service',
        'message',
        'status',   // new | read | replied | closed
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
