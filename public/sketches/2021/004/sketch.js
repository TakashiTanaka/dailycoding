let bgColor = 0;
let rectColor = 160;

function setup() {
	let canvas = createCanvas(400, 400);
	canvas.parent('canvas');
	colorMode(HSB);
	noStroke();
	rectMode(CENTER);
}

function draw() {
	background(bgColor, 100, 100);
	fill(rectColor, 100, 100);
	rect(width / 2, height / 2, width / 2, height / 2);
}

function mouseClicked() {
	bgColor = random(360);
	rectColor = random(360);
}