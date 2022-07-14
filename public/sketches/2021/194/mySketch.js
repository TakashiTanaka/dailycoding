function setup() {
	const canvas = createCanvas(1000, 1000);
	console.log(createCanvas(1000, 1000));
	noStroke();

	drawingContext.globalCompositeOperation = "xor";
	for (let i = 0; i < 100; i++) {
		fill('red');
		rect(random(0, width), random(0, height), 100);
		fill('blue');
		rect(random(0, width), random(0, height), 100);
	}

	drawingContext.globalCompositeOperation = "destination-over";
	background(180);
}