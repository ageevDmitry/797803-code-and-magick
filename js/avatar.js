// Модуль позволяет загружать фотографию на аватарку в экране настройки персонажа;
'use strict';

(function () {
  // Доступные форматы для фотографии на аватарку;
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    // Проверка соответствия формата загруженного файла;
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      // Создается объект, который позволяет работать с загруженным файлом;
      var reader = new FileReader();

      // Фотография кодируется текст в формате Base64;
      reader.readAsDataURL(file);

      reader.addEventListener('load', function () {
        // Файл отображается в качестве аватарки;
        preview.src = reader.result;
      });
    }
  });
})();
