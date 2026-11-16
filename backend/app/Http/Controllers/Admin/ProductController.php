<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    public function create()
    {
        $categories = Category::all();
        return view('admin.products.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'make' => 'required|string',
            'model' => 'required|string',
            'model_year' => 'required|digits:4',
            'engine' => 'nullable|string',
            'transmission' => 'nullable|string',
            'fuel_type' => 'nullable|string',
            'color' => 'nullable|string',
            'mileage' => 'nullable|string',
            'load_capacity' => 'nullable|string',
            'price' => 'nullable|numeric',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp',
        ]);

        // MULTIPLE IMAGES
        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 'public');
                $imagePaths[] = '/storage/' . $path;
            }
        }

        Product::create([
            'category_id' => $request->category_id,
            'make' => $request->make,
            'model' => $request->model,
            'model_year' => $request->model_year,
            'engine' => $request->engine,
            'transmission' => $request->transmission,
            'fuel_type' => $request->fuel_type,
            'color' => $request->color,
            'mileage' => $request->mileage,
            'load_capacity' => $request->load_capacity,
            'price' => $request->price,
            'images' => $imagePaths,
        ]);

        return back()->with('success', 'Product Added Successfully!');
    }
}