let black;
let img;
let ditherType = 'atkinson';

function preload() {
  img = loadImage('./test.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);
  black = new Riso('black'); //create black layer
}

function draw() {
  background(220);
  let threshold = map(mouseX, 0, width, 0, 255); //change dither threshold with mouse position
  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold); //pass image to dither
  black.image(dithered, 0, 0); //draw dithered image

  drawRiso();
}

function keyReleased() {
  //function to change dither type with a keypress
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}
