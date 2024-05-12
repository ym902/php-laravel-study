<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HelloController extends Controller
{
    //
    // public function test() {
    //     return view('test');
    // }

    public function index() {
        $view = view('test');
        $view->now_date = date('Y年m月d日 H時i分s秒');
        return $view;
    }
}
