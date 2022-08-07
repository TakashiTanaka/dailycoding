// 点と線の衝突判定
// reference: http://jeffreythompson.org/collision-detection/line-point.php

let targetColor;
let bgColor = 240;
let linePoint1;
let linePoint2;

const pointLineIsCollision = (px, py, lx1, ly1, lx2, ly2, showInfo) => {
	const info = showInfo => {
		if (showInfo) {
			noStroke();
			text(`
			lineLength: ${lineLength}
			dist1: ${dist1}
			dist2: ${dist2}
			dist1 + dist2: ${dist1 + dist2}
			buffer: ${buffer}
			lineLength - (dist1 + dist2): ${lineLength - (dist1 + dist2)}
			`, 10, 20);
		}
	}

	let lineLength = dist(lx1, ly1, lx2, ly2);
	let dist1 = dist(px, py, lx1, ly1);
	let dist2 = dist(px, py, lx2, ly2);

	let buffer = 0.5;

	info(showInfo);

	if (dist1 + dist2 >= lineLength - buffer && dist1 + dist2 <= lineLength + buffer) {
		return true;
	}
	return false;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	linePoint1 = createVector(random(0, width), random(0, height));
	linePoint2 = createVector(random(0, width), random(0, height));
}

function draw() {
	background(bgColor);

	let mouse = createVector(mouseX, mouseY);

	let detect = pointLineIsCollision(
		mouse.x, mouse.y,
		linePoint1.x, linePoint1.y, linePoint2.x, linePoint2.y,
		true
	);

	if (detect) {
		lineColor = color(255, 0, 0);
	} else {
		lineColor = 0;
	}

	strokeWeight(10);
	stroke(lineColor);
	line(linePoint1.x, linePoint1.y, linePoint2.x, linePoint2.y);

	strokeWeight(2);
	stroke(0, 0, 255);
	line(mouse.x, mouse.y, linePoint1.x, linePoint1.y);
	line(mouse.x, mouse.y, linePoint2.x, linePoint2.y);

	strokeWeight(10);
	stroke(255, 0, 0);
	point(mouse.x, mouse.y);
}