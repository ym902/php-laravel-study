# php-study
PHP、Laravelの学習で、掲示板アプリを作成したリポジトリです。


## 使用技術
- React
- TypeScript
- Laravel
- PHP
- XAMPP
- Composer
- MySQL


## セットアップ
- XAMPP、Composer、Laravelのインストール、設定の手順について記載しています。


## XAMPP インストール
- XAMPPとは、Apache、PHP、MySQLまでが入ったパッケージのこと

1. 下記リンクから、XAMPPインストール
   * https://www.apachefriends.org/jp/index.html

2. Select Components：すべてチェックが入った状態でNext

3. その他、すべてNextで進む


## Composerインストール
- Composerとは、PHPのライブラリ管理ツールのこと

1. 下記リンクの、__Composer-Setup.exe__ からインストール
    * https://getcomposer.org/download/

2. インストール時の設定
    * Install for all users
    * Developerモード : チェックせずNext
    * Add this PHP to your path : チェック入れる
    * Use a proxy server to connect to internet : チェックせずNext

3. (インストールが完了したら、PC再起動する)

4. インストールできたか、コマンドプロンプトで確認する

```
$ composer -v
```


## プロジェクト作成
1. XAMPPソフト内のエクスプローラーをクリック
2. htdocsを開く
3. 開発するプロジェクト名の新規ファイルを作成  
    ※プロジェクトファイルを作成せず、htdocs内にそのまま以下の手順でLaravelをインストールしてもOK


## Laravelインストール
- Laravelとは、PHPのフレームワークのこと

1. コマンドプロンプトで、作成したプロジェクト(Laravelをインストールしたいディレクトリ)へ移動
2. 下記コマンドでLaravelをインストール

```
$ composer create-project laravel/laravel sample
```  

※下記のほうがインストールが早い可能性あり

```
$ composer create-project --prefer-dist laravel/laravel sample
```

※--prefer-dist オプションについて
    プロジェクトを圧縮してからダウンロードするため、処理が速くなる  

3. インストールしたLaravelのpublicディレクトリ内に、index.phpがあるため、ドキュメントルートを変更する
4. xampp/apache/conf/httpd.conf を開く
5. ctrl + F で「documentroot」を検索して、下記のように変更

```
DocumentRoot "C:/xampp/htdocs"  // こちらを下記に変更

↓

DocumentRoot "C:\xampp\htdocs\php-study\laravel-study\public"

→ public/index.phpにアクセスされるように、ルートを変更する
```

6. http://localhost/ にアクセスするとLaravelのページに直接アクセスされるようになる


## ポート番号確認、変更
1. XAMPPコントロールパネルから、ApacheのConfigをクリック
2. メモ帳が開かれるので、下記のように、60行目のコードを変更

```
Listen 80   // こちらを下記に変更

↓

Listen 8080

→ 番号を変更すると、8080番で接続できるようになる
```

3. 228行目のコードも変更

```
ServerName localhost:80   // こちらを下記に変更

↓

ServerName localhost:8080
```

4. http://localhost:8080/ から接続できるようになる


## ファイル操作（権限の解除）
1. xamppフォルダを右クリック
2. 「プロパティ」を選択
3. 属性の「読み取り専用」のチェック外す → OK
4. サブフォルダにも適用 → OK
