class Box {
	constructor(x, y, w, h) {
		let options = {
			friction: 0.5,
			restitution: 0.5
		}
		this.w = w;
		this.h = h;
		this.body = Bodies.rectangle(x, y, w, h, options);
		World.add(engine.world, this.body);
	}
	show() {
		let pos = this.body.position;
		let angle = this.body.angle;
		// console.log(this.body);
		noStroke();
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		rect(0, 0, this.w, this.h);
		pop();
	}
}