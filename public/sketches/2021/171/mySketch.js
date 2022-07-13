const util = p5ex.Utility;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  stroke(100);
  strokeWeight(2);
  noFill();
  angleMode(DEGREES);

  // ベースとなるパス
  const points = [];

  new util.Iterator(50, i => {
    points.push([100 + i * 10, 300]);
  });

  const V = [];
  const V2 = [];
  let boundingV = [];

  points.forEach((p, i) => {
    point(p[0], p[1]);
    V.push(createVector(p[0], p[1] - 100 + 100 * sin(i * 10)));
    V2.push(createVector(p[0], p[1] + 100 + 100 * sin(-i * 10)));
    // V.push(createVector(point[0], point[1] - 50));
    // V2.push(createVector(point[0], point[1] + 50));
  });

  boundingV = [...V, ...V2.reverse(), V[0]];

  // boundingV.forEach((vec, i) => {
  //   vec.add(0, sin(i) * 100);
  // });

  beginShape();

  boundingV.forEach(vec => {
    vertex(vec.x, vec.y);
  });

  endShape();
}
