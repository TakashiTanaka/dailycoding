let xpos = [];
let ypos = [];
let dx = [];
let dy = [];
let vx = [];
let vy = [];
let easing = [];
let num = 10;
let size = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	noStroke();
	for (let i = 0; i < num; i++) {
		xpos[i] = 0;
		ypos[i] = 0;
		easing[i] = 1 / i;
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	let mouse = createVector(mouseX, mouseY);

	for (let i = 0; i <= num; i++) {
		dx[i] = mouse.x - xpos[i];
		dy[i] = mouse.y - ypos[i];
		vx[i] = dx[i] * easing[i];
		vy[i] = dy[i] * easing[i];
		xpos[i] = xpos[i] + vx[i];
		ypos[i] = ypos[i] + vy[i];
		blendMode(SCREEN);
		let color = map(i, 0, num, 0, 360);
		fill(color, 100, 100);
		ellipse(xpos[i], ypos[i], size, size);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
