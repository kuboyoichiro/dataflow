# mvcとは
SmalltalkのGUIライブラリのモデルとして登場したのが発端。
Model、View、Controllerの頭文字をとっている。

## 用語と役割
- Model: ビジネスロジックとデータアクセスを担当する。管理しているデータに変更があった際にViewへ通知する。
- View: UI部分。Modelからのデータを表示する。
- Controller: Viewからの入力を処理し、Modelに渡す。