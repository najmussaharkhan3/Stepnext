<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // GET all products
    public function index()
    {
        return response()->json(Product::latest()->get());
    }

    // STORE product (CREATE)
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'make' => 'required|string',
            'model' => 'required|string',
            'model_year' => 'required|digits:4|integer',

            'images' => 'nullable|array|max:7',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        $data = $request->only([
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
            'price'
        ]);

        if ($request->hasFile('images')) {
            $images = [];

            foreach ($request->file('images') as $file) {
                $path = $file->store('products', 'public');
                $images[] = $path;
            }

            $data['images'] = $images;
        }

        $product = Product::create($data);

        return response()->json($product, 201);
    }

    // SHOW single product
    public function show($id)
    {
        return response()->json(Product::findOrFail($id));
    }

    // UPDATE product
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'model_year' => 'sometimes|digits:4|integer',

            'images' => 'nullable|array|max:7',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        $data = $request->only([
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
            'price'
        ]);

        if ($request->hasFile('images')) {
            $images = [];

            foreach ($request->file('images') as $file) {
                $path = $file->store('products', 'public');
                $images[] = $path;
            }

            $data['images'] = $images;
        }

        $product->update($data);

        return response()->json($product);
    }

    // DELETE
    public function destroy($id)
    {
        Product::destroy($id);
        return response()->json(["message" => "Deleted"]);
    }
}
