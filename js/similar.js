'use strict';

(function () {

  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var coatColor;
  var eyesColor;
  var wizards = [];

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');

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

  // Сортировка волшебников по признаку
  var updateWizards = function () {
    window.render.rendSortArr(wizards.sort(function (left, right) {
      return getRank(right) - getRank(left);
    }));
  };

  // Получение случайного признака из констант
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  // Изменение мантии и сортировка похожих волшебников по цвету мантии
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  // Изменение глаз и сортировка похожих волшебников по цвету глаз
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    this.style.fill = newColor;
    eyesColor = newColor;
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
  window.load(successHandler, errorHandler);

})();
