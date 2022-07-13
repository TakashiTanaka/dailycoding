const util = p5ex.Utility;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 1, 1, 1, 1);
  noFill();
  strokeWeight(2);
  const drawLine = (initX, initY, length, width, fluct = count => 0) => {
    new util.Iterator(length, count => {
      const baseWidth = width;
      const x = initX + count;
      const y = initY - baseWidth;
      const val = fluct;
      line(x, y + val(count), x, y + baseWidth - val(count));
    });
  };

  new util.Iterator(10, i => {
    stroke(random(0, 1), random(0, 1), random(0.5, 1));
    drawLine(10, 1000, 1000, 1000, count => 500 + (250 - i * 25) * sin((count + i) / 700));
  });
}
