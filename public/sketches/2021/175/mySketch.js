let count = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textFont('Helvetica');
}

function draw() {
	drawCircle(width / 2, height * 0.2, 50, 4);
	noLoop();
}

function drawCircle(x, y, radius, level) {
	textSize(radius);
	if (level >= 1) {
		level = level - 1;
		text(count, x, y);
		count++;
		drawCircle(x - radius, y + radius, radius / 2, level);
		drawCircle(x + radius, y + radius, radius / 2, level);
	}
}