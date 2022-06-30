let radius = 10;
let deg = .5;
let count = 0;

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
	for (let i = 0; i < 360; i += deg) {
		strokeWeight(
			fluctSin(
				100 - count * 5, 100 - count * 5,
				i * count
			));
		line(width / 2 + radius * cos(i),
			height / 2 + radius * sin(i),
			width / 2 + radius * cos(i + deg),
			height / 2 + radius * sin(i + deg));
	}
	count = ceil(abs(10 * sin(frameCount)) - 1);
}

function fluctSin(base, strength, sinArgument) {
	return base + strength * sin(sinArgument);
}
function fluctCos(base, strength, sinArgument) {
	return base + strength * cos(sinArgument);
}