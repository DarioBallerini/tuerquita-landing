/* Tuerquita — landing page.
   Cuando la app esté publicada, pegá acá la URL de la ficha en Google Play.
   Con eso el botón "Pronto en Google Play" se convierte solo en "Descargar en Google Play". */
var PLAY_STORE_URL = '';

(function () {
  'use strict';

  if (PLAY_STORE_URL) {
    document.querySelectorAll('[data-cta="play"]').forEach(function (el) {
      el.style.display = 'contents';
      el.querySelectorAll('a').forEach(function (a) { a.href = PLAY_STORE_URL; });
    });
    document.querySelectorAll('[data-cta="soon"]').forEach(function (el) { el.style.display = 'none'; });
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-faq]'));

  function paint(card, open) {
    card.dataset.open = open ? '1' : '';
    card.children[1].style.gridTemplateRows = open ? '1fr' : '0fr';
    var chev = card.children[0].querySelector('.tq-icon');
    if (chev) chev.style.transform = 'rotate(' + (open ? 180 : 0) + 'deg)';
    card.children[0].setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  cards.forEach(function (card) {
    var header = card.children[0];
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');

    function toggle() {
      var open = card.dataset.open !== '1';
      cards.forEach(function (c) { if (c !== card) paint(c, false); });
      paint(card, open);
    }

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();
