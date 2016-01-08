# コントリビューションガイド：Snicket

Snicketは無料で提供されるOSSプロダクトです。
是非何らかのかたちで貢献して頂けると幸いです。

## Issue, PullRequestについて

ガラパゴス化を避けるため、コメント等は英語で記載するようにしてください。
また事前に類似のIssue,PullRequestがないか検索するようにしてください。

## Snicketの開発環境について

### ビルド
アプリケーションのビルドに以下のミドルウェアが必要です。

- node >= 5.3.0
- scala

#### フロントエンドの開発

nodeの各モジュールをインストールします。
必要なモジュールは`package.json`に書かれています。
```
$ npm install
```

gulpタスクを実行します。
開発にはbrowserSyncを使っているのでコードの変更が即時反映されます。
またpublic/js/bundle/以下に自動でビルドされたJSファイルが作成されるようになっています。
```
$ npm start
```

#### APIの開発

runコマンドでplayを起動できます。
```
$ ./activator run
```

`-jvm-debug`オプションをつけるとステップ実行を使ったデバッグが可能になります。

デフォルトは9000番ポートで起動しますが、`-Dhttp.port`オプションで起動ポートの変更も可能です。
```
$ ./activator run -Dhttp.port=9000 -jvm-debug 9999
```
