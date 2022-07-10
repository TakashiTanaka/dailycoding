let melts = [];
const ex = p5ex.Extension;

class Melt {
  constructor(vector, width, height, speed, startTime) {
    this.position = vector;
    this.size = { width, height };
    this.speed = speed;
    this.startTime = startTime;
  }
  draw() {
    ex.exRect(this.position, this.size.width, this.size.height);
  }
}

function setup() {
  createCanvas(800, 800);
  background(0);
  fill(255, 255, 255, 255);
  textSize(width / 4);
  textFont('Helvetica-bold');
  textAlign(CENTER, CENTER);
  text('MELT', width / 2, height / 2 - width / 4);
  text('MELT', width / 2, height / 2);
  text('MELT', width / 2, height / 2 + width / 4);
  noStroke();

  // loadPixels();
  // for (let i = 0; i < pixels.length; i += 4) {
  //   const r = pixels[i];
  //   const g = pixels[i + 1];
  //   const b = pixels[i + 2];
  //   const a = pixels[i + 3];
  //   if(r >= 255 && g >= 255 && b >= 255) {
  //     pixels[i] = 50;
  //     pixels[i + 1] = 50;
  //     pixels[i + 2] = 50;
  //   }
  // }
  // updatePixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelInfo = get(x, y);
      const r = pixelInfo[0];
      const g = pixelInfo[1];
      const b = pixelInfo[2];
      if (r >= 255 && g >= 255 && b >= 255) {
        if (random() > 0.98) {
          melts.push(
            new Melt(
              createVector(x, y),
              1,
              random(0, height / 30),
              random(0.05, 0.2),
              int(random(1, 5))
            )
          );
          // rect(x, y, 1, random(0, height / 30));
        }
      }
    }
  }
}

function draw() {
  melts.forEach(melt => {
    if (frameCount > 60 * melt.startTime) {
      melt.size.height += melt.speed;
      melt.draw();
    }
  });
}
