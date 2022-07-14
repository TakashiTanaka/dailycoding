let ball;
let mover;
let balls = [];
let movers = [];
let layouter;

const iterator = f => n => { for (let i = 0; i < n; i++) f(i); };
const createArray = (array, instance, num) => iterator((i) => array.push(instance(i)))(num);
const randomX = () => random(0, width);
const randomY = () => random(0, height);
const centerX = () => width / 2;
const centerY = () => height / 2;
const randomSize = () => random(400, 500);

const drawGrid = (unitSize) => {
	const iterator = (iNum, func) => { for (let count = iNum; count--;) { func(count) }; }
	iterator(ceil(width / unitSize), (count) => {
		line(count * unitSize, 0, count * unitSize, height);
		line(0, count * unitSize, width, count * unitSize);
	});
}

function setup() {
	createCanvas(1000, 1000);
	colorMode(HSB, 360, 100, 100, 100);
	background(0);
	ball = new Ball(0, 0, 20, 20);
	mover = new Animator(ball);
	createArray(balls, (i) => new Ball(centerX(), centerY(), 100), 100);
	createArray(movers, (i) => new Animator(balls[i]), balls.length);
	layouter = new Layouter(balls);
}

function draw() {
	background(0, 0, 0);

	stroke(0, 0, 255);
	strokeWeight(1);
	drawGrid(100);

	// noStroke();
	// noFill();
	balls.forEach((ball, i) => {
		// i % 2 === 0 ? fill(255) : fill(0);
		// ball.display();
	});

	noFill();
	layouter.matrix(1000, 100, 100);
	// layouter.matrix(1000, 100, 100);

	movers.forEach((mover, i) => {
		mover
		// .translate(0, 0)
		// .rotate(100, 5)
		// .move(1, 1)
		// .cos(1)
		// .sin(1)
	})
}

class Animator {
	constructor(obj) {
		this.obj = obj;
		this.obj.x = obj.x;
		this.obj.y = obj.y;
		this.initPos = { x: obj.x, y: obj.y };
		return this;
	}
	rotate(rad, speed = 1) {
		this.obj.x += this.initPos.x + rad * cos(frameCount * 0.01 * speed);
		this.obj.y += this.initPos.y + rad * sin(frameCount * 0.01 * speed);
		return this;
	}
	cos(rad, speed = 1) {
		this.obj.x += rad * cos(frameCount * 0.01 * speed);
		return this;
	}
	sin(rad, speed = 1) {
		this.obj.y += rad * sin(frameCount * 0.01 * speed);
		return this;
	}
	move(xv, yv, speed = 1) {
		this.obj.x += xv * speed;
		this.obj.y += yv * speed;
		return this;
	}
	translate(x, y) {
		this.obj.x = x;
		this.obj.y = y;
		return this;
	}
	narrower(h) {
		this.obj.h += h;
		return this;
	}
	extender(w) {
		this.obj.w += w;
		return this;
	}
	debug() {
		console.log(this.initPos.x, this.initPos.y);
	}
}


class Layouter {
	constructor(shapes) {
		this.shapes = shapes;
	}
	lineUp() {
		this.shapes.forEach((shape, i) => {
			shape.x = i * shape.w - shape.w / 2;
			shape.display();
		})
	}
	matrix(matrixWidth, row, col) {
		textAlign(CENTER, CENTER);
		let xCount = 0;
		let yCount = 0;
		this.shapes.forEach((shape, i) => {
			// const debug = () => {
			// 	noStroke();
			// 	fill(255);
			// 	text(`${xCount} / ${i} / ${yCount}`, shape.x, shape.y);
			// }
			// debug();
			shape.x = xCount * row + 50;
			shape.y = yCount * col + 50;
			shape.w = 100 * sin((frameCount * 0.02 + xCount) * 2);
			shape.h = 100 * sin((frameCount * 0.02 + yCount + xCount) * 2);
			if (yCount % 2 === 0) {
				i % 2 === 0 ? fill(255) : fill(0);
			}
			if (yCount % 2 !== 0) {
				i % 2 !== 0 ? fill(255) : fill(0);
			}
			if (xCount * row < matrixWidth - row) {
				xCount++;
			} else {
				xCount = 0;
				yCount++;
			}
			shape.display();
		})
	}
}


class Shape {
	constructor(x = 0, y = 0, w = 0, h = w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
}

class Rect extends Shape {
	constructor(x = 0, y = 0, w = 0, h = w, mode = CENTER) {
		super(x, y, w, h);
		this.mode = mode;
		rectMode(this.mode);
	}
	display() {
		rect(this.x, this.y, this.w, this.h);
	}
}

class Ball extends Shape {
	constructor(x = 0, y = 0, w = 100, h = w) {
		super(x, y, w, h);
	}
	display() {
		ellipse(this.x, this.y, this.w, this.h);
	}
}

class ConcentricCircle extends Ball {
	constructor(x = 0, y = 0, w = 100, h = w) {
		super(x, y, w, h);
	}
	display() {
		ellipse(this.x, this.y, this.w, this.h);
	}
}