let ball;
let mover;
let balls = [];
let movers = [];
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
	mover = new Mover(ball);
	createArray(balls, (i) => new Ball(0, 0, 800 - i * 800 / 10), 10);
	createArray(movers, (i) => new Mover(balls[i]), balls.length);
}

function draw() {
	console.log(movers);
	// blendMode(BLEND);
	background(0, 0, 0);
	// blendMode(SCREEN);

	stroke(0, 0, 255);
	strokeWeight(1);
	drawGrid(100);

	// noStroke();
	// noFill();
	balls.forEach((ball, i) => {
		i % 2 === 0 ? fill(255) : fill(0);
		ball.display();
	});

	movers.forEach((mover, i) => {
		mover
			.translate(500, 500)
			.rotate(50 * sin(frameCount * 0.02 + i), 5)
		// .narrower(i / 2 * sin(frameCount * 0.03 + i))
		// .extender(i / 2 * cos(frameCount * 0.03 + i));
		// .cos(i, i * 4)
		// .sin(i * 4, i)
	})

	// ball.display();
	// mover
	// 	.translate(500, 500)
	// 	.cos(100, 20)
	// 	.sin(100, 5)
	// .rotate(0, 5)
	// .test(10, 1);
	// .narrower(4 * sin(frameCount * 0.03))
	// .extender(4 * cos(frameCount * 0.03));

	// balls.forEach((ball, index) => {
	// ball.display();
	// movers[index].debug();
	// ball.move(index);
	// // }
	// );
}

class Mover {
	constructor(obj) {
		this.obj = obj;
		this.initPos = { x: obj.x, y: obj.y }
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

// class Obj {
// 	constructor(x,y,)
// }

class Ball {
	constructor(x = 0, y = 0, w = 100, h = w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
	}
	display() {
		ellipse(this.x, this.y, this.w, this.h);
	}
}