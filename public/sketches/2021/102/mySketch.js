let backgroundColor = 0;
let rects;

function setup() {
	createCanvas(1000, 1000);
	rects = new drawRects();
}

function draw() {
	background(backgroundColor);
	translate(width / 2, height / 2);
	rotate(frameCount * 0.005);
	push();
	translate(-width / 2, -height / 2);
	rects.display();
	pop();
}

class drawRects {
	constructor() {
		this.baseXpos = width * 0.5;
		this.baseYpos = height * 0.5;
		this.fineness = 10;
		this.rectSize = width * 0.35;
		this.rectColor = 0;
		this.lineColor = 255;
		rectMode(CENTER);
		strokeWeight(1);
	}

	display() {
		for (let i = 0; i < 2500; i += this.fineness) {
			fill(this.rectColor);
			stroke(this.lineColor);
			push();
			translate(this.baseXpos + width / 5 * cos(frameCount * 0.01 + cos(frameCount * 0.01) + i * 2 / 360),
				this.baseYpos + height / 5 * sin(frameCount * 0.01 + sin(frameCount * 0.02) + i * 2 / 360));
			rotate(i / 360 + sin(frameCount * 0.02 + i / 100));
			rect(0, 0, this.rectSize - i / 8);
			pop();
			if (this.rectColor === 255) {
				this.rectColor = 0;
				this.lineColor = 255;
			} else {
				this.rectColor = 255;
				this.lineColor = 0;
			}
		}
	}
}
