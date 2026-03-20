<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Gallery images table
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->string('title', 150);
            $table->string('category', 80);   // housekeeping | landscape | security | electrical | catering | plumbing
            $table->string('image_path', 500)->nullable();
            $table->string('image_url', 500)->nullable();
            $table->boolean('is_wide')->default(false);   // spans 2 cols
            $table->boolean('is_tall')->default(false);   // spans 2 rows
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Services table (CMS-managed)
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 80)->unique();
            $table->string('name', 150);
            $table->string('icon', 10);          // emoji
            $table->text('short_desc');
            $table->json('features');             // array of bullet strings
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Testimonials table
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('author_name', 120);
            $table->string('author_role', 180)->nullable();
            $table->text('content');
            $table->tinyInteger('rating')->default(5);
            $table->string('avatar_initial', 5)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('services');
        Schema::dropIfExists('galleries');
    }
};
