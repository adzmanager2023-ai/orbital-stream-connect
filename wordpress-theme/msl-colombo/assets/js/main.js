/**
 * MSL Colombo - front-end interactions.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* Mobile nav toggle */
    var toggle = document.querySelector('.msl-menu-toggle');
    var nav = document.getElementById('msl-primary-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    /* Scroll reveal */
    var items = document.querySelectorAll('.msl-reveal');

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px' });

    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 90 + 'ms';
      observer.observe(el);
    });

    /* Smooth in-page anchors */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (nav) { nav.classList.remove('is-open'); }
      });
    });
  });
})();
