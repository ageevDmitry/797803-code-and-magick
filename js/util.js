// Здесь хранится служебная информация, созданная для логики взаимодействия пользователя
// с экраном настройки персонажа;
'use strict';

(function () {
  var ECS_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ECS_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

  };
})();
