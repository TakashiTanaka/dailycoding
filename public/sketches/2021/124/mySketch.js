let radius = 10;
let deg = 1;
let count = 1;


function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);

}

function draw() {
	background(0);
	drawLoop(180, deg);
}

function drawLoop(radius, deg) {
	let fc = frameCount;

	strokeWeight(6);

	for (let i = 0; i < 360; i += deg) {
		line(width / 2 + (radius + fluctCos(100, fluctCos(100, 100, fc), fc * 8 + i * 9)) * cos(i),
			height / 2 + (radius + fluctSin(100, fluctSin(100, 100, fc), fc * 8 + i * 9)) * sin(i),
			width / 2 + (radius + fluctCos(100, fluctCos(100, 100, fc), fc * 8 + (i + deg) * 9)) * cos(i + deg),
			height / 2 + (radius + fluctSin(100, fluctSin(100, 100, fc), fc * 8 + (i + deg) * 9)) * sin(i + deg));
	}

}



function fluctSin(base, strength, sinArgument) {
	return (base + strength * sin(sinArgument));
}
function fluctCos(base, strength, sinArgument) {
	return (base + strength * cos(sinArgument));
}