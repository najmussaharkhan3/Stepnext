<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AdminAuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;

// Public routes
Route::post('/admin/login', [AdminAuthController::class, 'login']);

// Public categories & products (view only)
Route::apiResource('categories', CategoryController::class);
Route::get('products', [ProductController::class, 'index']);
Route::get('products/{product}', [ProductController::class, 'show']);

// Protected routes (token required)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/admin/logout', [AdminAuthController::class, 'logout']);
    Route::get('/dashboard-stats', [DashboardController::class, 'stats']);


    Route::post('products', [ProductController::class, 'store']);
    Route::put('products/{product}', [ProductController::class, 'update']);
    Route::delete('products/{product}', [ProductController::class, 'destroy']);
});