let speed = 0.05;

function setup() {
	createCanvas(1000, 1000);
	noStroke();
}

function draw() {
	for (let i = 0; i < width * 1.5; i += 50) {
		let cl = i / 50;
		if (cl % 2 === 0) {
			cl = 255;
		} else {
			cl = 0;
		}
		fill(cl);
		ellipse(width / 2 + 50 * sin(frameCount * speed - i),
			height / 2 + 50 * cos(frameCount * speed - i),
			width * 1.5 - i);
	}
}