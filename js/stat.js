// Модуль отвечает за отображение экрана отображения статистики после окончания игры;
'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var CONGRATULAION_GAP_LEFT = 20;
  var CONGRATULAION_GAP_UP = 30;
  var CONGRATULAION_FONT_GAP = 20;
  var COLUMN_GAP_LEFT = 55;
  var COLUMN_GAP_UP = 230;
  var COLUMN_WIDTH = 40;
  var COLUMN_HEIGHT = 150;
  var COLUMN_GAP = 50;
  var CAPTION_GAP = 20;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderCongratulation = function (ctx, x, y, color, font) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText('Ура вы победили!', x + CONGRATULAION_GAP_LEFT, y + CONGRATULAION_GAP_UP);
    ctx.fillText('Список результатов:', x + CONGRATULAION_GAP_LEFT, y + CONGRATULAION_GAP_UP + CONGRATULAION_FONT_GAP);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderCongratulation(ctx, CLOUD_X, CLOUD_Y, '#000', '16px PT Mono');

    var maxTime = getMaxElement(times);

    players.forEach(function (player, i) {
      if (player === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        var color = 'rgba(0, 0, 255,' + Math.random() + ')';
        ctx.fillStyle = color;
      }

      ctx.fillRect(CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUMN_GAP_UP, COLUMN_WIDTH, -(COLUMN_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(player, CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUMN_GAP_UP + CAPTION_GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP_LEFT + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + COLUMN_GAP_UP - (COLUMN_HEIGHT * times[i]) / maxTime - CAPTION_GAP / 2);
    });
  };
})();
