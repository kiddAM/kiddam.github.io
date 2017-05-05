var horizontals = [
  {x1: 0, x2: 42, y: 100},
  {x1: 0, x2: 102, y: 220},
  {x1: 0, x2: 42, y: 400},
  {x1: 38, x2: 80, y: 60},
  {x1: 40, x2: 142, y: 140},
  {x1: 38, x2: 80, y: 180},
  {x1: 38, x2: 100, y: 260},
  {x1: 80, x2: 122, y: 20},
  {x1: 80, x2: 180, y: 100},
  {x1: 78, x2: 202, y: 340},
  {x1: 78, x2: 162, y: 400},
  {x1: 100, x2: 142, y: 180},
  {x1: 98, x2: 242, y: 300},
  {x1: 138, x2: 240, y: 220},
  {x1: 160, x2: 222, y: 60},
  {x1: 180, x2: 322, y: 180},
  {x1: 180, x2: 240, y: 220},
  {x1: 178, x2: 280, y: 260},
  {x1: 198, x2: 362, y: 420},
  {x1: 218, x2: 402, y: 140},
  {x1: 238, x2: 360, y: 382},
  {x1: 260, x2: 280, y: 100},
  {x1: 278, x2: 322, y: 340},
  {x1: 358, x2: 440, y: 240},
  {x1: 358, x2: 400, y: 280},
  {x1: 398, x2: 440, y: 400},
  {x1: 440, x2: 320, y: 100},
];

var verticals = [
  {x: 80, y1: 0, y2: 22},
  {x: 160, y1: 0, y2: 62},
  {x: 260, y1: 0, y2: 102},
  {x: 120, y1: 20, y2: 100},
  {x: 40, y1: 40, y2: 60},
  {x: 220, y1: 60, y2: 140},
  {x: 40, y1: 100, y2: 180},
  {x: 140, y1: 140, y2: 180},
  {x: 400, y1: 140, y2: 200},
  {x: 280, y1: 180, y2: 260},
  {x: 360, y1: 180, y2: 240},
  {x: 320, y1: 180, y2: 340},
  {x: 140, y1: 220, y2: 260},
  {x: 180, y1: 220, y2: 260},
  {x: 100, y1: 220, y2: 300},
  {x: 40, y1: 260, y2: 400},
  {x: 360, y1: 280, y2: 380},
  {x: 280, y1: 300, y2: 340},
  {x: 240, y1: 300, y2: 380},
  {x: 400, y1: 320, y2: 400},
  {x: 80, y1: 340, y2: 400},
  {x: 200, y1: 340, y2: 420},
  {x: 160, y1: 400, y2: 440},
  {x: 360, y1: 420, y2: 440},
];

function walls(canvas) {
  var ctx = canvas;
  ctx.strokeStyle = '#E8E7E6';
  ctx.lineWidth = 5;

  for (var i = 0; i < horizontals.length; i++) {
    ctx.beginPath();
    ctx.moveTo(horizontals[i].x1, horizontals[i].y);
    ctx.lineTo(horizontals[i].x2, horizontals[i].y);
    ctx.stroke();
  }

  for (var i = 0; i < verticals.length; i++) {
    ctx.beginPath();
    ctx.moveTo(verticals[i].x, verticals[i].y1);
    ctx.lineTo(verticals[i].x, verticals[i].y2);
    ctx.stroke();
  }
}

function detectHorizontal(objectx, objecty) {
  for (var i = 0; i < horizontals.length; i++) {
    var start = [horizontals[i].x1, horizontals[i].y];
    var end = [horizontals[i].x2, horizontals[i].y];
    var line = [];

    for (var j = 0; j <= (end[0] - start[0]); j++) {
      line = [start[0] + j, start[1]];

      return line;
    }
  }
}

function detectVertical(objectx, objecty) {
  for (var i = 0; i < verticals.length; i++) {
    var start = [verticals[i].x, verticals[i].y1];
    var end = [verticals[i].x, verticals[i].y2];
    var line = [];

    for (var j = 0; j <= (end[0] - start[0]); j++) {
      line = [start[0] + j, start[1]];

      return line;
    }
  }
}
