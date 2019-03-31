'use strict';

(function () {
  var ECS_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEBOUNCE_INTERVAL = 900; // ms
  var lastTimeout;

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

    // debounce: function (updateWizards) {
    //   if (lastTimeout) {
    //     window.clearTimeout(lastTimeout);
    //   }
    //   lastTimeout = window.setTimeout(updateWizards, DEBOUNCE_INTERVAL);
    // }

    debounce: function (cb) {
      lastTimeout = null;

      return function () {
        var parameters = arguments;

        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }

        lastTimeout = window.setTimeout(function () {
          cb.apply(null, parameters);
        }, DEBOUNCE_INTERVAL);
      };
    }

  };
})();
