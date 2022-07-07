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
			x: (100 * cos(this.fc)),
			y: (100 * cos(this.fc))
		};
		this.fluct = {
			x: this.fluctRadius.x * cos(i * 30 + this.fc),
			y: this.fluctRadius.y * sin(i * 30 + this.fc)
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