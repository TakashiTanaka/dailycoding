const obj = p5ex.Object;
const util = p5ex.Utility;
const ex = p5ex.Extension;
const canvasSize = Math.min(window.innerWidth, window.innerHeight);
let somethings = [];
let collisionChecker = [];
const nums = 50;

class Something extends obj.ExEllipse {
  constructor(vector, width, height, speed, pointNum = 60) {
    super(vector, width, height, pointNum);
    this.speed = speed;
    return this;
  }
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(0);
  noFill();
  strokeWeight(2);
  const margin = canvasSize / 5;

  // somethingsにインスタンスをpush
  new util.Iterator(nums, i => {
    const pos = { x: random(margin, canvasSize - margin), y: random(margin, canvasSize - margin) };
    const size = random((canvasSize / 20),(canvasSize / 5));
    somethings.push(
      new Something(createVector(pos.x, pos.y), size, size, random(0.001, 0.025)).createPoints()
    );
  });

  // somethingsの要素をcollisionCheckerで監視
  somethings.forEach(something => collisionChecker.push(new util.CollisionChecker(something)));
}

function draw() {
  background(0, 0.03);

  //
  somethings.forEach((something, i) => {
    stroke(random(1),0.5,1);
    if (i !== somethings.length - 1) {
      ex.exLine(somethings[i].position, somethings[i + 1].position);
    } else {
      ex.exLine(somethings[0].position, somethings.at(-1).position);
    }
    // stroke(1);
    something.createPoints().draw();
    const collisionResults = collisionChecker[i].check();
    if (collisionResults.r || collisionResults.l || collisionResults.t || collisionResults.b) {
      something.position.set(canvasSize / 2, canvasSize / 2);
    }
    something.position.add(
      something.size.width * cos(i) * something.speed,
      something.size.height * sin(i) * something.speed
    );
  });
}
