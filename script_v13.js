// =====================================================
// ココナラコンサル AX研修 LP v9 — script_v9.js
// 事例業界タブフィルタ ／ ヘッダースクロール
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  // === 事例 業界別タブ切替（filter式） ===
  const caseTabs = document.querySelectorAll('.case-tab[data-filter]');
  const caseCards = document.querySelectorAll('.case-card[data-category]');
  caseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      caseTabs.forEach(t => t.classList.toggle('is-active', t === tab));
      caseCards.forEach(card => {
        const match = card.dataset.category === filter;
        card.classList.toggle('is-hide', !match);
      });
    });
  });

  // === Header スクロール時シャドウ ===
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 2px 12px rgba(0, 4, 79, 0.06)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
