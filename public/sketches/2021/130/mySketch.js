function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
}

function draw() {
	background(0);
	drawLoop(350, 1);
}

function drawLoop(baseRadius, deg) {
	let fc = frameCount;
	let baseXPos = width / 2;
	let baseYPos = height / 2;

	let wave = function (type, speed, rad, complexity) {
		let num = [];
		let total = 1;
		for (let i = 0; i < complexity.length; i++) {
			num[i] = rounder(type(speed + (rad * complexity[i])), 10);
			total = total * num[i]
		}
		return total;
	}

	let radius = function (rad, strength) {
		let fluct1 = wave(sin, fc, rad, [2, 10, 5, 20]);
		let fluct2 = wave(cos, fc, rad, [2, 10, 9, 2]);
		return (baseRadius + strength * fluct1 * fluct2);
	};

	for (let i = 0; i < 360; i += deg) {
		strokeWeight(fluctSin(8, 6, fc + i * 5));
		line(baseXPos + radius(i, 1000) * cos(i),
			baseYPos + radius(i, 1000) * sin(i),
			baseXPos + radius(i + deg, 1000) * cos(i + deg),
			baseYPos + radius(i + deg, 1000) * sin(i + deg));
	}
}

function fluctSin(base, strength, sinArgument) {
	return (base + strength * sin(sinArgument));
}

function fluctCos(base, strength, sinArgument) {
	return ((base + strength) * cos(sinArgument));
}

function rounder(num, digit) {
	return round(num * digit) / digit;
}