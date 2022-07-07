let drawCircle;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	drawCircle = new DrawCircle();
}

function draw() {
	background(0);
	drawCircle.display(300, .25);
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
		for (const i in this.points) {
			this.move(i);
			stroke(255);
			strokeWeight(5);
			point(
				this.points[i].x + this.fluct.x,
				this.points[i].y + this.fluct.y
			)
		}
	}
	move(i) {
		this.fluctRadius = {
			x: 0,
			y: 0
		};
		this.fluct = {
			x: this.fluctRadius.x + (200 * cos(cos(i) * 600 * noise(this.fc * 0.02))) * noise(cos(i) * 20 + this.fc * 0.05),
			y: this.fluctRadius.y + (200 * sin(cos(i) * 600 * noise(this.fc * 0.02))) * noise(sin(i) * 20 + this.fc * 0.05)
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
