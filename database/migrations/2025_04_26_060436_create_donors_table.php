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
        Schema::create('donors', function (Blueprint $table) {
            $table->id(); // donor_id
            $table->string('full_name');
            $table->integer('monthly_donation')->default(0);
            $table->string('donor_type')->default('Individual'); // individual or organization
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->integer('city_id')->nullable();
            $table->integer('country_id')->nullable();
            $table->softDeletes(); // deleted_at
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donors');
    }
};
