'use strict';

(function () {

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardName = document.querySelector('.setup-user-name');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  //  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizard = new window.Wizard({name: wizardName.value});

  wizardCoatElement.addEventListener('click', function () {
    wizardCoatElement.style.fill = wizard.changeCoatColor();
  });

  wizardEyesElement.addEventListener('click', function () {
    wizardEyesElement.style.fill = wizard.changeEyesColor();
  });

  window.myWizard = wizard;
  // wizardFireballElement.addEventListener('click', function () {
  //   this.style.background = getRandomElement(WIZARD_FIREBALL_COLORS);
  // });
})();
