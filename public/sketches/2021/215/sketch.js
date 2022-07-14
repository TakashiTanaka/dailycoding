// reference: https://github.com/CodingTrain/p5-matter/blob/master/01_basics/sketch.js

// モジュール
let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

let engine;

let boxes = [];
let ground;

function setup() {
	createCanvas(800, 1200);

	// エンジンを作成
	engine = Engine.create();

	// box = new Box(100, 100, 100, 100);

	ground = Bodies.rectangle(400, height, 810, 60, {
		isStatic: true
	});
	left = Bodies.rectangle(0, 0, 60, height * 2, {
		isStatic: true
	});
	right = Bodies.rectangle(width, 0, 60, height * 2, {
		isStatic: true
	});

	// add all of the bodies to the world
	World.add(engine.world, [ground, left, right]);

	// run the engine
	Engine.run(engine);

	setInterval(() => { boxes.push(new Box(random(0, width), -height, 2, random(10, 1000))) }, 100);
}

function draw() {

	background(51);
	boxes.forEach(box => box.show());
}

// function mouseDragged() {
// 	boxes.push(new Box(mouseX, mouseY, random(10, 500), random(10, 500)))
// }