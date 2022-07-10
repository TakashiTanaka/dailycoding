let radius = 10;
let deg = 1;
let count = 1;

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
		strokeWeight(8);
		line(width / 2 + fluctCos(radius, radius * 0.2, frameCount + i * (count * sin(i * fluctSin(2, 2, frameCount * 0.1)))) * sin(i),
			height / 2 + fluctSin(radius, radius * 0.2, frameCount + i * (count * sin(i * fluctSin(2, 2, frameCount * 0.1)))) * sin(i),
			width / 2 + fluctCos(radius, radius * 0.2, frameCount + (i + deg) * (count * sin((i + deg) * fluctSin(2, 2, frameCount * 0.1)))) * sin(i + deg),
			height / 2 + fluctSin(radius, radius * 0.2, frameCount + (i + deg) * (count * sin((i + deg) * fluctSin(2, 2, frameCount * 0.1)))) * sin(i + deg));
	}
	// if (frameCount % 180 === 0) {
	// 	count++;
	// }
}

function fluctSin(base, strength, sinArgument) {
	return (base + strength) * sin(sinArgument);
}
function fluctCos(base, strength, sinArgument) {
	return (base + strength) * cos(sinArgument);
}