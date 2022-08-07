let backgroundColor = 0;
let lineColor = 255;
let ellipseColor = 0;
let v, size;

function setup() {
	createCanvas(500, 500);
	fill(ellipseColor);
	stroke(lineColor);
	strokeWeight(1.5);
	v = createVector(width * 0.5, height * 0.8);
	size = {width: height * 0.5, height: height * 0.2};
}

function draw() {
	background(backgroundColor);
	for (let i = 0; i < height / 16; i++) {
		let ugoki = cos(i * 3 - frameCount * 0.05);
		ellipse(
			v.x + 20 * ugoki,
			v.y - i * 10 + 20 * sin(i * 3 - frameCount * 0.05),
			size.width,
			size.height);
	}
}
