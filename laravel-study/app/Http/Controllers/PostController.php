<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    /**
     * 投稿一覧を表示する
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */ 
    public function showList(Request $request) {
        // Eloquent メソッド all
        $posts = Post::all();

        // dd($posts);

        return response()->json($posts);
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

    /**
     * POSTした内容を表示する
     * 
     * @return view
     */ 
    public function showCreate() {
        return view('post.form');
    }

    /**
     * POSTした内容をDBに保存する
     * 
     * @return view
     */ 
    public function exeStore(PostRequest $request) {
        // dd($request->all());
        // 投稿されたデータを受け取る
        $inputs = $request->all();
        

        // エラーがなかったらDBに書き込む、エラーの場合は書き込まない
        \DB::beginTransaction();

        // 投稿する
        try {
            Post::create($inputs);
            \DB::commit();
        } catch (\Throwable $e) {
            // ログにエラーメッセージを記録
            \Log::error('投稿の処理中にエラーが発生しました: ' . $e->getMessage());

            \DB::rollback();

            // 500エラーのページに遷移する
            abort(500);
        }
        

        session()->flash('err_msg', 'ブログを登録しました。');
        return redirect(route('posts'));
    }
}
