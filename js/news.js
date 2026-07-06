/* ============================================================
   お知らせ機能 (microCMS 連携)

   使い方:
   1. microCMS でサービス作成 → API作成 (エンドポイント名: news)
   2. フィールド: title (テキスト), category (セレクト)
   3. 以下の 2 行を実際の値に書き換える:
      - MICROCMS_SERVICE_ID
      - MICROCMS_API_KEY
   4. サイトを再読み込みすれば、microCMSの記事が自動表示される
   5. 未設定の場合は index.html の静的なお知らせが表示される (フォールバック)
   ============================================================ */

const MICROCMS_SERVICE_ID = 'goya-rentacar';
const MICROCMS_API_KEY = 'ZZT5PA7fb8cOwSQALNRoDTRu4kMzAy2p35bM';
const NEWS_LIMIT = 5;

async function loadNews() {
  const listEl = document.getElementById('news-list');
  if (!listEl) return;

  if (MICROCMS_SERVICE_ID === 'YOUR_SERVICE_ID' || MICROCMS_API_KEY === 'YOUR_API_KEY') {
    console.log('[news] microCMS未設定のため、静的お知らせを表示します');
    return;
  }

  try {
    const url = `https://${MICROCMS_SERVICE_ID}.microcms.io/api/v1/news?limit=${NEWS_LIMIT}&orders=-publishedAt`;
    const res = await fetch(url, {
      headers: { 'X-MICROCMS-API-KEY': MICROCMS_API_KEY }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data.contents || data.contents.length === 0) {
      listEl.innerHTML = '<li class="news-list__item"><p class="news-list__title">現在お知らせはありません</p></li>';
      return;
    }

    listEl.innerHTML = data.contents.map(item => {
      const date = formatDate(item.publishedAt);
      const category = escapeHtml(item.category || 'お知らせ');
      const title = escapeHtml(item.title || '');
      return `<li class="news-list__item"><div class="news-list__meta"><span class="news-list__date">${date}</span><span class="news-list__category">${category}</span></div><p class="news-list__title">${title}</p></li>`;
    }).join('');
  } catch (err) {
    console.error('[news] お知らせの取得に失敗しました', err);
  }
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}.${mm}.${dd}`;
  } catch {
    return '';
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]
  ));
}

document.addEventListener('DOMContentLoaded', loadNews);
