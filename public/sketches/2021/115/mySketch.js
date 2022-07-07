let object = [];
let objectNum = 11;

function setup() {
	createCanvas(1000, 1000);
	for (let i = 0; i < objectNum; i++) {
		object.push(new drawObject(width / (objectNum - 1) * i));
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	for (let i = 0; i < objectNum; i++) {
		object[i].update(i);
		object[i].display(i);
	}
	console.log(object[0].Pos);
	// drawGrid(100);
}

class drawObject {
	constructor(initPos) {
		this.counter = 0;
		this.initPos = initPos;
		this.desPos = this.initPos;
		this.distancePos = this.desPos - this.initPos;
		this.objectColor = 255;
		this.speed = 0.01;
		strokeCap(PROJECT);
	}
	update() {
		this.motion = easeOutExpo(this.counter);
		this.Pos = ceil(this.initPos + this.distancePos * this.motion);
		if (this.counter < 1) {
			this.counter += this.speed;
		} else {
			this.counter = 0;
			this.initPos = this.Pos;
			if (this.Pos >= width) {
				this.desPos = 0;
			} else {
				this.desPos = this.initPos + width / (objectNum - 1);
			}
			this.distancePos = this.desPos - this.initPos;
		}
	}
	display(i) {
		strokeWeight(70);
		stroke(127 + 127 / 2 * sin(frameCount * 0.02 + i));
		noFill();
		line(this.Pos, 0, width / (objectNum - 1) * i, height);
		// ellipse(width / 2, height / 2, this.Size);
	}
}

function easeOutExpo(x) {
	return x === 1 ? 1 : 1 - pow(2, -10 * x);
}

function easeInBack(x) {
	const c1 = 1.70158;
	const c3 = c1 + 1;

	return c3 * x * x * x - c1 * x * x;
}

function easeInOutBack(x) {
	const c1 = 1.70158;
	const c2 = c1 * 1.525;

	return x < 0.5
		? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
		: (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeOutElastic(x) {
	const c4 = (2 * Math.PI) / 3;

	return x === 0
		? 0
		: x === 1
			? 1
			: pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
}

function drawGrid(gridSize) {
	stroke(255);
	strokeWeight(1);
	for (let x = 0; x <= 1000; x += gridSize) {
		for (let y = 0; y <= 1000; y += gridSize) {
			line(0, y, width, y);
		}
		line(x, 0, x, height);
	}
}