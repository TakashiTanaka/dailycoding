let bldgWidth;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	noStroke();
	colorMode(HSB);
}

function draw() {
	bldgWidth = width * 0.5;
	let backColor = map(mouseX, 0, width, 100, 0, true);
	let windowColor = map(mouseX, 0, width, 0, 100, true);
	let bldgColorValue = map(mouseX, 0, width, 0, 40, true);
	background(200, 50, backColor);
	rectMode(CENTER);
	fill(0, 0, 70 - bldgColorValue);
	rect(width / 2, height / 2, bldgWidth, height);
	fill(0, 0, 50 - bldgColorValue);
	rectMode(CORNER);
	rect(width / 2 + bldgWidth / 10, 0, bldgWidth / 2, height);
	rectMode(CORNER);
	for (let i = 0; i < height / 20; i++) {
		fill(60, windowColor, 100);
		rect(width / 2 - bldgWidth / 10 * 1, height / 20 * (i + 1), 20, 10);
		rect(width / 2 - bldgWidth / 10 * 2, height / 20 * (i + 1), 20, 10);
		rect(width / 2 - bldgWidth / 10 * 3, height / 20 * (i + 1), 20, 10);
		rect(width / 2 - bldgWidth / 10 * 4, height / 20 * (i + 1), 20, 10);
	}
}