'use strict';

(function () {

  var coatColor;
  var eyesColor;
  var wizards = [];

  // Определение ранга мага
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  // Сравнение по именам в случае совпадения рангов
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  // Сортировка волшебников по признаку
  var updateWizards = function () {
    window.render.rendSortArr(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  // Сортировка магов при изменении цвета плаща
  var newCoatWizard = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  // Сортировка магов при изменении цвета глаз
  var newEyesWizard = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  // Успешная загрузка с сервера
  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  // Неудачная загрузка с сервера
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Запрос на сервер
  window.backend.load(successHandler, errorHandler);

  window.similar = {
    newCoatWizard: newCoatWizard,
    newEyesWizard: newEyesWizard
  };
})();
