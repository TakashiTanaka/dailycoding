let deg = 1;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
}

function draw() {
	background(0);
	drawLoop(350, deg);
}

function drawLoop(radius, deg) {
	let fc = frameCount;
	strokeWeight(6);
	for (let i = 0; i < 360; i += deg) {
		line(returnX(i), returnY(i), returnX(i + deg), returnY(i + deg));
	}
	function returnX(i) {
		return width / 2 + radius * rounder(cos(i), fluctCos(10, 9, fc));
	}
	function returnY(i) {
		return height / 2 + radius * rounder(sin(i), fluctCos(10, 9, fc));
	}
}

function fluctSin(base, strength, sinArgument) {
	return (base + strength * rounder(sin(sinArgument), 10));
}
function fluctCos(base, strength, sinArgument) {
	return (base + strength * rounder(cos(sinArgument), 10));
}
function rounder(num, digit) {
	return round(num * digit) / digit;
}
