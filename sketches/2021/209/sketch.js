// 点と長方形の衝突判定
// reference: http://jeffreythompson.org/collision-detection/point-rect.php

// 点と長方形の衝突判定を行うには下記のテストを行う必要がある
// 点のX座標は長方形の左辺よりも右にあるか
// 点のX座標は長方形の右辺よりも左にあるか
// 点のY座標は長方形の上辺よりも下にあるか
// 点のY座標は長方形の下辺よりも上にあるか
// これらがすべてtrueとなった場合、点は長方形の内部にあるといえる


let rectSize = 100;
let pointSize = 10;
let targetColor;
let bgColor = 240;

const pointRectIsCollision = (px, py, rx, ry, rw, rh) => {
	if (
		px >= rx &&
		px <= rx + rw &&
		py >= ry &&
		py <= ry + rh
	) {
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

	let detect = pointRectIsCollision(
		mouse.x, mouse.y, int(target.x), int(target.y), rectSize, rectSize
	);

	if (detect) {
		targetColor = color(255, 0, 0);
	} else {
		targetColor = 0;
	}

	background(bgColor);
	fill(targetColor);
	rect(target.x, target.y, rectSize);
	fill(0, 50);
	ellipse(mouse.x, mouse.y, pointSize);
}