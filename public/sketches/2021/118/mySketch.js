function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	strokeCap(ROUND);
}

function draw() {
	background(0);
	noFill();
	stroke(255);
	drawCurveVertexLoop(300, 10);
}

function drawCurveVertexLoop(radius, deg) {
	beginShape();
	for (let i = 0; i <= 360; i += deg) {
		strokeWeight(10);
		let fluct = sin(frameCount * sin(i) * 10) * cos(frameCount * cos(i) * 10) * 100;
		vertex(
			width / 2 + radius * cos(i) + fluct + fluct * sin(frameCount),
			height / 2 + radius * sin(i) + fluct + fluct * cos(frameCount));
	}
	endShape();
}