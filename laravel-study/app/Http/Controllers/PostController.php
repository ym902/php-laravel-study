<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * 投稿一覧を表示する
     * 
     * @return view
     */ 
    public function showList() {
        // Eloquent メソッド all
        $posts = Post::all();

        // dd($posts);

        return view('post.list',
        ['posts' => $posts]);
    }
}
