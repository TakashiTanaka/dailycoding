let pos = [];
let rad = [];
let num = 900;
let counter = 0;

function setup() {
	createCanvas(1000, 1000);
	strokeWeight(2);
	stroke(255);
	let baseX = width / 2;
	let baseY = height / 2;
	let deg = 0;
	for (let j = 0; j < num; j++) {
		rad.push([j / 2]);
		let x = baseX + rad[j] * cos(radians(deg));
		let y = baseY + rad[j] * sin(radians(deg));
		deg += 360 / num * 10;
		pos.push([x, y]);
	}

}

function draw() {
	background(0);
	for (let i = 0; i < counter; i++) {
		line(pos[i][0], pos[i][1], pos[i + 1][0], pos[i + 1][1]);
	}
	counter = (pos.length - 1) * abs(sin(frameCount * 0.01));
}