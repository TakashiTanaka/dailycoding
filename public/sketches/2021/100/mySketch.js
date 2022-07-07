let backgroundColor = 0;
let rects;

function setup() {
	createCanvas(1000, 1000);
	noStroke();
	rects = new drawRect();
}

function draw() {
	background(backgroundColor);
	rects.display();
}

class drawRect {
	constructor() {
		this.baseXpos = width * 0.5;
		this.baseYpos = height * 0.5;
		this.fineness = 10;
		this.rectSize = width * 2;
		noStroke();
	}

	display() {
		rectMode(CENTER);
		this.rectColor = 255;
		for (let i = 0; i < this.rectSize; i += this.fineness) {
			fill(this.rectColor);
			rect(
				this.baseXpos + width / 5 * cos(frameCount * 0.01 + i * 2 / 360),
				this.baseYpos + height / 5 * sin(frameCount * 0.01 + i * 2 / 360),
				this.rectSize - i);
			if (this.rectColor === 0) {
				this.rectColor = 255;
			} else {
				this.rectColor = 0;
			}
		}
	}
}
