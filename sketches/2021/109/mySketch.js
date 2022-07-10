let rec = [];
let recNum = 20;

function setup() {
	createCanvas(1000, 1000);
	for (let i = 0; i < recNum; i++) {
		rec.push(new drawRect());
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	// background(70, 70, 80);
	for (let i = 0; i < recNum; i++) {
		rec[i].update(i);
		rec[i].display();
	}
	// drawGrid(25);
}

class drawRect {
	constructor() {
		this.sizeList = [100, 250, 500];
		this.rectSize = this.sizeList[int(random(this.sizeList.length))];
		this.motion;
		this.counter = 0;
		this.counter2 = 0;
		this.interval = this.counter + 1.3;
		this.initPosX = width / 2;
		this.desX = this.rectSize / 2 * int(random(1, width / this.rectSize * 2));
		this.distanceX = this.desX - this.initPosX;
		this.initPosY = height / 2;
		this.desY = this.rectSize / 2 * int(random(1, height / this.rectSize * 2));
		this.distanceY = this.desY - this.initPosY;
		this.palletAlpha = 255;
		this.pallet = [color(255, 100, 0, this.palletAlpha), color(50, 50, 255, this.palletAlpha), color(200, 200, 200, this.palletAlpha)];
		this.rectColor = this.pallet[int(random(this.pallet.length))];
		this.speed = 0.01 * int(random(1, 2));
		this.randomShapeSelector = int(random(0, 2));
		this.randomStyleSelector = random(1);
		this.strokeW = 10;
		rectMode(CENTER);
	}
	display() {
		// blendMode(LIGHTEST);
		noFill();
		strokeWeight(this.strokeW);
		stroke(this.rectColor);
		if (this.randomShapeSelector % 2 === 0) {
			rect(this.x, this.y, this.rectSize - this.strokeW);
		} else {
			ellipse(this.x, this.y, this.rectSize - this.strokeW);
		}

	}
	update() {
		this.motion = easeOutBounce(this.counter);
		this.x = int(this.initPosX + this.distanceX * this.motion);
		this.y = int(this.initPosY + this.distanceY * this.motion);
		if (this.counter < 1) {
			this.counter += this.speed;
			this.counter2 += this.speed;
		} else if (this.counter2 < this.interval) {
			this.counter2 += this.speed;
		} else {
			this.counter = 0;
			this.counter2 = 0;
			this.speed = 0.01;
			this.initPosX = this.x;
			this.desX = this.rectSize / 2 * int(random(1, width / this.rectSize * 2));
			this.distanceX = this.desX - this.initPosX;
			this.initPosY = this.y;
			this.desY = this.rectSize / 2 * int(random(1, height / this.rectSize * 2));
			this.distanceY = this.desY - this.initPosY;
		}
	}
}

function easeOutExpo(x) {
	return x === 1 ? 1 : 1 - pow(2, -10 * x);
}

function easeOutBounce(x) {
	const n1 = 7.5625;
	const d1 = 2.75;

	if (x < 1 / d1) {
		return n1 * x * x;
	} else if (x < 2 / d1) {
		return n1 * (x -= 1.5 / d1) * x + 0.75;
	} else if (x < 2.5 / d1) {
		return n1 * (x -= 2.25 / d1) * x + 0.9375;
	} else {
		return n1 * (x -= 2.625 / d1) * x + 0.984375;
	}
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