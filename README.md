# ゴーヤレンタカー 集客型ホームページ

## プロジェクト概要

既存の予約システム導線を活かしつつ、SEO（オーガニック）で新規顧客を獲得できる「集客型サイト」です。

## ディレクトリ構造

```
goya-rentacar/
├── index.html          # TOPページ
├── strengths.html      # 強みページ
├── pickup.html         # 送迎ページ
├── faq.html            # FAQページ
├── css/
│   └── style.css      # メインスタイルシート
├── js/
│   └── main.js        # メインJavaScript（GA4計測含む）
├── images/            # 画像ファイル用
├── lp/                # SEO用LPページ
│   ├── naha-airport-fast-departure/
│   ├── minivan-7/
│   ├── insurance-summary/
│   ├── 16years/
│   └── ...（他6本）
└── en/                # 多言語ページ（英語）
```

## 主な機能

### 1. TOPページ
- ファーストビュー（H1、バッジ、CTA）
- 予約カレンダー枠（埋め込み対応）
- 送迎フロー図解
- 強みセクション
- 車種・料金例・FAQ

### 2. 下層ページ
- `/strengths` - 強み ✅
- `/pickup` - 送迎サービス ✅
- `/faq` - よくある質問 ✅
- `/cars` - 車種 ✅
- `/price` - 料金 ✅
- `/insurance` - 補償 ✅
- `/access` - 店舗情報 ✅
- `/company` - 会社情報 ✅

### 3. SEO用LPページ（10本）
- `/lp/naha-airport-fast-departure` - 那覇空港 送迎 すぐ出発 ✅
- `/lp/naha-airport-hotel-pickup` - 那覇空港↔ホテル送迎 ✅
- `/lp/arrival-flow` - 到着後の流れ ✅
- `/lp/minivan-7` - 沖縄 ミニバン 7人 ✅
- `/lp/family-trip` - 家族旅行向け ✅
- `/lp/insurance-summary` - 補償をわかりやすく ✅
- `/lp/insurance-guide` - 初めての補償選び ✅
- `/lp/16years` - 沖縄16年目 ✅
- `/lp/cleaning-maintenance` - 整備・清掃基準 ✅
- `/lp/trouble-support` - よくあるトラブル対策 ✅

## 技術仕様

### SEO設定
- 構造化データ（LocalBusiness、FAQPage）
- メタタグ最適化（title、description）
- 内部リンク構造

### 計測（GA4）
- `calendar_view` - カレンダー表示
- `calendar_start` - 日付入力開始
- `calendar_outbound_click` - 予約システム遷移
- `web_reservation_click` - WEB予約クリック
- `line_consultation_click` - LINE相談クリック
- `tel_click` - 電話クリック
- `form_submit` - フォーム送信
- `faq_open` - FAQ開閉

### パフォーマンス
- モバイル最優先設計
- レスポンシブ対応
- 画像最適化推奨（WebP/AVIF、lazyload）

## 実装前の確認事項（TBD）

以下の項目は実装前に確認・設定が必要です：

1. **予約カレンダー埋め込み**
   - iFrame / JSウィジェット / 外部リンクのいずれか
   - 推奨高さ：PC 520-720px、SP 640-900px

2. **連絡先情報**
   - 電話番号：`098-XXX-XXXX` → 実際の番号に変更
   - LINE公式アカウント：`@goya-rentacar` → 実際のIDに変更

3. **GA4設定**
   - トラッキングID：`G-XXXXXXXXXX` → 実際のIDに変更

4. **料金情報**
   - 料金例の金額を実際の金額に更新

5. **補償プラン詳細**
   - 補償プランの詳細情報を追加

6. **送迎詳細**
   - 対応ホテル範囲
   - 集合場所の詳細
   - 連絡手段（TEL/LINE）

7. **車種情報**
   - 車種の具体名、台数、装備

8. **店舗情報**
   - 住所、営業時間、アクセス情報

## 開発・デプロイ

### ローカル開発
1. ファイルをWebサーバーに配置
2. ブラウザで `index.html` を開く

### 本番環境
- 静的サイトホスティング（Netlify、Vercel等）推奨
- CMS連携も可能（要カスタマイズ）

## ライセンス

© 2026 ゴーヤレンタカー. All rights reserved.
