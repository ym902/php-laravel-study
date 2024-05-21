<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    /**
     * 投稿一覧を表示する (GET)
     * 
     * @return \Illuminate\Http\Response
     */ 
    public function index()
    {
        // Eloquent メソッド all
        $posts = Post::get();

        // dd($posts);

        return $posts;
    }

    /**
     * 投稿詳細を表示する (GET ID)
     * @param int $id
     * @return view
     */ 
    public function show($id)
    {
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

    /**
     * 投稿した内容をDBに保存 (POST)
     * 
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */ 
    public function store(PostRequest $request)
    {
        try {
            // 新規のPostモデルを作成する
            $post = new Post();
            $post->username = $request->username;
            $post->comment = $request->comment;
    
            // DBにデータを登録する
            $post->save();
    
            // 成功した場合のレスポンスを返す
            return response()->json($post);

        } catch (\Throwable $e) {
            // ログにエラーメッセージを記録
            \Log::error('投稿の処理中にエラーが発生しました: ' . $e->getMessage());
        }
    }

    /**
     * 投稿内容を変更する (PUT)
     * 
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */ 
    public function update(PostRequest $request, $id)
    {
        // 新規のPostモデルを作成する
        
    }
}
