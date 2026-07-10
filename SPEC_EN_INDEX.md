# 仕様書: 英語版トップページ(en/index.html)作成

## 0. このドキュメントの使い方
この仕様書をリポジトリ直下に置き、Claude Code に以下のように指示する:
「SPEC_EN_INDEX.md を読んで、仕様書どおりに en/index.html を作成してください」

---

## 1. 目的
日本語版トップページ(index.html)と **完全に同一のレイアウト・デザイン・CSS** を使った英語版トップページ `en/index.html` を作成する。
対象読者は沖縄旅行のインバウンド観光客(初めて日本でレンタカーを借りる人を想定)。

## 2. 基本方針(最重要)
- **index.html を複製して en/index.html を作る**こと。新規デザインは一切起こさない
- HTML構造・class名・セクション順序・CSSは日本語版と100%共通を維持する
- 変更するのは以下のみ:
  1. テキスト(本仕様書 §5 の英文コピーをそのまま使用。Claude Code側で勝手に翻訳し直さない)
  2. パス(en/ フォルダからの相対パス修正)
  3. lang属性・meta・hreflang(§4)
  4. 言語切替リンク(§6)
- 共通CSSファイルを読み込んでいる場合はそのまま参照する(CSSファイル自体は編集しない)

## 3. ファイル操作
| 操作 | ファイル | 内容 |
|---|---|---|
| 新規作成 | `en/index.html` | 本仕様書に基づき作成 |
| 編集(2箇所のみ) | `index.html` | ①ヘッダー「EN」リンクを `en/index.html` に変更 ②`<head>` に hreflang 3行追加 |
| 変更禁止 | 上記以外の全ファイル | CSS・画像・他ページは一切変更しない |

**削除操作は禁止。削除が必要と判断した場合は必ず作業を止めてユーザーに確認すること。**

## 4. head要素の設定(en/index.html)
```html
<html lang="en">
<title>Goya Rentacar Okinawa | Free Naha Airport Pickup, 0-Min Departure | 17 Years</title>
<meta name="description" content="Car rental in Okinawa with free Naha Airport & hotel pickup — departure in as little as 0 minutes. 17 years of local trust. Clear all-inclusive pricing, full coverage plans, 7-seater minivans.">
<link rel="canonical" href="https://goya-rentacar.com/en/">
<link rel="alternate" hreflang="ja" href="https://goya-rentacar.com/">
<link rel="alternate" hreflang="en" href="https://goya-rentacar.com/en/">
<link rel="alternate" hreflang="x-default" href="https://goya-rentacar.com/">
```
OGPも同様に英語化(og:title / og:description は上記title/descriptionを流用、og:url は /en/)。

日本語版 index.html の `<head>` にも同じ hreflang 3行を追加する(canonicalは既存のまま)。

## 5. セクション別 英文コピー(このまま使用すること)

### 5-1. ヘッダー
- ナビ: 車種→ `Cars` / 補償→ `Coverage` / 送迎→ `Pickup` / FAQ→ `FAQ` / アクセス→ `Access`
- ナビのリンク先は当面日本語ページのまま(`../cars.html` など相対パス修正のみ)。※フェーズ2で英語化予定
- ボタン: 予約→ `Book` / LINE相談→ `LINE`
- スキップリンク「メインコンテンツへ」→ `Skip to main content`

### 5-2. ヒーロー・メインCTA
- 今すぐ予約→ `Book Now`
- LINEで相談→ `Chat on LINE`
- キャッチコピー(該当箇所があれば): 「那覇空港送迎・最短0分出発」→ `Free Naha Airport pickup — departure in as little as 0 minutes` / 「沖縄17年」→ `17 years in Okinawa`

### 5-3. お知らせ → `News`
- 2026.07.06 お知らせ→`News` / `Our website has been renewed`
- 2026.07.01 営業→`Hours` / `July business days announcement`
- 2026.06.15 予約→`Booking` / `Summer holiday reservations are now open`
- 2026.06.01 車種→`Fleet` / `New vehicles have joined our fleet`
- 2026.05.20 営業→`Hours` / `Thank you for renting with us during Golden Week`

### 5-4. おすすめ車種 → `Our Fleet`
- リード文: `Choose the right car for your trip`
- 軽自動車:
  - バッジ `Seats 4` / 見出し `Kei Car`
  - 本文: `Suzuki Hustler (hybrid), Palette and similar. Great fuel economy at a great price — perfect for couples and solo travelers.`
  - 価格: `From ¥1,350/day`
- コンパクトカー:
  - バッジ `Seats 5` / 見出し `Compact Car`
  - 本文: `Honda Fit, Nissan Note and similar. All cars non-smoking. Easy to handle in city streets.`
  - 価格: `From ¥2,350/day`
- ミニバン・SUV:
  - バッジ `Seats 7–8` / 見出し `Minivan / SUV`
  - 本文: `Honda Freed, Toyota Noah, Nissan Serena, Toyota Harrier (hybrid) and more. Ideal for families and groups.`
  - 価格: `From ¥4,350/day`
- ボタン「車種一覧を見る」→ `View all cars`

### 5-5. 送迎の流れ → `Airport Pickup — How It Works`
- リード文: `A smooth journey from arrival to departure`
- Step1 見出し `Arrive & contact us` / 本文 `After landing at Naha Airport, reach us by phone or LINE. We'll guide you to the meeting point.`
- Step2 見出し `Shuttle pickup` / 本文 `Our shuttle meets you at the designated point. Coordinated dispatch keeps your waiting time to a minimum.`
- Step3 見出し `Quick check-in` / 本文 `Prepare your documents in advance for a smooth check-in. Don't forget your license and International Driving Permit.`
- Step4 見出し `Drive away` / 本文 `Departure in as little as 0 minutes. Your Okinawa trip starts right away.`

### 5-6. 補償プラン → `Coverage Plans`
- リード文: `Choose the plan that fits your style`
- 共通項目訳: 対人・対物→`Liability` / 無制限→`Unlimited` / 車両補償→`Vehicle coverage` / あり→`Included` / 免責額→`Deductible` / NOC→`NOC fee` / あり→`Applies` / 免除→`Waived`
- プラン名: スタンダード→`Standard` / フルカバー→`Full Cover`(「おすすめ」タグ→`RECOMMENDED`) / エコノミー→`Economy`
- 免責額: 5万円→`¥50,000` / 0円→`¥0` / 10万円→`¥100,000`
- 注記: `Rates vary by car class and rental period. NOC (Non-Operation Charge) is a standard repair-downtime fee at Japanese rental companies — our Full Cover plan waives it. Feel free to ask us for your all-inclusive total.`
- ボタン「補償プラン詳細」→ `Coverage details`

### 5-7. お客様の声 → `Customer Reviews`
- リード文: `From travelers who rented with us`
- ★★★★★ `"The airport pickup was so smooth. They came right after we called on arrival — almost zero waiting. We used a minivan for our family trip and it was spotless."` — `T.S. / Family trip, minivan`
- ★★★★★ `"The coverage plans were easy to understand and we knew the total cost upfront. It was our first time renting a car in Okinawa, and we felt completely at ease."` — `M.K. / Couple's trip, compact car`
- ★★★★☆ `"Surprisingly reasonable prices. The kei car had plenty of room, the staff were friendly, and returning the car was quick. We'll rent here again."` — `A.Y. / Solo trip, kei car`

### 5-8. よくある質問 → `FAQ`
- Q1 `How long is the wait for pickup?` / A `We're set up for departure in as little as 0 minutes. Our coordinated shuttle dispatch minimizes waiting — contact us on arrival and we'll come right away.`
- Q2 `Can I choose a coverage plan?` / A `Yes. We offer several plans with different deductibles and NOC terms. We always quote your all-inclusive total upfront — no surprises.`
- Q3 `Do you have 7-seater minivans?` / A `Yes, we carry 7-seaters that are ideal for family and group trips. Child seats and other options are also available.`
- Q4 `Is same-day booking possible?` / A `Yes, when cars are available. Contact us by phone or LINE and we'll confirm right away.`
- Q5 `Are there any extra fees?` / A `We quote one total that includes the base rate, coverage, and options — before you book. What we quote is what you pay.`
- ボタン「FAQをもっと見る」→ `More FAQs`

### 5-9. 予約・相談CTA → `Book or Ask Us Anything`
- リード文: `17 years of trusted car rental in Okinawa. We're happy to help.`
- 電話表記: `Phone: +81-98-840-6584 (9:00–18:00 JST)` ※`tel:+81988406584` 形式にする
- 今すぐ予約→ `Book Now` / LINEで相談→ `Chat on LINE`

### 5-10. フッター
- 「おかげさまで設立17年」→ `Serving Okinawa for 17 years`
- リンク: 強み→`Why Us` / 車種→`Cars` / 料金→`Rates` / 補償→`Coverage` / 送迎→`Pickup` / FAQ→`FAQ` / アクセス→`Access` / 会社情報→`Company`(リンク先は日本語ページのまま、相対パスのみ修正)
- 営業時間 9:00〜18:00 → `Open 9:00–18:00 JST`
- コピーライト: `© 2026 Goya Rentacar. All rights reserved.`
- 固定バー: `WEB` / `TEL` / `LINE`(表記そのまま可)

## 6. 言語切替
- en/index.html: `JP` → `../index.html` / `EN` → `index.html`(ENをアクティブ表示)
- index.html: `EN` のリンク先を `en/idp.html` から `en/index.html` に変更(※これが既存バグの修正)
- en/idp.html への導線が失われないよう、en/index.html のFAQ Q欄またはフッターに `Driver's License Guide (IDP)` → `idp.html` のリンクを1箇所追加してよい(レイアウトを崩さない範囲で)

## 7. パス修正ルール(en/ フォルダから見た相対パス)
- `images/...` → `../images/...`
- `assets/...` → `../assets/...`
- `css/...`(共通CSS)→ `../css/...`
- `cars.html` 等の日本語ページ → `../cars.html`
- アンカーリンク(`#reservation` 等)はそのまま

## 8. 制約(厳守)
1. ファイル・フォルダの削除は行わない。必要な場合は必ず事前確認
2. 共通CSS・画像・日本語サブページは編集しない
3. index.html の編集は §3 の2箇所のみ
4. 英文は本仕様書 §5 をそのまま使用(独自の翻訳・意訳をしない)
5. SNSリンク(x.com / instagram.com / wa.me のプレースホルダー)は現状維持(別タスクで対応)

## 9. 完了時の報告・チェックリスト
作業完了後、以下を報告すること:
- [ ] 変更・作成したファイルの一覧と差分概要
- [ ] en/index.html で画像・CSSが `../` パスで正しく解決されているか(全imgタグ・linkタグを列挙して確認)
- [ ] JP⇔EN の言語切替が双方向で機能するか
- [ ] hreflang が index.html / en/index.html の両方に入っているか
- [ ] tel: リンクが国際表記(+81)になっているか
- [ ] 未対応事項(フェーズ2候補: サブページ英語化、WhatsApp導線、SNSリンク整備)

## 10. コミット
確認完了後、以下でコミット(pushはユーザーの指示を待つ):
```
git add en/index.html index.html
git commit -m "Add English top page (en/index.html) mirroring JP layout; fix EN link and add hreflang"
```
