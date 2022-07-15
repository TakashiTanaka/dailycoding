let backgroundColor = 0;
let rects;

function setup() {
	createCanvas(1000, 1000);
	noStroke();
	rects = new drawRects();
}

function draw() {
	background(backgroundColor);
	rects.display();
}

class drawRects {
	constructor() {
		this.baseXpos = width * 0.5;
		this.baseYpos = height * 0.5;
		this.fineness = 20;
		this.rectSize = width * 1.1;
		noStroke();
	}

	display() {
		rectMode(CENTER);
		this.rectColor = 255;
		for (let i = 0; i < this.rectSize; i += this.fineness) {
			fill(this.rectColor);
			push();
			translate(
				this.baseXpos,
				this.baseYpos);
			rotate(i / 360 * cos(frameCount * 0.02 + i / 360));
			rect(0, 0, this.rectSize - i);
			pop();
			if (this.rectColor === 0) {
				this.rectColor = 255;
			} else {
				this.rectColor = 0;
			}
		}
	}
}
