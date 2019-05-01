'use strict';

(function () {

  var WIZARD_EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var WIZARD_COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var WIZARD_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var Wizard = function (data) {
    this.name = data.name;
    this.coatColor = data.colorCoat;
    this.eyesColor = data.colorEyes;
    this.fireballColor = data.colorFireball;
  };

  Wizard.prototype = {
    setName: function (name) {
      if (!name) {
        throw new Error('Имя не задано');
      }
      if (name.length > 30) {
        throw new Error('Недопустимое значение имени мага: ' + name);
      }
      this.name = name;
      this.onChange(this);
      return name;
    },
    changeCoatColor: function () {
      var newColor = getRandomElement(WIZARD_COAT_COLORS);
      this.coatColor = newColor;
      this.onChange(this);
      return newColor;
    },
    changeEyesColor: function () {
      var newColor = getRandomElement(WIZARD_EYES_COLORS);
      this.eyesColor = newColor;
      this.onChange(this);
      return newColor;
    },

    changeFireballColor: function () {
      var newColor = getRandomElement(WIZARD_FIREBALL_COLORS);
      this.fireballColor = newColor;
      return newColor;
    },

    onChange: function (wizard) {
      return wizard;
    }
  };

  document.querySelector('.setup-wizard-form').addEventListener('submit', function (evt) {
    evt.preventDefault();

    var wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = window.myWizard.coatColor;
    wizardCopy.querySelector('#wizard-eyes').style.fill = window.myWizard.eyesColor;

    var wizardBase64Right = window.svg2base64(wizardCopy);

    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');

    var wizardBase64Left = window.svg2base64(wizardCopy);

    var fireballCopy = document.querySelector('.setup-fireball-wrap').cloneNode(true);
    fireballCopy.style.background = window.myWizard.fireballColor;

    var wizardFireballBase64Right = window.svg2base64(fireballCopy);

    window.restartGame(wizardBase64Right, wizardBase64Left, wizardFireballBase64Right);
  });

  window.Wizard = Wizard;

})();
