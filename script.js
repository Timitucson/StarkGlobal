document.addEventListener('DOMContentLoaded', function () {
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
});
