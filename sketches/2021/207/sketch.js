// 点と円の衝突判定
// reference: http://jeffreythompson.org/collision-detection/point-circle.php

// 点と円の衝突判定はピタゴラスの定理を使う
// ピタゴラスの定理はa*a + b*b = c*c
// よって、長辺cはc = sqrt((a*a) + (b*b))で求められる（sqrtは平方根）
// この長辺の距離が点と円の中心との距離になる

// 辺Aと辺Bの長さは2点間の距離の差で求められる
// 辺A = x - x2;
// 辺B = y - y2;

// 長辺は下記の式で求められる
// 長辺 = sqrt(辺Aの二乗 + 辺Bの二乗)

// もし、長辺の距離が円の半径よりも短い場合、衝突したという事になる

let ellipseSize = 100;
let pointSize = 10;
let targetColor;
let bgColor = 240;

const pointCircleIsCollision = (x, y, x2, y2, targetSize) => {
	let distX = x - x2;
	let distY = y - y2;
	let dist = sqrt(pow(distX, 2) + pow(distY, 2));
	let targetRadius = targetSize / 2;
	if (dist <= targetRadius) {
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

	let detect = pointCircleIsCollision(mouse.x, mouse.y, int(target.x), int(target.y), ellipseSize);

	if (detect) {
		targetColor = color(255, 0, 0);
	} else {
		targetColor = 0;
	}

	background(bgColor);
	fill(targetColor);
	ellipse(target.x, target.y, ellipseSize);
	fill(0, 50);
	ellipse(mouse.x, mouse.y, pointSize);
}