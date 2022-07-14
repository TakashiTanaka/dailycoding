let conCircle;

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
	noStroke();
	conCircle = new ConcentricCircle(500, 500, 800, 800);
	conCircle
		.mode('alter', 0, 100)
		.display(60);
}

function draw() {
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
		super();
		this.circle = new Ball(x, y, w, h);
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
				i % 2 === 0 ? fill(this.color1) : fill(this.color2);
				break;

			default:
				break;
		}
	}
	display(num = 1, offset = this.circle.h / num) {
		this.num = num;
		this.offset = offset;
		for (let i = 0; i < this.num; i++) {
			if (this.type) this.paint(this.type, i);
			this.circle.display();
			this.circle.x -= 5;
			this.circle.y -= 0;
			this.circle.h -= this.offset;
			this.circle.w -= this.offset;
		}
		return this;
	}
}