# fluxとは
Facebookが提唱した、MVCの決定版
データが一方通行へ流れるようにするアーキテクチャ

## 用語と役割
- View: 表示担当。
- ActionCreator: Viewから呼ばれる。通知に応じて適切なActionを生成する
- Action: データの変更をする
- Dispatcher: Actionからの通知が来たら、ActionからやってきたvalueをStoreに書き込んだりする
- Store: データの状態を管理する。変更はAction経由でしか行われない。Viewはこいつをずっと眺めてる。