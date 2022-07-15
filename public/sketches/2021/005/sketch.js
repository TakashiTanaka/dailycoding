function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont('Helvetica');
	noStroke();
	fill(0);
}

function draw() {
	background(255);
	let division = map(mouseX, 0, width, 0, 100, true);
	for (let y = 0; y <= height; y += height / division) {
		for (let x = 0; x <= width; x += width / division) {
			text('©', x, y);
			textSize(width / division);
		}
	}
}