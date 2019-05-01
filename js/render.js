'use strict';

(function () {

  var SHOW_WIZARDS_NUMBERS = 4;
  // var OFFSET = 10;

  var wizardTemplate = document.querySelector('#similar-wizard-template');

  var createElement = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    element.querySelector('.setup-similar-label').textContent = wizard.name;
    return element;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    similarList.innerHTML = '';

    data.slice(0, SHOW_WIZARDS_NUMBERS).forEach(function (wizard) {
      similarList.appendChild(createElement(wizard));
    });
    similar.classList.remove('hidden');
  };
})();

// wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

// var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
// var wizardElement = similarWizardTemplate.cloneNode(true);
