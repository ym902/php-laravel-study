<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>掲示板 投稿詳細</h1>

  <tr>
    <td>{{ $post->id }}</td>
    <td>{{ $post->username }}</td>
    <td>{{ $post->comment }}</td>
    <td>{{ $post->postDate }}</td>
  </tr>
</body>
</html>