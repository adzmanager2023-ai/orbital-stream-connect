/**
 * Customizer live preview.
 */
(function ($) {
  'use strict';

  wp.customize('blogname', function (value) {
    value.bind(function (to) { $('.msl-brand__text').text(to); });
  });

  wp.customize('blogdescription', function (value) {
    value.bind(function (to) { $('.msl-brand__tagline').text(to); });
  });

  wp.customize('msl_hero_eyebrow', function (value) {
    value.bind(function (to) { $('.msl-hero .msl-eyebrow').text(to); });
  });

  wp.customize('msl_hero_title', function (value) {
    value.bind(function (to) { $('.msl-hero h1').text(to); });
  });

  wp.customize('msl_hero_text', function (value) {
    value.bind(function (to) { $('.msl-hero__inner > p').text(to); });
  });
})(jQuery);
