<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * 投稿一覧を表示する
     * 
     * @return view
     */ 
    public function showList() {
        return view('post.list');
    }
}
