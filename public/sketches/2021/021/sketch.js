let canvasSize;
let backgroundColor = 0;
let lineColor = 255;
let boxColor = 0;

function setup() {
	canvasSizeSelector();
	let canvas = createCanvas(canvasSize, canvasSize);
	canvas.parent('canvas');
	strokeWeight(1.5);
	rectMode(CENTER);
	fill(boxColor);
	stroke(lineColor);
}

function draw() {
	background(backgroundColor);
	for (let i = 0; i < height / 2.6; i++) {
		rect(width / 2 + width / 3 * cos(frameCount * 0.01 + i * 5),
			height * 0.11 + i * 2 + 10 * sin(frameCount * 0.01 + i * 5),
			height / 10,
			height / 10);
	}
}

function windowResized() {
	canvasSizeSelector();
	resizeCanvas(canvasSize, canvasSize);
}

function canvasSizeSelector() {
	if (windowWidth < 768) {
		canvasSize = windowWidth;
	} else if (windowWidth > 768) {
		canvasSize = windowHeight;
	}
}