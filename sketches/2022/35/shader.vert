precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

uniform float uTime;

void main() {
		vec3 pos = aPosition;
		pos.x += sin(uTime * 0.01);
		pos.y += cos(uTime * 0.05);
		vec4 positionVec4 = vec4(pos, 1.0);

		vTexCoord = aTexCoord;

		gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}