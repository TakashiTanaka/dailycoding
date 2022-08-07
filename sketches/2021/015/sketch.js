let vert = `
#ifdef GL_ES
  precision mediump float;
#endif

attribute vec3 aPosition;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

}
`

let frag = `
#ifdef GL_ES
  precision mediump float;
#endif

uniform float u_time;

void main() {
    vec3 color = vec3(abs(sin(u_time/2.0)), abs(sin(u_time/3.0)), abs(sin(u_time)));
    gl_FragColor = vec4(color, 1.0);

}
`

let theShader;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  theShader = createShader(vert, frag);
  noStroke();
}

function draw() {
  shader(theShader);
  theShader.setUniform("u_time", frameCount / 60.0);
  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}