function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
}

function draw() {
	background(0);
	drawLoop(180, 1);
}

function drawLoop(baseRadius, deg) {
	let fc = frameCount;
	let baseXPos = width / 2;
	let baseYPos = height / 2;
	let speed = 4;
	let radius = function (rad, type) {
		return (baseRadius + type(100, type(100, 100, fc), fc * speed + rad * 5))
	};
	for (let i = 0; i < 360; i += deg) {
		strokeWeight(8);
		line(baseXPos + radius(i, fluctCos) * rounder(cos(i), 2),
			baseYPos + radius(i, fluctSin) * rounder(sin(i), 2),
			baseXPos + radius(i + deg, fluctCos) * rounder(cos(i + deg), 2),
			baseYPos + radius(i + deg, fluctSin) * rounder(sin(i + deg), 2));
	}
}

function fluctSin(base, strength, sinArgument) {
	return ((base + strength) * rounder(sin(sinArgument), 10));
}

function fluctCos(base, strength, sinArgument) {
	return ((base + strength) * rounder(cos(sinArgument), 10));
}

function rounder(num, digit) {
	return round(num * digit) / digit;
}