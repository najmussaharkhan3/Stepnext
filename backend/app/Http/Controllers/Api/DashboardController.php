<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats()
    {
        // Total counts
        $totalProducts = Product::count();
        $totalCategories = Category::count();

        // Last 5 products
        $recentProducts = Product::latest()->take(5)->get();

        return response()->json([
            'totalProducts' => $totalProducts,
            'totalCategories' => $totalCategories,
            'recentProducts' => $recentProducts,
        ]);
    }
}
