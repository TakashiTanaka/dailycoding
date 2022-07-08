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
		this.count = 0;
	}
	createBasePoint(radius, deg) {
		for (let i = this.firstDeg; i * deg < this.lastDeg; i++) {
			this.points[i] = {
				x: this.basePoint.x + radius * cos(i * deg),
				y: this.basePoint.y + radius * sin(i * deg)
			}
		}
		console.log(this.points);
	}
	drawBasePoint() {
		noFill();
		stroke(255);
		strokeWeight(5);
		beginShape();
		for (const i in this.points) {
			this.move(i);
			vertex(
				this.points[i].x + this.fluct.x,
				this.points[i].y + this.fluct.y
			)
		}
		endShape(CLOSE);
	}
	move(i) {
		this.fluctRadius = {};
		if (i == this.count) {
			this.fluctRadius.x = (200 * cos(this.fc * 10)) * cos(i);
			this.fluctRadius.y = (200 * cos(this.fc * 10)) * sin(i);
		} else {
			this.fluctRadius.x = 0;
			this.fluctRadius.y = 0;
		}
		this.fluct = {
			x: this.fluctRadius.x,
			y: this.fluctRadius.y
		}
	}
	update() {
		this.fc = frameCount;
		if (this.count < 360) {
			this.count++;
		} else {
			this.count = 0;
		}
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