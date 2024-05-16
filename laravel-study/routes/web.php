<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return view('welcome');
});

// 練習で作成
Route::get('about', [HelloController::class, 'index']);

// postsテーブル
// get
Route::get('posts', [PostController::class, 'showList'])->name('posts');

// get id
Route::get('posts/{id}', [PostController::class, 'showDetail']);

// post
