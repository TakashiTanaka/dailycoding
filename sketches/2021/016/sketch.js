let sandMt = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	for (let i = 0; i < 4; i++) {
		sandMt[i] = new DrawSandMt();
	}
}

function draw() {
	background(200, 100, 80);
	sandMt[0].display(height / 3, 70);
	sandMt[1].display(height / 2, 80);
	sandMt[2].display(height / 1.5, 90);
	sandMt[3].display(height / 1.2, 100);
	noLoop();
}

class DrawSandMt {
	constructor() {
		this.x1 = random(-width * 2, 0);
		this.x2 = random(0, width);
		this.x3 = random(width, width * 2);
	}
	display(mtHeight, b) {
		this.mtHeight = mtHeight;
		this.b = b;
		noStroke();
		strokeWeight(1);
		fill(50, 70, b);
		beginShape();
		vertex(this.x1, height);
		vertex(this.x1, height);
		vertex(this.x2, this.mtHeight);
		vertex(this.x3, height);
		vertex(this.x3, height);
		endShape();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 4; i++) {
		sandMt[i] = new DrawSandMt();
	}
}