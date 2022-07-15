let num = 2;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = [];

function setup() {
	let canvas = createCanvas(1000, 1000);
	canvas.parent('canvas');
	angleMode(DEGREES);
	textAlign(CENTER, CENTER);
	textFont('Century');
	noCursor();
	for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
		alphabet[i] = char(counter).toUpperCase();
		counter++;
	}
}

function draw() {
	for (let y = 0; y < height; y += height / num) {
		for (let x = 0; x < width; x += width / num) {
			textSize(random(800, 2000));
			drawingContext.save();
			noStroke();
			fill(0);
			rect(x, y, height / num);
			drawingContext.clip();
			fill(230);
			push();
			translate(x + height / num / 2, y + height / num / 2);
			rotate(90 * int(random(0, 3)));
			text(alphabet[int(random(alphabet.length - 1))], 0, 0);
			drawingContext.restore();
			pop();
		}
	}

	noLoop();
}

function mouseClicked() {
	redraw();
}

function keyPressed() {
	if (keyCode === 83) {
		saveCanvas('unknown', 'jpg');
	}
}




