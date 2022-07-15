let tex = [];

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	textSize(7);
	textFont('Helvetica');
	background(0);
	for (let i = 0; i <= 9; i++) {
		tex[i] = i;
	}
}

function draw() {
	if (frameCount === 1 || frameCount % 4 === 0) {
		background(255);
		for (let yi = 0; yi < height; yi += 8) {
			for (let xi = 3; xi < width; xi += 7) {
				text(tex[int(random(tex.length))], xi, yi);
			}
		}
	}
}