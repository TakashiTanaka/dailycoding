

function setup() {
	createCanvas(1000, 1000);
	strokeWeight(5);
}

function draw() {
	background(0);
	for (let i = -100; i < width + 100; i += width / 60) {

		stroke(255, 0, 0);
		line(i, 0, i, height);

		stroke(0, 255, 0);
		line(i, 0, i * 1.05 + 30 * sin(frameCount * 0.02), height);

		stroke(0, 0, 255);
		line(i * 1.05 + 50 * cos(frameCount * 0.01), 0, i, height);
	}
}