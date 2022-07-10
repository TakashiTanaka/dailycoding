let num = 20;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	textAlign(CENTER, CENTER);
	textFont('Helvetica-bold');
}

function draw() {
	for (let y = 0; y < height; y += height / num) {
		for (let x = 0; x < width; x += width / num) {
			textSize(400);
			drawingContext.save();
			noStroke();
			fill(0);
			rect(x, y, height / num);
			drawingContext.clip();
			fill(255);
			text("A", width / 2 + 50 * cos(frameCount * 0.02 + x), height / 2 + 50 * sin(frameCount * 0.02 + y));
			drawingContext.restore();
		}
	}

}

