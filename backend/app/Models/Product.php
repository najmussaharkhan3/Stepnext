<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'make',
        'model',
        'model_year',
        'engine',
        'transmission',
        'color',
        'mileage',
        'fuel_type',
        'load_capacity',
        'price',
        'images'
    ];



    // ✅ Convert DB paths to full URLs
    public function getImagesAttribute($value)
    {
        $images = json_decode($value, true);

        return array_map(function ($img) {
            return asset('storage/' . $img);
        }, $images ?? []);
    }
}
