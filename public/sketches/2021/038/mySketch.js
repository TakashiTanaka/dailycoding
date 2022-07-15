let num = 20;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = [];
let charChange = 0;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	textAlign(CENTER, CENTER);
	textFont('Helvetica-bold');
	textSize(400);
	for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
		alphabet[i] = char(counter).toUpperCase();
		counter++;
	}
}

function draw() {
	for (let x = 0; x < width; x += width / num) {
		drawingContext.save();
		noStroke();
		fill(0, 40);
		rect(x, 0, height / num, height);
		drawingContext.clip();
		fill(255);
		text(alphabet[charChange], width / 2 + 50 * cos(frameCount * 0.02 + 3 * noise(x)), height / 2);
		drawingContext.restore();
	}
	if (frameCount % 60 === 0) {
		if (charChange < 25) {
			charChange++;
		} else {
			charChange = 0;
		}
	}
}