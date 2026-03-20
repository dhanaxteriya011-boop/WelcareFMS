<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Gallery extends Model
{
    use HasFactory;
    protected $fillable = ['title','category','image_path','image_url','is_wide','is_tall','sort_order','is_active'];
    protected $casts    = ['is_wide' => 'boolean', 'is_tall' => 'boolean', 'is_active' => 'boolean'];
}
