let textNum = 50;
let size;
let mainText = [];
let targetXpos, targetYpos;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	noFill();
	textFont('helvetica-bold');
	textAlign(CENTER);
	if (windowWidth > windowHeight) {
		size = windowWidth / 3;
	} else if (windowWidth < windowHeight) {
		size = windowHeight / 3;
	}
	textSize(size);

	for (let i = 0; i < textNum; i++) {
		mainText[i] = new DelayText(0, 0, 1 / i);
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	targetXpos = mouseX;
	targetYpos = mouseY;
	for (let i = 0; i < textNum; i++) {
		let color = map(i, 0, textNum, 0, 360);
		stroke(color, 100, 100);
		mainText[i].display();
	}
}

class DelayText {
	constructor(textPosX, textPosY, easing) {
		this.textPosX = textPosX;
		this.textPosY = textPosY;
		this.easing = easing;
	}

	display() {
		this.dx = targetXpos - this.textPosX;
		this.dy = targetYpos - this.textPosY;
		this.vx = this.dx * this.easing;
		this.vy = this.dy * this.easing;
		this.textPosX = this.textPosX + this.vx;
		this.textPosY = this.textPosY + this.vy;
		blendMode(SCREEN);
		text('WE', this.textPosX, this.textPosY);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	if (windowWidth > windowHeight) {
		size = windowWidth / 3;
	} else if (windowWidth < windowHeight) {
		size = windowHeight / 3;
	}
	textSize(size);
}
