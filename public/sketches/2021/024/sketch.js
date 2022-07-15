let backgroundColor = 0;
let rects;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	strokeWeight(1.5);
	rectMode(CENTER);
	angleMode(DEGREES);
	rects = new drawRect();
}

function draw() {
	background(backgroundColor);
	rects.display();
}

class drawRect {

	reg = height / 12.4;

	constructor() {
	}

	createRect(i) {
		this.i = i;
		rect(
			width / 2 + 80 * cos(i * 10 - frameCount * 2),
			height * 0.9 - i * 10,
			width * 0.5 * cos(i - frameCount),
			height / 10);
	}

	display() {
		this.lineColor = 255;
		this.rectColor = 0;
		for (let i = 0; i < this.reg; i++) {
			fill(this.rectColor);
			stroke(this.lineColor);
			this.createRect(i);
			if (this.rectColor === 0 && this.lineColor === 255) {
				this.lineColor = 0;
				this.rectColor = 255;
			} else {
				this.lineColor = 255;
				this.rectColor = 0;
			}
		}
	}
}