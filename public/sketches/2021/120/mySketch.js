let radius = 10;
let deg = .5;

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
		strokeWeight(12 + 6 * sin(i * 10));
		let radiusX1 = (80 + 80 * sin(frameCount)) * cos(frameCount + (cos(frameCount) + i * 10)) * cos((frameCount + i) * 5);
		let radiusX2 = (80 + 80 * sin(frameCount)) * cos(frameCount + (cos(frameCount) + (i + deg) * 10)) * cos((frameCount + i) * 5);
		let radiusY1 = (80 + 80 * sin(frameCount)) * cos(frameCount + (cos(frameCount) + i * 10)) * sin((frameCount + i) * 5);
		let radiusY2 = (80 + 80 * sin(frameCount)) * cos(frameCount + (cos(frameCount) + (i + deg) * 10)) * sin((frameCount + i) * 5);
		let fluctX = radiusX1 * cos(i);
		let fluctX2 = radiusX2 * cos(i + deg);
		let fluctY = radiusY1 * sin(i);
		let fluctY2 = radiusY2 * sin(i + deg);
		line(width / 2 + radius * cos(i) + fluctX,
			height / 2 + radius * sin(i) + fluctY,
			width / 2 + radius * cos(i + deg) + fluctX2,
			height / 2 + radius * sin(i + deg) + fluctY2);
	}
}