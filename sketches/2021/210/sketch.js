let walkers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for (let i = 0; i < 100; i++) {
		walkers.push(new Walker());
	}
}

function draw() {
	background(0);
	walkers.forEach(walker => {
		walker.step();
		walker.display();
	}
	);
}

class Walker {
	constructor() {
		this.location = createVector(width / 2, height / 2);
		this.stepSize = 5;
	}
	display() {
		stroke(255, 30);
		// point(this.location.x, this.location.y);
		line(width / 2, height / 2, this.location.x, this.location.y);
	}
	step() {
		let r = random(1);
		if (r < 0.25) {
			this.location.x += this.stepSize;
		} else if (r < 0.5) {
			this.location.y += this.stepSize;
		} else if (r < 0.75) {
			this.location.x -= this.stepSize;
		} else {
			this.location.y -= this.stepSize;
		}
	}
}