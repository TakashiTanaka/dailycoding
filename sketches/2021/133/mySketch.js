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
			num[i] = type(speed + (rad * complexity[i]));
			total = total * num[i]
		}
		return total;
	}

	let radius = function (rad, strength) {
		let complexity1 = [];
		let complexity2 = [];
		randomSeed(5);
		for (let i = 0; i < 6 + 5 * rounder(sin(fc), 10); i++) {
			complexity1.push(random(1, 100));
			complexity2.push(random(1, 100));
		}
		let fluct1 = wave(sin, fc, rad, complexity1);
		let fluct2 = wave(cos, fc, rad, complexity2);
		return (baseRadius + strength * fluct1 * fluct2);
	};

	for (let i = 0; i < 360; i += deg) {
		strokeWeight(5);
		point(baseXPos + radius(i, 1000) * cos(i),
			baseYPos + radius(i, 1000) * sin(i))
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