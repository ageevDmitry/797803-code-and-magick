'use strict';

(function () {

  var wizards = [];

  // Определение ранга мага
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.coatColor === window.myWizard.coatColor) {
      rank += 2;
    }
    if (wizard.eyesColor === window.myWizard.eyesColor) {

      rank += 1;
    }

    return rank;
  };

  // Сравнение по именам в случае совпадения рангов
  var namesComparator = function (leftName, rightName) {
    if (leftName > rightName) {
      return 1;
    } else if (leftName < rightName) {
      return -1;
    } else {
      return 0;
    }
  };

  var wizardsComparator = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;

  };

  var updateFilter = function () {
    window.render(wizards.sort(wizardsComparator));
  };

  window.myWizard.onChange = function () {
    updateFilter();
  };

  // Успешная загрузка с сервера
  var successHandler = function (data) {
    wizards = data.map(function (it) {
      return new window.Wizard(it);
    });
    updateFilter();
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

})();
