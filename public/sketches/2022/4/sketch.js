function setup () {
  createCanvas(windowWidth, windowHeight);
};

function draw (){
  background('black');
  rect(100, 100, 100, 100);
  // let d = pixelDensity();
  loadPixels();
  for (let i = 0; i < pixels.length; i += 32) {
    pixels[i] = 255;
    pixels[i + 1] = random(0, 255);
    pixels[i + 2];
    pixels[i + 3];
  }
  console.log(pixels[0]);
  updatePixels();
};
