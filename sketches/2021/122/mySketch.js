let radius = 10;
let deg = 1;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
}

function draw() {
	background(0);
	drawLoop(220, deg);
}

function drawLoop(radius, deg) {
	for (let i = 0; i < 360; i += deg) {
		strokeWeight(8);
		line(width / 2 + (radius + radius * cos(frameCount + i * 3)) * cos(i),
			height / 2 + (radius + radius * sin(frameCount + i * 3)) * sin(i),
			width / 2 + (radius + radius * cos(frameCount + (i + deg) * 3)) * cos(i + deg),
			height / 2 + (radius + radius * sin(frameCount + (i + deg) * 3)) * sin(i + deg));
	}
}

function fluctSin(base, strength, sinArgument) {
	return base + strength * sin(sinArgument);
}
function fluctCos(base, strength, sinArgument) {
	return base + strength * cos(sinArgument);
}