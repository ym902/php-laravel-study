<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>掲示板 投稿一覧</h1>

  <!-- エラーメッセージ -->
  @if (session('err_msg'))
    <p style="color: red; font-weight: bold;">{{ session('err_msg') }}</p>
  @endif

  @foreach($posts as $post)
  <tr>
    <td>{{ $post->id }}</td>
    <td>{{ $post->username }}</td>
    <td>{{ $post->comment }}</td>
    <td>{{ $post->postDate }}</td>

    <!-- リンク -->
    <!-- <p>リンクから詳細ページへ</p>
    <td><a href="/posts/detail/{{ $post->id }}">{{ $post->id }}</a></td> -->
  </tr>
  @endforeach
</body>
</html>