const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  const center = canvasSize / 2;
  const r = canvasSize / 3;
  const s = 0.01;
  const time = frameCount * s;
  
  background(0);
  ellipse(center, center, r * 2, r * 2);
  const p1 = { x: center + r * cos(PI / 3 + time), y: center + r * sin(PI / 3 + time) };
  const p2 = { x: center + r * cos(PI / 1.5 + time), y: center + r * sin(PI / 1.5 + time) };
  const p3 = { x: center + r * cos(time * 2 + PI + 1 / 2), y: center + r * sin(time * 2 + PI + 1 / 2) };

  line(p1.x, p1.y, center, center);
  line(p2.x, p2.y, center, center);
  line(p1.x, p1.y, p3.x, p3.y);
  line(p2.x, p2.y, p3.x, p3.y);
}
