<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['slug','name','icon','short_desc','features','sort_order','is_active'];
    protected $casts    = ['is_active' => 'boolean'];
}
