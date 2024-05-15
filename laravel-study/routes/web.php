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
// Route::get('/posts', 'PostController@showList')->name('posts');
Route::get('posts', [PostController::class, 'showList']);
// post
// Route::post('about', [HelloController::class, 'index']);