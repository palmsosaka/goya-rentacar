# 予約CTAリンク 差し込みガイド（TODO）

サイト内の**予約系CTAボタン**（「予約」「今すぐ予約」「WEB予約」「空き確認して予約」など）は、
予約リンクが未確定のため **一時的に無効化** してあります。

## 現在の状態

- 該当ボタンは `<a>` から `href` を外し、代わりに **`data-cta-pending="reservation"`** という共通マーカーを付けています。
- `href` が無いのでクリックしても何も起きません（＝リンク無効）。ボタンの見た目・色・配置は元のままです。
- 対象：全33ファイル・**137箇所**（日本語・英語・LP すべて）。
- LINE / 電話（tel:）/ WhatsApp のリンクは無効化していません。従来どおり機能します。

## リンクを紐づける方法（1回の一括置換で全ページ有効化）

全ボタンが同じ予約URLに飛ぶ場合、リポジトリ全体で以下を一括置換するだけです。

- 検索: `data-cta-pending="reservation"`
- 置換: `href="ここに実際の予約URL"`

例（実際のURLに読み替えてください）:

```
置換前:  data-cta-pending="reservation"
置換後:  href="https://booking.example.com/goya"
```

これで137箇所すべてが一斉に有効化されます。置換後は本ファイルを削除して構いません。

## ボタンごとに違うURLにしたい場合

`data-cta-pending="reservation"` を目印に各ファイルを検索し、
必要な箇所だけ個別に `href="..."` へ書き換えてください。

## 該当ファイル一覧（箇所数）

- ルート: index.html(3), cars.html(20), access.html(4), blog.html(3), company.html(3),
  faq.html(2), greeting.html(2), insurance.html(3), pickup.html(3), price.html(3),
  strengths.html(3), terms.html(2)
- 英語(en/): cars.html(20), access.html(4), その他各3前後
- LP(lp/): 各3〜4箇所
