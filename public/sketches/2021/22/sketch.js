let canvasSize;
let backgroundColor = 0;
let lineColor = 255;
let ellipseColor = 0;

function setup() {
	canvasSizeSelector();
	let canvas = createCanvas(canvasSize, canvasSize);
	canvas.parent('canvas');
	fill(ellipseColor);
	stroke(lineColor);
	strokeWeight(1.5);
}

function draw() {
	background(backgroundColor);
	for (let i = 0; i < height / 12.4; i++) {
		ellipse(width / 2,
			height * 0.9 - i * 10 + sin(200 * noise(frameCount * 0.001 + i * 0.01)),
			height * noise(frameCount * 0.005 + i * 0.01),
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