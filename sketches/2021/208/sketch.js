// 点と点の衝突判定
// reference: http://jeffreythompson.org/collision-detection/point-point.php
// 点と点の衝突判定は対象1と対象2の座標が等しいか調べれば良い

let size = 30;
let targetColor;
let bgColor = 240;

const pointPointIsCollision = (x, y, x2, y2) => {
	if (x == x2 && y == y2) {
		return true;
	}
	return false;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	let mouse = createVector(mouseX, mouseY);
	let target = createVector(width / 2, height / 2);

	let detect = pointPointIsCollision(mouse.x, mouse.y, int(target.x), int(target.y));

	if (detect) {
		targetColor = color(255, 0, 0);
	} else {
		targetColor = 0;
	}

	background(bgColor);
	fill(targetColor);
	ellipse(target.x, target.y, size);
	fill(0, 50);
	ellipse(mouse.x, mouse.y, size);
}