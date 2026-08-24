document.addEventListener('DOMContentLoaded', function () {
  // Menú mobile
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && menu) {
      menu.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
    }
  });

  // Buscador
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.store-card');
  const noResults = document.getElementById('noResults');

  function filterCards() {
    const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(function (card) {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const match = !q || name.indexOf(q) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (noResults) {
      noResults.hidden = visible > 0;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  // Filtro por categoría
  document.querySelectorAll('.cat-card').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const cat = btn.getAttribute('data-cat');
      if (searchInput) searchInput.value = '';
      let visible = 0;
      cards.forEach(function (card) {
        const cardCat = card.getAttribute('data-cat');
        const match = cardCat === cat;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      if (noResults) noResults.hidden = visible > 0;
      document.getElementById('locales')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
