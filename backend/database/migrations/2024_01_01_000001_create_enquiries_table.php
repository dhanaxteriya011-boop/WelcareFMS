<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name', 120);
            $table->string('phone', 20);
            $table->string('email', 180);
            $table->string('service', 100)->nullable();
            $table->text('message')->nullable();
            $table->enum('status', ['new', 'read', 'replied', 'closed'])->default('new');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
