const ex = p5ex.Extension;
let pg;
let pg2;

function setup() {
  createCanvas(800, 800);
  background(255);
  // fill(255, 255, 255, 255);
  // textSize(width / 4);
  // textFont('serif');
  // textAlign(CENTER, CENTER);
  // drawingContext.font = '50px serif';
  // drawingContext.letterSpacing = "30px";
  // textSize(height);
  // drawingContext.fillText('Narrow', width / 2, height / 2 + width / 4, width);
  // textSize(width / 6);
  // // drawingContext.setTransform(1.5, 0, 0, 1, 0, 0);
  // drawingContext.scale(1, 1);
  // drawingContext.fillText('Wide', width / 2, height / 2 - width / 4, width);
  // console.log(drawingContext);
  // text('Narrow', width / 2, height / 2 + width / 4,20);
  // pg.background(200);
  pg = createGraphics(width, height);
  pg.textFont('serif');
  pg.textSize(height);
  pg.textAlign(LEFT, TOP);
  pg.fill(0);
  pg.drawingContext.fillText('平', 0, 0, pg.width);
  image(pg, 0, 0, width, 50);
  pg2 = createGraphics(width, height);
  pg2.textFont('serif');
  pg2.textSize(height);
  pg2.textAlign(CENTER, TOP);
  pg2.fill(0);
  pg2.drawingContext.fillText('長', width / 2, 0, 50);
  image(pg2, 0, 0, width, height * 1.1);
}
