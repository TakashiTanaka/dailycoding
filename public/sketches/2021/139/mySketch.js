let drawCircle;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	drawCircle = new DrawCircle();
}

function draw() {
	background(0);
	drawCircle.display(300, 0.15);
}

class DrawCircle {
	constructor() {
		this.fc = frameCount;
		this.basePoint = {
			x: width / 2,
			y: height / 2
		};
		this.weight = 5;
		this.firstDeg = 0;
		this.lastDeg = 360;
		this.points = [];
	}
	createBasePoint(radius, deg) {
		for (let i = this.firstDeg; i < this.lastDeg; i += deg) {
			this.points[i] = {
				x: this.basePoint.x + radius * cos(i),
				y: this.basePoint.y + radius * sin(i)
			}
		}
	}
	drawBasePoint() {
		noFill();
		beginShape();
		for (const i in this.points) {
			this.move(i);
			stroke(255);
			strokeWeight(3);
			curveVertex(
				this.points[i].x + this.fluct.x,
				this.points[i].y + this.fluct.y
			)
		}
		endShape(CLOSE);
	}
	move(i) {
		this.fluctRadius = {
			x: ((fluctSin(40, 40, this.fc) * cos(i * 10)) + fluctSin(40, 40, this.fc) * sin(i * 100)) + fluctSin(100, 100, this.fc) * sin(i * 20 + this.fc),
			y: ((fluctSin(40, 40, this.fc) * sin(i * 10)) + fluctSin(40, 40, this.fc) * cos(i * 100)) + fluctSin(100, 100, this.fc) * cos(i * 20 + this.fc)
		};
		this.fluct = {
			x: this.fluctRadius.x,
			y: this.fluctRadius.y
		}
	}
	update() {
		this.fc = frameCount;
	}
	display(radius, deg) {
		this.createBasePoint(radius, deg);
		this.drawBasePoint();
		this.update();
	}
}

function fluctSin(base, strength, sinArgument) {
	return (base + strength * sin(sinArgument));
}

function fluctCos(base, strength, sinArgument) {
	return ((base + strength) * cos(sinArgument));
}

function rounder(num, digit) {
	return round(num * digit) / digit;
}

function drawSinCurve() {
	for (let i = 0; i < width; i++) {
		let x1 = i;
		let x2 = i + 1;
		let y1 = height / 2 + height / 4 * sqr(sin(i));
		let y2 = height / 2 + height / 4 * sqr(sin(i + 1));
		line(x1, y1, x2, y2);
	}
}

function sqr(x) {
	if (x < 0.5) {
		return -1;
	} else {
		return 1;
	}
}