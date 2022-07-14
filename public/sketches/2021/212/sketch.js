// 長方形と円の衝突判定
// reference: http://jeffreythompson.org/collision-detection/circle-rect.php

let circleSize = 100;
let rectangleSize = 100;
let targetColor;
let bgColor = 240;

const circleRectIsCollision = (cx, cy, diameter, rx, ry, rw, rh) => {
	let testX = cx;
	let testY = cy;
	let radius = diameter / 2;
	if (cx < rx) testX = rx;
	else if (cx > rx + rw) testX = rx + rw;
	if (cy < ry) testY = ry;
	else if (cy > ry + rh) testY = ry + rh;

	let distX = cx - testX;
	let distY = cy - testY;
	let dist = sqrt(pow(distX, 2) + pow(distY, 2));

	if (dist <= radius) {
		return true;
	}
	return false;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	let circle = createVector(mouseX, mouseY);
	let rectangle = createVector(width / 2, height / 2);

	let detect = circleRectIsCollision(
		circle.x, circle.y, circleSize,
		rectangle.x, rectangle.y, rectangleSize, rectangleSize
	);

	if (detect) {
		rectangleColor = color(255, 0, 0);
	} else {
		rectangleColor = 0;
	}

	background(bgColor);

	fill(rectangleColor);
	rect(rectangle.x, rectangle.y, rectangleSize);

	fill(0, 50);
	ellipse(circle.x, circle.y, circleSize);
}