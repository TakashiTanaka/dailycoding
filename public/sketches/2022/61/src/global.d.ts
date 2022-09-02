import type p5 from 'p5';

declare global {
  var createCanvas: typeof p5.prototype.createCanvas;
  var colorMode: typeof p5.prototype.colorMode;
  var textFont: typeof p5.prototype.textFont;
  var background: typeof p5.prototype.background;
  var createVector: typeof p5.prototype.createVector;
  var random: typeof p5.prototype.random;
  var setup: typeof p5.prototype.setup;
  var noise: typeof p5.prototype.noise;
  var HSB: typeof p5.prototype.HSB;
  var TAU: typeof p5.prototype.TAU;
}