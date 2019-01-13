'use strict';

(function () {

  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizardFireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupPlayer = document.querySelector('.setup-player');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
  var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');

  var colorIndex = 1;
  var quantityPopapWizards = 4;

  var getWizardColor = function (arrColor) {
    if (colorIndex >= arrColor.length) {
      colorIndex = 0;
    }
    var index = colorIndex;
    var color = arrColor[index];
    colorIndex++;
    return color;
  };

  var getRandomIndex = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  var renderOneWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var serverWizards = [];

  var rendArrWizards = function (arrWizards, changeColor) {

    if (changeColor) {
      similarListElement.removeChild(fragment);
    } else {
      serverWizards = arrWizards.slice(0);
    }

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < quantityPopapWizards; i++) {
      fragment.appendChild(renderOneWizard(arrWizards[getRandomIndex(0, arrWizards.length - 1)]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');

  };

  var sortWizards = function (color) {
    var sameCoatWizards = serverWizards.filter(function (it) {
      return it.colorCoat === color;
    });
    rendArrWizards(sameCoatWizards, true);
  };

  setupWizardCoat.addEventListener('click', function () {
    setupPlayer.querySelector('.wizard-coat').setAttribute('style', 'fill:' + getWizardColor(wizardCoatColors));
    sortWizards(setupWizardCoat.style.fill);
  });

  setupWizardEyes.addEventListener('click', function () {
    setupPlayer.querySelector('.wizard-eyes').setAttribute('style', 'fill:' + getWizardColor(wizardEyesColors));
  });

  setupFireball.addEventListener('click', function () {
    setupFireball.setAttribute('style', 'background:' + getWizardColor(wizardFireballColors));
  });

  window.backend.load(rendArrWizards, window.errorMessage.rendErrorMessage);

})();
