<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\EnquiryController;

// ── Public API routes
Route::post('/contact',       [ContactController::class, 'store']);
Route::get('/services',       [ServiceController::class, 'index']);
Route::get('/gallery',        [GalleryController::class, 'index']);
Route::get('/testimonials',   [TestimonialController::class, 'index']);
Route::post('/enquiry', [EnquiryController::class, 'store']);

// ── Health check (test if API is reachable)
Route::get('/ping', fn() => response()->json(['status' => 'ok', 'message' => 'Welcare FMS API is running']));

// ── Admin routes
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('/enquiries',              [ContactController::class, 'index']);
    Route::patch('/enquiries/{id}/status',[ContactController::class, 'updateStatus']);
    Route::delete('/enquiries/{id}',      [ContactController::class, 'destroy']);
    Route::apiResource('gallery',         GalleryController::class)->except(['index']);
    Route::apiResource('services',        ServiceController::class)->except(['index']);
    Route::apiResource('testimonials',    TestimonialController::class)->except(['index']);
});
