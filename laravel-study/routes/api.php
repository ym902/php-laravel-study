<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// postsテーブル
// Route::resource('posts', PostController::class);
// get
Route::get('posts', [PostController::class, 'index']);

// post
Route::post('posts', [PostController::class, 'store'])->name('posts.store');

// put
Route::put('posts/{id}', [PostController::class, 'update'])->name('posts.update');

// delete
Route::delete('posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

// get id
Route::get('posts/{id}', [PostController::class, 'show'])->name('posts.show');