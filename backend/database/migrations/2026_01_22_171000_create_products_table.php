<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            // ✅ Category relation
            $table->foreignId('category_id')
                ->constrained()
                ->onDelete('cascade');

            // ✅ Vehicle fields
            $table->string('make');
            $table->string('model');
            $table->year('model_year');
            $table->string('engine')->nullable();
            $table->string('transmission')->nullable();
            $table->string('color')->nullable();
            $table->string('mileage')->nullable();
            $table->string('fuel_type')->nullable();
            $table->string('load_capacity')->nullable();

            // ✅ Optional
            $table->decimal('price', 10, 2)->nullable();
            $table->string('whatsapp_number')->nullable();

            // ✅ Images
            $table->json('images')->nullable();

            $table->timestamps();
        });

    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
