let radius = 350;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	strokeCap(SQUARE);
}

function draw() {
	background(0);
	for (let i = 0; i < 360; i += 0.5) {
		strokeWeight(8 + 6 * sin(i * 10));
		stroke(255, 100);
		let fluctX = (80 + 40 * cos(frameCount * 0.1)) * sin(1000 * sin(i) * cos(frameCount * 0.2));
		let fluctY = (80 + 40 * cos(frameCount * 0.2)) * sin(1000 * cos(i) * sin(frameCount * 0.1));
		let fluctX2 = (80 + 40 * cos(frameCount * 0.1)) * sin(1000 * sin(i + 1) * cos(frameCount * 0.2));
		let fluctY2 = (80 + 40 * cos(frameCount * 0.2)) * sin(1000 * cos(i + 1) * sin(frameCount * 0.1));
		line(width / 2 + radius * cos(i * cos(frameCount * 0.1)) + fluctX,
			height / 2 + radius * sin(i * sin(frameCount * 0.2)) + fluctY,
			width / 2 + radius * cos(i + i * cos(frameCount * 0.2)) + fluctX2,
			height / 2 + radius * sin(i + i * sin(frameCount * 0.3)) + fluctY2);
	}
}