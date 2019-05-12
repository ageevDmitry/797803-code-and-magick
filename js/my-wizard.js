// В модуле создается объект игрового персонажа и изменяется персонаж пользователем;

'use strict';

(function () {

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardName = document.querySelector('.setup-user-name');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizard = new window.Wizard({name: wizardName.value});

  wizardCoatElement.addEventListener('click', function () {
    wizardCoatElement.style.fill = wizard.changeCoatColor();
  });

  wizardEyesElement.addEventListener('click', function () {
    wizardEyesElement.style.fill = wizard.changeEyesColor();

  });

  wizardFireballElement.addEventListener('click', function () {
    wizardFireballElement.style.background = wizard.changeFireballColor();
  });

  window.myWizard = wizard;
})();
