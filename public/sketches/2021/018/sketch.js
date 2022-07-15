let tex = ['R', 'G', 'B'];
let margin;
let textSpacing;
let textsize = 11;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont('Helvetica');
	textSize(textsize);
	textSpacing = 11 * 1.2
	textAlign(CENTER, CENTER);
	margin = width / 10;
}

function draw() {
	background(0);
	for (let yi = margin + textsize; yi <= height - margin; yi += textSpacing) {
		for (let xi = margin + textsize; xi <= width - margin; xi += textSpacing) {

			let changeText = tex[int(random(tex.length))];

			if (changeText === 'R') {
				fill(255, 0, 0);
			} else if (changeText === 'G') {
				fill(0, 255, 0);
			} else if (changeText === 'B') {
				fill(0, 0, 255);
			}

			text(changeText, xi, yi);

		}
	}
	noLoop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	margin = width / 10;
}

function mouseClicked() {
	redraw();
}