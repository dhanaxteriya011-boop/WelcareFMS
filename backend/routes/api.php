<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


// ── Public routes
Route::post('/contact',       [ContactController::class, 'store']);
