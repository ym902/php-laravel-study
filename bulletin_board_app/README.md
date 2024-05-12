# bulletin_board_app
フロントエンドは、React、TypeScriptにて作成。

## セットアップ
### React インストール
1. node.jsインストール
  - https://nodejs.org/en/
2. node.jsがインストールされているか確認
```
$ node -v
```
3. アプリケーションのテンプレートを作成 my_appの部分は任意のアプリ名を指定
```
$ npx create-react-app my_app
```

### 起動確認
1. package.jsonのあるディレクトリに移動
```
$ cd my_app
```
2. アプリケーションを起動
```
$ npm run start
```

### React Router
#### react-routerとは、Reactでルーティング（ページ遷移）を可能にするライブラリ。

1. Reactのアプリケーションを作成後、package.jsonのあるディレクトリで下記コマンドを実行する
```
$ npm install react-router-dom
```
