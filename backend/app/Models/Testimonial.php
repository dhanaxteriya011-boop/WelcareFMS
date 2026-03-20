<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Testimonial extends Model
{
    use HasFactory;
    protected $fillable = ['author_name','author_role','content','rating','avatar_initial','is_active'];
    protected $casts    = ['is_active' => 'boolean', 'rating' => 'integer'];
}
