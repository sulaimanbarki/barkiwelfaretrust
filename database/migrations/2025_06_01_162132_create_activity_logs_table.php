<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('actor_id')->nullable(); // User who did the action
            $table->string('actor_type')->nullable(); // e.g. 'user', 'admin'
            $table->unsignedBigInteger('subject_id')->nullable(); // ID of affected record
            $table->string('subject_type')->nullable(); // Model name, e.g. 'Donation'
            $table->string('activity'); // 'created', 'updated', 'deleted', etc
            $table->text('message')->nullable(); // Human-readable message
            $table->timestamps();
            $table->softDeletes(); // For soft deletes
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};
