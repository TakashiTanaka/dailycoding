let backgroundColor = 0;
let circle;

function setup() {
	createCanvas(1000, 1000);
	circle = new drawCircles();
}

function draw() {
	background(backgroundColor);
	translate(width / 2, height / 2);
	rotate(frameCount * 0.005);
	push();
	translate(-width / 2, -height / 2);
	circle.display();
	pop();
}

class drawCircles {
	constructor() {
		this.baseXpos = width * 0.5;
		this.baseYpos = height * 0.5;
		this.fineness = 50;
		this.rectSize = width * 0.85;
		this.rectColor = 0;
		this.lineColor = 255;
		rectMode(CENTER);
		strokeWeight(1);
	}

	display() {
		for (let i = 0; i < 1600; i += this.fineness) {
			fill(this.rectColor);
			stroke(this.lineColor);
			push();
			translate(this.baseXpos, this.baseYpos);
			rotate(i / 360 + sin(frameCount * 0.01 + i / 300));
			ellipse(0, 0,
				(this.rectSize - i / 2),
				(this.rectSize - i / 2) * cos(frameCount * 0.01 - i / 1000));
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
