function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
}

function draw() {
	background(0);
	console.log();
	drawSinCurve(400, 180 / int(9 * abs(rounder(sin(frameCount), 10)) + 1));
}

function drawSinCurve(radius, rad) {
	for (let i = 0; i < 360; i += rad) {
		strokeWeight(8);
		let x1, x2, y1, y2;
		x1 = height / 2 + radius * cos(i);
		x2 = height / 2 + radius * cos(i + rad);
		y1 = height / 2 + radius * sin(i);
		y2 = height / 2 + radius * sin(i + rad);
		line(x1, y1, x2, y2);
	}
}

function rounder(num, digit) {
	return round(num * digit) / digit;
}

