let num = 50;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	textAlign(CENTER, CENTER);
	textSize(80);
	textFont('Century');
}

function draw() {
	for (let y = 0; y < height; y += height / num) {
		drawingContext.save();
		noStroke();
		fill(255);
		rect(0, y, width, height / num);
		drawingContext.clip();
		fill(0);
		text("Dream\n&\nReality", width / 2, height / 2 + 20 * sin(frameCount * 0.02 + 6 * noise(y)));
		drawingContext.restore();
	}
}
