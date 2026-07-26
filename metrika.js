// Счётчик посещений сайта (Яндекс.Метрика). ID пустой = счётчик ВЫКЛЮЧЕН,
// внешний скрипт не грузится вовсе — до решения Савелия сайт остаётся без
// трекеров, privacy.html не врёт. Включение: завести счётчик на metrika.yandex.ru
// (аккаунт Савелия), вписать номер строкой ниже, задеплоить сайт.
// Вебвизор/карты кликов НЕ включаем: обещание «минимум данных» держим и тут —
// только счёт визитов и источников.
var METRIKA_ID = '';

(function () {
  if (!METRIKA_ID) return;
  window.ym = window.ym || function () {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  window.ym.l = Date.now();
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://mc.yandex.ru/metrika/tag.js';
  document.head.appendChild(s);
  window.ym(Number(METRIKA_ID), 'init', {
    clickmap: false,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
  });
})();
