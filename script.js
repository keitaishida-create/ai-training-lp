// =====================================================
// coconala AI training LP — script.js
// 業種タブ切替 ／ Swiper（事例カルーセル・受講者の声）
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  // === Cases Swiper（業種別 各3スライド） ===
  document.querySelectorAll('.case-swiper').forEach((el) => {
    new Swiper(el, {
      slidesPerView: 1.05,
      spaceBetween: 16,
      grabCursor: true,
      simulateTouch: true,
      mousewheel: { forceToAxis: true, sensitivity: 0.6 },
      keyboard: { enabled: true },
      breakpoints: {
        640: { slidesPerView: 1.6, spaceBetween: 20 },
        768: { slidesPerView: 2.1, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 3, spaceBetween: 24 }
      },
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev')
      },
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true
      },
      observer: true,
      observeParents: true
    });
  });

  // === View Toggle (PC/SP切替・検証用) ===
  const viewToggle = document.getElementById('view-toggle');
  if (viewToggle) {
    const meta = document.querySelector('meta[name="viewport"]');
    const modeEl = viewToggle.querySelector('.view-toggle-mode');
    let mode = 'auto';
    viewToggle.addEventListener('click', () => {
      if (mode === 'auto') {
        mode = 'pc';
        meta.setAttribute('content', 'width=1280');
        if (modeEl) modeEl.textContent = 'PC';
      } else if (mode === 'pc') {
        mode = 'sp';
        meta.setAttribute('content', 'width=380');
        if (modeEl) modeEl.textContent = 'SP';
      } else {
        mode = 'auto';
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        if (modeEl) modeEl.textContent = 'AUTO';
      }
    });
  }

  // === Voices Swiper（受講者の声） ===
  const voiceEl = document.querySelector('.voice-swiper');
  if (voiceEl) {
    new Swiper(voiceEl, {
      slidesPerView: 1.05,
      spaceBetween: 16,
      breakpoints: {
        640: { slidesPerView: 1.6, spaceBetween: 20 },
        768: { slidesPerView: 2.2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 24 }
      },
      pagination: {
        el: voiceEl.querySelector('.swiper-pagination'),
        clickable: true
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: true
      },
      loop: true
    });
  }

  // === 業種タブ切替（CASES セクション内） ===
  const tabs = document.querySelectorAll('.industry-tabs .tab[data-industry]');
  const panels = document.querySelectorAll('.industry-panel[data-industry]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const industry = tab.dataset.industry;

      tabs.forEach(t => {
        t.classList.toggle('is-active', t.dataset.industry === industry);
      });

      panels.forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.industry === industry);
      });

      // 表示切替後、アクティブパネル内の Swiper を update
      const activePanel = document.querySelector('.industry-panel.is-active .case-swiper');
      if (activePanel && activePanel.swiper) {
        activePanel.swiper.update();
      }
    });
  });

  // === Header — スクロール時の境界線強化 ===
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 1px 2px rgba(15, 23, 42, 0.06)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
