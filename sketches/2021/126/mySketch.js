let radius = 350;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);
	strokeWeight(4);
}

function draw() {
	background(0);
	for (let j = 0; j < 1; j++) {
		for (let i = 0; i < 360; i++) {
			// let fluct = random(-10, 10);
			strokeWeight(8 + 6 * sin(i * 10));
			let fluctX = (80 + 40 * cos(frameCount * 0.6)) * sin(1000 * sin(i) * cos(frameCount * 0.5));
			let fluctY = (80 + 40 * cos(frameCount * 0.5)) * sin(1000 * cos(i) * sin(frameCount * 0.6));
			let fluctX2 = (80 + 40 * cos(frameCount * 0.6)) * sin(1000 * sin(i + 1) * cos(frameCount * 0.5));
			let fluctY2 = (80 + 40 * cos(frameCount * 0.5)) * sin(1000 * cos(i + 1) * sin(frameCount * 0.6));
			line(width / 2 + radius * rounder(cos(i), fluctSin(5, 2.5, frameCount + i * 5)) + fluctX,
				height / 2 + radius * rounder(sin(i), fluctSin(5, 2.5, frameCount + i * 5)) + fluctY,
				width / 2 + radius * rounder(cos(i + 1), fluctSin(5, 2.5, frameCount + (i + 1) * 5)) + fluctX2,
				height / 2 + radius * rounder(sin(i + 1), fluctSin(5, 2.5, frameCount + (i + 1) * 5)) + fluctY2);
		}
	}
}

function fluctSin(base, strength, sinArgument) {
	return (base + strength * sin(sinArgument));
}
function fluctCos(base, strength, sinArgument) {
	return (base + strength * cos(sinArgument));
}
function rounder(num, digit) {
	return round(num * digit) / digit;
}