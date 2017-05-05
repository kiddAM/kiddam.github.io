var canvas = document.getElementById('access');
var ctx = canvas.getContext('2d');

var cubex = 10;
var cubey = 10;
var cubewh = 20;

var hitTopLt = false;
var hitTopRt = false;
var hitBtmRt = false;
var hitBtmLt = false;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = true;
	} else if (e.keyCode == 37) {
		leftPressed = true;
	} else if (e.keyCode == 38) {
		upPressed = true;
	} else if (e.keyCode == 40) {
		downPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	} else if (e.keyCode == 37) {
		leftPressed = false;
	} else if (e.keyCode == 38) {
		upPressed = false;
	} else if (e.keyCode == 40) {
		downPressed = false;
	}
}

function gamecube() {
	ctx.beginPath();
  ctx.fillRect(cubex, cubey, cubewh, cubewh);
  ctx.fillStyle = '#F5B5E5';
	ctx.fill();
	ctx.closePath();
}

function bldMaze() {
	walls(ctx);

	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function controls() {
	var coords = [cubex, cubey];
	var coordsR = [cubex + cubewh, cubey];
	var coordsB = [cubex, cubey + cubewh];

	if (rightPressed && cubex <= (canvas.width - (cubewh + 10))
		&& detectVertical() != coordsR) {
    cubex += 2;
  }

  if (leftPressed && cubex >= 12
		&& detectVertical() != coords) {
    cubex -= 2;
  }

  if (upPressed && cubey >= 12
		&& detectHorizontal() != coords) {
    cubey -= 2;
  }

  if (downPressed && cubey <= (canvas.height - (cubewh + 10))
		&& detectHorizontal() != coordsB) {
    cubey += 2;
  }
}

function getcoords() {
	if (rightPressed || leftPressed || upPressed || downPressed) {
			console.log(cubex + ', '+ cubey);
	}
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gamecube();
  bldMaze();
  // hit();
  controls();
	// getcoords();
	// detectVertical();
}

setInterval(draw, 20);
