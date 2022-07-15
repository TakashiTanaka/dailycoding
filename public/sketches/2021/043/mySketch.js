function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	background(0);
	textAlign(CENTER, CENTER);
	textFont('游明朝体');
	fill(255);
	stroke(0);
	strokeWeight(2);
}

function draw() {
	let kana = String.fromCodePoint(int(random(0x30A1, 0x30FA)));
	textSize(450);
	text(kana, width / 2, height / 2);
}