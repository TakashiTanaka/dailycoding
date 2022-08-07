precision highp float;

uniform vec2 uResolution;

void main() {
	vec2 st = gl_FragCoord.xy / uResolution.xy;

	vec3 color = vec3(st.x, st.y, 1.0);

	gl_FragColor = vec4(color, 1.0);
}