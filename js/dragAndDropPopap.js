// Модуль позволяет перемещать экран настройки персонажа при зажатой на аватарке кнопки мыши;
'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var dialogHandler = setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var Coords = function (X, Y) {
      this.X = X;
      this.Y = Y;
    };

    Coords.prototype = {
      setShift: function (X, Y) {
        this.shiftX = this.X - X;
        this.shiftY = this.Y - Y;
        this.X = X;
        this.Y = Y;
      }
    };

    var moveDialogHandler = new Coords(evt.clientX, evt.clientY);

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      moveDialogHandler.setShift(moveEvt.clientX, moveEvt.clientY);

      setup.style.top = (setup.offsetTop - moveDialogHandler.shiftY) + 'px';
      setup.style.left = (setup.offsetLeft - moveDialogHandler.shiftX) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (e) {
          e.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
