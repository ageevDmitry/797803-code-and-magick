// В модуле реализовано отложенное действие переданной функции.
// В данном проекте это функция, которая запускает сортировку и отображение похожих персонажей;
'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 300; // ms
  var lastTimeout;

  window.debounce = function (cb) {
    lastTimeout = null;

    return function () {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb();
      }, DEBOUNCE_INTERVAL);
    };
  };

})();
