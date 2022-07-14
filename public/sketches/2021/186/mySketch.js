var balls = []; // Particules array
var mic; // Microphone library


function setup() {

  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start(); // Load the library 

  balls.push(new ball());

}

function draw() {

  background(0);

  var vol = mic.getLevel();
  if (vol > 0.001) {
    balls.push(new ball());
  }
  fill(255);

  for (i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }

}


function ball(X, Y) { // ball object

  this.x = random(0, width);
  this.y = 0;

  this.display = function() {
    ellipse(this.x, this.y, 100);
  }
  this.move = function() {
    this.y = (this.y+1)*1.2;
  }

}