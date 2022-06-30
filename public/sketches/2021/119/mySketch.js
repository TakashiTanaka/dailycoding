let radius = 350;
let deg = 1;
let d = [1, 15, 45, 60, 90];

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
	strokeWeight(4);
}

function draw() {
	if (frameCount % 20 === 0) {
		deg = d[int(random(d.length))];
	}
	background(0);
	drawLoop(350, deg);
}

function drawLoop(radius, deg) {
	for (let i = 0; i < 360; i += deg) {
		strokeWeight(8 + 6 * sin(i * 10));
		let fluctX = (80 + 40 * cos(frameCount * 0.6)) * sin(1000 * sin(i) * cos(frameCount * 0.5));
		let fluctY = (80 + 40 * cos(frameCount * 0.5)) * sin(1000 * cos(i) * sin(frameCount * 0.6));
		let fluctX2 = (80 + 40 * cos(frameCount * 0.6)) * sin(1000 * sin(i + deg) * cos(frameCount * 0.5));
		let fluctY2 = (80 + 40 * cos(frameCount * 0.5)) * sin(1000 * cos(i + deg) * sin(frameCount * 0.6));
		line(width / 2 + radius * cos(i) + fluctX,
			height / 2 + radius * sin(i) + fluctY,
			width / 2 + radius * cos(i + deg) + fluctX2,
			height / 2 + radius * sin(i + deg) + fluctY2);
	}
}