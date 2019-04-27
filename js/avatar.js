// Модуль позволяет загружать фотографию на аватарку в экране настройки персонажа;

'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png']; // Доступные форматы для фотографии на аватарку;

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it); // Проверка соответсвия формата загруженного файла;
    });

    if (matches) {
      var reader = new FileReader(); // Создается объект, который позволяет работать с загруженным файлом;

      reader.readAsDataURL(file); // Фотография кодируется текст в формате Base64;

      reader.addEventListener('load', function () {
        preview.src = reader.result; // Файл отображается в качестве аватарки;
      });
    }
  });
})();
