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

    /**
     * 投稿詳細を表示する
     * @param int $id
     * @return view
     */ 
    public function showDetail($id) {
        // Eloquent メソッド all
        $post = Post::find($id);

        // idがない値があった場合 一覧ページに戻る エラーメッセージを表示
        if (is_null($post)) {
            // sessionを作成
            session()->flash('err_msg', 'データがありません。');
            return redirect(route('posts'));
        }

        return view('post.detail',
        ['post' => $post]);
    }
}
