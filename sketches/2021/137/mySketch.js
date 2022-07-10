let drawCircle;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	drawCircle = new DrawCircle();
}

function draw() {
	background(0);
	drawCircle.display(300, 1);
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
			strokeWeight(5);
			curveVertex(
				this.points[i].x + this.fluct.x,
				this.points[i].y + this.fluct.y
			)
		}
		endShape(CLOSE);
	}
	move(i) {
		this.fluctRadius = {
			x: fluctSin(50, 25, this.fc + (sin(i) * 200)) * cos(cos(i) * 2000 + this.fc * 3),
			y: fluctSin(50, 25, this.fc + (sin(i) * 200)) * sin(cos(i) * 2000 + this.fc * 3)
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
