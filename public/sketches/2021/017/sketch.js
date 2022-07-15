let tex = [];
let j = 0;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	textSize(7);
	textFont('Helvetica');
	background(255);
	for (let i = 0; i <= 9; i++) {
		tex[i] = i;
	}
}

function draw() {
	background(0);
	fill(255)
	for (let yi = 8; yi < height; yi += 8) {
		for (let xi = 3; xi < width; xi += 7) {
			text(tex[j], xi, yi);
			if (j < tex.length - 1) {
				j++;
			} else {
				j = 0;
			}
		}
	}
	noLoop();
}