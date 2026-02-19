/* ============================================
   ゴーヤレンタカー 集客型サイト JavaScript
   New Design System
   ============================================ */

// GA4計測イベント送信関数
function sendGA4Event(eventName, eventParams = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
  // Lucide Icons初期化
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  initHamburger();
  initFAQ();
  initBottomCTA();
  initCalendarTracking();
  initGATracking();
  initScrollAnimation();
  initHeaderScroll();
  initHeroSlideshow();
});

// ハンバーガーメニュー
function initHamburger() {
  const btn = document.querySelector('.header__hamburger');
  const nav = document.querySelector('.nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function() {
    btn.classList.toggle('is-active');
    nav.classList.toggle('is-open');
    document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
  });

  // ナビリンククリックで閉じる
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function() {
      btn.classList.remove('is-active');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

// FAQアコーディオン
function initFAQ() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('is-open');

      // 他のFAQを閉じる
      items.forEach(other => {
        if (other !== item) other.classList.remove('is-open');
      });

      // クリックしたFAQをトグル
      item.classList.toggle('is-open');

      // GA4計測
      if (!isOpen) {
        sendGA4Event('faq_open', {
          question: question.textContent.trim()
        });
      }
    });
  });
}

// 固定CTAの表示制御
function initBottomCTA() {
  const cta = document.querySelector('.bottom-cta');
  if (!cta) return;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    cta.style.opacity = scrollTop > 300 ? '1' : '0';
    cta.style.pointerEvents = scrollTop > 300 ? 'auto' : 'none';
  }, { passive: true });
}

// 予約カレンダー関連の計測
function initCalendarTracking() {
  const embed = document.querySelector('.reservation-embed');
  if (!embed) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sendGA4Event('calendar_view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(embed);
}

// GA4 data属性による自動計測
function initGATracking() {
  // data-ga-event属性を持つ要素を自動計測
  document.querySelectorAll('[data-ga-event]').forEach(el => {
    el.addEventListener('click', function() {
      sendGA4Event(el.dataset.gaEvent, {
        link_text: el.textContent.trim(),
        link_url: el.href || ''
      });
    });
  });

  // 電話リンク
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
      sendGA4Event('tel_click', {
        phone_number: link.href.replace('tel:', '')
      });
    });
  });

  // LINE相談リンク
  document.querySelectorAll('a[href*="line.me"]').forEach(link => {
    link.addEventListener('click', function() {
      sendGA4Event('line_click', { link_url: link.href });
    });
  });
}

// スクロールアニメーション
function initScrollAnimation() {
  const targets = document.querySelectorAll('.animate-on-scroll');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(t => observer.observe(t));
}

// ヘッダースクロール影
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    header.classList.toggle('header--scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ヒーロースライドショー
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;

  let current = 0;
  setInterval(function() {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5000);
}

// スムーズスクロール
function smoothScrollTo(target) {
  const el = document.querySelector(target);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
