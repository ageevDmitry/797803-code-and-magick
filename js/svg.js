// Модуль кодирует svg в формат base64 для отображения настроенного персонажа пользователем;
'use strict';

(function () {
  var DATA_URI_PREFIX = 'data:image/svg+xml;charset=utf-8;base64,';

  window.svg2base64 = function (svgElement) {
    var xml = new XMLSerializer().serializeToString(svgElement);

    var svg64 = window.btoa(xml);

    return DATA_URI_PREFIX + svg64;
  };
})();
