# php-study
PHP、Laravelの学習で、掲示板を作成したリポジトリです。

## 使用技術
- React
- TypeScript
- Laravel
- PHP
- XAMPP
- Composer
- MySQL

## セットアップ

## XAMPPインストール

### XAMPP（ザンプ）とは、Apache（サーバー）、PHP、DB（MySQL）までが入ったパッケージ

1. XAMPPをインストールする
    - https://www.apachefriends.org/jp/index.html

2. Select Components：すべてチェックが入った状態でNext

3. その他、すべてNextで進む


## Composerインストール

### Composerとは、PHPのライブラリ管理ツール

1. https://getcomposer.org/download/ __Composer-Setup.exe__ からインストール

2. インストール時の設定
    - Install for all users
    - Developerモード : チェックせずNext
    - Add this PHP to your path : チェック入れる
    - Use a proxy server to connect to internet : チェックせずNext

3. （インストール完了したらPC再起動）

4. インストールできているかコマンドプロンプトで確認

```
$ composer -v
```

[参考記事](https://qiita.com/sano1202/items/6021856b70e4f8d3dc3d)


## プロジェクト作成
1. XAMPPソフト内のエクスプローラーをクリック
2. htdocs を開く
3. 開発するプロジェクト名の新規ファイルを作成  
    ※プロジェクトファイルを作成せず、htdocs内にそのまま以下の手順でLaravelをインストールしてもOK


## Laravelインストール

### Laravelとは、PHPのフレームワーク

1. コマンドプロンプトで、作成したプロジェクト（Laravelをインストールしたいディレクトリ）へ移動
2. 下記コマンドでLaravelをインストール

```
$ composer create-project laravel/laravel sample
```  

下記のほうがインストール早いかも

```
$ composer create-project --prefer-dist laravel/laravel sample
```

- --prefer-dist オプションについて
    - プロジェクトを圧縮してからダウンロードするため、処理が速くなる  

※Laravelのインストールには結構時間がかかる

3. インストールしたLaravelのpublicディレクトリ内にindex.phpがあるので、ドキュメントルートを変更する
4. xampp/apache/conf/httpd.conf を開く
5. ctrl + F で「documentroot」を検索して、下記のように変更

```
DocumentRoot "C:/xampp/htdocs"　部分を下記に変更

DocumentRoot "C:\xampp\htdocs\php-study\laravel-study\public"
    → public/index.php にアクセスされるようにルートを変更する
```

http://localhost/ にアクセスするとLaravelのページに直接アクセスされる


## ポート番号確認、変更
1. XAMPPコントロールパネルから、ApacheのConfigをクリック
2. メモ帳が開かれるので、下記のようにコードを変更
    - 60行目を変更

```
Listen 80

  ↓

Listen 8080
  → 番号を変更すると、このポート番号で接続できるようになる
```

    - 228行目を変更

```
ServerName localhost:80

  ↓

ServerName localhost:8080
```

3. http://localhost:8080/ で接続できるようになる


## ファイル操作（権限の解除）
1. xamppフォルダを右クリック
2. 「プロパティ」を選択
3. 属性の「読み取り専用」のチェック外す → OK
4. サブフォルダにも適用 → OK