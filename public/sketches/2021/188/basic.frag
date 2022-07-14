precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uResolution;

void main() {
  vec2 uv = vTexCoord;
    uv.y = 1.0 - uv.y;
    // uv.y = uv.y*sin(uTime*0.02);
    // uv.x = uv.x*cos(uTime*0.02);

  vec2 wiggle = uv+cos(uTime*0.02+uv.x)*0.5-0.5;
// abs(sin(uTime))
  vec4 color = texture2D(uTexture, uv+wiggle);
  gl_FragColor = color;
}