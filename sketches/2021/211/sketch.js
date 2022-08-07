// 長方形と長方形の衝突判定
// reference: http://jeffreythompson.org/collision-detection/rect-rect.php

// 長方形Aと長方形Bの衝突判定を行うには下記のテストを行う必要がある
// 長方形Aの右辺は長方形Bの左辺より右にあるか
// 長方形Aの左辺は長方形Bの右辺より左にあるか
// 長方形Aの上辺は長方形Bの下辺より上にあるか
// 長方形Aの下辺は長方形Bの上辺より下にあるか
// これらがすべてtrueとなった場合、長方形Aは長方形Bの内部にあるといえる


let rectASize = 100;
let rectBSize = 100;
let targetColor;
let bgColor = 240;

const rectRectIsCollision = (r1x, r1y, r1s, r2x, r2y, r2s) => {
	if (
		r1x + r1s >= r2x &&
		r1x <= r2x + r2s &&
		r1y + r1s >= r2y &&
		r1y <= r2y + r2s
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
	let rectA = createVector(mouseX, mouseY);
	let rectB = createVector(width / 2, height / 2);

	let detect = rectRectIsCollision(
		rectA.x, rectA.y, rectASize,
		rectB.x, rectB.y, rectBSize,
	);

	if (detect) {
		rectBColor = color(255, 0, 0);
	} else {
		rectBColor = 0;
	}

	background(bgColor);
	fill(rectBColor);
	rect(rectB.x, rectB.y, rectBSize);
	fill(0, 50);
	rect(rectA.x, rectA.y, rectASize);
}