function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  stroke(100);
  strokeWeight(2);
  noFill();
  angleMode(DEGREES);

  const v1 = createVector(100, 100);
  const v2 = createVector(100, 200);

  line(0, 0, v1.x, v1.y);
  line(0, 0, v2.x, v2.y);

  point(v1.x, v1.y);
  point(v2.x, v2.y);

  const test = v1.angleBetween(v2);

  console.log(test);
}
