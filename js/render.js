'use strict';

(function () {

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  // Отрисовка одного волшебника
  var renderWizard = function (wizard) {
    var element = wizardTemplate.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    element.querySelector('.setup-similar-label').innerText = wizard.name;
    return element;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  // Отрисовка массива сортированных волшебников
  var rendSortArr = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

  window.render = {
    rendSortArr: rendSortArr
  };
})();
