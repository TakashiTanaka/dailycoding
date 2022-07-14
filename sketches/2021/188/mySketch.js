let simpleShader;
let pg;
let img, test;

function preload() {
	simpleShader = loadShader('basic.vert', 'basic.frag');
}

function setup() {
	createCanvas(1024, 1024, WEBGL);
	pg = createGraphics(1024, 1024);
	pg.background(0);
	pg.fill(255);
	pg.textSize(200);
	pg.text('TEST', width / 2, height / 2);
	// textureWrap(REPEAT);
}

function draw() {
	shader(simpleShader);


	// Send the image to the shader
	simpleShader.setUniform("uTexture", pg);
	simpleShader.setUniform("uTime", frameCount);
	simpleShader.setUniform("uResolution", [width, height]);

	// rect gives us some geometry on the screen
	rect(0, 0, width, height);

}