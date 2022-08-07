// 円と円の衝突判定
// reference: http://jeffreythompson.org/collision-detection/circle-circle.php

// 円と円の衝突判定は点と円の衝突判定を応用した感じになる
// 円の中心点の距離がそれぞれの円の半径を合計した値よりも短い場合、衝突したことになる

let ellipse1Size = 100;
let ellipse2Size = 50;
let targetColor;
let bgColor = 240;

const circleCircleIsCollision = (x, y, x2, y2, ellipse1Size, ellipse2Size) => {
	let distX = x - x2;
	let distY = y - y2;
	let dist = sqrt(pow(distX, 2) + pow(distY, 2));
	let ellipse1SizeRadius = ellipse1Size / 2;
	let ellipse2SizeRadius = ellipse2Size / 2;
	if (dist <= ellipse1SizeRadius + ellipse2SizeRadius) {
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

	let detect = circleCircleIsCollision(mouse.x, mouse.y, int(target.x), int(target.y), ellipse1Size, ellipse2Size);

	if (detect) {
		targetColor = color(255, 0, 0);
	} else {
		targetColor = 0;
	}

	background(bgColor);
	fill(targetColor);
	ellipse(target.x, target.y, ellipse1Size);
	fill(0, 50);
	ellipse(mouse.x, mouse.y, ellipse2Size);
}