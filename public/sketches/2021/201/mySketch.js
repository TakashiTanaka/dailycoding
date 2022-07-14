let ball;
let balls = [];
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
	createArray(balls, (i) => new ConcentricCircle(500, 500, 1000 / 15, 1000 / 15, int(random(4, 10))).mode('alter', 0, 100), 1000 / 10);
	noStroke();
	layouter = new Layouter(balls);
	layouter.matrix(1000, 1000 / 10, 1000 / 10);
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
			shape.x = xCount * row + row / 2;
			shape.y = yCount * col + col / 2;
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
	constructor(x = 0, y = 0, w = 100, h = w, num = 1) {
		super(x, y, w, h);
		this.circle = new Ball(this.x, this.y, this.w, this.h);
		this.num = num;
	}
	mode(type, color1, color2) {
		this.type = type;
		this.color1 = color1;
		this.color2 = color2;
		return this;
	}
	paint(type, i) {
		switch (type) {
			case 'alter':
				i % 2 !== 0 ? fill(this.color1) : fill(this.color2);
				break;

			default:
				break;
		}
	}
	display(offset = this.circle.h / this.num) {
		this.offset = offset;
		for (let i = 0; i < this.num; i++) {
			if (this.type) this.paint(this.type, i);
			this.circle.x = this.x;
			this.circle.y = this.y;
			this.circle.h -= this.offset;
			this.circle.w -= this.offset;
			this.circle.display();
		}
		return this;
	}
}