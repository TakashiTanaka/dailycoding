let drawCircle;

function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	drawCircle = new DrawCircle();
}

function draw() {
	background(0);
	// stroke(255);
	// line(200, 0, 200, height);
	// line(800, 0, 800, height);
	// line(0, 500, width, 500);
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
		this.firstDeg = -90;
		this.lastDeg = 361;
		this.points = [];
		this.count = 0;
	}
	createBasePoint(radius, deg) {
		for (let i = 0; i * deg < this.lastDeg; i++) {
			this.points[i] = {
				x: this.basePoint.x + radius * cos(this.firstDeg + i * deg) * (cos(i / (180 + 180 * cos(this.fc)) + this.fc)),
				y: this.basePoint.y + radius * sin(this.firstDeg + i * deg)
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
		this.fluctRadius = {
			// x: (100 * cos(i)),
			// y: (100 * sin(i))
			// x: -i * 900 / 90,
			// x: i * -10 + 6 * cos(i),
			// x: i * -10 * cos(i / 2 + this.fc),
			// x: i * -cos(i / 2 + this.fc),
			//45個目のポイントを左右移動させる
			// x: 0 + 300 * cos(this.fc) - 300,
			//0個目のポイントは左右移動させない
			// x: 0 * cos(this.fc) - 0,
			//22個目のポイントを左右移動させる
			// x: 150 * cos(this.fc) - 150,
			// 0:0
			// 22:150
			// 45:300

			// x: (300 * cos(this.fc) - 300) * i / 100,
			x: 0,

			// x: i * 300 * cos(this.fc * 0.5) - 300,
			y: 0
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