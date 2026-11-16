<?php

use App\Http\Controllers\Admin\ProductController;




Route::prefix('admin')->group(function () {

    
    Route::get('/products/create', [ProductController::class, 'create']);
    Route::post('/products', [ProductController::class, 'store']);

});


