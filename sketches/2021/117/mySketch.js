let radius = 350;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  stroke(255);
}

function draw() {
  background(0);
  const center = width / 2;

  for (let i = 0; i < 360; i++) {
    strokeWeight(8 + 6 * sin(i * 10));

    const wave1 = createVector(
      (80 + 40 * cos(frameCount * 0.6)) * sin(1000 * sin(i) * cos(frameCount * 0.5)),
      (80 + 40 * cos(frameCount * 0.5)) * sin(1000 * cos(i) * sin(frameCount * 0.6))
    );

    const wave2 = createVector(
      (80 + 40 * cos(frameCount * 0.6)) * sin(1000 * sin(i + 1) * cos(frameCount * 0.5)),
      (80 + 40 * cos(frameCount * 0.5)) * sin(1000 * cos(i + 1) * sin(frameCount * 0.6))
    );

    const currentV = createVector(center + radius * cos(i), center + radius * sin(i));
    const nextV = createVector(center + radius * cos(i + 1), center + radius * sin(i + 1));

    line(currentV.x + wave1.x, currentV.y + wave1.y, nextV.x + wave2.x, nextV.y + wave2.y);
  }
}
