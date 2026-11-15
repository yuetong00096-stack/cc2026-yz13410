"use strict";
(function() {
	//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	//#endregion
	//#region src/core/constants.js
	var constants_exports = /* @__PURE__ */ __exportAll({
		ADD: () => ADD,
		ALT: () => "Alt",
		ARROW: () => ARROW,
		AUTO: () => AUTO,
		AXES: () => AXES,
		BACKSPACE: () => BACKSPACE,
		BASELINE: () => BASELINE,
		BEVEL: () => BEVEL,
		BEZIER: () => BEZIER,
		BLEND: () => BLEND,
		BLUR: () => BLUR,
		BOLD: () => BOLD,
		BOLDITALIC: () => BOLDITALIC,
		BOTTOM: () => BOTTOM,
		BURN: () => BURN,
		CENTER: () => CENTER,
		CHAR: () => CHAR,
		CHORD: () => CHORD,
		CLAMP: () => CLAMP,
		CLOSE: () => CLOSE,
		CONTAIN: () => CONTAIN,
		CONTROL: () => CONTROL,
		CORNER: () => CORNER,
		CORNERS: () => CORNERS,
		COVER: () => COVER,
		CROSS: () => CROSS,
		CURVE: () => CURVE,
		DARKEST: () => DARKEST,
		DEG_TO_RAD: () => DEG_TO_RAD,
		DELETE: () => DELETE,
		DIFFERENCE: () => DIFFERENCE,
		DILATE: () => DILATE,
		DODGE: () => DODGE,
		DOWN_ARROW: () => DOWN_ARROW,
		EMPTY_PATH: () => 7,
		ENTER: () => ENTER,
		ERODE: () => ERODE,
		ESCAPE: () => ESCAPE,
		EXCLUDE: () => EXCLUDE,
		EXCLUSION: () => EXCLUSION,
		FALLBACK: () => FALLBACK,
		FILL: () => FILL,
		FLAT: () => FLAT,
		FLOAT: () => FLOAT,
		FULL: () => FULL,
		GRAY: () => GRAY,
		GRID: () => GRID,
		HALF_FLOAT: () => HALF_FLOAT,
		HALF_PI: () => HALF_PI,
		HAND: () => HAND,
		HARD_LIGHT: () => HARD_LIGHT,
		IMAGE: () => IMAGE,
		IMMEDIATE: () => IMMEDIATE,
		INCLUDE: () => INCLUDE,
		INVERT: () => INVERT,
		ITALIC: () => ITALIC,
		JOIN: () => JOIN,
		KEEP_CONNECTIONS: () => KEEP_CONNECTIONS,
		LABEL: () => LABEL,
		LANDSCAPE: () => LANDSCAPE,
		LEFT: () => LEFT,
		LEFT_ARROW: () => LEFT_ARROW,
		LIGHTEST: () => LIGHTEST,
		LINEAR: () => LINEAR,
		LINEAR_MIPMAP: () => LINEAR_MIPMAP,
		LINES: () => 1,
		LINE_LOOP: () => 2,
		LINE_STRIP: () => 3,
		MIRROR: () => MIRROR,
		MITER: () => MITER,
		MOVE: () => MOVE,
		MULTIPLY: () => MULTIPLY,
		NEAREST: () => NEAREST,
		NORMAL: () => NORMAL,
		OPAQUE: () => OPAQUE,
		OPEN: () => OPEN,
		OPTION: () => "Alt",
		OVERLAY: () => OVERLAY,
		P2D: () => "p2d",
		P2DP3: () => P2DP3,
		PATH: () => 8,
		PI: () => PI,
		PIE: () => "pie",
		POINTS: () => 0,
		PORTRAIT: () => PORTRAIT,
		POSTERIZE: () => POSTERIZE,
		PROJECT: () => PROJECT,
		QUADRATIC: () => QUADRATIC,
		QUADS: () => QUADS,
		QUAD_STRIP: () => QUAD_STRIP,
		QUARTER_PI: () => QUARTER_PI,
		RADIUS: () => RADIUS,
		RAD_TO_DEG: () => RAD_TO_DEG,
		REMOVE: () => REMOVE,
		REPEAT: () => REPEAT,
		REPLACE: () => REPLACE,
		RETURN: () => RETURN,
		RIGHT: () => RIGHT,
		RIGHT_ARROW: () => RIGHT_ARROW,
		ROUND: () => ROUND,
		SCREEN: () => SCREEN,
		SEGMENTED: () => SEGMENTED,
		SHIFT: () => SHIFT,
		SIMPLE: () => SIMPLE,
		SMOOTH: () => SMOOTH,
		SOFT_LIGHT: () => SOFT_LIGHT,
		SQUARE: () => SQUARE,
		STROKE: () => STROKE,
		SUBTRACT: () => SUBTRACT,
		TAB: () => "Tab",
		TAU: () => TAU,
		TESS: () => TESS,
		TEXT: () => TEXT,
		TEXTURE: () => TEXTURE,
		THRESHOLD: () => THRESHOLD,
		TOP: () => "top",
		TRIANGLES: () => 4,
		TRIANGLE_FAN: () => 6,
		TRIANGLE_STRIP: () => 5,
		TWO_PI: () => TWO_PI,
		UNSIGNED_BYTE: () => UNSIGNED_BYTE,
		UNSIGNED_INT: () => UNSIGNED_INT,
		UP_ARROW: () => UP_ARROW,
		VERSION: () => VERSION,
		WAIT: () => WAIT,
		WEBGL: () => WEBGL,
		WEBGL2: () => WEBGL2,
		WEBGPU: () => WEBGPU,
		WORD: () => WORD,
		_CTX_MIDDLE: () => _CTX_MIDDLE,
		_DEFAULT_FILL: () => _DEFAULT_FILL,
		_DEFAULT_LEADMULT: () => _DEFAULT_LEADMULT,
		_DEFAULT_STROKE: () => _DEFAULT_STROKE,
		_DEFAULT_TEXT_FILL: () => _DEFAULT_TEXT_FILL
	});
	/**
	* @module Constants
	* @submodule Constants
	* @for p5
	*/
	const _PI = Math.PI;
	/**
	* Version of this p5.js.
	* @property {String} VERSION
	* @final
	*/
	const VERSION = "2.4.0";
	/**
	* An expanded color space (P3) variant of the default, two-dimensional renderer.
	*
	* When available, this mode can allow for extended color ranges and more
	* dynamic color representation. Use it similarly to `P2D`:
	* `createCanvas(400, 400, P2DP3)`.
	*
	* @typedef {'p2d-p3'} P2DP3
	* @property {P2DP3} P2DP3
	* @final
	*/
	const P2DP3 = "p2d-p3";
	/**
	* One of the two render modes in p5.js, used for computationally intensive tasks like 3D rendering and shaders.
	*
	* `WEBGL` differs from the default <a href="/reference/p5/P2D">`P2D`</a> renderer in the following ways:
	*
	* - **Coordinate System** - When drawing in `WEBGL` mode, the origin point (0,0,0) is located at the center of the screen, not the top-left corner. See <a href="https://p5js.org/tutorials/coordinates-and-transformations/">the tutorial page about coordinates and transformations</a>.
	* - **3D Shapes** - `WEBGL` mode can be used to draw 3-dimensional shapes like <a href="#/p5/box">box()</a>, <a href="#/p5/sphere">sphere()</a>, <a href="#/p5/cone">cone()</a>, and <a href="https://p5js.org/reference/#3D%20Primitives">more</a>. See <a href="https://p5js.org/tutorials/custom-geometry/">the tutorial page about custom geometry</a> to make more complex objects.
	* - **Shape Detail** - When drawing in `WEBGL` mode, you can specify how smooth curves should be drawn by using a `detail` parameter. See <a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5#3d-primitives-shapes">the wiki section about shapes</a> for a more information and an example.
	* - **Textures** - A texture is like a skin that wraps onto a shape. See <a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5#textures">the wiki section about textures</a> for examples of mapping images onto surfaces with textures.
	* - **Materials and Lighting** - `WEBGL` offers different types of lights like <a href="#/p5/ambientLight">ambientLight()</a> to place around a scene. Materials like <a href="#/p5/specularMaterial">specularMaterial()</a> reflect the lighting to convey shape and depth. See <a href="https://p5js.org/tutorials/lights-camera-materials/">the tutorial page for styling and appearance</a> to experiment with different combinations.
	* - **Camera** - The viewport of a `WEBGL` sketch can be adjusted by changing camera attributes. See <a href="https://p5js.org/tutorials/lights-camera-materials#camera-and-view">the tutorial page section about cameras</a> for an explanation of camera controls.
	* - **Text** - `WEBGL` requires opentype/truetype font files to be preloaded using <a href="#/p5/loadFont">loadFont()</a>. See <a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5#text">the wiki section about text</a> for details, along with a workaround.
	* - **Shaders** - Shaders are hardware accelerated programs that can be used for a variety of effects and graphics. See the <a href="https://p5js.org/tutorials/intro-to-shaders/">introduction to shaders</a> to get started with shaders in p5.js.
	* - **Graphics Acceleration** - `WEBGL` mode uses the graphics card instead of the CPU, so it may help boost the performance of your sketch (example: drawing more shapes on the screen at once).
	*
	* To learn more about WEBGL mode, check out <a href="https://p5js.org/tutorials/#webgl">all the interactive WEBGL tutorials</a> in the "Tutorials" section of this website, or read the wiki article <a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5">"Getting started with WebGL in p5"</a>.
	*
	* @typedef {'webgl'} WEBGL
	* @property {WEBGL} WEBGL
	* @final
	*/
	const WEBGL = "webgl";
	/**
	* One of the two possible values of a WebGL canvas (either WEBGL or WEBGL2),
	* which can be used to determine what capabilities the rendering environment
	* has.
	* @typedef {'webgl2'} WEBGL2
	* @property {WEBGL2} WEBGL2
	* @final
	*/
	const WEBGL2 = "webgl2";
	/**
	* A constant used for creating a WebGPU rendering context
	* @property {'webgpu'} WEBGPU
	* @final
	*/
	const WEBGPU = "webgpu";
	/**
	* @typedef {'default'} ARROW
	* @property {ARROW} ARROW
	* @final
	*/
	const ARROW = "default";
	/**
	* @property {String} SIMPLE
	* @final
	*/
	const SIMPLE = "simple";
	/**
	* @property {String} FULL
	* @final
	*/
	const FULL = "full";
	/**
	* @typedef {'crosshair'} CROSS
	* @property {CROSS} CROSS
	* @final
	*/
	const CROSS = "crosshair";
	/**
	* @typedef {'pointer'} HAND
	* @property {HAND} HAND
	* @final
	*/
	const HAND = "pointer";
	/**
	* @typedef {'move'} MOVE
	* @property {MOVE} MOVE
	* @final
	*/
	const MOVE = "move";
	/**
	* @typedef {'text'} TEXT
	* @property {TEXT} TEXT
	* @final
	*/
	const TEXT = "text";
	/**
	* @typedef {'wait'} WAIT
	* @property {WAIT} WAIT
	* @final
	*/
	const WAIT = "wait";
	/**
	* A `Number` constant that's approximately 1.5708.
	*
	* `HALF_PI` is half the value of the mathematical constant π. It's useful for
	* many tasks that involve rotation and oscillation. For example, calling
	* `rotate(HALF_PI)` rotates the coordinate system `HALF_PI` radians, which is
	* a quarter turn (90˚).
	*
	* Note: `TWO_PI` radians equals 360˚, `PI` radians equals 180˚, `HALF_PI`
	* radians equals 90˚, and `QUARTER_PI` radians equals 45˚.
	*
	* @property {Number} HALF_PI
	* @final
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Draw an arc from 0 to HALF_PI.
	*   arc(50, 50, 80, 80, 0, HALF_PI);
	*
	*   describe('The bottom-right quarter of a circle drawn in white on a gray background.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Draw a line.
	*   line(0, 0, 40, 0);
	*
	*   // Rotate a quarter turn.
	*   rotate(HALF_PI);
	*
	*   // Draw the same line, rotated.
	*   line(0, 0, 40, 0);
	*
	*   describe('Two black lines on a gray background. One line extends from the center to the right. The other line extends from the center to the bottom.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   describe(
	*     'A red circle and a blue circle oscillate from left to right on a gray background. The red circle appears to chase the blue circle.'
	*   );
	* }
	*
	* function draw() {
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Calculate the x-coordinates.
	*   let x1 = 40 * sin(frameCount * 0.05);
	*   let x2 = 40 * sin(frameCount * 0.05 + HALF_PI);
	*
	*   // Style the oscillators.
	*   noStroke();
	*
	*   // Draw the red oscillator.
	*   fill(255, 0, 0);
	*   circle(x1, 0, 20);
	*
	*   // Draw the blue oscillator.
	*   fill(0, 0, 255);
	*   circle(x2, 0, 20);
	* }
	*/
	const HALF_PI = _PI / 2;
	/**
	* A `Number` constant that's approximately 3.1416.
	*
	* `PI` is the mathematical constant π. It's useful for many tasks that
	* involve rotation and oscillation. For example, calling `rotate(PI)` rotates
	* the coordinate system `PI` radians, which is a half turn (180˚).
	*
	* Note: `TWO_PI` radians equals 360˚, `PI` radians equals 180˚, `HALF_PI`
	* radians equals 90˚, and `QUARTER_PI` radians equals 45˚.
	*
	* @property {Number} PI
	* @final
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Draw an arc from 0 to PI.
	*   arc(50, 50, 80, 80, 0, PI);
	*
	*   describe('The bottom half of a circle drawn in white on a gray background.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Draw a line.
	*   line(0, 0, 40, 0);
	*
	*   // Rotate a half turn.
	*   rotate(PI);
	*
	*   // Draw the same line, rotated.
	*   line(0, 0, 40, 0);
	*
	*   describe('A horizontal black line on a gray background.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   describe(
	*     'A red circle and a blue circle oscillate from left to right on a gray background. The circles drift apart, then meet in the middle, over and over again.'
	*   );
	* }
	*
	* function draw() {
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Calculate the x-coordinates.
	*   let x1 = 40 * sin(frameCount * 0.05);
	*   let x2 = 40 * sin(frameCount * 0.05 + PI);
	*
	*   // Style the oscillators.
	*   noStroke();
	*
	*   // Draw the red oscillator.
	*   fill(255, 0, 0);
	*   circle(x1, 0, 20);
	*
	*   // Draw the blue oscillator.
	*   fill(0, 0, 255);
	*   circle(x2, 0, 20);
	* }
	*/
	const PI = _PI;
	/**
	* A `Number` constant that's approximately 0.7854.
	*
	* `QUARTER_PI` is one-fourth the value of the mathematical constant π. It's
	* useful for many tasks that involve rotation and oscillation. For example,
	* calling `rotate(QUARTER_PI)` rotates the coordinate system `QUARTER_PI`
	* radians, which is an eighth of a turn (45˚).
	*
	* Note: `TWO_PI` radians equals 360˚, `PI` radians equals 180˚, `HALF_PI`
	* radians equals 90˚, and `QUARTER_PI` radians equals 45˚.
	*
	* @property {Number} QUARTER_PI
	* @final
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Draw an arc from 0 to QUARTER_PI.
	*   arc(50, 50, 80, 80, 0, QUARTER_PI);
	*
	*   describe('A one-eighth slice of a circle drawn in white on a gray background.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Draw a line.
	*   line(0, 0, 40, 0);
	*
	*   // Rotate an eighth turn.
	*   rotate(QUARTER_PI);
	*
	*   // Draw the same line, rotated.
	*   line(0, 0, 40, 0);
	*
	*   describe('Two black lines that form a "V" opening towards the bottom-right corner of a gray square.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   describe(
	*     'A red circle and a blue circle oscillate from left to right on a gray background. The red circle appears to chase the blue circle.'
	*   );
	* }
	*
	* function draw() {
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Calculate the x-coordinates.
	*   let x1 = 40 * sin(frameCount * 0.05);
	*   let x2 = 40 * sin(frameCount * 0.05 + QUARTER_PI);
	*
	*   // Style the oscillators.
	*   noStroke();
	*
	*   // Draw the red oscillator.
	*   fill(255, 0, 0);
	*   circle(x1, 0, 20);
	*
	*   // Draw the blue oscillator.
	*   fill(0, 0, 255);
	*   circle(x2, 0, 20);
	* }
	*/
	const QUARTER_PI = _PI / 4;
	/**
	* A `Number` constant that's approximately 6.2832.
	*
	* `TAU` is twice the value of the mathematical constant π. It's useful for
	* many tasks that involve rotation and oscillation. For example, calling
	* `rotate(TAU)` rotates the coordinate system `TAU` radians, which is one
	* full turn (360˚). `TAU` and `TWO_PI` are equal.
	*
	* Note: `TAU` radians equals 360˚, `PI` radians equals 180˚, `HALF_PI`
	* radians equals 90˚, and `QUARTER_PI` radians equals 45˚.
	*
	* @property {Number} TAU
	* @final
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Draw an arc from 0 to TAU.
	*   arc(50, 50, 80, 80, 0, TAU);
	*
	*   describe('A white circle drawn on a gray background.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Draw a line.
	*   line(0, 0, 40, 0);
	*
	*   // Rotate a full turn.
	*   rotate(TAU);
	*
	*   // Style the second line.
	*   strokeWeight(5);
	*
	*   // Draw the same line, shorter and rotated.
	*   line(0, 0, 20, 0);
	*
	*   describe(
	*     'Two horizontal black lines on a gray background. A thick line extends from the center toward the right. A thin line extends from the end of the thick line.'
	*   );
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   describe(
	*     'A red circle with a blue center oscillates from left to right on a gray background.'
	*   );
	* }
	*
	* function draw() {
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Calculate the x-coordinates.
	*   let x1 = 40 * sin(frameCount * 0.05);
	*   let x2 = 40 * sin(frameCount * 0.05 + TAU);
	*
	*   // Style the oscillators.
	*   noStroke();
	*
	*   // Draw the red oscillator.
	*   fill(255, 0, 0);
	*   circle(x1, 0, 20);
	*
	*   // Draw the blue oscillator, smaller.
	*   fill(0, 0, 255);
	*   circle(x2, 0, 10);
	* }
	*/
	const TAU = _PI * 2;
	/**
	* A `Number` constant that's approximately 6.2832.
	*
	* `TWO_PI` is twice the value of the mathematical constant π. It's useful for
	* many tasks that involve rotation and oscillation. For example, calling
	* `rotate(TWO_PI)` rotates the coordinate system `TWO_PI` radians, which is
	* one full turn (360˚). `TWO_PI` and `TAU` are equal.
	*
	* Note: `TWO_PI` radians equals 360˚, `PI` radians equals 180˚, `HALF_PI`
	* radians equals 90˚, and `QUARTER_PI` radians equals 45˚.
	*
	* @property {Number} TWO_PI
	* @final
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Draw an arc from 0 to TWO_PI.
	*   arc(50, 50, 80, 80, 0, TWO_PI);
	*
	*   describe('A white circle drawn on a gray background.');
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Draw a line.
	*   line(0, 0, 40, 0);
	*
	*   // Rotate a full turn.
	*   rotate(TWO_PI);
	*
	*   // Style the second line.
	*   strokeWeight(5);
	*
	*   // Draw the same line, shorter and rotated.
	*   line(0, 0, 20, 0);
	*
	*   describe(
	*     'Two horizontal black lines on a gray background. A thick line extends from the center toward the right. A thin line extends from the end of the thick line.'
	*   );
	* }
	*
	* @example
	* function setup() {
	*   createCanvas(100, 100);
	*
	*   describe(
	*     'A red circle with a blue center oscillates from left to right on a gray background.'
	*   );
	* }
	*
	* function draw() {
	*   background(200);
	*
	*   // Translate the origin to the center.
	*   translate(50, 50);
	*
	*   // Calculate the x-coordinates.
	*   let x1 = 40 * sin(frameCount * 0.05);
	*   let x2 = 40 * sin(frameCount * 0.05 + TWO_PI);
	*
	*   // Style the oscillators.
	*   noStroke();
	*
	*   // Draw the red oscillator.
	*   fill(255, 0, 0);
	*   circle(x1, 0, 20);
	*
	*   // Draw the blue oscillator, smaller.
	*   fill(0, 0, 255);
	*   circle(x2, 0, 10);
	* }
	*/
	const TWO_PI = _PI * 2;
	/**
	* @property {Number} DEG_TO_RAD
	* @final
	*/
	const DEG_TO_RAD = _PI / 180;
	/**
	* @property {Number} RAD_TO_DEG
	* @final
	*/
	const RAD_TO_DEG = 180 / _PI;
	/**
	* @typedef {'corner'} CORNER
	* @property {CORNER} CORNER
	* @final
	*/
	const CORNER = "corner";
	/**
	* @typedef {'corners'} CORNERS
	* @property {CORNERS} CORNERS
	* @final
	*/
	const CORNERS = "corners";
	/**
	* @typedef {'radius'} RADIUS
	* @property {RADIUS} RADIUS
	* @final
	*/
	const RADIUS = "radius";
	/**
	* @typedef {'right'} RIGHT
	* @property {RIGHT} RIGHT
	* @final
	*/
	const RIGHT = "right";
	/**
	* @typedef {'left'} LEFT
	* @property {LEFT} LEFT
	* @final
	*/
	const LEFT = "left";
	/**
	* @typedef {'center'} CENTER
	* @property {CENTER} CENTER
	* @final
	*/
	const CENTER = "center";
	/**
	* @typedef {'bottom'} BOTTOM
	* @property {BOTTOM} BOTTOM
	* @final
	*/
	const BOTTOM = "bottom";
	/**
	* @typedef {'alphabetic'} BASELINE
	* @property {BASELINE} BASELINE
	* @final
	*/
	const BASELINE = "alphabetic";
	/**
	* @typedef {'quads'} QUADS
	* @property {QUADS} QUADS
	* @final
	*/
	const QUADS = "quads";
	/**
	* @typedef {'quad_strip'} QUAD_STRIP
	* @property {QUAD_STRIP} QUAD_STRIP
	* @final
	*/
	const QUAD_STRIP = "quad_strip";
	/**
	* @typedef {'tess'} TESS
	* @property {TESS} TESS
	* @final
	*/
	const TESS = "tess";
	/**
	* @typedef {'close'} CLOSE
	* @property {CLOSE} CLOSE
	* @final
	*/
	const CLOSE = "close";
	/**
	* @typedef {'open'} OPEN
	* @property {OPEN} OPEN
	* @final
	*/
	const OPEN = "open";
	/**
	* @typedef {'chord'} CHORD
	* @property {CHORD} CHORD
	* @final
	*/
	const CHORD = "chord";
	/**
	* @typedef {'square'} PROJECT
	* @property {PROJECT} PROJECT
	* @final
	*/
	const PROJECT = "square";
	/**
	* @typedef {'butt'} SQUARE
	* @property {SQUARE} SQUARE
	* @final
	*/
	const SQUARE = "butt";
	/**
	* @typedef {'round'} ROUND
	* @property {ROUND} ROUND
	* @final
	*/
	const ROUND = "round";
	/**
	* @typedef {'bevel'} BEVEL
	* @property {BEVEL} BEVEL
	* @final
	*/
	const BEVEL = "bevel";
	/**
	* @typedef {'miter'} MITER
	* @property {MITER} MITER
	* @final
	*/
	const MITER = "miter";
	/**
	* AUTO allows us to automatically set the width or height of an element (but not both),
	* based on the current height and width of the element. Only one parameter can
	* be passed to the <a href="/reference/p5.Element/size">size</a> function as AUTO, at a time.
	*
	* @typedef {'auto'} AUTO
	* @property {AUTO} AUTO
	* @final
	*/
	const AUTO = "auto";
	/**
	* @typedef {'Backspace'} BACKSPACE
	* @property {BACKSPACE} BACKSPACE
	* @final
	*/
	const BACKSPACE = "Backspace";
	/**
	* @typedef {'Control' | 'Control'} CONTROL
	* @property {CONTROL} CONTROL
	* @final
	*/
	const CONTROL = "Control";
	/**
	* @typedef {'Delete'} DELETE
	* @property {DELETE} DELETE
	* @final
	*/
	const DELETE = "Delete";
	/**
	* @typedef {'ArrowDown'} DOWN_ARROW
	* @property {DOWN_ARROW} DOWN_ARROW
	* @final
	*/
	const DOWN_ARROW = "ArrowDown";
	/**
	* @typedef {'Enter'} ENTER
	* @property {ENTER} ENTER
	* @final
	*/
	const ENTER = "Enter";
	/**
	* @typedef {'Escape'} ESCAPE
	* @property {ESCAPE} ESCAPE
	* @final
	*/
	const ESCAPE = "Escape";
	/**
	* @typedef {'ArrowLeft'} LEFT_ARROW
	* @property {LEFT_ARROW} LEFT_ARROW
	* @final
	*/
	const LEFT_ARROW = "ArrowLeft";
	/**
	* @typedef {'Enter'} RETURN
	* @property {RETURN} RETURN
	* @final
	*/
	const RETURN = "Enter";
	/**
	* @typedef {'ArrowRight'} RIGHT_ARROW
	* @property {RIGHT_ARROW} RIGHT_ARROW
	* @final
	*/
	const RIGHT_ARROW = "ArrowRight";
	/**
	* @typedef {'Shift'} SHIFT
	* @property {SHIFT} SHIFT
	* @final
	*/
	const SHIFT = "Shift";
	/**
	* @typedef {'ArrowUp'} UP_ARROW
	* @property {UP_ARROW} UP_ARROW
	* @final
	*/
	const UP_ARROW = "ArrowUp";
	/**
	* @typedef {'source-over'} BLEND
	* @property {BLEND} BLEND
	* @final
	*/
	const BLEND = "source-over";
	/**
	* @typedef {'destination-out'} REMOVE
	* @property {REMOVE} REMOVE
	* @final
	*/
	const REMOVE = "destination-out";
	/**
	* @typedef {'lighter'} ADD
	* @property {ADD} ADD
	* @final
	*/
	const ADD = "lighter";
	/**
	* @typedef {'darken'} DARKEST
	* @property {DARKEST} DARKEST
	* @final
	*/
	const DARKEST = "darken";
	/**
	* @typedef {'lighten'} LIGHTEST
	* @property {LIGHTEST} LIGHTEST
	* @final
	*/
	const LIGHTEST = "lighten";
	/**
	* @typedef {'difference'} DIFFERENCE
	* @property {DIFFERENCE} DIFFERENCE
	* @final
	*/
	const DIFFERENCE = "difference";
	/**
	* @typedef {'subtract'} SUBTRACT
	* @property {SUBTRACT} SUBTRACT
	* @final
	*/
	const SUBTRACT = "subtract";
	/**
	* @typedef {'exclusion'} EXCLUSION
	* @property {EXCLUSION} EXCLUSION
	* @final
	*/
	const EXCLUSION = "exclusion";
	/**
	* @typedef {'multiply'} MULTIPLY
	* @property {MULTIPLY} MULTIPLY
	* @final
	*/
	const MULTIPLY = "multiply";
	/**
	* @typedef {'screen'} SCREEN
	* @property {SCREEN} SCREEN
	* @final
	*/
	const SCREEN = "screen";
	/**
	* @typedef {'copy'} REPLACE
	* @property {REPLACE} REPLACE
	* @final
	*/
	const REPLACE = "copy";
	/**
	* @typedef {'overlay'} OVERLAY
	* @property {OVERLAY} OVERLAY
	* @final
	*/
	const OVERLAY = "overlay";
	/**
	* @typedef {'hard-light'} HARD_LIGHT
	* @property {HARD_LIGHT} HARD_LIGHT
	* @final
	*/
	const HARD_LIGHT = "hard-light";
	/**
	* @typedef {'soft-light'} SOFT_LIGHT
	* @property {SOFT_LIGHT} SOFT_LIGHT
	* @final
	*/
	const SOFT_LIGHT = "soft-light";
	/**
	* @typedef {'color-dodge'} DODGE
	* @property {DODGE} DODGE
	* @final
	*/
	const DODGE = "color-dodge";
	/**
	* @typedef {'color-burn'} BURN
	* @property {BURN} BURN
	* @final
	*/
	const BURN = "color-burn";
	/**
	* @typedef {'threshold'} THRESHOLD
	* @property {THRESHOLD} THRESHOLD
	* @final
	*/
	const THRESHOLD = "threshold";
	/**
	* @typedef {'gray'} GRAY
	* @property {GRAY} GRAY
	* @final
	*/
	const GRAY = "gray";
	/**
	* @typedef {'opaque'} OPAQUE
	* @property {OPAQUE} OPAQUE
	* @final
	*/
	const OPAQUE = "opaque";
	/**
	* @typedef {'invert'} INVERT
	* @property {INVERT} INVERT
	* @final
	*/
	const INVERT = "invert";
	/**
	* @typedef {'posterize'} POSTERIZE
	* @property {POSTERIZE} POSTERIZE
	* @final
	*/
	const POSTERIZE = "posterize";
	/**
	* @typedef {'dilate'} DILATE
	* @property {DILATE} DILATE
	* @final
	*/
	const DILATE = "dilate";
	/**
	* @typedef {'erode'} ERODE
	* @property {ERODE} ERODE
	* @final
	*/
	const ERODE = "erode";
	/**
	* @typedef {'blur'} BLUR
	* @property {BLUR} BLUR
	* @final
	*/
	const BLUR = "blur";
	/**
	* @typedef {'normal'} NORMAL
	* @property {NORMAL} NORMAL
	* @final
	*/
	const NORMAL = "normal";
	/**
	* @typedef {'italic'} ITALIC
	* @property {ITALIC} ITALIC
	* @final
	*/
	const ITALIC = "italic";
	/**
	* @typedef {'bold'} BOLD
	* @property {BOLD} BOLD
	* @final
	*/
	const BOLD = "bold";
	/**
	* @typedef {'bold italic'} BOLDITALIC
	* @property {BOLDITALIC} BOLDITALIC
	* @final
	*/
	const BOLDITALIC = "bold italic";
	/**
	* @typedef {'CHAR'} CHAR
	* @property {CHAR} CHAR
	* @final
	*/
	const CHAR = "CHAR";
	/**
	* @typedef {'WORD'} WORD
	* @property {WORD} WORD
	* @final
	*/
	const WORD = "WORD";
	const _DEFAULT_TEXT_FILL = "#000000";
	const _DEFAULT_LEADMULT = 1.25;
	const _CTX_MIDDLE = "middle";
	/**
	* @typedef {'linear'} LINEAR
	* @property {LINEAR} LINEAR
	* @final
	*/
	const LINEAR = "linear";
	/**
	* @typedef {'quadratic'} QUADRATIC
	* @property {QUADRATIC} QUADRATIC
	* @final
	*/
	const QUADRATIC = "quadratic";
	/**
	* @typedef {'bezier'} BEZIER
	* @property {BEZIER} BEZIER
	* @final
	*/
	const BEZIER = "bezier";
	/**
	* @typedef {'curve'} CURVE
	* @property {CURVE} CURVE
	* @final
	*/
	const CURVE = "curve";
	/**
	* @typedef {'stroke'} STROKE
	* @property {STROKE} STROKE
	* @final
	*/
	const STROKE = "stroke";
	/**
	* @typedef {'fill'} FILL
	* @property {FILL} FILL
	* @final
	*/
	const FILL = "fill";
	/**
	* @typedef {'texture'} TEXTURE
	* @property {TEXTURE} TEXTURE
	* @final
	*/
	const TEXTURE = "texture";
	/**
	* @typedef {'immediate'} IMMEDIATE
	* @property {IMMEDIATE} IMMEDIATE
	* @final
	*/
	const IMMEDIATE = "immediate";
	/**
	* @typedef {'image'} IMAGE
	* @property {IMAGE} IMAGE
	* @final
	*/
	const IMAGE = "image";
	/**
	* @typedef {'linear_mipmap'} LINEAR_MIPMAP
	* @property {LINEAR_MIPMAP} LINEAR_MIPMAP
	* @final
	* @private
	*/
	const LINEAR_MIPMAP = "linear_mipmap";
	/**
	* @typedef {'nearest'} NEAREST
	* @property {NEAREST} NEAREST
	* @final
	*/
	const NEAREST = "nearest";
	/**
	* @typedef {'repeat'} REPEAT
	* @property {REPEAT} REPEAT
	* @final
	*/
	const REPEAT = "repeat";
	/**
	* @typedef {'clamp'} CLAMP
	* @property {CLAMP} CLAMP
	* @final
	*/
	const CLAMP = "clamp";
	/**
	* @typedef {'mirror'} MIRROR
	* @property {MIRROR} MIRROR
	* @final
	*/
	const MIRROR = "mirror";
	/**
	* @typedef {'keep_connections'} KEEP_CONNECTIONS
	* @property {KEEP_CONNECTIONS} KEEP_CONNECTIONS
	* @final
	*/
	const KEEP_CONNECTIONS = "keep_connections";
	/**
	* @typedef {'keep_connections'} FLAT
	* @property {FLAT} FLAT
	* @final
	* @deprecated Use `KEEP_CONNECTIONS` instead. May be removed in p5.js 3.0.
	*/
	const FLAT = KEEP_CONNECTIONS;
	/**
	* @typedef {'smooth'} SMOOTH
	* @property {SMOOTH} SMOOTH
	* @final
	*/
	const SMOOTH = "smooth";
	/**
	* @typedef {'segmented'} SEGMENTED
	* @property {SEGMENTED} SEGMENTED
	* @final
	*/
	const SEGMENTED = "segmented";
	/**
	* @typedef {'landscape'} LANDSCAPE
	* @property {LANDSCAPE} LANDSCAPE
	* @final
	*/
	const LANDSCAPE = "landscape";
	/**
	* @typedef {'portrait'} PORTRAIT
	* @property {PORTRAIT} PORTRAIT
	* @final
	*/
	const PORTRAIT = "portrait";
	const _DEFAULT_STROKE = "#000000";
	const _DEFAULT_FILL = "#FFFFFF";
	/**
	* @typedef {'grid'} GRID
	* @property {GRID} GRID
	* @final
	*/
	const GRID = "grid";
	/**
	* @typedef {'axes'} AXES
	* @property {AXES} AXES
	* @final
	*/
	const AXES = "axes";
	/**
	* @typedef {'label'} LABEL
	* @property {LABEL} LABEL
	* @final
	*/
	const LABEL = "label";
	/**
	* @typedef {'fallback'} FALLBACK
	* @property {FALLBACK} FALLBACK
	* @final
	*/
	const FALLBACK = "fallback";
	/**
	* @typedef {'contain'} CONTAIN
	* @property {CONTAIN} CONTAIN
	* @final
	*/
	const CONTAIN = "contain";
	/**
	* @typedef {'cover'} COVER
	* @property {COVER} COVER
	* @final
	*/
	const COVER = "cover";
	/**
	* @typedef {'unsigned-byte'} UNSIGNED_BYTE
	* @property {UNSIGNED_BYTE} UNSIGNED_BYTE
	* @final
	*/
	const UNSIGNED_BYTE = "unsigned-byte";
	/**
	* @typedef {'unsigned-int'} UNSIGNED_INT
	* @property {UNSIGNED_INT} UNSIGNED_INT
	* @final
	*/
	const UNSIGNED_INT = "unsigned-int";
	/**
	* @typedef {'float'} FLOAT
	* @property {FLOAT} FLOAT
	* @final
	*/
	const FLOAT = "float";
	/**
	* @typedef {'half-float'} HALF_FLOAT
	* @property {HALF_FLOAT} HALF_FLOAT
	* @final
	*/
	const HALF_FLOAT = "half-float";
	/**
	* The `splineProperty('ends')` mode where splines curve through
	* their first and last points.
	* @typedef {unique symbol} INCLUDE
	* @property {INCLUDE} INCLUDE
	* @final
	*/
	const INCLUDE = Symbol("include");
	/**
	* The `splineProperty('ends')` mode where the first and last points in a spline
	* affect the direction of the curve, but are not rendered.
	* @typedef {unique symbol} EXCLUDE
	* @property {EXCLUDE} EXCLUDE
	* @final
	*/
	const EXCLUDE = Symbol("exclude");
	/**
	* The `splineProperty('ends')` mode where the spline loops back to its first point.
	* Only used internally.
	* @typedef {unique symbol} JOIN
	* @property {JOIN} JOIN
	* @final
	* @private
	*/
	const JOIN = Symbol("join");
	//#endregion
	//#region src/webgl/enums.js
	function getStrokeDefs(shaderConstant) {
		const STROKE_CAP_ENUM = {};
		const STROKE_JOIN_ENUM = {};
		let lineDefs = "";
		const defineStrokeCapEnum = function(key, val) {
			lineDefs += shaderConstant(`STROKE_CAP_${key}`, `${val}`, "u32");
			STROKE_CAP_ENUM[constants_exports[key]] = val;
		};
		const defineStrokeJoinEnum = function(key, val) {
			lineDefs += shaderConstant(`STROKE_JOIN_${key}`, `${val}`, "u32");
			STROKE_JOIN_ENUM[constants_exports[key]] = val;
		};
		defineStrokeCapEnum("ROUND", 0);
		defineStrokeCapEnum("PROJECT", 1);
		defineStrokeCapEnum("SQUARE", 2);
		defineStrokeJoinEnum("ROUND", 0);
		defineStrokeJoinEnum("MITER", 1);
		defineStrokeJoinEnum("BEVEL", 2);
		return {
			STROKE_CAP_ENUM,
			STROKE_JOIN_ENUM,
			lineDefs
		};
	}
	//#endregion
	//#region src/strands/ir_types.js
	const NodeType = {
		OPERATION: "operation",
		LITERAL: "literal",
		VARIABLE: "variable",
		CONSTANT: "constant",
		STRUCT: "struct",
		PHI: "phi",
		STATEMENT: "statement",
		ASSIGNMENT: "assignment"
	};
	const INSTANCE_ID_VARYING_NAME = "_p5_instanceID";
	const HOOK_PARAM_PREFIX = "_p5_param_";
	const NodeTypeToName = Object.fromEntries(Object.entries(NodeType).map(([key, val]) => [val, key]));
	const NodeTypeRequiredFields = {
		[NodeType.OPERATION]: [
			"opCode",
			"dependsOn",
			"dimension",
			"baseType"
		],
		[NodeType.LITERAL]: [
			"value",
			"dimension",
			"baseType"
		],
		[NodeType.VARIABLE]: [
			"identifier",
			"dimension",
			"baseType"
		],
		[NodeType.CONSTANT]: [
			"value",
			"dimension",
			"baseType"
		],
		[NodeType.STRUCT]: [""],
		[NodeType.PHI]: [
			"dependsOn",
			"phiBlocks",
			"dimension",
			"baseType"
		],
		[NodeType.STATEMENT]: ["statementType"],
		[NodeType.ASSIGNMENT]: ["dependsOn"]
	};
	const StatementType = {
		DISCARD: "discard",
		BREAK: "break",
		EARLY_RETURN: "early_return",
		EXPRESSION: "expression",
		EMPTY: "empty"
	};
	const BaseType = {
		FLOAT: "float",
		INT: "int",
		BOOL: "bool",
		MAT: "mat",
		DEFER: "defer",
		ASSIGN_ON_USE: "assign_on_use",
		SAMPLER2D: "sampler2D",
		SAMPLER: "sampler"
	};
	const BasePriority = {
		[BaseType.FLOAT]: 3,
		[BaseType.INT]: 2,
		[BaseType.BOOL]: 1,
		[BaseType.MAT]: 0,
		[BaseType.DEFER]: -1,
		[BaseType.ASSIGN_ON_USE]: -2,
		[BaseType.SAMPLER2D]: -10,
		[BaseType.SAMPLER]: -11
	};
	const DataType = {
		float1: {
			fnName: "float",
			baseType: BaseType.FLOAT,
			dimension: 1,
			priority: 3
		},
		float2: {
			fnName: "vec2",
			baseType: BaseType.FLOAT,
			dimension: 2,
			priority: 3
		},
		float3: {
			fnName: "vec3",
			baseType: BaseType.FLOAT,
			dimension: 3,
			priority: 3
		},
		float4: {
			fnName: "vec4",
			baseType: BaseType.FLOAT,
			dimension: 4,
			priority: 3
		},
		int1: {
			fnName: "int",
			baseType: BaseType.INT,
			dimension: 1,
			priority: 2
		},
		int2: {
			fnName: "ivec2",
			baseType: BaseType.INT,
			dimension: 2,
			priority: 2
		},
		int3: {
			fnName: "ivec3",
			baseType: BaseType.INT,
			dimension: 3,
			priority: 2
		},
		int4: {
			fnName: "ivec4",
			baseType: BaseType.INT,
			dimension: 4,
			priority: 2
		},
		bool1: {
			fnName: "bool",
			baseType: BaseType.BOOL,
			dimension: 1,
			priority: 1
		},
		bool2: {
			fnName: "bvec2",
			baseType: BaseType.BOOL,
			dimension: 2,
			priority: 1
		},
		bool3: {
			fnName: "bvec3",
			baseType: BaseType.BOOL,
			dimension: 3,
			priority: 1
		},
		bool4: {
			fnName: "bvec4",
			baseType: BaseType.BOOL,
			dimension: 4,
			priority: 1
		},
		mat2: {
			fnName: "mat2x2",
			baseType: BaseType.MAT,
			dimension: 2,
			priority: 0
		},
		mat3: {
			fnName: "mat3x3",
			baseType: BaseType.MAT,
			dimension: 3,
			priority: 0
		},
		mat4: {
			fnName: "mat4x4",
			baseType: BaseType.MAT,
			dimension: 4,
			priority: 0
		},
		defer: {
			fnName: null,
			baseType: BaseType.DEFER,
			dimension: null,
			priority: -1
		},
		assign_on_use: {
			fnName: null,
			baseType: BaseType.ASSIGN_ON_USE,
			dimension: null,
			priority: -2
		},
		sampler2D: {
			fnName: "sampler2D",
			baseType: BaseType.SAMPLER2D,
			dimension: 1,
			priority: -10
		},
		sampler: {
			fnName: "sampler",
			baseType: BaseType.SAMPLER,
			dimension: 1,
			priority: -11
		}
	};
	function isStructType(typeInfo) {
		return !!(typeInfo && typeInfo.properties);
	}
	const GenType = {
		FLOAT: {
			baseType: BaseType.FLOAT,
			dimension: null,
			priority: 3
		},
		INT: {
			baseType: BaseType.INT,
			dimension: null,
			priority: 2
		},
		BOOL: {
			baseType: BaseType.BOOL,
			dimension: null,
			priority: 1
		}
	};
	function typeEquals(nodeA, nodeB) {
		return nodeA.dimension === nodeB.dimension && nodeA.baseType === nodeB.baseType;
	}
	Object.fromEntries(Object.values(DataType).filter((info) => info.fnName !== null).map((info) => [info.fnName, info]));
	const OpCode = {
		Binary: {
			ADD: 0,
			SUBTRACT: 1,
			MULTIPLY: 2,
			DIVIDE: 3,
			MODULO: 4,
			EQUAL: 5,
			NOT_EQUAL: 6,
			GREATER_THAN: 7,
			GREATER_EQUAL: 8,
			LESS_THAN: 9,
			LESS_EQUAL: 10,
			LOGICAL_AND: 11,
			LOGICAL_OR: 12,
			MEMBER_ACCESS: 13,
			ARRAY_ACCESS: 14
		},
		Unary: {
			LOGICAL_NOT: 100,
			NEGATE: 101,
			PLUS: 102,
			SWIZZLE: 103,
			SNAPSHOT: 104
		},
		Nary: {
			FUNCTION_CALL: 200,
			CONSTRUCTOR: 201,
			TERNARY: 202,
			ARRAY_ASSIGNMENT: 203
		},
		ControlFlow: {
			RETURN: 300,
			JUMP: 301,
			BRANCH_IF_FALSE: 302,
			DISCARD: 303,
			BREAK: 304
		}
	};
	const OperatorTable = [
		{
			arity: "unary",
			boolean: true,
			name: "not",
			symbol: "!",
			opCode: OpCode.Unary.LOGICAL_NOT
		},
		{
			arity: "unary",
			name: "neg",
			symbol: "-",
			opCode: OpCode.Unary.NEGATE
		},
		{
			arity: "unary",
			name: "plus",
			symbol: "+",
			opCode: OpCode.Unary.PLUS
		},
		{
			arity: "binary",
			name: "add",
			symbol: "+",
			opCode: OpCode.Binary.ADD
		},
		{
			arity: "binary",
			name: "sub",
			symbol: "-",
			opCode: OpCode.Binary.SUBTRACT
		},
		{
			arity: "binary",
			name: "mult",
			symbol: "*",
			opCode: OpCode.Binary.MULTIPLY
		},
		{
			arity: "binary",
			name: "div",
			symbol: "/",
			opCode: OpCode.Binary.DIVIDE
		},
		{
			arity: "binary",
			name: "mod",
			symbol: "%",
			opCode: OpCode.Binary.MODULO
		},
		{
			arity: "binary",
			boolean: true,
			name: "equalTo",
			symbol: "==",
			opCode: OpCode.Binary.EQUAL
		},
		{
			arity: "binary",
			boolean: true,
			name: "notEqual",
			symbol: "!=",
			opCode: OpCode.Binary.NOT_EQUAL
		},
		{
			arity: "binary",
			boolean: true,
			name: "greaterThan",
			symbol: ">",
			opCode: OpCode.Binary.GREATER_THAN
		},
		{
			arity: "binary",
			boolean: true,
			name: "greaterEqual",
			symbol: ">=",
			opCode: OpCode.Binary.GREATER_EQUAL
		},
		{
			arity: "binary",
			boolean: true,
			name: "lessThan",
			symbol: "<",
			opCode: OpCode.Binary.LESS_THAN
		},
		{
			arity: "binary",
			boolean: true,
			name: "lessEqual",
			symbol: "<=",
			opCode: OpCode.Binary.LESS_EQUAL
		},
		{
			arity: "binary",
			boolean: true,
			name: "and",
			symbol: "&&",
			opCode: OpCode.Binary.LOGICAL_AND
		},
		{
			arity: "binary",
			boolean: true,
			name: "or",
			symbol: "||",
			opCode: OpCode.Binary.LOGICAL_OR
		}
	];
	OpCode.Binary.ADD, OpCode.Binary.SUBTRACT, OpCode.Binary.MULTIPLY, OpCode.Binary.DIVIDE, OpCode.Binary.MODULO, OpCode.Binary.EQUAL, OpCode.Binary.NOT_EQUAL, OpCode.Binary.GREATER_THAN, OpCode.Binary.GREATER_EQUAL, OpCode.Binary.LESS_THAN, OpCode.Binary.LESS_EQUAL, OpCode.Binary.LOGICAL_AND, OpCode.Binary.LOGICAL_OR;
	const OpCodeToSymbol = {};
	const UnarySymbolToName = {};
	const BinarySymbolToName = {};
	const booleanOpCode = {};
	for (const { symbol, opCode, name, arity, boolean } of OperatorTable) {
		OpCodeToSymbol[opCode] = symbol;
		if (arity === "unary") UnarySymbolToName[symbol] = name;
		if (arity === "binary") BinarySymbolToName[symbol] = name;
		if (boolean) booleanOpCode[opCode] = true;
	}
	const BlockType = {
		GLOBAL: "global",
		FUNCTION: "function",
		BRANCH: "branch",
		IF_COND: "if_cond",
		IF_BODY: "if_body",
		ELSE_COND: "else_cond",
		SCOPE_START: "scope_start",
		SCOPE_END: "scope_end",
		FOR: "for",
		MERGE: "merge",
		DEFAULT: "default"
	};
	Object.fromEntries(Object.entries(BlockType).map(([key, val]) => [val, key]));
	//#endregion
	//#region src/webgpu/shaders/color.js
	const uniforms$5 = `
// Group 0: Material Properties
struct MaterialUniforms {
  uUseVertexColor: u32,
}

// Group 1: Model Transform
struct ModelUniforms {
// @p5 ifdef Vertex getWorldInputs
  uModelMatrix: mat4x4<f32>,
  uModelNormalMatrix: mat3x3<f32>,
// @p5 endif
// @p5 ifndef Vertex getWorldInputs
  uModelViewMatrix: mat4x4<f32>,
  uNormalMatrix: mat3x3<f32>,
// @p5 endif
  uMaterialColor: vec4<f32>,
}

// Group 2: Camera and Projection
struct CameraUniforms {
  uProjectionMatrix: mat4x4<f32>,
// @p5 ifdef Vertex getWorldInputs
  uViewMatrix: mat4x4<f32>,
// @p5 endif
  uCameraNormalMatrix: mat3x3<f32>,
}
`;
	const colorVertexShader = `
struct VertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aNormal: vec3<f32>,
  @location(2) aTexCoord: vec2<f32>,
  @location(3) aVertexColor: vec4<f32>,
};

struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
  @location(0) vVertexNormal: vec3<f32>,
  @location(1) vVertTexCoord: vec2<f32>,
  @location(2) vColor: vec4<f32>,
};

${uniforms$5}
@group(0) @binding(0) var<uniform> material: MaterialUniforms;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;

struct Vertex {
  position: vec3<f32>,
  normal: vec3<f32>,
  texCoord: vec2<f32>,
  color: vec4<f32>,
}

@vertex
fn main(input: VertexInput) -> VertexOutput {
  HOOK_beforeVertex();
  var output: VertexOutput;

  let useVertexColor = (material.uUseVertexColor != 0 && input.aVertexColor.x >= 0.0);
  var inputs = Vertex(
    input.aPosition,
    input.aNormal,
    input.aTexCoord,
    select(model.uMaterialColor, input.aVertexColor, useVertexColor)
  );

// @p5 ifdef Vertex getObjectInputs
  inputs = HOOK_getObjectInputs(inputs);
// @p5 endif

// @p5 ifdef Vertex getWorldInputs
  inputs.position = (model.uModelMatrix * vec4<f32>(inputs.position, 1.0)).xyz;
  inputs.normal = model.uModelNormalMatrix * inputs.normal;
  inputs = HOOK_getWorldInputs(inputs);
// @p5 endif

// @p5 ifdef Vertex getWorldInputs
  // Already multiplied by the model matrix, just apply view
  inputs.position = (camera.uViewMatrix * vec4<f32>(inputs.position, 1.0)).xyz;
  inputs.normal = camera.uCameraNormalMatrix * inputs.normal;
// @p5 endif
// @p5 ifndef Vertex getWorldInputs
  // Apply both at once
  inputs.position = (model.uModelViewMatrix * vec4<f32>(inputs.position, 1.0)).xyz;
  inputs.normal = model.uNormalMatrix * inputs.normal;
// @p5 endif

// @p5 ifdef Vertex getCameraInputs
  inputs = HOOK_getCameraInputs(inputs);
// @p5 endif

  output.vVertTexCoord = inputs.texCoord;
  output.vVertexNormal = normalize(inputs.normal);
  output.vColor = inputs.color;

  output.Position = camera.uProjectionMatrix * vec4<f32>(inputs.position, 1.0);

  HOOK_afterVertex();
  return output;
}
`;
	const colorFragmentShader = `
struct FragmentInput {
  @location(0) vVertexNormal: vec3<f32>,
  @location(1) vVertTexCoord: vec2<f32>,
  @location(2) vColor: vec4<f32>,
};

${uniforms$5}
@group(0) @binding(0) var<uniform> material: MaterialUniforms;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;


@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
  HOOK_beforeFragment();
  var outColor = HOOK_getFinalColor(input.vColor, input.vVertTexCoord);
  outColor = vec4<f32>(outColor.rgb * outColor.a, outColor.a);
  HOOK_afterFragment();
  return outColor;
}
`;
	//#endregion
	//#region src/webgpu/shaders/line.js
	const uniforms$4 = `
// Group 0: Stroke Properties
struct StrokeUniforms {
  uStrokeWeight: f32,
  uUseLineColor: f32,
  uSimpleLines: f32,
  uStrokeCap: u32,
  uStrokeJoin: u32,
}

// Group 1: Model Transform
struct ModelUniforms {
// @p5 ifdef StrokeVertex getWorldInputs
  uModelMatrix: mat4x4<f32>,
  uViewMatrix: mat4x4<f32>,
// @p5 endif
// @p5 ifndef StrokeVertex getWorldInputs
  uModelViewMatrix: mat4x4<f32>,
// @p5 endif
  uMaterialColor: vec4<f32>,
}

// Group 2: Camera and Projection
struct CameraUniforms {
  uProjectionMatrix: mat4x4<f32>,
  uViewport: vec4<f32>,
  uPerspective: u32,
}
`;
	const lineVertexShader = `
struct StrokeVertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aSide: f32,
  @location(2) aTangentIn: vec3<f32>,
  @location(3) aTangentOut: vec3<f32>,
  @location(4) aVertexColor: vec4<f32>,
};

struct StrokeVertexOutput {
  @builtin(position) Position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vTangent: vec2<f32>,
  @location(2) vCenter: vec2<f32>,
  @location(3) vPosition: vec2<f32>,
  @location(4) vMaxDist: f32,
  @location(5) vCap: f32,
  @location(6) vJoin: f32,
  @location(7) vStrokeWeight: f32,
};

${uniforms$4}
@group(0) @binding(0) var<uniform> stroke: StrokeUniforms;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;

struct StrokeVertex {
  position: vec3<f32>,
  tangentIn: vec3<f32>,
  tangentOut: vec3<f32>,
  color: vec4<f32>,
  weight: f32,
}

fn lineIntersection(aPoint: vec2f, aDir: vec2f, bPoint: vec2f, bDir: vec2f) -> vec2f {
  // Rotate and translate so a starts at the origin and goes out to the right
  var bMutPoint = bPoint;
  bMutPoint -= aPoint;
  var rotatedBFrom = vec2<f32>(
    bMutPoint.x*aDir.x + bMutPoint.y*aDir.y,
    bMutPoint.y*aDir.x - bMutPoint.x*aDir.y
  );
  var bTo = bMutPoint + bDir;
  var rotatedBTo = vec2<f32>(
    bTo.x*aDir.x + bTo.y*aDir.y,
    bTo.y*aDir.x - bTo.x*aDir.y
  );
  var intersectionDistance =
    rotatedBTo.x + (rotatedBFrom.x - rotatedBTo.x) * rotatedBTo.y /
    (rotatedBTo.y - rotatedBFrom.y);
  return aPoint + aDir * intersectionDistance;
}

@vertex
fn main(input: StrokeVertexInput) -> StrokeVertexOutput {
  HOOK_beforeVertex();
  var output: StrokeVertexOutput;
  let simpleLines = (stroke.uSimpleLines != 0.);
  if (!simpleLines) {
    if (all(input.aTangentIn == vec3<f32>()) != all(input.aTangentOut == vec3<f32>())) {
      output.vCap = 1.;
    } else {
      output.vCap = 0.;
    }
    let conditionA = any(input.aTangentIn != vec3<f32>());
    let conditionB = any(input.aTangentOut != vec3<f32>());
    let conditionC = any(input.aTangentIn != input.aTangentOut);
    if (conditionA && conditionB && conditionC) {
      output.vJoin = 1.;
    } else {
      output.vJoin = 0.;
    }
  }
  var lineColor: vec4<f32>;
  if (stroke.uUseLineColor != 0.) {
    lineColor = input.aVertexColor;
  } else {
    lineColor = model.uMaterialColor;
  }
  var inputs = StrokeVertex(
    input.aPosition.xyz,
    input.aTangentIn,
    input.aTangentOut,
    lineColor,
    stroke.uStrokeWeight
  );

// @p5 ifdef StrokeVertex getObjectInputs
  inputs = HOOK_getObjectInputs(inputs);
// @p5 endif

// @p5 ifdef StrokeVertex getWorldInputs
  inputs.position = (model.uModelMatrix * vec4<f32>(inputs.position, 1.)).xyz;
  inputs.tangentIn = (model.uModelMatrix * vec4<f32>(input.aTangentIn, 1.)).xyz;
  inputs.tangentOut = (model.uModelMatrix * vec4<f32>(input.aTangentOut, 1.)).xyz;
  inputs = HOOK_getWorldInputs(inputs);
// @p5 endif

// @p5 ifdef StrokeVertex getWorldInputs
  // Already multiplied by the model matrix, just apply view
  inputs.position = (model.uViewMatrix * vec4<f32>(inputs.position, 1.)).xyz;
  inputs.tangentIn = (model.uViewMatrix * vec4<f32>(input.aTangentIn, 0.)).xyz;
  inputs.tangentOut = (model.uViewMatrix * vec4<f32>(input.aTangentOut, 0.)).xyz;
// @p5 endif
// @p5 ifndef StrokeVertex getWorldInputs
  // Apply both at once
  inputs.position = (model.uModelViewMatrix * vec4<f32>(inputs.position, 1.)).xyz;
  inputs.tangentIn = (model.uModelViewMatrix * vec4<f32>(input.aTangentIn, 0.)).xyz;
  inputs.tangentOut = (model.uModelViewMatrix * vec4<f32>(input.aTangentOut, 0.)).xyz;
// @p5 endif
// @p5 ifdef StrokeVertex getCameraInputs
  inputs = HOOK_getCameraInputs(inputs);
// @p5 endif

  var posp = vec4<f32>(inputs.position, 1.);
  var posqIn = vec4<f32>(inputs.position + inputs.tangentIn, 1.);
  var posqOut = vec4<f32>(inputs.position + inputs.tangentOut, 1.);
  output.vStrokeWeight = inputs.weight;

  var facingCamera = pow(
    // The word space tangent's z value is 0 if it's facing the camera
    abs(normalize(posqIn-posp).z),

    // Using pow() here to ramp 'facingCamera' up from 0 to 1 really quickly
    // so most lines get scaled and don't get clipped
    0.25
  );

  // Moving vertices slightly toward the camera
  // to avoid depth-fighting with the fill triangles.
  // A mix of scaling and offsetting is used based on distance
  // Discussion here:
  // https://github.com/processing/p5.js/issues/7200

  // using a scale <1 moves the lines towards nearby camera
  // in order to prevent popping effects due to half of
  // the line disappearing behind the geometry faces.
  var zDistance = -posp.z;
  var distanceFactor = smoothstep(0., 800., zDistance);

  // Discussed here:
  // http://www.opengl.org/discussion_boards/ubbthreads.php?ubb=showflat&Number=252848
  var scale = mix(1., 0.995, facingCamera);
  var dynamicScale = mix(scale, 1.0, distanceFactor); // Closer = more scale, farther = less

  posp = vec4<f32>(posp.xyz * dynamicScale, posp.w);
  posqIn = vec4<f32>(posqIn.xyz * dynamicScale, posqIn.w);
  posqOut= vec4<f32>(posqOut.xyz * dynamicScale, posqOut.w);

  // Moving vertices slightly toward camera when far away
  // https://github.com/processing/p5.js/issues/6956
  var zOffset = mix(0., -1., facingCamera);
  var dynamicZAdjustment = mix(0., zOffset, distanceFactor); // Closer = less zAdjustment, farther = more

  posp.z -= dynamicZAdjustment;
  posqIn.z -= dynamicZAdjustment;
  posqOut.z -= dynamicZAdjustment;

  var p = camera.uProjectionMatrix * posp;
  var qIn = camera.uProjectionMatrix * posqIn;
  var qOut = camera.uProjectionMatrix * posqOut;

  var tangentIn = normalize((qIn.xy * p.w - p.xy * qIn.w) * camera.uViewport.zw);
  var tangentOut = normalize((qOut.xy * p.w - p.xy * qOut.w) * camera.uViewport.zw);

  var curPerspScale = vec2<f32>();
  if (camera.uPerspective == 1) {
    // Perspective ---
    // convert from world to clip by multiplying with projection scaling factor
    // to get the right thickness (see https://github.com/processing/processing/issues/5182)

    // The y value of the projection matrix may be flipped if rendering to a Framebuffer.
    // Multiplying again by its sign here negates the flip to get just the scale.
    curPerspScale = (camera.uProjectionMatrix * vec4(1., sign(camera.uProjectionMatrix[1][1]), 0., 0.)).xy;
  } else {
    // No Perspective ---
    // multiply by W (to cancel out division by W later in the pipeline) and
    // convert from screen to clip (derived from clip to screen above)
    curPerspScale = p.w / (0.5 * camera.uViewport.zw);
  }

  var offset = vec2<f32>();
  if (output.vJoin == 1. && !simpleLines) {
    output.vTangent = normalize(tangentIn + tangentOut);
    var normalIn = vec2<f32>(-tangentIn.y, tangentIn.x);
    var normalOut = vec2<f32>(-tangentOut.y, tangentOut.x);
    var side = sign(input.aSide);
    var sideEnum = abs(input.aSide);

    // We generate vertices for joins on either side of the centerline, but
    // the "elbow" side is the only one needing a join. By not setting the
    // offset for the other side, all its vertices will end up in the same
    // spot and not render, effectively discarding it.
    if (sign(dot(tangentOut, vec2<f32>(-tangentIn.y, tangentIn.x))) != side) {
      // Side enums:
      //   1: the side going into the join
      //   2: the middle of the join
      //   3: the side going out of the join
      if (sideEnum == 2.) {
        // Calculate the position + tangent on either side of the join, and
        // find where the lines intersect to find the elbow of the join
        var c = (posp.xy / posp.w + vec2<f32>(1.)) * 0.5 * camera.uViewport.zw;

        var intersection = lineIntersection(
          c + (side * normalIn * inputs.weight / 2.),
          tangentIn,
          c + (side * normalOut * inputs.weight / 2.),
          tangentOut
        );
        offset = intersection - c;


        // When lines are thick and the angle of the join approaches 180, the
        // elbow might be really far from the center. We'll apply a limit to
        // the magnitude to avoid lines going across the whole screen when this
        // happens.
        var mag = length(offset);
        var maxMag = 3. * inputs.weight;
        if (mag > maxMag) {
          offset *= maxMag / mag;
        }
      } else if (sideEnum == 1.) {
          offset = side * normalIn * inputs.weight / 2.;
      } else if (sideEnum == 3.) {
          offset = side * normalOut * inputs.weight / 2.;
      }
    }
    if (stroke.uStrokeJoin == 2) {
      var avgNormal = vec2<f32>(-output.vTangent.y, output.vTangent.x);
      output.vMaxDist = abs(dot(avgNormal, normalIn * inputs.weight / 2.));
    } else {
      output.vMaxDist = inputs.weight / 2.;
    }
  } else {
    var tangent: vec2<f32>;
    if (all(input.aTangentIn == vec3<f32>())) {
      tangent = tangentOut;
    } else {
      tangent = tangentIn;
    }
    output.vTangent = tangent;
    var normal = vec2<f32>(-tangent.y, tangent.x);

    var normalOffset = sign(input.aSide);
    // Caps will have side values of -2 or 2 on the edge of the cap that
    // extends out from the line
    var tangentOffset = abs(input.aSide) - 1.;
    offset = (normal * normalOffset + tangent * tangentOffset) *
      inputs.weight * 0.5;
    output.vMaxDist = inputs.weight / 2.;
  }
  output.vCenter = p.xy;
  output.vPosition = output.vCenter + offset;
  output.vColor = inputs.color;

  output.Position = vec4<f32>(
    p.xy + offset.xy * curPerspScale,
    p.zw
  );
  HOOK_afterVertex();
  return output;
}`;
	const lineFragmentShader = `
struct StrokeFragmentInput {
  @location(0) vColor: vec4<f32>,
  @location(1) vTangent: vec2<f32>,
  @location(2) vCenter: vec2<f32>,
  @location(3) vPosition: vec2<f32>,
  @location(4) vMaxDist: f32,
  @location(5) vCap: f32,
  @location(6) vJoin: f32,
  @location(7) vStrokeWeight: f32,
}

${uniforms$4}
@group(0) @binding(0) var<uniform> stroke: StrokeUniforms;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;


fn distSquared(a: vec2<f32>, b: vec2<f32>) -> f32 {
  return dot(b - a, b - a);
}

struct Inputs {
  color: vec4<f32>,
  tangent: vec2<f32>,
  center: vec2<f32>,
  position: vec2<f32>,
  strokeWeight: f32,
}

@fragment
fn main(input: StrokeFragmentInput) -> @location(0) vec4<f32> {
  HOOK_beforeFragment();

  var inputs: Inputs;
  inputs.color = input.vColor;
  inputs.tangent = input.vTangent;
  inputs.center = input.vCenter;
  inputs.position = input.vPosition;
  inputs.strokeWeight = input.vStrokeWeight;
  inputs = HOOK_getPixelInputs(inputs);

  if (input.vCap > 0.) {
    if (
      stroke.uStrokeCap == STROKE_CAP_ROUND &&
      HOOK_shouldDiscard(distSquared(inputs.position, inputs.center) > inputs.strokeWeight * inputs.strokeWeight * 0.25)
    ) {
      discard;
    } else if (
      stroke.uStrokeCap == STROKE_CAP_SQUARE &&
      HOOK_shouldDiscard(dot(inputs.position - inputs.center, inputs.tangent) > 0.)
    ) {
      discard;
    } else if (HOOK_shouldDiscard(false)) {
      discard;
    }
  } else if (input.vJoin > 0.) {
    if (
      stroke.uStrokeJoin == STROKE_JOIN_ROUND &&
      HOOK_shouldDiscard(distSquared(inputs.position, inputs.center) > inputs.strokeWeight * inputs.strokeWeight * 0.25)
    ) {
      discard;
    } else if (stroke.uStrokeJoin == STROKE_JOIN_BEVEL) {
      let normal = vec2<f32>(-inputs.tangent.y, -inputs.tangent.x);
      if (HOOK_shouldDiscard(abs(dot(inputs.position - inputs.center, normal)) > input.vMaxDist)) {
        discard;
      }
    } else if (HOOK_shouldDiscard(false)) {
      discard;
    }
  }
  var col = HOOK_getFinalColor(inputs.color, vec2<f32>(0.0, 0.0));
  col = vec4<f32>(col.rgb, 1.0) * col.a;
  HOOK_afterFragment();
  return vec4<f32>(col);
}
`;
	//#endregion
	//#region src/webgpu/shaders/material.js
	const uniforms$3 = `
// Group 0: Material Properties
struct MaterialUniforms {
  uUseVertexColor: u32,
  uHasSetAmbient: u32,
  uAmbientColor: vec3<f32>,
  uSpecularMatColor: vec4<f32>,
  uAmbientMatColor: vec4<f32>,
  uEmissiveMatColor: vec4<f32>,
  uTint: vec4<f32>,
  isTexture: u32,
  uSpecular: u32,
  uShininess: f32,
  uMetallic: f32,
  uHasNormalMap: u32,
  uNormalScale: f32,
  uNormalMapMode: u32,
  uNormalTexelSize: vec2<f32>,
}

// Group 0: Lighting
struct LightingUniforms {
  uDirectionalLightCount: i32,
  uLightingDirection: array<vec3<f32>, 5>,
  uDirectionalDiffuseColors: array<vec3<f32>, 5>,
  uDirectionalSpecularColors: array<vec3<f32>, 5>,
  uPointLightCount: i32,
  uPointLightLocation: array<vec3<f32>, 5>,
  uPointLightDiffuseColors: array<vec3<f32>, 5>,
  uPointLightSpecularColors: array<vec3<f32>, 5>,
  uSpotLightCount: i32,
  uSpotLightAngle: vec4<f32>,
  uSpotLightConc: vec4<f32>,
  uSpotLightDiffuseColors: array<vec3<f32>, 4>,
  uSpotLightSpecularColors: array<vec3<f32>, 4>,
  uSpotLightLocation: array<vec3<f32>, 4>,
  uSpotLightDirection: array<vec3<f32>, 4>,
  uConstantAttenuation: f32,
  uLinearAttenuation: f32,
  uQuadraticAttenuation: f32,
  uUseImageLight: u32,
  uUseLighting: u32,
}

// Group 1: Model Transform
struct ModelUniforms {
// @p5 ifdef Vertex getWorldInputs
  uModelMatrix: mat4x4<f32>,
  uModelNormalMatrix: mat3x3<f32>,
// @p5 endif
// @p5 ifndef Vertex getWorldInputs
  uModelViewMatrix: mat4x4<f32>,
  uNormalMatrix: mat3x3<f32>,
// @p5 endif
  uMaterialColor: vec4<f32>,
}

// Group 2: Camera and Projection
struct CameraUniforms {
  uViewMatrix: mat4x4<f32>,
  uProjectionMatrix: mat4x4<f32>,
  uCameraNormalMatrix: mat3x3<f32>,
}
`;
	const materialVertexShader = ({ useTextureMaps = false } = {}) => `
struct VertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aNormal: vec3<f32>,
  @location(2) aTexCoord: vec2<f32>,
  @location(3) aVertexColor: vec4<f32>,${useTextureMaps ? "\n  @location(4) aTangent: vec4<f32>," : ""}
};

struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
  @location(0) vNormal: vec3<f32>,
  @location(1) vTexCoord: vec2<f32>,
  @location(2) vViewPosition: vec3<f32>,
  @location(4) vColor: vec4<f32>,${useTextureMaps ? "\n  @location(5) vTangent: vec4<f32>," : ""}
};

${uniforms$3}
@group(0) @binding(0) var<uniform> material: MaterialUniforms;
@group(0) @binding(1) var<uniform> lighting: LightingUniforms;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;

struct Vertex {
  position: vec3<f32>,
  normal: vec3<f32>,
  texCoord: vec2<f32>,
  color: vec4<f32>,
}

@vertex
fn main(input: VertexInput) -> VertexOutput {
  HOOK_beforeVertex();
  var output: VertexOutput;

  let useVertexColor = (material.uUseVertexColor != 0 && input.aVertexColor.x >= 0.0);
  var inputs = Vertex(
    input.aPosition,
    input.aNormal,
    input.aTexCoord,
    select(model.uMaterialColor, input.aVertexColor, useVertexColor)
  );
${useTextureMaps ? "  var tangent = input.aTangent.xyz;\n" : ""}
// @p5 ifdef Vertex getObjectInputs
  inputs = HOOK_getObjectInputs(inputs);
// @p5 endif

// @p5 ifdef Vertex getWorldInputs
  inputs.position = (model.uModelMatrix * vec4<f32>(inputs.position, 1.0)).xyz;
  inputs.normal = model.uModelNormalMatrix * inputs.normal;
${useTextureMaps ? "  tangent = model.uModelNormalMatrix * tangent;\n" : ""}  inputs = HOOK_getWorldInputs(inputs);
// @p5 endif

// @p5 ifdef Vertex getWorldInputs
  // Already multiplied by the model matrix, just apply view
  inputs.position = (camera.uViewMatrix * vec4<f32>(inputs.position, 1.0)).xyz;
  inputs.normal = camera.uCameraNormalMatrix * inputs.normal;
${useTextureMaps ? "  tangent = camera.uCameraNormalMatrix * tangent;\n" : ""}// @p5 endif
// @p5 ifndef Vertex getWorldInputs
  // Apply both at once
  inputs.position = (model.uModelViewMatrix * vec4<f32>(inputs.position, 1.0)).xyz;
  inputs.normal = model.uNormalMatrix * inputs.normal;
${useTextureMaps ? "  tangent = model.uNormalMatrix * tangent;\n" : ""}// @p5 endif

// @p5 ifdef Vertex getCameraInputs
  inputs = HOOK_getCameraInputs(inputs);
// @p5 endif

  output.vViewPosition = inputs.position;
  output.vTexCoord = inputs.texCoord;
  output.vNormal = normalize(inputs.normal);
  output.vColor = inputs.color;
${useTextureMaps ? "  output.vTangent = vec4<f32>(tangent, input.aTangent.w);\n" : ""}
  output.Position = camera.uProjectionMatrix * vec4<f32>(inputs.position, 1.0);

  HOOK_afterVertex();
  return output;
}
`;
	const materialFragmentShader = ({ useTextureMaps = false } = {}) => `
struct FragmentInput {
  @location(0) vNormal: vec3<f32>,
  @location(1) vTexCoord: vec2<f32>,
  @location(2) vViewPosition: vec3<f32>,
  @location(4) vColor: vec4<f32>,${useTextureMaps ? "\n  @location(5) vTangent: vec4<f32>," : ""}
};

${uniforms$3}
@group(0) @binding(0) var<uniform> material: MaterialUniforms;
@group(0) @binding(1) var<uniform> lighting: LightingUniforms;
@group(0) @binding(2) var uSampler: texture_2d<f32>;
@group(0) @binding(3) var uSampler_sampler: sampler;
@group(0) @binding(4) var environmentMapDiffused: texture_2d<f32>;
@group(0) @binding(5) var environmentMapDiffused_sampler: sampler;
@group(0) @binding(6) var environmentMapSpecular: texture_2d<f32>;
@group(0) @binding(7) var environmentMapSpecular_sampler: sampler;
${useTextureMaps ? "@group(0) @binding(8) var uNormalSampler: texture_2d<f32>;\n@group(0) @binding(9) var uNormalSampler_sampler: sampler;\n" : ""}@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;

struct ColorComponents {
  baseColor: vec3<f32>,
  opacity: f32,
  ambientColor: vec3<f32>,
  specularColor: vec3<f32>,
  diffuse: vec3<f32>,
  ambient: vec3<f32>,
  specular: vec3<f32>,
  emissive: vec3<f32>,
}

struct Inputs {
  normal: vec3<f32>,
  texCoord: vec2<f32>,
  ambientLight: vec3<f32>,
  ambientMaterial: vec3<f32>,
  specularMaterial: vec3<f32>,
  emissiveMaterial: vec3<f32>,
  color: vec4<f32>,
  shininess: f32,
  metalness: f32,
}


struct LightResult {
  diffuse: vec3<f32>,
  specular: vec3<f32>,
}
struct LightIntensityResult {
  diffuse: f32,
  specular: f32,
}

const specularFactor = 2.0;
const diffuseFactor = 0.73;
const PI = 3.14159265359;

fn mapTextureToNormal(v: vec3<f32>) -> vec2<f32> {
  // x = r sin(phi) cos(theta)
  // y = r cos(phi)
  // z = r sin(phi) sin(theta)
  let phi = acos(v.y);
  // if phi is 0, then there are no x, z components
  var theta = 0.0;
  // else
  theta = acos(v.x / sin(phi));
  let sinTheta = v.z / sin(phi);
  if (sinTheta < 0.0) {
    // Turn it into -theta, but in the 0-2PI range
    theta = 2.0 * PI - theta;
  }
  theta = theta / (2.0 * PI);
  let phiNorm = phi / PI;

  let angles = vec2<f32>(fract(theta + 0.25), 1.0 - phiNorm);
  return angles;
}

fn calculateImageDiffuse(vNormal: vec3<f32>, vViewPosition: vec3<f32>, metallic: f32) -> vec3<f32> {
  // make 2 seperate builds
  let worldCameraPosition = vec3<f32>(0.0, 0.0, 0.0);  // hardcoded world camera position
  let worldNormal = normalize(vNormal * camera.uCameraNormalMatrix);
  let newTexCoord = mapTextureToNormal(worldNormal);
  let texture = textureSample(environmentMapDiffused, environmentMapDiffused_sampler, newTexCoord);
  // this is to make the darker sections more dark
  // png and jpg usually flatten the brightness so it is to reverse that
  return mix(smoothstep(vec3<f32>(0.0), vec3<f32>(1.0), texture.xyz), vec3<f32>(0.0), metallic);
}

fn calculateImageSpecular(vNormal: vec3<f32>, vViewPosition: vec3<f32>, shininess: f32, metallic: f32) -> vec3<f32> {
  let worldCameraPosition = vec3<f32>(0.0, 0.0, 0.0);
  let worldNormal = normalize(vNormal);
  let lightDirection = normalize(vViewPosition - worldCameraPosition);
  let R = reflect(lightDirection, worldNormal) * camera.uCameraNormalMatrix;
  let newTexCoord = mapTextureToNormal(R);

  // In p5js the range of shininess is >= 1,
  // Therefore roughness range will be ([0,1]*8)*20 or [0, 160]
  // The factor of 8 is because currently the getSpecularTexture
  // only calculated 8 different levels of roughness
  // The factor of 20 is just to spread up this range so that,
  // [1, max] of shininess is converted to [0,160] of roughness
  let roughness = 20.0 / shininess;
  let outColor = textureSampleLevel(environmentMapSpecular, environmentMapSpecular_sampler, newTexCoord, roughness * 8.0 - 1.);

  // this is to make the darker sections more dark
  // png and jpg usually flatten the brightness so it is to reverse that
  return mix(
    pow(outColor.xyz, vec3<f32>(10.0)),
    pow(outColor.xyz, vec3<f32>(1.2)),
    metallic
  );
}

fn phongSpecular(
  lightDirection: vec3<f32>,
  viewDirection: vec3<f32>,
  surfaceNormal: vec3<f32>,
  shininess: f32
) -> f32 {
  let R = reflect(lightDirection, surfaceNormal);
  return pow(max(0.0, dot(R, viewDirection)), shininess);
}

fn lambertDiffuse(lightDirection: vec3<f32>, surfaceNormal: vec3<f32>) -> f32 {
  return max(0.0, dot(-lightDirection, surfaceNormal));
}

fn singleLight(
  viewDirection: vec3<f32>,
  normal: vec3<f32>,
  lightVector: vec3<f32>,
  shininess: f32,
  metallic: f32
) -> LightIntensityResult {
  let lightDir = normalize(lightVector);
  let specularIntensity = mix(1.0, 0.4, metallic);
  let diffuseIntensity = mix(1.0, 0.1, metallic);
  let diffuse = lambertDiffuse(lightDir, normal) * diffuseIntensity;
  let specular = select(
    0.,
    phongSpecular(lightDir, viewDirection, normal, shininess) * specularIntensity,
    material.uSpecular == 1
  );
  return LightIntensityResult(diffuse, specular);
}

fn totalLight(
  modelPosition: vec3<f32>,
  normal: vec3<f32>,
  shininess: f32,
  metallic: f32
) -> LightResult {
  var totalSpecular = vec3<f32>(0.0, 0.0, 0.0);
  var totalDiffuse = vec3<f32>(0.0, 0.0, 0.0);

  if (lighting.uUseLighting == 0) {
    return LightResult(vec3<f32>(1.0, 1.0, 1.0), totalSpecular);
  }

  let viewDirection = normalize(-modelPosition);

  for (var j = 0; j < 5; j++) {
    if (j < lighting.uDirectionalLightCount) {
      let lightVector = (camera.uViewMatrix * vec4<f32>(
        lighting.uLightingDirection[j],
        0.0
      )).xyz;
      let lightColor = lighting.uDirectionalDiffuseColors[j];
      let specularColor = lighting.uDirectionalSpecularColors[j];
      let result = singleLight(viewDirection, normal, lightVector, shininess, metallic);
      totalDiffuse += result.diffuse * lightColor;
      totalSpecular += result.specular * specularColor;
    }

    if (j < lighting.uPointLightCount) {
      let lightPosition = (camera.uViewMatrix * vec4<f32>(
        lighting.uPointLightLocation[j],
        1.0
      )).xyz;
      let lightVector = modelPosition - lightPosition;
      let lightDistance = length(lightVector);
      let lightFalloff = 1.0 / (
        lighting.uConstantAttenuation +
        lightDistance * lighting.uLinearAttenuation +
        lightDistance * lightDistance * lighting.uQuadraticAttenuation
      );
      let lightColor = lighting.uPointLightDiffuseColors[j] * lightFalloff;
      let specularColor = lighting.uPointLightSpecularColors[j] * lightFalloff;
      let result = singleLight(viewDirection, normal, lightVector, shininess, metallic);
      totalDiffuse += result.diffuse * lightColor;
      totalSpecular += result.specular * specularColor;
    }

    if (j < lighting.uSpotLightCount) {
      let lightPosition = (camera.uViewMatrix * vec4<f32>(
        lighting.uSpotLightLocation[j],
        1.0
      )).xyz;
      let lightVector = modelPosition - lightPosition;
      let lightDistance = length(lightVector);
      var lightFalloff = 1.0 / (
        lighting.uConstantAttenuation +
        lightDistance * lighting.uLinearAttenuation +
        lightDistance * lightDistance * lighting.uQuadraticAttenuation
      );
      let lightDirection = (camera.uViewMatrix * vec4<f32>(
        lighting.uSpotLightDirection[j],
        0.0
      )).xyz;
      let spotDot = dot(normalize(lightVector), normalize(lightDirection));
      let spotFalloff = select(
        0.0,
        pow(spotDot, lighting.uSpotLightConc[j]),
        spotDot < lighting.uSpotLightAngle[j]
      );
      lightFalloff *= spotFalloff;
      let lightColor = lighting.uSpotLightDiffuseColors[j];
      let specularColor = lighting.uSpotLightSpecularColors[j];
      let result = singleLight(viewDirection, normal, lightVector, shininess, metallic);
      totalDiffuse += result.diffuse * lightColor;
      totalSpecular += result.specular * specularColor;
    }
  }

  // Image light contribution
  if (lighting.uUseImageLight != 0) {
    totalDiffuse += calculateImageDiffuse(normal, modelPosition, metallic);
    totalSpecular += calculateImageSpecular(normal, modelPosition, shininess, metallic);
  }

  return LightResult(
    totalDiffuse * diffuseFactor,
    totalSpecular * specularFactor
  );
}

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
  HOOK_beforeFragment();

  let color = select(
    input.vColor,
    textureSample(uSampler, uSampler_sampler, input.vTexCoord) * (material.uTint/255.0),
    material.isTexture == 1
  ); // TODO: check isTexture and apply tint
  var N = normalize(input.vNormal);
${useTextureMaps ? `  if (material.uHasNormalMap == 1) {
    // rebuild the tangent basis from the smooth per-vertex tangent (gram-schmidt
    // keeps it perpendicular to the interpolated normal) and perturb by the map.
    var T = normalize(input.vTangent.xyz);
    T = normalize(T - N * dot(N, T));
    let B = cross(N, T) * input.vTangent.w;
    var mapN: vec3<f32>;
    if (material.uNormalMapMode == 1u) {
      // bump map: brightness is height, so the tangent-space normal comes from
      // how fast that height changes between neighbouring texels. sampling both
      // sides keeps the slope right at the edges of the map, where reaching past
      // one side would otherwise clamp and read back the same texel.
      let du = vec2<f32>(material.uNormalTexelSize.x, 0.0);
      let dv = vec2<f32>(0.0, material.uNormalTexelSize.y);
      let hl = textureSample(uNormalSampler, uNormalSampler_sampler, input.vTexCoord - du).r;
      let hr = textureSample(uNormalSampler, uNormalSampler_sampler, input.vTexCoord + du).r;
      let hd = textureSample(uNormalSampler, uNormalSampler_sampler, input.vTexCoord - dv).r;
      let hu = textureSample(uNormalSampler, uNormalSampler_sampler, input.vTexCoord + dv).r;
      // the surface leans away from the direction height increases in
      mapN = normalize(vec3<f32>((hl - hr) * 0.5, (hd - hu) * 0.5, 1.0));
    } else {
      // normal map: rgb already holds the tangent-space normal
      mapN = textureSample(uNormalSampler, uNormalSampler_sampler, input.vTexCoord).rgb * 2.0 - 1.0;
    }
    // scale the tangent-space slope so the strength can be tuned (-bm)
    mapN = vec3<f32>(mapN.xy * material.uNormalScale, mapN.z);
    N = normalize(mat3x3<f32>(T, B, N) * mapN);
  }
` : ""}  var inputs = Inputs(
    N,
    input.vTexCoord,
    material.uAmbientColor,
    select(color.rgb, material.uAmbientMatColor.rgb, material.uHasSetAmbient == 1),
    material.uSpecularMatColor.rgb,
    material.uEmissiveMatColor.rgb,
    color,
    material.uShininess,
    material.uMetallic
  );
  inputs = HOOK_getPixelInputs(inputs);

  let light = totalLight(
    input.vViewPosition,
    inputs.normal,
    inputs.shininess,
    inputs.metalness
  );

  let baseColor = inputs.color;
  let components = ColorComponents(
    baseColor.rgb,
    baseColor.a,
    inputs.ambientMaterial,
    inputs.specularMaterial,
    light.diffuse,
    inputs.ambientLight,
    light.specular,
    inputs.emissiveMaterial
  );

   var outColor = HOOK_getFinalColor(
     HOOK_combineColors(components), input.vTexCoord
   );
  outColor = vec4<f32>(outColor.rgb * outColor.a, outColor.a);
  HOOK_afterFragment();
  return outColor;
}
`;
	//#endregion
	//#region src/webgpu/shaders/font.js
	const uniforms$2 = `
// Group 0: Font Properties
struct FontUniforms {
  uStrokeImageSize: vec2<i32>,
  uCellsImageSize: vec2<i32>,
  uGridImageSize: vec2<i32>,
  uGridOffset: vec2<i32>,
  uGridSize: vec2<i32>,
  uGlyphRect: vec4<f32>,
  uGlyphOffset: f32,
  uMaterialColor: vec4<f32>,
}

// Group 1: Model Transform
struct ModelUniforms {
  uModelViewMatrix: mat4x4<f32>,
}

// Group 2: Camera and Projection
struct CameraUniforms {
  uProjectionMatrix: mat4x4<f32>,
}
`;
	const fontVertexShader = `
struct VertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aTexCoord: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
  @location(0) vTexCoord: vec2<f32>,
};

${uniforms$2}
@group(0) @binding(0) var<uniform> font: FontUniforms;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;

@vertex
fn main(input: VertexInput) -> VertexOutput {
  var output: VertexOutput;
  var positionVec4 = vec4<f32>(input.aPosition, 1.0);

  // scale by the size of the glyph's rectangle
  positionVec4.x = positionVec4.x * (font.uGlyphRect.z - font.uGlyphRect.x);
  positionVec4.y = positionVec4.y * (font.uGlyphRect.w - font.uGlyphRect.y);

  // Expand glyph bounding boxes by 1px on each side to give a bit of room
  // for antialiasing
  let newOrigin = (model.uModelViewMatrix * vec4<f32>(0.0, 0.0, 0.0, 1.0)).xyz;
  let newDX = (model.uModelViewMatrix * vec4<f32>(1.0, 0.0, 0.0, 1.0)).xyz;
  let newDY = (model.uModelViewMatrix * vec4<f32>(0.0, 1.0, 0.0, 1.0)).xyz;
  let pixelScale = vec2<f32>(
    1.0 / length(newOrigin - newDX),
    1.0 / length(newOrigin - newDY)
  );
  let offset = pixelScale * normalize(input.aTexCoord - vec2<f32>(0.5, 0.5));
  let textureOffset = offset * (1.0 / vec2<f32>(
    font.uGlyphRect.z - font.uGlyphRect.x,
    font.uGlyphRect.w - font.uGlyphRect.y
  ));

  // move to the corner of the glyph
  positionVec4.x = positionVec4.x + font.uGlyphRect.x;
  positionVec4.y = positionVec4.y + font.uGlyphRect.y;

  // move to the letter's line offset
  positionVec4.x = positionVec4.x + font.uGlyphOffset;

  positionVec4.x = positionVec4.x + offset.x;
  positionVec4.y = positionVec4.y + offset.y;

  output.Position = camera.uProjectionMatrix * model.uModelViewMatrix * positionVec4;
  output.vTexCoord = input.aTexCoord + textureOffset;

  return output;
}
`;
	const fontFragmentShader = `
struct FragmentInput {
  @location(0) vTexCoord: vec2<f32>,
};

${uniforms$2}
@group(0) @binding(0) var<uniform> font: FontUniforms;
@group(0) @binding(1) var uSamplerStrokes: texture_2d<f32>;
@group(0) @binding(2) var uSamplerStrokes_sampler: sampler;
@group(0) @binding(3) var uSamplerRowStrokes: texture_2d<f32>;
@group(0) @binding(4) var uSamplerRowStrokes_sampler: sampler;
@group(0) @binding(5) var uSamplerRows: texture_2d<f32>;
@group(0) @binding(6) var uSamplerRows_sampler: sampler;
@group(0) @binding(7) var uSamplerColStrokes: texture_2d<f32>;
@group(0) @binding(8) var uSamplerColStrokes_sampler: sampler;
@group(0) @binding(9) var uSamplerCols: texture_2d<f32>;
@group(0) @binding(10) var uSamplerCols_sampler: sampler;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;

// some helper functions
fn ROUND_f32(v: f32) -> i32 { return i32(floor(v + 0.5)); }
fn ROUND_vec2(v: vec2<f32>) -> vec2<i32> { return vec2<i32>(floor(v + 0.5)); }
fn saturate_f32(v: f32) -> f32 { return clamp(v, 0.0, 1.0); }
fn saturate_vec2(v: vec2<f32>) -> vec2<f32> { return clamp(v, vec2<f32>(0.0), vec2<f32>(1.0)); }

fn mul_f32_i32(v1: f32, v2: i32) -> i32 {
  return i32(floor(v1 * f32(v2)));
}

fn mul_vec2_ivec2(v1: vec2<f32>, v2: vec2<i32>) -> vec2<i32> {
  return vec2<i32>(floor(v1 * vec2<f32>(v2) + 0.5));
}

// unpack a 16-bit integer from a float vec2
fn getInt16(v: vec2<f32>) -> i32 {
  let iv = ROUND_vec2(v * 255.0);
  return iv.x * 128 + iv.y;
}

const minDistance: f32 = 1.0/8192.0;
const hardness: f32 = 1.05; // amount of antialias

// the maximum number of curves in a glyph
const N: i32 = 250;

// retrieves an indexed pixel from a texture
fn getTexel(texture: texture_2d<f32>, samp: sampler, pos: i32, size: vec2<i32>) -> vec4<f32> {
  let width = size.x;
  let x = pos % width;
  let y = pos / width;

  return textureLoad(texture, vec2<i32>(x, y), 0);
}

fn calculateCrossings(p0: vec2<f32>, p1: vec2<f32>, p2: vec2<f32>, vTexCoord: vec2<f32>, pixelScale: vec2<f32>) -> array<vec2<f32>, 2> {
  // get the coefficients of the quadratic in t
  var a = p0 - p1 * 2.0 + p2;
  var b = p0 - p1;
  a = vec2<f32>(
    select(a.x, sign(a.x) * 1e-6, abs(a.x) < 1e-6),
    select(a.y, sign(a.y) * 1e-6, abs(a.y) < 1e-6)
  );
  b = vec2<f32>(
    select(b.x, sign(b.x) * 1e-6, abs(b.x) < 1e-6),
    select(b.y, sign(b.y) * 1e-6, abs(b.y) < 1e-6)
  );
  let c = p0 - vTexCoord;

  // found out which values of 't' it crosses the axes
  let surd = sqrt(max(vec2<f32>(0.0), b * b - a * c));
  let t1 = ((b - surd) / a).yx;
  let t2 = ((b + surd) / a).yx;

  // approximate straight lines to avoid rounding errors
  var t1_fixed = t1;
  var t2_fixed = t2;
  if (abs(a.y) < 0.001) {
    t1_fixed.x = c.y / (2.0 * b.y);
    t2_fixed.x = c.y / (2.0 * b.y);
  }

  if (abs(a.x) < 0.001) {
    t1_fixed.y = c.x / (2.0 * b.x);
    t2_fixed.y = c.x / (2.0 * b.x);
  }

  // plug into quadratic formula to find the coordinates of the crossings
  let C1 = ((a * t1_fixed - b * 2.0) * t1_fixed + c) * pixelScale;
  let C2 = ((a * t2_fixed - b * 2.0) * t2_fixed + c) * pixelScale;

  return array<vec2<f32>, 2>(C1, C2);
}

fn coverageX(p0: vec2<f32>, p1: vec2<f32>, p2: vec2<f32>, vTexCoord: vec2<f32>, pixelScale: vec2<f32>, coverage: ptr<function, vec2<f32>>, weight: ptr<function, vec2<f32>>) {
  let crossings = calculateCrossings(p0, p1, p2, vTexCoord, pixelScale);
  let C1 = crossings[0];
  let C2 = crossings[1];

  // determine on which side of the x-axis the points lie
  let y0 = p0.y > vTexCoord.y;
  let y1 = p1.y > vTexCoord.y;
  let y2 = p2.y > vTexCoord.y;

  // could we be under the curve (after t1)?
  if ((y1 && !y2) || (!y1 && y0)) {
    // add the coverage for t1
    (*coverage).x = (*coverage).x + saturate_f32(C1.x + 0.5);
    // calculate the anti-aliasing for t1
    (*weight).x = min((*weight).x, abs(C1.x));
  }

  // are we outside the curve (after t2)?
  if ((y1 && !y0) || (!y1 && y2)) {
    // subtract the coverage for t2
    (*coverage).x = (*coverage).x - saturate_f32(C2.x + 0.5);
    // calculate the anti-aliasing for t2
    (*weight).x = min((*weight).x, abs(C2.x));
  }
}

// this is essentially the same as coverageX, but with the axes swapped
fn coverageY(p0: vec2<f32>, p1: vec2<f32>, p2: vec2<f32>, vTexCoord: vec2<f32>, pixelScale: vec2<f32>, coverage: ptr<function, vec2<f32>>, weight: ptr<function, vec2<f32>>) {
  let crossings = calculateCrossings(p0, p1, p2, vTexCoord, pixelScale);
  let C1 = crossings[0];
  let C2 = crossings[1];

  let x0 = p0.x > vTexCoord.x;
  let x1 = p1.x > vTexCoord.x;
  let x2 = p2.x > vTexCoord.x;

  if ((x1 && !x2) || (!x1 && x0)) {
    (*coverage).y = (*coverage).y - saturate_f32(C1.y + 0.5);
    weight.y = min(weight.y, abs(C1.y));
  }

  if ((x1 && !x0) || (!x1 && x2)) {
    (*coverage).y = (*coverage).y + saturate_f32(C2.y + 0.5);
    (*weight).y = min((*weight).y, abs(C2.y));
  }
}

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
  // var pixelScale: vec2<f32>;
  var coverage: vec2<f32> = vec2<f32>(0.0);
  var weight: vec2<f32> = vec2<f32>(0.5);
  let pixelScale = hardness / fwidth(input.vTexCoord);

  // which grid cell is this pixel in?
  let gridCoord = vec2<i32>(floor(input.vTexCoord * vec2<f32>(font.uGridSize)));

  // intersect curves in this row
  {
    // the index into the row info bitmap
    let rowIndex = gridCoord.y + font.uGridOffset.y;
    // fetch the info texel
    let rowInfo = getTexel(uSamplerRows, uSamplerRows_sampler, rowIndex, font.uGridImageSize);
    // unpack the rowInfo
    let rowStrokeIndex = getInt16(rowInfo.xy);
    let rowStrokeCount = getInt16(rowInfo.zw);

    for (var iRowStroke = 0; iRowStroke < N; iRowStroke = iRowStroke + 1) {
      if (iRowStroke >= rowStrokeCount) {
        break;
      }

      // each stroke is made up of 3 points: the start and control point
      // and the start of the next curve.
      // fetch the indices of this pair of strokes:
      let strokeIndices = getTexel(uSamplerRowStrokes, uSamplerRowStrokes_sampler, rowStrokeIndex + iRowStroke, font.uCellsImageSize);

      // unpack the stroke index
      let strokePos = getInt16(strokeIndices.xy);

      // fetch the two strokes
      let stroke0 = getTexel(uSamplerStrokes, uSamplerStrokes_sampler, strokePos + 0, font.uStrokeImageSize);
      let stroke1 = getTexel(uSamplerStrokes, uSamplerStrokes_sampler, strokePos + 1, font.uStrokeImageSize);

      // calculate the coverage
      coverageX(stroke0.xy, stroke0.zw, stroke1.xy, input.vTexCoord, pixelScale, &coverage, &weight);
    }
  }

  // intersect curves in this column
  {
    let colIndex = gridCoord.x + font.uGridOffset.x;
    let colInfo = getTexel(uSamplerCols, uSamplerCols_sampler, colIndex, font.uGridImageSize);
    let colStrokeIndex = getInt16(colInfo.xy);
    let colStrokeCount = getInt16(colInfo.zw);

    for (var iColStroke = 0; iColStroke < N; iColStroke = iColStroke + 1) {
      if (iColStroke >= colStrokeCount) {
        break;
      }

      let strokeIndices = getTexel(uSamplerColStrokes, uSamplerColStrokes_sampler, colStrokeIndex + iColStroke, font.uCellsImageSize);

      let strokePos = getInt16(strokeIndices.xy);
      let stroke0 = getTexel(uSamplerStrokes, uSamplerStrokes_sampler, strokePos + 0, font.uStrokeImageSize);
      let stroke1 = getTexel(uSamplerStrokes, uSamplerStrokes_sampler, strokePos + 1, font.uStrokeImageSize);
      coverageY(stroke0.xy, stroke0.zw, stroke1.xy, input.vTexCoord, pixelScale, &coverage, &weight);
    }
  }

  weight = saturate_vec2(vec2<f32>(1.0) - weight * 2.0);
  let distance = max(weight.x + weight.y, minDistance); // manhattan approx.
  let antialias = abs(dot(coverage, weight) / distance);
  let cover = min(abs(coverage.x), abs(coverage.y));
  var outColor = vec4<f32>(font.uMaterialColor.rgb, 1.0) * font.uMaterialColor.a;
  outColor = outColor * saturate_f32(max(antialias, cover));
  return outColor;
}
`;
	//#endregion
	//#region src/webgpu/shaders/blit.js
	const uniforms$1 = `
struct Uniforms {
  uModelViewMatrix: mat4x4<f32>,
  uProjectionMatrix: mat4x4<f32>,
};
`;
	const blitVertexShader = `
struct VertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aNormal: vec3<f32>,
  @location(2) aTexCoord: vec2<f32>,
  @location(3) aVertexColor: vec4<f32>,
};

struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
  @location(0) vTexCoord: vec2<f32>,
};

${uniforms$1}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;

@vertex
fn main(input: VertexInput) -> VertexOutput {
  var output: VertexOutput;
  output.vTexCoord = input.aTexCoord;
  let positionVec4 = vec4<f32>(input.aPosition, 1.0);
  output.Position = uniforms.uProjectionMatrix * uniforms.uModelViewMatrix * positionVec4;
  return output;
}
`;
	const blitFragmentShader = `
struct FragmentInput {
  @location(0) vTexCoord: vec2<f32>,
};

${uniforms$1}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var uSampler: texture_2d<f32>;
@group(0) @binding(2) var uSampler_sampler: sampler;

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
  return textureSample(uSampler, uSampler_sampler, input.vTexCoord);
}
`;
	//#endregion
	//#region src/webgpu/shaders/functions/noise3DWGSL.js
	var noise3DWGSL_default = `fn mod289Vec3(x: vec3<f32>) -> vec3<f32> {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

fn mod289Vec4(x: vec4<f32>) -> vec4<f32> {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

fn permute(x: vec4<f32>) -> vec4<f32> {
  return mod289Vec4(((x*34.0)+10.0)*x);
}

fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(1.79284291400159) - vec4<f32>(0.85373472095314) * r;
}

fn baseNoise(v: vec3<f32>) -> f32 {
  let C = vec2<f32>(1.0/6.0, 1.0/3.0);
  let D = vec4<f32>(0.0, 0.5, 1.0, 2.0);

  // First corner
  var i = floor(v + dot(v, C.yyy));
  let x0 = v - i + dot(i, C.xxx);

  // Other corners
  let g = step(x0.yzx, x0.xyz);
  let l = vec3<f32>(1.0) - g;
  let i1 = min(g.xyz, l.zxy);
  let i2 = max(g.xyz, l.zxy);

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  let x1 = x0 - i1 + C.xxx;
  let x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  let x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289Vec3(i);
  let p = permute( permute( permute(
          i.z + vec4<f32>(0.0, i1.z, i2.z, 1.0 ))
        + i.y + vec4<f32>(0.0, i1.y, i2.y, 1.0 ))
      + i.x + vec4<f32>(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  let n_ = 0.142857142857; // 1.0/7.0
  let ns = n_ * D.wyz - D.xzx;

  let j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  let x_ = floor(j * ns.z);
  let y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  let x = x_ *ns.x + ns.yyyy;
  let y = y_ *ns.x + ns.yyyy;
  let h = vec4<f32>(1.0) - abs(x) - abs(y);

  let b0 = vec4<f32>( x.xy, y.xy );
  let b1 = vec4<f32>( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  let s0 = floor(b0)*2.0 + vec4<f32>(1.0);
  let s1 = floor(b1)*2.0 + vec4<f32>(1.0);
  let sh = -step(h, vec4<f32>(0.0));

  let a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  let a1 = b1.xzyw + s1.xzyw*sh.zzww;

  let p0 = vec3<f32>(a0.xy, h.x);
  let p1 = vec3<f32>(a0.zw, h.y);
  let p2 = vec3<f32>(a1.xy, h.z);
  let p3 = vec3<f32>(a1.zw, h.w);

  //Normalise gradients
  let norm = taylorInvSqrt(vec4<f32>(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  let p0_norm = p0 * norm.x;
  let p1_norm = p1 * norm.y;
  let p2_norm = p2 * norm.z;
  let p3_norm = p3 * norm.w;

  // Mix final noise value
  var m = max(vec4<f32>(0.5) - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), vec4<f32>(0.0));
  m = m * m;
  return 105.0 * dot( m*m, vec4<f32>( dot(p0_norm,x0), dot(p1_norm,x1),
        dot(p2_norm,x2), dot(p3_norm,x3) ) );
}

fn noise(st: vec3<f32>, octaves: i32, ampFalloff: f32) -> f32 {
  var result = 0.0;
  var amplitude = 1.0;
  var frequency = 1.0;

  for (var i = 0; i < 8; i++) {
    if (i >= octaves) { break; }
    result += amplitude * baseNoise(st * frequency);
    frequency *= 2.0;
    amplitude *= ampFalloff;
  }
  return (result + 1.0) * 0.5;
}`;
	//#endregion
	//#region src/webgpu/shaders/functions/randomWGSL.js
	var randomWGSL_default = `
var<private> _p5_randomCallIndex: i32 = 0;

fn _p5_hash(p: vec3<f32>) -> f32 {
  var p3 = fract(p * vec3<f32>(0.1031, 0.1030, 0.0973));
  p3 = p3 + dot(p3, p3.yxz + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

fn random(seed: f32, pixelCoord: vec2<f32>) -> f32 {
  let callIndex = f32(_p5_randomCallIndex);
  _p5_randomCallIndex = _p5_randomCallIndex + 1;
  let s = fract(seed * 0.7548776662);
  return _p5_hash(vec3<f32>(
    pixelCoord.x + s,
    pixelCoord.y + callIndex * 0.5698402910,
    s + callIndex * 0.6180339887
  ));
}
`;
	//#endregion
	//#region src/webgpu/shaders/functions/randomVertWGSL.js
	var randomVertWGSL_default = `
var<private> _p5_randomCallIndex: i32 = 0;

fn _p5_hash(p: vec3<f32>) -> f32 {
  var p3 = fract(p * vec3<f32>(0.1031, 0.1030, 0.0973));
  p3 = p3 + dot(p3, p3.yxz + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

fn random(seed: f32, vertexId: f32) -> f32 {
  let callIndex = f32(_p5_randomCallIndex);
  _p5_randomCallIndex = _p5_randomCallIndex + 1;
  let s = fract(seed * 0.7548776662);
  return _p5_hash(vec3<f32>(
    vertexId + s,
    vertexId * 0.5698402910 + callIndex * 0.6180339887,
    s + callIndex * 0.7548776662
  ));
}
`;
	//#endregion
	//#region src/webgpu/shaders/functions/randomComputeWGSL.js
	var randomComputeWGSL_default = `
var<private> _p5_randomCallIndex: i32 = 0;

fn _p5_hash(p: vec3<f32>) -> f32 {
  var p3 = fract(p * vec3<f32>(0.1031, 0.1030, 0.0973));
  p3 = p3 + dot(p3, p3.yxz + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

fn random(seed: f32, invocationId: vec3<u32>) -> f32 {
  let id = vec3<f32>(invocationId);
  let callIndex = f32(_p5_randomCallIndex);
  _p5_randomCallIndex = _p5_randomCallIndex + 1;
  let s = fract(seed * 0.7548776662);
  return _p5_hash(vec3<f32>(
    id.x + s,
    id.y + callIndex * 0.5698402910,
    id.z + s + callIndex * 0.6180339887
  ));
}
`;
	//#endregion
	//#region src/webgpu/shaders/functions/inverseWGSL.js
	var inverseWGSL_default = `fn _p5_inverse_mat2(m: mat2x2<f32>) -> mat2x2<f32> {
  let det = m[0][0] * m[1][1] - m[1][0] * m[0][1];
  let invDet = 1.0 / det;
  return mat2x2<f32>(
     m[1][1] * invDet, -m[0][1] * invDet,
    -m[1][0] * invDet,  m[0][0] * invDet
  );
}

fn _p5_inverse_mat3(m: mat3x3<f32>) -> mat3x3<f32> {
  let a00 = m[0][0]; let a01 = m[0][1]; let a02 = m[0][2];
  let a10 = m[1][0]; let a11 = m[1][1]; let a12 = m[1][2];
  let a20 = m[2][0]; let a21 = m[2][1]; let a22 = m[2][2];

  let b01 =  a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 =  a21 * a10 - a11 * a20;

  let det = a00 * b01 + a01 * b11 + a02 * b21;
  let invDet = 1.0 / det;

  return mat3x3<f32>(
    b01 * invDet,
    (-a22 * a01 + a02 * a21) * invDet,
    ( a12 * a01 - a02 * a11) * invDet,
    b11 * invDet,
    ( a22 * a00 - a02 * a20) * invDet,
    (-a12 * a00 + a02 * a10) * invDet,
    b21 * invDet,
    (-a21 * a00 + a01 * a20) * invDet,
    ( a11 * a00 - a01 * a10) * invDet
  );
}

fn _p5_inverse_mat4(m: mat4x4<f32>) -> mat4x4<f32> {
  let a00 = m[0][0]; let a01 = m[0][1]; let a02 = m[0][2]; let a03 = m[0][3];
  let a10 = m[1][0]; let a11 = m[1][1]; let a12 = m[1][2]; let a13 = m[1][3];
  let a20 = m[2][0]; let a21 = m[2][1]; let a22 = m[2][2]; let a23 = m[2][3];
  let a30 = m[3][0]; let a31 = m[3][1]; let a32 = m[3][2]; let a33 = m[3][3];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  let invDet = 1.0 / det;

  return mat4x4<f32>(
    (a11 * b11 - a12 * b10 + a13 * b09) * invDet,
    (a02 * b10 - a01 * b11 - a03 * b09) * invDet,
    (a31 * b05 - a32 * b04 + a33 * b03) * invDet,
    (a22 * b04 - a21 * b05 - a23 * b03) * invDet,
    (a12 * b08 - a10 * b11 - a13 * b07) * invDet,
    (a00 * b11 - a02 * b08 + a03 * b07) * invDet,
    (a32 * b02 - a30 * b05 - a33 * b01) * invDet,
    (a20 * b05 - a22 * b02 + a23 * b01) * invDet,
    (a10 * b10 - a11 * b08 + a13 * b06) * invDet,
    (a01 * b08 - a00 * b10 - a03 * b06) * invDet,
    (a30 * b04 - a31 * b02 + a33 * b00) * invDet,
    (a21 * b02 - a20 * b04 - a23 * b00) * invDet,
    (a11 * b07 - a10 * b09 - a12 * b06) * invDet,
    (a00 * b09 - a01 * b07 + a02 * b06) * invDet,
    (a31 * b01 - a30 * b03 - a32 * b00) * invDet,
    (a20 * b03 - a21 * b01 + a22 * b00) * invDet
  );
}
`;
	//#endregion
	//#region src/strands/strands_FES.js
	function internalError(errorMessage) {
		const prefixedMessage = `[p5.strands internal error]: ${errorMessage}`;
		throw new Error(prefixedMessage);
	}
	function userError(errorType, errorMessage) {
		const prefixedMessage = `[p5.strands ${errorType}]: ${errorMessage}`;
		throw new Error(prefixedMessage);
	}
	function dimensionMismatchError(declaredDim, actualDim, varName) {
		userError("dimension mismatch", `Cannot assign a value of dimension ${actualDim} to \`${varName}\`, which expects dimension ${declaredDim}.`);
	}
	//#endregion
	//#region src/strands/ir_dag.js
	function getOrCreateNode(graph, node) {
		return createNode(graph, node);
	}
	function createNodeData(data = {}) {
		const node = {
			nodeType: data.nodeType ?? null,
			baseType: data.baseType ?? null,
			dimension: data.dimension ?? null,
			opCode: data.opCode ?? null,
			value: data.value ?? null,
			identifier: data.identifier ?? null,
			statementType: data.statementType ?? null,
			swizzle: data.swizzle ?? null,
			dependsOn: Array.isArray(data.dependsOn) ? data.dependsOn : [],
			usedBy: Array.isArray(data.usedBy) ? data.usedBy : [],
			phiBlocks: Array.isArray(data.phiBlocks) ? data.phiBlocks : []
		};
		validateNode(node);
		return node;
	}
	function getNodeDataFromID(graph, id) {
		return {
			id,
			nodeType: graph.nodeTypes[id],
			opCode: graph.opCodes[id],
			value: graph.values[id],
			identifier: graph.identifiers[id],
			dependsOn: graph.dependsOn[id],
			usedBy: graph.usedBy[id],
			phiBlocks: graph.phiBlocks[id],
			dimension: graph.dimensions[id],
			baseType: graph.baseTypes[id],
			statementType: graph.statementTypes[id],
			swizzle: graph.swizzles[id]
		};
	}
	function extractNodeTypeInfo(dag, nodeID) {
		return {
			baseType: dag.baseTypes[nodeID],
			dimension: dag.dimensions[nodeID],
			priority: BasePriority[dag.baseTypes[nodeID]]
		};
	}
	function createNode(graph, node) {
		const id = graph.nextID++;
		graph.nodeTypes[id] = node.nodeType;
		graph.opCodes[id] = node.opCode;
		graph.values[id] = node.value;
		graph.identifiers[id] = node.identifier;
		graph.dependsOn[id] = node.dependsOn.slice();
		graph.usedBy[id] = node.usedBy;
		graph.phiBlocks[id] = node.phiBlocks.slice();
		graph.baseTypes[id] = node.baseType;
		graph.dimensions[id] = node.dimension;
		graph.statementTypes[id] = node.statementType;
		graph.swizzles[id] = node.swizzle;
		for (const dep of node.dependsOn) {
			if (!Array.isArray(graph.usedBy[dep])) graph.usedBy[dep] = [];
			graph.usedBy[dep].push(id);
		}
		return id;
	}
	function validateNode(node) {
		const nodeType = node.nodeType;
		const requiredFields = NodeTypeRequiredFields[nodeType];
		if (requiredFields.length === 2) internalError(`Required fields for node type '${NodeTypeToName[nodeType]}' not defined. Please add them to the utils.js file in p5.strands!`);
		const missingFields = [];
		for (const field of requiredFields) if (node[field] === null) missingFields.push(field);
		if (node.dependsOn?.some((v) => v === void 0)) throw new Error("Undefined dependency!");
		if (missingFields.length > 0) internalError(`Missing fields ${missingFields.join(", ")} for a node type '${NodeTypeToName[nodeType]}'.`);
	}
	//#endregion
	//#region src/strands/ir_cfg.js
	function recordInBasicBlock(graph, blockID, nodeID) {
		if (nodeID === void 0) internalError("undefined nodeID in `recordInBasicBlock()`");
		if (blockID === void 0) internalError("undefined blockID in `recordInBasicBlock()");
		graph.blockInstructions[blockID] = graph.blockInstructions[blockID] || [];
		graph.blockInstructions[blockID].push(nodeID);
	}
	//#endregion
	//#region src/strands/strands_node.js
	var StrandsNode = class {
		constructor(id, dimension, strandsContext) {
			this.id = id;
			this.strandsContext = strandsContext;
			this.dimension = dimension;
			this.structProperties = null;
			this._schema = null;
			this.isStrandsNode = true;
			const dag = this.strandsContext.dag;
			const nodeData = getNodeDataFromID(dag, this.id);
			if (nodeData && nodeData.identifier) this._originalIdentifier = nodeData.identifier;
			if (nodeData) {
				this._originalBaseType = nodeData.baseType;
				this._originalDimension = nodeData.dimension;
			}
		}
		withStructProperties(properties) {
			this.structProperties = properties;
			return this;
		}
		copy() {
			return createStrandsNode(this.id, this.dimension, this.strandsContext);
		}
		typeInfo() {
			return {
				baseType: this._originalBaseType || BaseType.FLOAT,
				dimension: this.dimension
			};
		}
		bridge(value) {
			const { dag, cfg } = this.strandsContext;
			const baseType = getNodeDataFromID(dag, this.id)?.baseType ?? BaseType.FLOAT;
			let newValueID;
			if (value?.isStrandsNode) newValueID = value.id;
			else newValueID = primitiveConstructorNode(this.strandsContext, {
				baseType,
				dimension: this.dimension
			}, value).id;
			if (this._originalIdentifier) {
				const valueDim = value?.isStrandsNode ? value.dimension : Array.isArray(value) ? value.length : 1;
				if (valueDim !== this._originalDimension && valueDim !== 1) dimensionMismatchError(this._originalDimension, valueDim, this._originalIdentifier);
				const { id: targetVarID } = variableNode(this.strandsContext, {
					baseType: this._originalBaseType,
					dimension: this._originalDimension
				}, this._originalIdentifier);
				const assignmentID = getOrCreateNode(dag, createNodeData({
					nodeType: NodeType.ASSIGNMENT,
					dependsOn: [targetVarID, newValueID],
					phiBlocks: []
				}));
				recordInBasicBlock(cfg, cfg.currentBlock, assignmentID);
				const variableID = getOrCreateNode(dag, createNodeData({
					nodeType: NodeType.VARIABLE,
					baseType: this._originalBaseType,
					dimension: this._originalDimension,
					identifier: this._originalIdentifier
				}));
				this.id = variableID;
			} else this.id = newValueID;
			return this;
		}
		bridgeSwizzle(swizzlePattern, value) {
			const { dag, cfg } = this.strandsContext;
			const baseType = getNodeDataFromID(dag, this.id)?.baseType ?? BaseType.FLOAT;
			let newValueID;
			if (value?.isStrandsNode) newValueID = value.id;
			else newValueID = primitiveConstructorNode(this.strandsContext, {
				baseType,
				dimension: this.dimension
			}, value).id;
			if (this._originalIdentifier) {
				const valueDim = value?.isStrandsNode ? value.dimension : Array.isArray(value) ? value.length : 1;
				if (valueDim !== swizzlePattern.length && valueDim !== 1) dimensionMismatchError(swizzlePattern.length, valueDim, `${this._originalIdentifier}.${swizzlePattern}`);
				const { id: targetVarID } = variableNode(this.strandsContext, {
					baseType: this._originalBaseType,
					dimension: this._originalDimension
				}, this._originalIdentifier);
				const swizzleID = getOrCreateNode(dag, createNodeData({
					nodeType: NodeType.OPERATION,
					opCode: OpCode.Unary.SWIZZLE,
					baseType: this._originalBaseType,
					dimension: swizzlePattern.length,
					swizzle: swizzlePattern,
					dependsOn: [targetVarID]
				}));
				const assignmentID = getOrCreateNode(dag, createNodeData({
					nodeType: NodeType.ASSIGNMENT,
					dependsOn: [swizzleID, newValueID],
					phiBlocks: []
				}));
				recordInBasicBlock(cfg, cfg.currentBlock, assignmentID);
				const variableID = getOrCreateNode(dag, createNodeData({
					nodeType: NodeType.VARIABLE,
					baseType: this._originalBaseType,
					dimension: this._originalDimension,
					identifier: this._originalIdentifier
				}));
				this.id = variableID;
			} else this.id = newValueID;
			return this;
		}
		getValue() {
			if (this._originalIdentifier) {
				const { id, dimension } = variableNode(this.strandsContext, {
					baseType: this._originalBaseType,
					dimension: this._originalDimension
				}, this._originalIdentifier);
				return createStrandsNode(id, dimension, this.strandsContext);
			}
			return this;
		}
		get(index) {
			if (getNodeDataFromID(this.strandsContext.dag, this.id).baseType === "storage" && this._schema) return createStructArrayElementProxy(this.strandsContext, this, index, this._schema);
			const { id, dimension } = arrayAccessNode(this.strandsContext, this, index, "read");
			return createStrandsNode(id, dimension, this.strandsContext);
		}
		set(index, value) {
			if (getNodeDataFromID(this.strandsContext.dag, this.id).baseType !== "storage") throw new Error("set() can only be used on storage buffers");
			if (!this._originalIdentifier) throw new Error("set() can only be used on storage buffers with an identifier");
			if (value !== null && typeof value === "object" && !value.isStrandsNode && this._schema) {
				const proxy = createStructArrayElementProxy(this.strandsContext, this, index, this._schema);
				for (const [fieldName, fieldValue] of Object.entries(value)) proxy[fieldName] = fieldValue;
				return this;
			}
			arrayAssignmentNode(this.strandsContext, this, index, value);
			return this;
		}
	};
	function createStrandsNode(id, dimension, strandsContext, onRebind) {
		return new Proxy(new StrandsNode(id, dimension, strandsContext), swizzleTrap(id, dimension, strandsContext, onRebind));
	}
	const strandsBuiltinFunctions = {
		acos: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		acosh: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		asin: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		asinh: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		atan: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}, {
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		atanh: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		cos: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		cosh: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		degrees: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		radians: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		sin: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		sinh: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		tan: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		tanh: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		abs: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}, {
			params: [GenType.FLOAT],
			returnType: GenType.INT,
			isp5Function: true
		}],
		ceil: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		clamp: [
			{
				params: [
					GenType.FLOAT,
					GenType.FLOAT,
					GenType.FLOAT
				],
				returnType: GenType.FLOAT,
				isp5Function: false
			},
			{
				params: [
					GenType.FLOAT,
					DataType.float1,
					DataType.float1
				],
				returnType: GenType.FLOAT,
				isp5Function: false
			},
			{
				params: [
					GenType.INT,
					GenType.INT,
					GenType.INT
				],
				returnType: GenType.INT,
				isp5Function: false
			},
			{
				params: [
					GenType.INT,
					DataType.int1,
					DataType.int1
				],
				returnType: GenType.INT,
				isp5Function: false
			}
		],
		dFdx: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		dFdy: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		exp: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		exp2: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		floor: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		fma: [{
			params: [
				GenType.FLOAT,
				GenType.FLOAT,
				GenType.FLOAT
			],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		fract: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		fwidth: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		inversesqrt: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		log: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		log2: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		max: [
			{
				params: [GenType.FLOAT, GenType.FLOAT],
				returnType: GenType.FLOAT,
				isp5Function: true
			},
			{
				params: [GenType.FLOAT, DataType.float1],
				returnType: GenType.FLOAT,
				isp5Function: true
			},
			{
				params: [GenType.INT, GenType.INT],
				returnType: GenType.INT,
				isp5Function: true
			},
			{
				params: [GenType.INT, DataType.int1],
				returnType: GenType.INT,
				isp5Function: true
			}
		],
		min: [
			{
				params: [GenType.FLOAT, GenType.FLOAT],
				returnType: GenType.FLOAT,
				isp5Function: true
			},
			{
				params: [GenType.FLOAT, DataType.float1],
				returnType: GenType.FLOAT,
				isp5Function: true
			},
			{
				params: [GenType.INT, GenType.INT],
				returnType: GenType.INT,
				isp5Function: true
			},
			{
				params: [GenType.INT, DataType.int1],
				returnType: GenType.INT,
				isp5Function: true
			}
		],
		mix: [
			{
				params: [
					GenType.FLOAT,
					GenType.FLOAT,
					GenType.FLOAT
				],
				returnType: GenType.FLOAT,
				isp5Function: false
			},
			{
				params: [
					GenType.FLOAT,
					GenType.FLOAT,
					DataType.float1
				],
				returnType: GenType.FLOAT,
				isp5Function: false
			},
			{
				params: [
					GenType.FLOAT,
					GenType.FLOAT,
					GenType.BOOL
				],
				returnType: GenType.FLOAT,
				isp5Function: false
			}
		],
		mod: [{
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}, {
			params: [GenType.FLOAT, DataType.float1],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		pow: [{
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		round: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		roundEven: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		sign: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}, {
			params: [GenType.INT],
			returnType: GenType.INT,
			isp5Function: false
		}],
		smoothstep: [{
			params: [
				GenType.FLOAT,
				GenType.FLOAT,
				GenType.FLOAT
			],
			returnType: GenType.FLOAT,
			isp5Function: false
		}, {
			params: [
				DataType.float1,
				DataType.float1,
				GenType.FLOAT
			],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		sqrt: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		step: [{
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		trunc: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		cross: [{
			params: [DataType.float3, DataType.float3],
			returnType: DataType.float3,
			isp5Function: true
		}],
		distance: [{
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: DataType.float1,
			isp5Function: true
		}],
		dot: [{
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: DataType.float1,
			isp5Function: true
		}],
		equal: [
			{
				params: [GenType.FLOAT, GenType.FLOAT],
				returnType: GenType.BOOL,
				isp5Function: false
			},
			{
				params: [GenType.INT, GenType.INT],
				returnType: GenType.BOOL,
				isp5Function: false
			},
			{
				params: [GenType.BOOL, GenType.BOOL],
				returnType: GenType.BOOL,
				isp5Function: false
			}
		],
		faceforward: [{
			params: [
				GenType.FLOAT,
				GenType.FLOAT,
				GenType.FLOAT
			],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		length: [{
			params: [GenType.FLOAT],
			returnType: DataType.float1,
			isp5Function: false
		}],
		normalize: [{
			params: [GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: true
		}],
		notEqual: [
			{
				params: [GenType.FLOAT, GenType.FLOAT],
				returnType: GenType.BOOL,
				isp5Function: false
			},
			{
				params: [GenType.INT, GenType.INT],
				returnType: GenType.BOOL,
				isp5Function: false
			},
			{
				params: [GenType.BOOL, GenType.BOOL],
				returnType: GenType.BOOL,
				isp5Function: false
			}
		],
		reflect: [{
			params: [GenType.FLOAT, GenType.FLOAT],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		refract: [{
			params: [
				GenType.FLOAT,
				GenType.FLOAT,
				DataType.float1
			],
			returnType: GenType.FLOAT,
			isp5Function: false
		}],
		inverse: [
			{
				params: [DataType.mat2],
				returnType: DataType.mat2,
				isp5Function: false
			},
			{
				params: [DataType.mat3],
				returnType: DataType.mat3,
				isp5Function: false
			},
			{
				params: [DataType.mat4],
				returnType: DataType.mat4,
				isp5Function: false
			}
		],
		transpose: [
			{
				params: [DataType.mat2],
				returnType: DataType.mat2,
				isp5Function: false
			},
			{
				params: [DataType.mat3],
				returnType: DataType.mat3,
				isp5Function: false
			},
			{
				params: [DataType.mat4],
				returnType: DataType.mat4,
				isp5Function: false
			}
		]
	};
	//#endregion
	//#region src/strands/ir_builders.js
	function scalarLiteralNode(strandsContext, typeInfo, value) {
		const { cfg, dag } = strandsContext;
		let { dimension, baseType } = typeInfo;
		if (dimension !== 1) internalError("Created a scalar literal node with dimension > 1.");
		const id = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.LITERAL,
			dimension,
			baseType,
			value
		}));
		recordInBasicBlock(cfg, cfg.currentBlock, id);
		return {
			id,
			dimension
		};
	}
	function variableNode(strandsContext, typeInfo, identifier) {
		const { cfg, dag } = strandsContext;
		const { dimension, baseType } = typeInfo;
		const id = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.VARIABLE,
			dimension,
			baseType,
			identifier
		}));
		recordInBasicBlock(cfg, cfg.currentBlock, id);
		return {
			id,
			dimension
		};
	}
	function mapPrimitiveDepsToIDs(strandsContext, typeInfo, dependsOn) {
		const inputs = Array.isArray(dependsOn) ? dependsOn : [dependsOn];
		const mappedDependencies = [];
		let { dimension, baseType } = typeInfo;
		const dag = strandsContext.dag;
		let calculatedDimensions = 0;
		let originalNodeID = null;
		for (const dep of inputs.flat(Infinity)) if (dep && dep.isStrandsNode) {
			const node = getNodeDataFromID(dag, dep.id);
			originalNodeID = dep.id;
			baseType = node.baseType;
			if (node.opCode === OpCode.Nary.CONSTRUCTOR) for (const inner of node.dependsOn) mappedDependencies.push(inner);
			else mappedDependencies.push(dep.id);
			calculatedDimensions += node.dimension;
			continue;
		} else if (typeof dep === "number") {
			const { id, dimension } = scalarLiteralNode(strandsContext, {
				dimension: 1,
				baseType
			}, dep);
			mappedDependencies.push(id);
			calculatedDimensions += dimension;
			continue;
		} else if (typeof dep === "boolean") {
			const { id, dimension } = scalarLiteralNode(strandsContext, {
				dimension: 1,
				baseType: BaseType.BOOL
			}, dep);
			mappedDependencies.push(id);
			calculatedDimensions += dimension;
			if (baseType !== BaseType.BOOL) baseType = BaseType.BOOL;
			continue;
		} else userError("type error", `You've tried to construct a scalar or vector type with a non-numeric value: ${dep}`);
		if (dimension === null) dimension = calculatedDimensions;
		else if (dimension > calculatedDimensions && calculatedDimensions === 1) calculatedDimensions = dimension;
		else if (calculatedDimensions !== 1 && calculatedDimensions !== dimension) userError("type error", `You've tried to construct a ${baseType + dimension} with ${calculatedDimensions} components`);
		const inferredTypeInfo = {
			dimension,
			baseType,
			priority: BasePriority[baseType]
		};
		return {
			originalNodeID,
			mappedDependencies,
			inferredTypeInfo
		};
	}
	function constructTypeFromIDs(strandsContext, typeInfo, strandsNodesArray) {
		const nodeData = createNodeData({
			nodeType: NodeType.OPERATION,
			opCode: OpCode.Nary.CONSTRUCTOR,
			dimension: typeInfo.dimension,
			baseType: typeInfo.baseType,
			dependsOn: strandsNodesArray
		});
		return getOrCreateNode(strandsContext.dag, nodeData);
	}
	function primitiveConstructorNode(strandsContext, typeInfo, dependsOn) {
		const cfg = strandsContext.cfg;
		dependsOn = (Array.isArray(dependsOn) ? dependsOn : [dependsOn]).flat(Infinity).map((a) => {
			if (a.isStrandsNode && a.typeInfo().baseType === BaseType.INT && a.typeInfo().dimension === 1) return castToFloat(strandsContext, a);
			else return a;
		});
		const { mappedDependencies, inferredTypeInfo } = mapPrimitiveDepsToIDs(strandsContext, typeInfo, dependsOn);
		const finalType = {
			baseType: inferredTypeInfo.baseType === BaseType.BOOL ? BaseType.BOOL : typeInfo.baseType,
			dimension: inferredTypeInfo.dimension
		};
		const id = constructTypeFromIDs(strandsContext, finalType, mappedDependencies);
		if (typeInfo.baseType !== BaseType.DEFER) recordInBasicBlock(cfg, cfg.currentBlock, id);
		return {
			id,
			dimension: finalType.dimension,
			components: mappedDependencies
		};
	}
	function castToFloat(strandsContext, dep) {
		const { id, dimension } = functionCallNode(strandsContext, strandsContext.backend.getTypeName("float", dep.typeInfo().dimension), [dep], { overloads: [{
			params: [dep.typeInfo()],
			returnType: {
				...dep.typeInfo(),
				baseType: BaseType.FLOAT
			}
		}] });
		return createStrandsNode(id, dimension, strandsContext);
	}
	function functionCallNode(strandsContext, functionName, rawUserArgs, { overloads: rawOverloads } = {}) {
		const { cfg, dag } = strandsContext;
		const overloads = rawOverloads || strandsBuiltinFunctions[functionName];
		const preprocessedArgs = rawUserArgs.map((rawUserArg) => mapPrimitiveDepsToIDs(strandsContext, DataType.defer, rawUserArg));
		const matchingArgsCounts = overloads.filter((overload) => overload.params.length === preprocessedArgs.length);
		if (matchingArgsCounts.length === 0) {
			const argsLengthSet = /* @__PURE__ */ new Set();
			const argsLengthArr = [];
			overloads.forEach((overload) => argsLengthSet.add(overload.params.length));
			argsLengthSet.forEach((len) => argsLengthArr.push(`${len}`));
			const argsLengthStr = argsLengthArr.join(", or ");
			userError("parameter validation error", `Function '${functionName}' has ${overloads.length} variants which expect ${argsLengthStr} arguments, but ${preprocessedArgs.length} arguments were provided.`);
		}
		const isGeneric = (T) => T.dimension === null;
		let bestOverload = null;
		let bestScore = 0;
		let inferredReturnType = null;
		let inferredDimension = null;
		for (const overload of matchingArgsCounts) {
			let isValid = true;
			let similarity = 0;
			for (let i = 0; i < preprocessedArgs.length; i++) {
				const argType = preprocessedArgs[i].inferredTypeInfo;
				const expectedType = overload.params[i];
				let dimension = expectedType.dimension;
				if (isGeneric(expectedType)) {
					if (inferredDimension === null || inferredDimension === 1) inferredDimension = argType.dimension;
					if (inferredDimension !== argType.dimension && !(argType.dimension === 1 && inferredDimension >= 1)) isValid = false;
					dimension = inferredDimension;
				} else if (argType.dimension > dimension) isValid = false;
				if (argType.baseType === expectedType.baseType) similarity += 2;
				else if (expectedType.priority > argType.priority) similarity += 1;
			}
			if (isValid && (!bestOverload || similarity > bestScore)) {
				bestOverload = overload;
				bestScore = similarity;
				inferredReturnType = { ...overload.returnType };
				if (isGeneric(inferredReturnType)) inferredReturnType.dimension = inferredDimension;
			}
		}
		if (bestOverload === null) userError("parameter validation", `No matching overload for ${functionName} was found!`);
		let dependsOn = [];
		for (let i = 0; i < bestOverload.params.length; i++) {
			const arg = preprocessedArgs[i];
			const paramType = { ...bestOverload.params[i] };
			if (isGeneric(paramType)) paramType.dimension = inferredDimension;
			if (arg.originalNodeID && typeEquals(arg.inferredTypeInfo, paramType)) dependsOn.push(arg.originalNodeID);
			else {
				const castedArgID = constructTypeFromIDs(strandsContext, paramType, arg.mappedDependencies);
				recordInBasicBlock(cfg, cfg.currentBlock, castedArgID);
				dependsOn.push(castedArgID);
			}
		}
		const id = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.OPERATION,
			opCode: OpCode.Nary.FUNCTION_CALL,
			identifier: functionName,
			dependsOn,
			baseType: inferredReturnType.baseType,
			dimension: inferredReturnType.dimension
		}));
		recordInBasicBlock(cfg, cfg.currentBlock, id);
		return {
			id,
			dimension: inferredReturnType.dimension
		};
	}
	function swizzleNode(strandsContext, parentNode, swizzle) {
		const { dag, cfg } = strandsContext;
		const baseType = dag.baseTypes[parentNode.id];
		const id = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.OPERATION,
			baseType,
			dimension: swizzle.length,
			opCode: OpCode.Unary.SWIZZLE,
			dependsOn: [parentNode.id],
			swizzle
		}));
		recordInBasicBlock(cfg, cfg.currentBlock, id);
		return {
			id,
			dimension: swizzle.length
		};
	}
	function swizzleTrap(id, dimension, strandsContext, onRebind) {
		const swizzleSets = [
			[
				"x",
				"y",
				"z",
				"w"
			],
			[
				"r",
				"g",
				"b",
				"a"
			],
			[
				"s",
				"t",
				"p",
				"q"
			]
		].map((s) => s.slice(0, dimension));
		return {
			get(target, property, receiver) {
				if (property in target) return Reflect.get(...arguments);
				else for (const set of swizzleSets) if ([...property.toString()].every((char) => set.includes(char))) {
					const node = swizzleNode(strandsContext, target, [...property].map((char) => {
						const index = set.indexOf(char);
						return swizzleSets[0][index];
					}).join(""));
					return createStrandsNode(node.id, node.dimension, strandsContext);
				}
			},
			set(target, property, value, receiver) {
				for (const swizzleSet of swizzleSets) {
					const chars = [...property];
					if (!(chars.every((c) => swizzleSet.includes(c)) && new Set(chars).size === chars.length && target.dimension >= chars.length)) continue;
					const dim = target.dimension;
					const lanes = new Array(dim);
					for (let i = 0; i < dim; i++) {
						const { id, dimension } = swizzleNode(strandsContext, target, "xyzw"[i]);
						lanes[i] = createStrandsNode(id, dimension, strandsContext);
					}
					let scalars = [];
					if (value?.isStrandsNode) {
						if (value.dimension === 1) scalars = Array(chars.length).fill(value);
						else if (value.dimension === chars.length) for (let k = 0; k < chars.length; k++) {
							const { id, dimension } = swizzleNode(strandsContext, value, "xyzw"[k]);
							scalars.push(createStrandsNode(id, dimension, strandsContext));
						}
						else dimensionMismatchError(chars.length, value.dimension, `${target._originalIdentifier || "value"}.${property}`);
					} else if (Array.isArray(value)) {
						const flat = value.flat(Infinity);
						if (flat.length === 1) scalars = Array(chars.length).fill(flat[0]);
						else if (flat.length === chars.length) scalars = flat;
						else userError("type error", `Swizzle assignment: RHS length ${flat.length} does not match ${chars.length}.`);
					} else if (typeof value === "number") scalars = Array(chars.length).fill(value);
					else userError("type error", `Unsupported RHS for swizzle assignment: ${value}`);
					for (let j = 0; j < chars.length; j++) {
						const canonicalIndex = swizzleSet.indexOf(chars[j]);
						lanes[canonicalIndex] = scalars[j];
					}
					const { id: newID } = primitiveConstructorNode(strandsContext, {
						baseType: getNodeDataFromID(strandsContext.dag, target.id)?.baseType ?? BaseType.FLOAT,
						dimension: dim
					}, lanes);
					target.id = newID;
					if (typeof onRebind === "function") onRebind(newID);
					return true;
				}
				return Reflect.set(...arguments);
			}
		};
	}
	function arrayAccessNode(strandsContext, bufferNode, indexNode, accessMode) {
		const { dag, cfg } = strandsContext;
		let index;
		if (indexNode instanceof StrandsNode) index = indexNode;
		else {
			const { id, dimension } = primitiveConstructorNode(strandsContext, {
				baseType: BaseType.INT,
				dimension: 1
			}, indexNode);
			index = createStrandsNode(id, dimension, strandsContext);
		}
		const id = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.OPERATION,
			opCode: OpCode.Binary.ARRAY_ACCESS,
			dependsOn: [bufferNode.id, index.id],
			dimension: 1,
			baseType: BaseType.FLOAT,
			accessMode
		}));
		recordInBasicBlock(cfg, cfg.currentBlock, id);
		return {
			id,
			dimension: 1
		};
	}
	function createStructArrayElementProxy(strandsContext, bufferNode, indexNode, schema) {
		const { dag, cfg } = strandsContext;
		let index;
		if (indexNode instanceof StrandsNode) index = indexNode;
		else {
			const { id, dimension } = primitiveConstructorNode(strandsContext, {
				baseType: BaseType.INT,
				dimension: 1
			}, indexNode);
			index = createStrandsNode(id, dimension, strandsContext);
		}
		const proxy = {};
		for (const field of schema.fields) Object.defineProperty(proxy, field.name, {
			get() {
				const nodeData = createNodeData({
					nodeType: NodeType.OPERATION,
					opCode: OpCode.Binary.ARRAY_ACCESS,
					dependsOn: [bufferNode.id, index.id],
					dimension: field.dim,
					baseType: BaseType.FLOAT,
					identifier: field.name
				});
				const id = getOrCreateNode(dag, nodeData);
				recordInBasicBlock(cfg, cfg.currentBlock, id);
				const onRebind = (newFieldID) => {
					const accessData = createNodeData({
						nodeType: NodeType.OPERATION,
						opCode: OpCode.Binary.ARRAY_ACCESS,
						dependsOn: [bufferNode.id, index.id],
						dimension: field.dim,
						baseType: BaseType.FLOAT,
						identifier: field.name
					});
					const accessID = getOrCreateNode(dag, accessData);
					const assignData = createNodeData({
						nodeType: NodeType.ASSIGNMENT,
						dependsOn: [accessID, newFieldID],
						phiBlocks: []
					});
					const assignID = getOrCreateNode(dag, assignData);
					recordInBasicBlock(cfg, cfg.currentBlock, assignID);
				};
				return createStrandsNode(id, field.dim, strandsContext, onRebind);
			},
			set(val) {
				const accessData = createNodeData({
					nodeType: NodeType.OPERATION,
					opCode: OpCode.Binary.ARRAY_ACCESS,
					dependsOn: [bufferNode.id, index.id],
					dimension: field.dim,
					baseType: BaseType.FLOAT,
					identifier: field.name
				});
				const accessID = getOrCreateNode(dag, accessData);
				let valueID;
				if (val?.isStrandsNode) valueID = val.id;
				else {
					const { id } = primitiveConstructorNode(strandsContext, {
						baseType: BaseType.FLOAT,
						dimension: field.dim
					}, val);
					valueID = id;
				}
				const assignData = createNodeData({
					nodeType: NodeType.ASSIGNMENT,
					dependsOn: [accessID, valueID],
					phiBlocks: []
				});
				const assignID = getOrCreateNode(dag, assignData);
				recordInBasicBlock(cfg, cfg.currentBlock, assignID);
			},
			configurable: true
		});
		return proxy;
	}
	function arrayAssignmentNode(strandsContext, bufferNode, indexNode, valueNode) {
		const { dag, cfg } = strandsContext;
		let index;
		if (indexNode instanceof StrandsNode) index = indexNode;
		else {
			const { id, dimension } = primitiveConstructorNode(strandsContext, {
				baseType: BaseType.INT,
				dimension: 1
			}, indexNode);
			index = createStrandsNode(id, dimension, strandsContext);
		}
		let value;
		if (valueNode instanceof StrandsNode) value = valueNode.typeInfo().baseType !== BaseType.FLOAT ? castToFloat(strandsContext, valueNode) : valueNode;
		else {
			const { id, dimension } = primitiveConstructorNode(strandsContext, {
				baseType: BaseType.FLOAT,
				dimension: 1
			}, valueNode);
			value = createStrandsNode(id, dimension, strandsContext);
		}
		const arrayAccessID = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.OPERATION,
			opCode: OpCode.Binary.ARRAY_ACCESS,
			dependsOn: [bufferNode.id, index.id],
			dimension: 1,
			baseType: BaseType.FLOAT
		}));
		const assignmentID = getOrCreateNode(dag, createNodeData({
			nodeType: NodeType.ASSIGNMENT,
			dependsOn: [arrayAccessID, value.id],
			phiBlocks: []
		}));
		recordInBasicBlock(cfg, cfg.currentBlock, assignmentID);
		return { id: assignmentID };
	}
	//#endregion
	//#region src/webgpu/strands_wgslBackend.js
	function shouldCreateTemp(dag, nodeID) {
		if (dag.nodeTypes[nodeID] !== NodeType.OPERATION) return false;
		if (dag.baseTypes[nodeID] === BaseType.SAMPLER2D) return false;
		if (dag.opCodes[nodeID] === OpCode.Unary.SNAPSHOT) return true;
		return (dag.usedBy[nodeID] || []).length > 1;
	}
	const TypeNames = {
		float1: "f32",
		float2: "vec2<f32>",
		float3: "vec3<f32>",
		float4: "vec4<f32>",
		int1: "i32",
		int2: "vec2<i32>",
		int3: "vec3<i32>",
		int4: "vec4<i32>",
		bool1: "bool",
		bool2: "vec2<bool>",
		bool3: "vec3<bool>",
		bool4: "vec4<bool>",
		mat2: "mat2x2<f32>",
		mat3: "mat3x3<f32>",
		mat4: "mat4x4<f32>"
	};
	const cfgHandlers = {
		[BlockType.DEFAULT]: (blockID, strandsContext, generationContext) => {
			const { dag, cfg } = strandsContext;
			const instructions = cfg.blockInstructions[blockID] || [];
			for (const nodeID of instructions) {
				const nodeType = dag.nodeTypes[nodeID];
				if (shouldCreateTemp(dag, nodeID)) {
					const declaration = wgslBackend.generateDeclaration(generationContext, dag, nodeID);
					generationContext.write(declaration);
				}
				if (nodeType === NodeType.STATEMENT) wgslBackend.generateStatement(generationContext, dag, nodeID);
				if (nodeType === NodeType.ASSIGNMENT) {
					wgslBackend.generateAssignment(generationContext, dag, nodeID);
					generationContext.visitedNodes.add(nodeID);
				}
			}
		},
		[BlockType.BRANCH](blockID, strandsContext, generationContext) {
			const { dag, cfg } = strandsContext;
			const blockInstructions = cfg.blockInstructions[blockID] || [];
			for (const nodeID of blockInstructions) if (getNodeDataFromID(dag, nodeID).nodeType === NodeType.PHI) {
				const tmp = `T${generationContext.nextTempID++}`;
				generationContext.tempNames[nodeID] = tmp;
				const T = extractNodeTypeInfo(dag, nodeID);
				const typeName = wgslBackend.getTypeName(T.baseType, T.dimension);
				let defaultValue;
				if (T.dimension === 1) defaultValue = this.defaultScalarValue(T.baseType);
				else if (T.baseType === BaseType.MAT) defaultValue = `${typeName}()`;
				else {
					const scalarDefault = this.defaultScalarValue(T.baseType);
					defaultValue = `${typeName}(${Array(T.dimension).fill(scalarDefault).join(", ")})`;
				}
				generationContext.write(`var ${tmp}: ${typeName} = ${defaultValue};`);
			}
			this[BlockType.DEFAULT](blockID, strandsContext, generationContext);
		},
		defaultScalarValue(baseType) {
			if (baseType === BaseType.FLOAT) return "0.0";
			else if (baseType === BaseType.BOOL) return "false";
			else return "0";
		},
		[BlockType.IF_COND](blockID, strandsContext, generationContext) {
			const { dag, cfg } = strandsContext;
			const conditionID = cfg.blockConditions[blockID];
			const condExpr = wgslBackend.generateExpression(generationContext, dag, conditionID);
			generationContext.write(`if (${condExpr})`);
			this[BlockType.DEFAULT](blockID, strandsContext, generationContext);
		},
		[BlockType.ELSE_COND](blockID, strandsContext, generationContext) {
			generationContext.write(`else`);
			this[BlockType.DEFAULT](blockID, strandsContext, generationContext);
		},
		[BlockType.IF_BODY](blockID, strandsContext, generationContext) {
			this[BlockType.DEFAULT](blockID, strandsContext, generationContext);
			this.assignPhiNodeValues(blockID, strandsContext, generationContext);
		},
		[BlockType.SCOPE_START](blockID, strandsContext, generationContext) {
			generationContext.write(`{`);
			generationContext.indent++;
		},
		[BlockType.SCOPE_END](blockID, strandsContext, generationContext) {
			generationContext.indent--;
			generationContext.write(`}`);
		},
		[BlockType.MERGE](blockID, strandsContext, generationContext) {
			this[BlockType.DEFAULT](blockID, strandsContext, generationContext);
		},
		[BlockType.FUNCTION](blockID, strandsContext, generationContext) {
			this[BlockType.DEFAULT](blockID, strandsContext, generationContext);
		},
		[BlockType.FOR](blockID, strandsContext, generationContext) {
			const { dag, cfg } = strandsContext;
			const instructions = cfg.blockInstructions[blockID] || [];
			generationContext.write(`for (`);
			const originalSuppressSemicolon = generationContext.suppressSemicolon;
			for (let i = 0; i < instructions.length; i++) {
				const nodeID = instructions[i];
				const node = getNodeDataFromID(dag, nodeID);
				generationContext.suppressSemicolon = i === instructions.length - 1;
				if (shouldCreateTemp(dag, nodeID)) {
					const declaration = wgslBackend.generateDeclaration(generationContext, dag, nodeID);
					generationContext.write(declaration);
				}
				if (node.nodeType === NodeType.STATEMENT) wgslBackend.generateStatement(generationContext, dag, nodeID);
				if (node.nodeType === NodeType.ASSIGNMENT) {
					wgslBackend.generateAssignment(generationContext, dag, nodeID);
					generationContext.visitedNodes.add(nodeID);
				}
			}
			generationContext.suppressSemicolon = originalSuppressSemicolon;
			generationContext.write(`)`);
		},
		assignPhiNodeValues(blockID, strandsContext, generationContext) {
			const { dag, cfg } = strandsContext;
			const successors = cfg.outgoingEdges[blockID] || [];
			for (const successorBlockID of successors) {
				const instructions = cfg.blockInstructions[successorBlockID] || [];
				for (const nodeID of instructions) {
					const node = getNodeDataFromID(dag, nodeID);
					if (node.nodeType === NodeType.PHI) {
						const branchIndex = node.phiBlocks?.indexOf(blockID);
						if (branchIndex !== -1 && branchIndex < node.dependsOn.length) {
							const sourceNodeID = node.dependsOn[branchIndex];
							const tempName = generationContext.tempNames[nodeID];
							if (tempName && sourceNodeID !== null) {
								const sourceExpr = wgslBackend.generateExpression(generationContext, dag, sourceNodeID);
								generationContext.write(`${tempName} = ${sourceExpr};`);
							}
						}
					}
				}
			}
		}
	};
	const wgslBackend = {
		hookEntry(hookType) {
			const firstLine = `(${hookType.parameters.map((param) => {
				return `${param.type.properties ? `_p5_strands_raw_${param.name}` : `${HOOK_PARAM_PREFIX}${param.name}`}: ${param.type.typeName}`;
			}).join(", ")}) {`;
			const mutableCopies = hookType.parameters.filter((param) => param.type.properties).map((param) => `  var ${HOOK_PARAM_PREFIX}${param.name} = _p5_strands_raw_${param.name};`).join("\n");
			return mutableCopies ? firstLine + "\n" + mutableCopies : firstLine;
		},
		addTextureBindingsToDeclarations(strandsContext) {
			if (!strandsContext.renderer || !strandsContext.baseShader) return;
			let bindingIndex = strandsContext.renderer.getNextBindingIndex({
				vert: strandsContext.baseShader._vertSrc,
				frag: strandsContext.baseShader._fragSrc,
				compute: strandsContext.baseShader._computeSrc
			});
			for (const { name, typeInfo } of strandsContext.uniforms) if (typeInfo.baseType === "sampler2D") {
				const textureBinding = `@group(0) @binding(${bindingIndex}) var ${name}: texture_2d<f32>;`;
				const samplerBinding = `@group(0) @binding(${bindingIndex + 1}) var ${name}_sampler: sampler;`;
				strandsContext.vertexDeclarations.add(textureBinding);
				strandsContext.vertexDeclarations.add(samplerBinding);
				strandsContext.fragmentDeclarations.add(textureBinding);
				strandsContext.fragmentDeclarations.add(samplerBinding);
				bindingIndex += 2;
			}
		},
		addStorageBufferBindingsToDeclarations(strandsContext) {
			if (!strandsContext.renderer || !strandsContext.baseShader) return;
			const isComputeShader = strandsContext.baseShader.shaderType === "compute";
			let bindingIndex = strandsContext.renderer.getNextBindingIndex({
				vert: strandsContext.baseShader._vertSrc,
				frag: strandsContext.baseShader._fragSrc,
				compute: strandsContext.baseShader._computeSrc
			});
			for (const { name, typeInfo } of strandsContext.uniforms) if (typeInfo.baseType === "storage") {
				if (typeInfo.isStorageList) {
					this._addStorageListBindings(strandsContext, name, typeInfo, bindingIndex, isComputeShader);
					bindingIndex += 1;
				} else {
					const accessMode = isComputeShader ? "read_write" : "read";
					let declaration;
					if (typeInfo.schema) {
						const structTypeName = `${name}Element`;
						declaration = `struct ${structTypeName} ${typeInfo.schema.structBody}\n@group(0) @binding(${bindingIndex}) var<storage, ${accessMode}> ${name}: array<${structTypeName}>;`;
					} else declaration = `@group(0) @binding(${bindingIndex}) var<storage, ${accessMode}> ${name}: array<f32>;`;
					if (isComputeShader) strandsContext.computeDeclarations.add(declaration);
					else {
						strandsContext.vertexDeclarations.add(declaration);
						strandsContext.fragmentDeclarations.add(declaration);
					}
					bindingIndex += 1;
				}
			}
		},
		_addStorageListBindings(strandsContext, name, typeInfo, bindingIndex, isComputeShader) {
			const { schema, maxCapacity } = typeInfo;
			const elementTypeName = schema ? `${name}Element` : "f32";
			const elementTypeDecl = schema ? `struct ${elementTypeName} ${schema.structBody}\n` : "";
			if (isComputeShader) {
				const bufTypeName = `${name}_buf`;
				const bufDecl = `${elementTypeDecl}struct ${bufTypeName} { data: array<${elementTypeName}, ${maxCapacity}>, length: atomic<i32> }\n@group(0) @binding(${bindingIndex}) var<storage, read_write> ${name}: ${bufTypeName};`;
				const pushFn = `fn _p5_push_${name}(${schema ? `element: ${elementTypeName}` : `value: f32`}) {\n  let _idx = atomicAdd(&${name}.length, 1);\n  atomicMin(&${name}.length, ${maxCapacity});\n  if (_idx < ${maxCapacity}) { ${schema ? `${name}.data[_idx] = element;` : `${name}.data[_idx] = value;`} }\n}`;
				const popFn = `fn _p5_pop_${name}() -> ${schema ? elementTypeName : "f32"} {\n  let _idx = atomicSub(&${name}.length, 1);\n  atomicMax(&${name}.length, 0);\n  return ${name}.data[_idx - 1];\n}`;
				const lengthFn = `fn _p5_length_${name}() -> i32 {\n  return atomicLoad(&${name}.length);\n}`;
				strandsContext.computeDeclarations.add(bufDecl);
				strandsContext.computeDeclarations.add(pushFn);
				strandsContext.computeDeclarations.add(popFn);
				strandsContext.computeDeclarations.add(lengthFn);
			} else {
				const dataDecl = `${elementTypeDecl}@group(0) @binding(${bindingIndex}) var<storage, read> ${name}: array<${elementTypeName}>;`;
				strandsContext.vertexDeclarations.add(dataDecl);
				strandsContext.fragmentDeclarations.add(dataDecl);
			}
		},
		_storageListDataAccess(generationContext, bufferExpr) {
			if (generationContext.shaderContext !== "compute") return bufferExpr;
			const uniforms = generationContext.strandsContext?.uniforms;
			if (!uniforms) return bufferExpr;
			if (uniforms.find((u) => u.name === bufferExpr)?.typeInfo?.isStorageList) return `${bufferExpr}.data`;
			return bufferExpr;
		},
		getTypeName(baseType, dimension) {
			const primitiveTypeName = TypeNames[baseType + dimension];
			if (!primitiveTypeName) return baseType;
			return primitiveTypeName;
		},
		getNoiseShaderSnippet() {
			return noise3DWGSL_default;
		},
		getRandomFragmentShaderSnippet() {
			return randomWGSL_default;
		},
		getRandomVertexShaderSnippet() {
			return randomVertWGSL_default;
		},
		getRandomComputeShaderSnippet() {
			return randomComputeWGSL_default;
		},
		generateHookUniformKey(name, typeInfo) {
			if (typeInfo.baseType === "sampler2D") return `${name}: sampler2D`;
			if (typeInfo.baseType === "storage") return null;
			return `${name}: ${this.getTypeName(typeInfo.baseType, typeInfo.dimension)}`;
		},
		generateVaryingVariable(varName, typeInfo) {
			return `${varName}: ${this.getTypeName(typeInfo.baseType, typeInfo.dimension)}`;
		},
		generateLocalDeclaration(varName, typeInfo) {
			return `var<private> ${varName}: ${this.getTypeName(typeInfo.baseType, typeInfo.dimension)};`;
		},
		generateStatement(generationContext, dag, nodeID) {
			const node = getNodeDataFromID(dag, nodeID);
			const semicolon = generationContext.suppressSemicolon ? "" : ";";
			if (node.statementType === StatementType.DISCARD) generationContext.write(`discard${semicolon}`);
			else if (node.statementType === StatementType.BREAK) generationContext.write(`break${semicolon}`);
			else if (node.statementType === StatementType.EXPRESSION) {
				const exprNodeID = node.dependsOn[0];
				const expr = this.generateExpression(generationContext, dag, exprNodeID);
				generationContext.write(`${expr}${semicolon}`);
			} else if (node.statementType === StatementType.EMPTY) generationContext.write(semicolon);
			else if (node.statementType === StatementType.EARLY_RETURN) {
				if (node.dependsOn && node.dependsOn.length > 0) {
					const exprNodeID = node.dependsOn[0];
					const expr = this.generateExpression(generationContext, dag, exprNodeID);
					generationContext.write(`return ${expr}${semicolon}`);
				} else generationContext.write(`return${semicolon}`);
			}
		},
		generateAssignment(generationContext, dag, nodeID) {
			const node = getNodeDataFromID(dag, nodeID);
			const targetNodeID = node.dependsOn[0];
			const sourceNodeID = node.dependsOn[1];
			const targetNode = getNodeDataFromID(dag, targetNodeID);
			const semicolon = generationContext.suppressSemicolon ? "" : ";";
			if (targetNode.opCode === OpCode.Binary.ARRAY_ACCESS) {
				const [bufferID, indexID] = targetNode.dependsOn;
				const bufferExpr = this.generateExpression(generationContext, dag, bufferID);
				const indexExpr = this.generateExpression(generationContext, dag, indexID);
				const sourceExpr = this.generateExpression(generationContext, dag, sourceNodeID);
				const fieldSuffix = targetNode.identifier ? `.${targetNode.identifier}` : "";
				const accessExpr = this._storageListDataAccess(generationContext, bufferExpr);
				generationContext.write(`${accessExpr}[i32(${indexExpr})]${fieldSuffix} = ${sourceExpr}${semicolon}`);
				return;
			}
			if (targetNode.opCode === OpCode.Unary.SWIZZLE) {
				const parentID = targetNode.dependsOn[0];
				const parentNode = getNodeDataFromID(dag, parentID);
				const parentExpr = this.generateExpression(generationContext, dag, parentID);
				const swizzle = targetNode.swizzle;
				const parentDimension = parentNode.dimension;
				const sourceExpr = this.generateExpression(generationContext, dag, sourceNodeID);
				const componentMap = [];
				for (let i = 0; i < parentDimension; i++) componentMap[i] = {
					target: "self",
					index: i
				};
				const getComponentIndex = (char) => {
					if ("xyzw".includes(char)) return "xyzw".indexOf(char);
					if ("rgba".includes(char)) return "rgba".indexOf(char);
					return -1;
				};
				for (let i = 0; i < swizzle.length; i++) {
					const targetComponentIndex = getComponentIndex(swizzle[i]);
					if (targetComponentIndex >= 0 && targetComponentIndex < parentDimension) componentMap[targetComponentIndex] = {
						target: "rhs",
						index: i
					};
				}
				const vectorTypeName = this.getTypeName(parentNode.baseType, parentDimension);
				const components = componentMap.map(({ target, index }) => {
					return `${target === "self" ? parentExpr : sourceExpr}.${"xyzw"[index]}`;
				});
				generationContext.write(`${parentExpr} = ${vectorTypeName}(${components.join(", ")})${semicolon}`);
			} else {
				const targetExpr = this.generateExpression(generationContext, dag, targetNodeID);
				const sourceExpr = this.generateExpression(generationContext, dag, sourceNodeID);
				if (targetExpr && sourceExpr && targetExpr !== sourceExpr) generationContext.write(`${targetExpr} = ${sourceExpr}${semicolon}`);
			}
		},
		generateDeclaration(generationContext, dag, nodeID) {
			const expr = this.generateExpression(generationContext, dag, nodeID);
			const tmp = `T${generationContext.nextTempID++}`;
			generationContext.tempNames[nodeID] = tmp;
			const T = extractNodeTypeInfo(dag, nodeID);
			return `var ${tmp}: ${this.getTypeName(T.baseType, T.dimension)} = ${expr};`;
		},
		generateReturnStatement(strandsContext, generationContext, rootNodeID, returnType) {
			if (!returnType) {
				generationContext.write("return;");
				return;
			}
			const dag = strandsContext.dag;
			const rootNode = getNodeDataFromID(dag, rootNodeID);
			if (isStructType(returnType) && rootNode.identifier) {
				const structTypeInfo = returnType;
				for (let i = 0; i < structTypeInfo.properties.length; i++) {
					const prop = structTypeInfo.properties[i];
					const val = this.generateExpression(generationContext, dag, rootNode.dependsOn[i]);
					if (prop.name !== val) generationContext.write(`${rootNode.identifier}.${prop.name} = ${val};`);
				}
			}
			generationContext.write(`return ${this.generateExpression(generationContext, dag, rootNodeID)};`);
		},
		generateExpression(generationContext, dag, nodeID) {
			const node = getNodeDataFromID(dag, nodeID);
			if (generationContext.tempNames?.[nodeID]) return generationContext.tempNames[nodeID];
			switch (node.nodeType) {
				case NodeType.LITERAL: if (node.baseType === BaseType.FLOAT) return node.value.toFixed(4);
				else return node.value;
				case NodeType.VARIABLE: {
					if (generationContext.shaderContext && generationContext.strandsContext?.sharedVariables?.has(node.identifier)) {
						const sharedVar = generationContext.strandsContext.sharedVariables.get(node.identifier);
						if (generationContext.shaderContext === "vertex") sharedVar.usedInVertex = true;
						else if (generationContext.shaderContext === "fragment") sharedVar.usedInFragment = true;
					}
					if (node.identifier === this.instanceIdReference() && generationContext.shaderContext === "fragment") {
						generationContext.strandsContext._instanceIDUsedInFragment = true;
						return INSTANCE_ID_VARYING_NAME;
					}
					const uniform = generationContext.strandsContext?.uniforms?.find((uniform) => uniform.name === node.identifier);
					if (uniform && uniform.typeInfo.baseType !== "sampler2D" && uniform.typeInfo.baseType !== "storage") return `hooks.${node.identifier}`;
					return node.identifier;
				}
				case NodeType.OPERATION: {
					const useParantheses = node.usedBy.length > 0;
					if (node.opCode === OpCode.Nary.CONSTRUCTOR) {
						if (node.baseType === BaseType.SAMPLER2D) return this.generateExpression(generationContext, dag, node.dependsOn[0]);
						return `${this.getTypeName(node.baseType, node.dimension)}(${node.dependsOn.map((dep) => this.generateExpression(generationContext, dag, dep)).join(", ")})`;
					}
					if (node.opCode === OpCode.Nary.TERNARY) {
						const [condID, trueID, falseID] = node.dependsOn;
						const cond = this.generateExpression(generationContext, dag, condID);
						const trueExpr = this.generateExpression(generationContext, dag, trueID);
						return `select(${this.generateExpression(generationContext, dag, falseID)}, ${trueExpr}, ${cond})`;
					}
					if (node.opCode === OpCode.Nary.FUNCTION_CALL) {
						if (node.identifier === "mod" && node.dependsOn.length === 2) {
							const [leftID, rightID] = node.dependsOn;
							const left = this.generateExpression(generationContext, dag, leftID);
							const right = this.generateExpression(generationContext, dag, rightID);
							if (node.usedBy.length > 0) return `(${left} % ${right})`;
							else return `${left} % ${right}`;
						}
						if (node.identifier === "inverse") {
							const { vertexDeclarations, fragmentDeclarations, computeDeclarations } = generationContext.strandsContext;
							const declarationsByStage = {
								vertex: vertexDeclarations,
								fragment: fragmentDeclarations,
								compute: computeDeclarations
							};
							const stage = declarationsByStage[generationContext.shaderContext];
							for (const declarations of stage ? [stage] : Object.values(declarationsByStage)) declarations.add(inverseWGSL_default);
							const arg = this.generateExpression(generationContext, dag, node.dependsOn[0]);
							return `_p5_inverse_mat${node.dimension}(${arg})`;
						}
						if (node.identifier === "atan" && node.dependsOn.length === 2) return `atan2(${node.dependsOn.map((arg) => this.generateExpression(generationContext, dag, arg)).join(", ")})`;
						const functionArgs = node.dependsOn.map((arg) => this.generateExpression(generationContext, dag, arg));
						if (node.identifier === "random") {
							const ctx = generationContext.shaderContext;
							if (ctx === "fragment") functionArgs.push("_p5FragPos.xy");
							else if (ctx === "vertex") functionArgs.push("f32(_p5VertexId)");
							else if (ctx === "compute") functionArgs.push("_p5GlobalId");
						}
						return `${node.identifier}(${functionArgs.join(", ")})`;
					}
					if (node.opCode === OpCode.Binary.MEMBER_ACCESS) {
						const [lID, rID] = node.dependsOn;
						return `${this.generateExpression(generationContext, dag, lID)}.${this.generateExpression(generationContext, dag, rID)}`;
					}
					if (node.opCode === OpCode.Unary.SNAPSHOT) return this.generateExpression(generationContext, dag, node.dependsOn[0]);
					if (node.opCode === OpCode.Unary.SWIZZLE) {
						const parentID = node.dependsOn[0];
						return `${this.generateExpression(generationContext, dag, parentID)}.${node.swizzle}`;
					}
					if (node.opCode === OpCode.Binary.ARRAY_ACCESS) {
						const [bufferID, indexID] = node.dependsOn;
						const bufferExpr = this.generateExpression(generationContext, dag, bufferID);
						const indexExpr = this.generateExpression(generationContext, dag, indexID);
						const fieldSuffix = node.identifier ? `.${node.identifier}` : "";
						return `${this._storageListDataAccess(generationContext, bufferExpr)}[i32(${indexExpr})]${fieldSuffix}`;
					}
					if (node.dependsOn.length === 2) {
						const [lID, rID] = node.dependsOn;
						const left = this.generateExpression(generationContext, dag, lID);
						const right = this.generateExpression(generationContext, dag, rID);
						if (node.opCode === OpCode.Binary.MODULO) return `(${left} % ${right})`;
						const opSym = OpCodeToSymbol[node.opCode];
						if (useParantheses) return `(${left} ${opSym} ${right})`;
						else return `${left} ${opSym} ${right}`;
					}
					if (node.opCode === OpCode.Unary.LOGICAL_NOT || node.opCode === OpCode.Unary.NEGATE || node.opCode === OpCode.Unary.PLUS) {
						const [i] = node.dependsOn;
						const val = this.generateExpression(generationContext, dag, i);
						return `${OpCodeToSymbol[node.opCode]}${val}`;
					}
					return internalError(`Operation with opCode ${node.opCode} is not supported in expressions`);
				}
				case NodeType.PHI:
					if (node.identifier) return node.identifier;
					if (generationContext.tempNames?.[nodeID]) return generationContext.tempNames[nodeID];
					else {
						const validInputs = node.dependsOn.filter((id) => id !== null);
						if (validInputs.length > 0) return this.generateExpression(generationContext, dag, validInputs[0]);
						else throw new Error("No valid inputs for node");
					}
				case NodeType.ASSIGNMENT: return internalError(`ASSIGNMENT nodes should not be used as expressions`);
				default: return internalError(`${NodeTypeToName[node.nodeType]} code generation not implemented yet`);
			}
		},
		generateBlock(blockID, strandsContext, generationContext) {
			const type = strandsContext.cfg.blockTypes[blockID];
			(cfgHandlers[type] || cfgHandlers[BlockType.DEFAULT]).call(cfgHandlers, blockID, strandsContext, generationContext);
		},
		createGetTextureCall(strandsContext, args) {
			const textureArg = args[0];
			const coordsArg = args[1];
			const { dag } = strandsContext;
			const samplerIdentifier = getNodeDataFromID(dag, textureArg.id).identifier + "_sampler";
			const samplerVariable = variableNode(strandsContext, {
				baseType: BaseType.SAMPLER,
				dimension: 1
			}, samplerIdentifier);
			const samplerNode = createStrandsNode(samplerVariable.id, samplerVariable.dimension, strandsContext);
			const lodLiteral = scalarLiteralNode(strandsContext, {
				dimension: 1,
				baseType: BaseType.FLOAT
			}, 0);
			const { id, dimension } = functionCallNode(strandsContext, "textureSampleLevel", [
				textureArg,
				samplerNode,
				coordsArg,
				createStrandsNode(lodLiteral.id, lodLiteral.dimension, strandsContext)
			], { overloads: [{
				params: [
					DataType.sampler2D,
					DataType.sampler,
					DataType.float2,
					DataType.float1
				],
				returnType: DataType.float4
			}] });
			return {
				id,
				dimension
			};
		},
		instanceIdReference() {
			return "instanceID";
		},
		generateInstanceIDVarying() {
			return {
				name: INSTANCE_ID_VARYING_NAME,
				declaration: `${INSTANCE_ID_VARYING_NAME}: i32`,
				source: "i32(instanceID)",
				interpolation: "flat"
			};
		}
	};
	//#endregion
	//#region src/webgpu/shaders/filters/base.js
	const filterUniforms = `
// Group 0: Filter Properties
struct FilterUniforms {
  canvasSize: vec2<f32>,
  texelSize: vec2<f32>,
}

// Group 1: Model Transform
struct ModelUniforms {
  uModelViewMatrix: mat4x4<f32>,
}

// Group 2: Camera and Projection
struct CameraUniforms {
  uProjectionMatrix: mat4x4<f32>,
}

@group(0) @binding(0) var<uniform> filterParams: FilterUniforms;
@group(0) @binding(1) var tex0: texture_2d<f32>;
@group(0) @binding(2) var tex0_sampler: sampler;
@group(1) @binding(0) var<uniform> model: ModelUniforms;
@group(2) @binding(0) var<uniform> camera: CameraUniforms;
`;
	const baseFilterVertexShader = filterUniforms + `
struct VertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aTexCoord: vec2<f32>,
}

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) vTexCoord: vec2<f32>,
}

@vertex
fn main(input: VertexInput) -> VertexOutput {
  var output: VertexOutput;

  // transferring texcoords for the frag shader
  output.vTexCoord = input.aTexCoord;

  // copy position with a fourth coordinate for projection (1.0 is normal)
  let positionVec4 = vec4<f32>(input.aPosition, 1.0);

  // project to 3D space
  output.position = camera.uProjectionMatrix * model.uModelViewMatrix * positionVec4;

  return output;
}
`;
	const baseFilterFragmentShader = filterUniforms + `
struct FilterInputs {
  texCoord: vec2<f32>,
  canvasSize: vec2<f32>,
  texelSize: vec2<f32>,
}

struct FragmentInput {
  @location(0) vTexCoord: vec2<f32>,
}

struct FragmentOutput {
  @location(0) color: vec4<f32>,
}

@fragment
fn main(input: FragmentInput) -> FragmentOutput {
  var output: FragmentOutput;
  var inputs: FilterInputs;
  inputs.texCoord = input.vTexCoord;
  inputs.canvasSize = filterParams.canvasSize;
  inputs.texelSize = filterParams.texelSize;

  var outColor = HOOK_getColor(inputs, tex0, tex0_sampler);
  outColor = vec4<f32>(outColor.rgb * outColor.a, outColor.a);
  output.color = outColor;

  return output;
}
`;
	//#endregion
	//#region src/webgpu/shaders/imageLight.js
	const uniforms = `
struct Uniforms {
  uModelViewMatrix: mat4x4<f32>,
  uProjectionMatrix: mat4x4<f32>,
  uNormalMatrix: mat3x3<f32>,
  roughness: f32,
};
`;
	const sharedFunctions = `
const PI = 3.14159265359;

fn nTOE(v: vec3<f32>) -> vec2<f32> {
  // x = r sin(phi) cos(theta)
  // y = r cos(phi)
  // z = r sin(phi) sin(theta)
  let phi = acos(v.y);
  // if phi is 0, then there are no x, z components
  var theta = 0.0;
  // else
  theta = acos(v.x / sin(phi));
  let sinTheta = v.z / sin(phi);
  if (sinTheta < 0.0) {
    // Turn it into -theta, but in the 0-2PI range
    theta = 2.0 * PI - theta;
  }
  theta = theta / (2.0 * PI);
  let phiNorm = phi / PI;

  return vec2<f32>(phiNorm, theta);
}

fn random(p: vec2<f32>) -> f32 {
  let p3 = fract(vec3<f32>(p.x, p.y, p.x) * 0.1031);
  let dotP3 = dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
`;
	const imageLightVertexShader = `
struct VertexInput {
  @location(0) aPosition: vec3<f32>,
  @location(1) aNormal: vec3<f32>,
  @location(2) aTexCoord: vec2<f32>,
}

struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
  @location(0) localPos: vec3<f32>,
  @location(1) vWorldNormal: vec3<f32>,
  @location(2) vWorldPosition: vec3<f32>,
  @location(3) vTexCoord: vec2<f32>,
}

${uniforms}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;

@vertex
fn main(input: VertexInput) -> VertexOutput {
  var output: VertexOutput;

  // Multiply the position by the matrix
  let viewModelPosition = uniforms.uModelViewMatrix * vec4<f32>(input.aPosition, 1.0);
  output.Position = uniforms.uProjectionMatrix * viewModelPosition;

  // Orient the normals and pass to the fragment shader
  output.vWorldNormal = uniforms.uNormalMatrix * input.aNormal;

  // Send the view position to the fragment shader
  output.vWorldPosition = viewModelPosition.xyz;

  output.localPos = output.vWorldPosition;
  output.vTexCoord = input.aTexCoord;

  return output;
}
`;
	const imageLightDiffusedFragmentShader = `
struct FragmentInput {
  @location(0) localPos: vec3<f32>,
  @location(3) vTexCoord: vec2<f32>,
}

${uniforms}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var environmentMap: texture_2d<f32>;
@group(0) @binding(2) var environmentMap_sampler: sampler;

${sharedFunctions}

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
  // The sample direction equals the hemisphere's orientation
  let phi = input.vTexCoord.x * 2.0 * PI;
  let theta = input.vTexCoord.y * PI;
  let x = sin(theta) * cos(phi);
  let y = sin(theta) * sin(phi);
  let z = cos(theta);
  let normal = vec3<f32>(x, y, z);

  // Discretely sampling the hemisphere given the integral's
  // spherical coordinates translates to the following fragment code:
  var irradiance = vec3<f32>(0.0);
  let up = vec3<f32>(0.0, 1.0, 0.0);
  let right = normalize(cross(up, normal));
  let upNorm = normalize(cross(normal, right));

  // We specify a fixed sampleDelta delta value to traverse
  // the hemisphere; decreasing or increasing the sample delta
  // will increase or decrease the accuracy respectively.
  let sampleDelta = 0.100;
  var nrSamples = 0.0;
  let randomOffset = random(input.vTexCoord) * sampleDelta;

  for (var rawPhi = 0.0; rawPhi < 2.0 * PI; rawPhi += sampleDelta) {
    let phiSample = rawPhi + randomOffset;
    for (var rawTheta = 0.0; rawTheta < 0.5 * PI; rawTheta += sampleDelta) {
      let thetaSample = rawTheta + randomOffset;
      // spherical to cartesian (in tangent space) // tangent space to world // add each sample result to irradiance
      let xSample = sin(thetaSample) * cos(phiSample);
      let ySample = sin(thetaSample) * sin(phiSample);
      let zSample = cos(thetaSample);
      let tangentSample = vec3<f32>(xSample, ySample, zSample);

      let sampleVec = tangentSample.x * right + tangentSample.y * upNorm + tangentSample.z * normal;
      let envSample = textureSample(environmentMap, environmentMap_sampler, nTOE(sampleVec));
      irradiance += envSample.xyz * cos(thetaSample) * sin(thetaSample);
      nrSamples += 1.0;
    }
  }
  // divide by the total number of samples taken, giving us the average sampled irradiance.
  irradiance = PI * irradiance * (1.0 / nrSamples);

  return vec4<f32>(irradiance, 1.0);
}
`;
	const imageLightSpecularFragmentShader = `
struct FragmentInput {
  @location(0) localPos: vec3<f32>,
  @location(3) vTexCoord: vec2<f32>,
}

${uniforms}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var environmentMap: texture_2d<f32>;
@group(0) @binding(2) var environmentMap_sampler: sampler;

${sharedFunctions}

fn VanDerCorput(nIn: i32, base: i32) -> f32 {
  // Use the bit manipulation version for WebGPU (equivalent to WEBGL2 version)
  var n = u32(nIn);
  n = (n << 16u) | (n >> 16u);
  n = ((n & 0x55555555u) << 1u) | ((n & 0xAAAAAAAAu) >> 1u);
  n = ((n & 0x33333333u) << 2u) | ((n & 0xCCCCCCCCu) >> 2u);
  n = ((n & 0x0F0F0F0Fu) << 4u) | ((n & 0xF0F0F0F0u) >> 4u);
  n = ((n & 0x00FF00FFu) << 8u) | ((n & 0xFF00FF00u) >> 8u);
  return f32(n) * 2.3283064365386963e-10; // / 0x100000000
}

fn HammersleyNoBitOps(i: i32, N: i32) -> vec2<f32> {
  return vec2<f32>(f32(i) / f32(N), VanDerCorput(i, 2));
}

fn ImportanceSampleGGX(Xi: vec2<f32>, N: vec3<f32>, roughness: f32) -> vec3<f32> {
  let a = roughness * roughness;

  let phi = 2.0 * PI * Xi.x;
  let cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a * a - 1.0) * Xi.y));
  let sinTheta = sqrt(1.0 - cosTheta * cosTheta);

  // from spherical coordinates to cartesian coordinates
  var H: vec3<f32>;
  H.x = cos(phi) * sinTheta;
  H.y = sin(phi) * sinTheta;
  H.z = cosTheta;

  // from tangent-space vector to world-space sample vector
  let up = select(vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, 0.0), abs(N.z) < 0.999);
  let tangent = normalize(cross(up, N));
  let bitangent = cross(N, tangent);

  let sampleVec = tangent * H.x + bitangent * H.y + N * H.z;
  return normalize(sampleVec);
}

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
  let SAMPLE_COUNT = 400i; // 4096
  let lowRoughnessLimit = i32(pow(2.0, (uniforms.roughness + 0.1) * 20.0));
  var totalWeight = 0.0;
  var prefilteredColor = vec3<f32>(0.0);
  let phi = input.vTexCoord.x * 2.0 * PI;
  let theta = input.vTexCoord.y * PI;
  let x = sin(theta) * cos(phi);
  let y = sin(theta) * sin(phi);
  let z = cos(theta);
  let N = vec3<f32>(x, y, z);
  let V = N;

  for (var i = 0i; i < SAMPLE_COUNT; i++) {
    // break at smaller sample numbers for low roughness levels
    if (i == lowRoughnessLimit) {
      break;
    }
    let Xi = HammersleyNoBitOps(i, SAMPLE_COUNT);
    let H = ImportanceSampleGGX(Xi, N, uniforms.roughness);
    let L = normalize(2.0 * dot(V, H) * H - V);

    let NdotL = max(dot(N, L), 0.0);
    // Always sample the texture to maintain uniform control flow
    let envSample = textureSample(environmentMap, environmentMap_sampler, nTOE(L));
    // Only add to accumulators if NdotL > 0
    if (NdotL > 0.0) {
      prefilteredColor += envSample.xyz * NdotL;
      totalWeight += NdotL;
    }
  }
  prefilteredColor = prefilteredColor / totalWeight;

  return vec4<f32>(prefilteredColor, 1.0);
}
`;
	//#endregion
	//#region src/webgpu/shaders/compute.js
	const baseComputeShader = `
struct ComputeUniforms {
  uTotalCount: vec3<i32>,
  uPhysicalCount: vec3<i32>,
}
@group(0) @binding(0) var<uniform> uniforms: ComputeUniforms;

@compute @workgroup_size(8, 8, 1)
fn main(
  @builtin(global_invocation_id) globalId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>,
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_index) localIndex: u32
) {
  let totalIterations = u32(uniforms.uTotalCount.x) * u32(uniforms.uTotalCount.y) * u32(uniforms.uTotalCount.z);
  let physicalId = globalId.x + globalId.y * (u32(uniforms.uPhysicalCount.x)) + globalId.z * (u32(uniforms.uPhysicalCount.x) * u32(uniforms.uPhysicalCount.y));

  if (physicalId >= totalIterations) {
    return;
  }

  var index = vec3<i32>(0);
  index.x = i32(physicalId % u32(uniforms.uTotalCount.x));
  let remainingY = physicalId / u32(uniforms.uTotalCount.x);
  index.y = i32(remainingY % u32(uniforms.uTotalCount.y));
  index.z = i32(remainingY / u32(uniforms.uTotalCount.y));

  HOOK_iteration(index);
}
`;
	//#endregion
	//#region node_modules/tl-util/dist/index.mjs
	var TL = class TL {
		/**
		* Data structure to internally keep track of registered strings and
		* translations.
		*
		* Structured as a table to eventually use indexed queries.
		*
		* @private
		*/
		static bucket = [];
		static patterns = /* @__PURE__ */ new Map([
			["zero", (v) => parseFloat(v) === 0],
			["one", (v) => parseFloat(v) === 1],
			["*", () => true]
		]);
		/**
		* Bulk add translations.
		*/
		static addTranslations(lang, translations) {
			const regex = /\$\{(.+?)\}/gm;
			for (const [key, val] of Object.entries(translations)) {
				const patternObj = /* @__PURE__ */ new Map();
				if (typeof val === "string") {
					const arr = val.split(regex);
					const strings = [];
					const placeholders = [];
					for (let i = 0; i < arr.length; i++) if (i % 2 === 0) strings.push(arr[i]);
					else placeholders.push(arr[i]);
					patternObj.set(TL.patterns.get("*"), {
						strings,
						placeholders
					});
				} else for (const [patternStr, str] of Object.entries(val)) {
					const match = patternStr.split("_")[1];
					const functionPattern = /\[(.+?)\]/.exec(match)?.[1];
					const literalPattern = /\((.+?)\)/.exec(match)?.[1];
					const arr = str.split(regex);
					const strings = [];
					const placeholders = [];
					for (let i = 0; i < arr.length; i++) if (i % 2 === 0) strings.push(arr[i]);
					else placeholders.push(arr[i]);
					patternObj.set(TL.patterns.get(functionPattern) || (literalPattern ? (value) => value.toString() === literalPattern : () => true), {
						strings,
						placeholders
					});
				}
				TL.bucket.push({
					lang: Intl.getCanonicalLocales(Array.isArray(lang) ? lang : [lang]),
					label: key,
					pattern: new Pattern(patternObj)
				});
			}
		}
		/**
		* Tagged template literal utility function. This should be used with
		* tagged templates to create a new TL object. It essentially behaves as a
		* factory function for the TL object.
		*
		* @param strings
		* @param values
		* @returns TL
		*/
		static tl(strings, ...values) {
			return new TL(Array.from(strings), values);
		}
		strings;
		values;
		constructor(strings, values) {
			this.strings = strings;
			this.values = values;
		}
		/**
		* Serializes the TL object into a string with the previously set values.
		*
		* If a language code is passed in with the `lang` parameter, it will attempt
		* to find the relevant translation and if not found, return the orignal
		* string untranslated.
		*
		* If the `lang` parameter is not provided, return the original string
		* untranslated.
		*
		* @param lang
		* @returns string
		*/
		toString(lang) {
			if (lang) lang = Intl.getCanonicalLocales(Array.isArray(lang) ? lang : [lang]);
			const item = TL.bucket.find((item) => {
				return item.pattern.isMatch(this.strings);
			});
			if (!item) {
				let results = "";
				for (let i = 0; i < this.strings.length; i++) {
					results += this.strings[i];
					if (this.values[i]) results += this.values[i] instanceof TL ? this.values[i].toString(lang) : this.values[i];
				}
				return results;
			}
			let targetLangItem;
			if (lang) targetLangItem = lang.reduce((acc, l) => {
				if (!acc) acc = TL.bucket.find((targetItem) => {
					return targetItem.label === item.label && targetItem.lang.includes(l);
				});
				return acc;
			}, null);
			else targetLangItem = TL.bucket.find((targetItem) => {
				return targetItem.label === item.label && targetItem.lang.filter((value) => item.lang.includes(value)).length > 0;
			});
			if (!targetLangItem) targetLangItem = item;
			const { strings, placeholders } = targetLangItem.pattern.match(this.values[0]);
			const { placeholders: itemPlaceholders } = item.pattern.match(this.values[0]);
			const values = this.values.reduce((acc, value, i) => {
				if (itemPlaceholders[i]) acc[itemPlaceholders[i]] = value;
				return acc;
			}, {});
			let results = "";
			for (let i = 0; i < strings.length; i++) {
				results += strings[i];
				const val = values[placeholders[i]];
				if (typeof val !== "undefined") results += val instanceof TL ? val.toString(targetLangItem.lang) : val;
			}
			return results;
		}
		setValues() {}
	};
	var Pattern = class {
		/**
		* Key of the map is the pattern matching function, value is the evaluated string.
		*/
		patterns;
		constructor(patterns) {
			this.patterns = patterns;
		}
		/**
		* Perform pattern matching using the provided value.
		*
		* @param v
		* @returns
		*/
		match(v) {
			for (const [key, value] of this.patterns.entries()) if (key(v)) return value;
		}
		/**
		* Reserve lookup to determine if current pattern matches strings.
		*
		* @param input
		* @returns
		*/
		isMatch(input) {
			for (const { strings } of this.patterns.values()) if (input.join("---") === strings.join("---")) return true;
			return false;
		}
	};
	//#endregion
	//#region src/friendly_errors/fes.js
	TL.addTranslations([
		"en",
		"en-US",
		"en-GB"
	], {
		tkkbbojj0n: "Sorry, Could not set the attributes, you need to call setAttributes() before calling the other drawing methods in setup()",
		wji0jlntb6: "Error during parsing: ${error.message}",
		"6eru983h1s": "Sorry, the file type is invalid. Only OBJ and STL files are supported.",
		wuo7dk4fkf: "It looks like you've called ${functionName} outside of a shader's modify() function.",
		ecbfo4yfrl: "It looks like you've called getTexture outside of a shader's modify() function.",
		btvs56mkpo: "It looks like you've called noise() with ${args.length} arguments. It only supports 1D to 3D input.",
		pzoz7wj542: "It looks like you've called random() with ${args.length} arguments. In strands, random() supports 0, 1, or 2 numeric arguments.",
		lgfuy6eb2r: "It looks like you've called ${typeInfo.fnName} outside of a shader's modify() function.",
		"4lplbdw1xp": "file",
		dl8q3ezp00: "JSON file",
		"99dup7cw27": "text file",
		vzls8t7bw4: "It looks like there was a problem loading your ${errorFileType}. Try checking if the file path (${path}) is correct, hosting the file online, or running a local server.\n\n+ More info: ${infoURL}",
		"5cz1brq3ke": "There was some trouble loading your GIF. Make sure that your GIF is using 87a or 89a encoding.",
		"1kv37lrbjy": "🌸 p5.js says: ",
		ordinal1: "first",
		ordinal2: "second",
		ordinal3: "third",
		ordinal4: "fourth",
		ordinal5: "fifth",
		ordinal6: "sixth",
		ordinal7: "seventh",
		ordinal8: "eighth",
		ordinal9: "ninth",
		ordinal10: "tenth",
		typeString: "string",
		typeBoolean: "boolean",
		typeNumber: "number",
		typeFunction: "function",
		"54cbftewi2": "${message} (https://p5js.org/reference/${referenceSection}.${funcName})",
		rnwntgqpx8: "${message} (https://p5js.org/reference/${referenceSection}/${funcName})",
		jya7nlorb5: "The preload() function has been removed in p5.js 2.0. Please load assets in setup() using async / await keywords or callbacks instead. See https://github.com/processing/p5.js-compatibility for more information about 2.0 and compatibility, or https://dev.to/limzykenneth/asynchronous-p5js-20-458f for more information about promises and async/await.",
		qj9oojqr1i: "It seems that you may have accidentally written ${prop} instead of ${fxns[lowercase]}. Please correct it if it's not intentional.",
		"0t1z3tmmr8": "${locationObj\n	? FES.log`[${locationObj.file}, line ${locationObj.line}]`\n	: ''} It seems that you may have accidentally written \"${errSym}\" instead of \"${matchedSymbols[0].name}\". Please correct it to ${matchedSymbols[0].name} if you wish to use the ${matchedSymbols[0].type} from p5.js.",
		ita6bv1dd3: "[${locationObj.file}, line ${locationObj.line}]",
		"2xeoxf2b68": "${locationObj\n	? FES.log`[${locationObj.file}, line ${locationObj.line}]`\n	: ''} It seems that you may have accidentally written \"${errSym}\".\\nYou may have meant one of the following: \\n${suggestions}",
		mfljpzrw6p: "Did you just try to use p5.js's ${symbolName} ${symbol.type}? If so, you may want to move it into your sketch's setup() function.\\n\\nFor more details, see: ${FAQ_URL}",
		aorhrzsojk: "Syntax Error - Found a symbol that JavaScript doesn't recognize or didn't expect at its place.\\n\\n+ More info: ${url}",
		xrwjb1a7yc: "Syntax Error - Symbol present at a place that wasn't expected.\\nUsually this is due to a typo. Check the line number in the error for anything missing/extra.\\n\\n+ More info: ${url}",
		redeclare: "Syntax Error - \"${errSym}\" is being redeclared. JavaScript doesn't allow declaring a variable more than once. Check the line number in error for redeclaration of the variable.\\n\\n+ More info: ${url}",
		"6tfheg3s15": "Syntax Error - A const variable is declared but not initialized. In JavaScript, an initializer for a const is required. A value must be specified in the same statement in which the variable is declared. Check the line number in the error and assign the const variable a value.\\n\\n+ More info: ${url}",
		ywpv6fodj4: "Syntax Error - return lies outside of a function. Make sure you’re not missing any brackets, so that return lies inside a function.\\n\\n+ More info: ${url}",
		a694k1m6nn: "at the ${ordinals[position]} parameter",
		"00gwqo2yxt": ", but received ${actualType}",
		jfjwdczlfk: "Expected ${expectedTypeStr} ${positionStr}${actualTypeStr}",
		"1roh3zggwt": "Did you mean to put \\`await\\` before a loading function? An unexpected Promise was found. ",
		ltzhpuu4r8: "${message}${buildTypeMismatchMessage(actualType, expectedTypesStr, position)} in ${func + '()'}.",
		referenceLink: "For more information, see ${documentationLink}.",
		paramTooFew: {
			"${minArgs}_[one]": "Expected at least ${minArgs} argument, but received fewer in ${func}(). ${referenceLink}",
			"${minArgs}_[*]": "Expected at least ${minArgs} arguments, but received fewer in ${func}(). ${referenceLink}"
		},
		paramTooMany: {
			"${minArgs}_[one]": "Expected at most ${maxArgs} argument, but received more in ${func}(). ${referenceLink}",
			"${minArgs}_[*]": "Expected at most ${maxArgs} arguments, but received more in ${func}(). ${referenceLink}"
		},
		paramType: "Expected ${typeName} at the ${position} parameter in ${funcName}.",
		hr7vkbw7rp: "┌[${location}] \\n\\t Error at line ${frame.lineNumber} in ${frame.functionName}()\\n",
		zcob0p6ap3: "└[${location}] \\n\\t Called from line ${frame.lineNumber} in ${frame.functionName}()\\n",
		e1bltb2f3i: "The media that tried to play (with '${this.src}') wasn't allowed to by this browser, most likely due to the browser's autoplay policy.\\n\\n+ More info: https://developer.mozilla.org/docs/Web/Media/Autoplay_guide",
		fxcmxx850s: "${experimentalMessages[subjectArea]} For more info, see https://p5js.org/contribute/${subjectArea}/",
		ukmn4qp8ql: "To create a WEBGPU canvas, remember to add the WebGPU add-on to your project.",
		gp2s5qktp8: "We weren't able to find a renderer called ${selectedRenderer}.",
		rf4evsxua3: "The GIF is over the maximum allowed dimension. Try to shrink the image or set p5.MAX_GIF_PIXELS to a higher value.",
		"5szmoepgx4": "To create a WEBGPU canvas, add the WebGPU add-on to your project.",
		xswmwyt2ek: "Falling back to WebGL renderer.",
		fxy3ssriqw: "${e.message} Falling back to WebGL renderer."
	});
	const defaultLanguage = navigator.language;
	const localStorageAvailable = storageAvailable("localStorage");
	const localTranslation = localStorageAvailable ? window.localStorage.getItem(`${defaultLanguage}-${VERSION}`) : null;
	let translationPromise = new Promise(async (resolve) => {
		if (localTranslation) {
			TL.addTranslations(defaultLanguage, JSON.parse(localTranslation));
			resolve();
		} else try {
			let translationResponse = await fetch(`./${defaultLanguage}.json`);
			if (!translationResponse.ok) throw new Error("Cannot reach local file");
			const translation = await translationResponse.json();
			TL.addTranslations(defaultLanguage, translation);
			if (localStorageAvailable) window.localStorage.setItem(`${defaultLanguage}-${VERSION}`, JSON.stringify(translation));
		} catch {
			try {
				let translationResponse = await fetch(`https://cdn.jsdelivr.net/npm/p5@${VERSION}/translations/${defaultLanguage}/extracted.json`);
				if (!translationResponse.ok) throw new Error("Cannot reach CDN file");
				const translation = await translationResponse.json();
				TL.addTranslations(defaultLanguage, translation);
				if (localStorageAvailable) window.localStorage.setItem(`${defaultLanguage}-${VERSION}`, JSON.stringify(translation));
			} catch {}
		} finally {
			resolve();
		}
	});
	var FES = class FES {
		static languageCode = navigator.languages;
		static translationPromise = translationPromise;
		static disableFriendlyErrors = false;
		static #printMessage(method, strings, ...values) {
			if (FES.disableFriendlyErrors) return;
			const styleStrings = [];
			const translation = TL.tl(strings, ...values.map((value) => {
				if (value instanceof StyledMessage) {
					const ret = `%c${value.message.toString(FES.languageCode)}%c`;
					styleStrings.push(value.styleString, "");
					return ret;
				} else if (value?.message && value?.styleStrings) {
					styleStrings.push(...value.styleStrings);
					return value.message;
				} else return value;
			}));
			const results = translation.toString(FES.languageCode);
			const executor = (options) => {
				const { prefix } = Object.assign({ prefix: TL.tl`🌸 p5.js says: ` }, options);
				let footer = "";
				if (options?.reference) footer += mapToReference(results, options.reference);
				if (prefix instanceof TL) console[method](prefix.toString(FES.languageCode) + results + footer, ...styleStrings);
				else if (prefix === false) console[method](results + footer, ...styleStrings);
				else console[method](prefix + results + footer, ...styleStrings);
			};
			executor.message = results;
			executor.styleStrings = styleStrings;
			executor.toString = function(lang) {
				return translation.toString(lang);
			};
			return executor;
		}
		static log(strings, ...values) {
			return FES.#printMessage("log", strings, ...values);
		}
		static debug(strings, ...values) {
			return FES.#printMessage("debug", strings, ...values);
		}
		static error(strings, ...values) {
			return FES.#printMessage("error", strings, ...values);
		}
		static info(strings, ...values) {
			return FES.#printMessage("info", strings, ...values);
		}
		static warn(strings, ...values) {
			return FES.#printMessage("warn", strings, ...values);
		}
		static TL = TL;
		static premade = {
			ordinals: [
				TL.tl`first`,
				TL.tl`second`,
				TL.tl`third`,
				TL.tl`fourth`,
				TL.tl`fifth`,
				TL.tl`sixth`,
				TL.tl`seventh`,
				TL.tl`eighth`,
				TL.tl`ninth`,
				TL.tl`tenth`
			],
			types: {
				string: TL.tl`string`,
				boolean: TL.tl`boolean`,
				number: TL.tl`number`,
				function: TL.tl`function`
			}
		};
	};
	var StyledMessage = class {
		message;
		styleString;
		constructor(message, styleString) {
			this.message = message;
			this.styleString = styleString;
		}
		toString(lang) {
			return this.message.toString(lang);
		}
	};
	/**
	* Takes a message and a p5 function func, and adds a link pointing to
	* the reference documentation of func at the end of the message
	*
	* @method mapToReference
	* @private
	* @param {String}  message   the words to be said
	* @param {String}  [func]    the name of function
	*
	* @returns {String}
	*/
	function mapToReference(message, func) {
		let msgWithReference = "";
		if (func == null || func.substring(0, 4) === "load") msgWithReference = message;
		else {
			const methodParts = func.split(".");
			const referenceSection = methodParts.length > 1 ? `${methodParts[0]}.${methodParts[1]}` : "p5";
			const funcName = methodParts.length === 1 ? func : methodParts.slice(2).join("/");
			if (funcName.startsWith("p5.")) msgWithReference = ` (https://p5js.org/reference/${referenceSection}.${funcName})`;
			else msgWithReference = ` (https://p5js.org/reference/${referenceSection}/${funcName})`;
		}
		return msgWithReference;
	}
	function storageAvailable(type) {
		let storage;
		try {
			storage = window[type];
			const x = "__storage_test__";
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		} catch (e) {
			return e instanceof DOMException && e.name === "QuotaExceededError" && storage && storage.length !== 0;
		}
	}
	//#endregion
	//#region src/core/experimental.js
	const experimentalMessages = {
		webgpu: "WEBGPU mode is experimental, so its functions and constants may change in future versions. You can get involved by giving feedback to help direct its development!",
		"p5.strands": "p5.strands shaders are experimental, so functions for building shaders and the hooks available within them may change in future versions. You can get involved by giving feedback to help direct its development!",
		"p5.strands.transforms": "p5.strands transforms are experimental, so transform2D(), transform3D(), the matrix constructors, and the functions that build on them may change in future versions. You can get involved by giving feedback to help direct their development!",
		"p5.svg": "SVG features are experimental, so SVG export, import, and shape recording functions may change in future versions. You can get involved by giving feedback to help direct its development!"
	};
	const experimentalDocSections = { "p5.strands.transforms": {
		doc: "p5.strands",
		section: "transforms-and-matrices"
	} };
	function experimentalDocURL(subjectArea) {
		const { doc = subjectArea, section } = experimentalDocSections[subjectArea] || {};
		return `https://p5js.org/contribute/${doc}/${section ? `#${section}` : ""}`;
	}
	const globalWarningTarget = {};
	function warnExperimental(p5, pInst, subjectArea) {
		const target = pInst || globalWarningTarget;
		if (!p5.disableFriendlyErrors && !target.warnedExperimental?.[subjectArea]) {
			target.warnedExperimental = target.warnedExperimental || {};
			target.warnedExperimental[subjectArea] = true;
			const message = experimentalMessages[subjectArea];
			const url = experimentalDocURL(subjectArea);
			FES.log`${message} For more info, see ${url}`();
		}
	}
	//#endregion
	//#region src/webgpu/p5.RendererWebGPU.js
	/**
	* @module 3D
	* @submodule p5.strands
	* @for p5
	*/
	const FRAME_STATE = {
		PENDING: 0,
		UNPROMOTED: 1,
		PROMOTED: 2
	};
	function rendererWebGPU(p5, fn) {
		const { lineDefs } = getStrokeDefs((n, v, t) => `const ${n}: ${t} = ${v};\n`);
		const { Renderer3D, Shader, Texture, MipmapTexture, Image, Camera, RGBA } = p5;
		const STORAGE_ARRAY_TYPES = {
			f32: Float32Array,
			u32: Uint32Array,
			i32: Int32Array
		};
		class StorageBuffer {
			constructor(buffer, size, renderer, schema = null, arrayType = Float32Array, length = null) {
				this._isStorageBuffer = true;
				this.buffer = buffer;
				this.size = size;
				this.length = length;
				this._renderer = renderer;
				this._schema = schema;
				this._arrayType = schema !== null ? Float32Array : arrayType;
				this._checkedArrayType = void 0;
			}
			/**
			* Updates the data in the buffer with new values. The new data must be in
			* the same format as the data originally passed to
			* <a href="#/p5/createStorage">`createStorage()`</a>.
			*
			* ```js example
			* let particles;
			* let computeShader;
			* let displayShader;
			* const numParticles = 100;
			*
			* async function setup() {
			*   await createCanvas(100, 100, WEBGPU);
			*   particles = createStorage(makeParticles(width / 2, height / 2));
			*   computeShader = buildComputeShader(simulate);
			*   displayShader = buildMaterialShader(display);
			*   describe('100 orange particles shooting outward.');
			* }
			*
			* function makeParticles(x, y) {
			*   let data = [];
			*   for (let i = 0; i < numParticles; i++) {
			*     let angle = (i / numParticles) * TWO_PI;
			*     let speed = random(0.5, 2);
			*     data.push({
			*       position: createVector(x, y),
			*       velocity: createVector(cos(angle) * speed, sin(angle) * speed),
			*     });
			*   }
			*   return data;
			* }
			*
			* function simulate() {
			*   let data = uniformStorage(particles);
			*   let idx = index.x;
			*   data[idx].position = data[idx].position + data[idx].velocity;
			* }
			*
			* function display() {
			*   let data = uniformStorage(particles);
			*   worldInputs.begin();
			*   let pos = data[instanceIndex].position;
			*   worldInputs.position.xy += pos - [width / 2, height / 2];
			*   worldInputs.end();
			* }
			*
			* function draw() {
			*   background(30);
			*   if (frameCount % 60 === 0) {
			*     particles.update(makeParticles(random(width), random(height)));
			*   }
			*   compute(computeShader, numParticles);
			*   noStroke();
			*   fill(255, 200, 50);
			*   shader(displayShader);
			*   instances(numParticles).sphere(2);
			* }
			* ```
			*
			* @method update
			* @for p5.StorageBuffer
			* @beta
			* @webgpu
			* @webgpuOnly
			* @param {Number[]|Float32Array|Uint32Array|Int32Array|Object[]} data The new data to write into the buffer.
			*/
			update(data) {
				const device = this._renderer.device;
				if (this._schema !== null) {
					if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || Array.isArray(data[0])) throw new Error("update() expects an array of objects matching the original struct format");
					const newSchema = this._renderer._inferStructSchema(data[0]);
					if (newSchema.structBody !== this._schema.structBody) throw new Error(`update() data structure doesn't match the original.\n  Expected: ${this._schema.structBody}\n  Got:      ${newSchema.structBody}`);
					const packed = this._renderer._packStructArray(data, this._schema);
					if (packed.byteLength > this.size) throw new Error(`update() data (${packed.byteLength} bytes) exceeds buffer size (${this.size} bytes)`);
					device.queue.writeBuffer(this.buffer, 0, packed);
				} else {
					const ArrayType = this._arrayType;
					let typedData;
					if (data instanceof ArrayType) typedData = data;
					else if (Array.isArray(data)) typedData = new ArrayType(data);
					else throw new Error(`update() expects a ${ArrayType.name} or array of numbers for this buffer`);
					if (typedData.byteLength > this.size) throw new Error(`update() data (${typedData.byteLength} bytes) exceeds buffer size (${this.size} bytes)`);
					device.queue.writeBuffer(this.buffer, 0, typedData);
				}
			}
			/**
			* Reads data from a storage buffer back into JavaScript.
			*
			* Copies data from the GPU to the CPU using a temporary buffer,
			* so it must be awaited. Returns a typed array (such as `Float32Array` or
			* `Uint32Array`) for number buffers, or an array of plain objects for
			* struct buffers.
			*
			* Note: This is a GPU -> CPU read, so calling it often (like every frame)
			* can be slow.
			*
			* ```js example
			* let data;
			* let computeShader;
			*
			* async function setup() {
			*   await createCanvas(100, 100, WEBGPU);
			*
			*   data = createStorage(new Float32Array([1, 2, 3, 4]));
			*   computeShader = buildComputeShader(doubleValues);
			*   compute(computeShader, 4);
			*
			*   let result = await data.read();
			*   // result is Float32Array [2, 4, 6, 8]
			*   for (let i = 0; i < result.length; i++) {
			*     print(result[i]);
			*   }
			*   describe('Prints the values 2, 4, 6, 8 to the console.');
			* }
			*
			* function doubleValues() {
			*   let d = uniformStorage(data);
			*   let idx = index.x;
			*   d[idx] = d[idx] * 2;
			* }
			* ```
			*
			* While p5.strands is still growing, there may be WGSL features it doesn't
			* cover yet. You can still reach for them by writing WGSL directly, and the
			* buffer will read back as the right kind of typed array. Atomics are one
			* example: WGSL only allows them on `u32` and `i32`, so a buffer used as
			* `array<atomic<u32>>` should be created with a `Uint32Array`.
			*
			* ```js example
			* let data;
			* let computeShader;
			*
			* async function setup() {
			*   await createCanvas(100, 100, WEBGPU);
			*
			*   data = createStorage(new Uint32Array([10, 20, 30, 40]));
			*   computeShader = buildComputeShader({
			*     computeDeclarations: `
			*       @group(0) @binding(1) var<storage, read_write> counts: array<atomic<u32>>;
			*     `,
			*     'void iteration': `(index: vec3<i32>) {
			*       let idx = index.x;
			*       atomicAdd(&counts[idx], 5u);
			*     }`
			*   });
			*   computeShader.setUniform('counts', data);
			*   compute(computeShader, 4);
			*
			*   let result = await data.read();
			*   // result is Uint32Array [15, 25, 35, 45]
			*   for (let i = 0; i < result.length; i++) {
			*     print(result[i]);
			*   }
			*   describe('Prints the values 15, 25, 35, 45 to the console.');
			* }
			* ```
			*
			* @method read
			* @for p5.StorageBuffer
			* @beta
			* @webgpu
			* @webgpuOnly
			* @returns {Promise<Float32Array|Uint32Array|Int32Array|Object[]>}
			*/
			async read() {
				const device = this._renderer.device;
				this._renderer.flushDraw();
				const stagingBuffer = device.createBuffer({
					size: this.size,
					usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
				});
				const commandEncoder = device.createCommandEncoder();
				commandEncoder.copyBufferToBuffer(this.buffer, 0, stagingBuffer, 0, this.size);
				device.queue.submit([commandEncoder.finish()]);
				await stagingBuffer.mapAsync(GPUMapMode.READ, 0, this.size);
				const mappedRange = stagingBuffer.getMappedRange(0, this.size);
				const ArrayType = this._arrayType;
				const rawCopy = new ArrayType(mappedRange.byteLength / ArrayType.BYTES_PER_ELEMENT);
				rawCopy.set(new ArrayType(mappedRange));
				stagingBuffer.unmap();
				stagingBuffer.destroy();
				if (this._schema !== null) return this._renderer._unpackStructArray(rawCopy, this._schema);
				return rawCopy;
			}
			/**
			* Updates a single element in the buffer at a given index. Use this
			* when only a small number of elements need to change. If you need to
			* replace all the data at once, use
			* <a href="#/p5.StorageBuffer/update">`update()`</a> instead.
			*
			* ```js
			* let buf;
			*
			* async function setup() {
			*   await createCanvas(100, 100, WEBGPU);
			*
			*   // Float buffer: update one value by index
			*   buf = createStorage(new Float32Array([1, 2, 3, 4]));
			*   buf.set(2, 9.5); // only index 2 changes → [1, 2, 9.5, 4]
			*
			*   let result = await buf.read();
			*   print(result[2]); // 9.5
			*   describe('Prints 9.5 to the console.');
			* }
			* ```
			*
			* ```js
			* let particles;
			* const numParticles = 100;
			*
			* async function setup() {
			*   await createCanvas(100, 100, WEBGPU);
			*   particles = createStorage(makeParticles());
			*
			*   // Replace particle 42 without touching the others
			*   particles.set(42, {
			*     position: createVector(0, 0),
			*     velocity: createVector(1, 0),
			*   });
			*
			*   // Read back to confirm the update
			*   let result = await particles.read();
			*   print(result[42].position.x, result[42].position.y); // 0, 0
			*   describe('Prints the position of particle 42 after updating it.');
			* }
			*
			* function makeParticles() {
			*   let data = [];
			*   for (let i = 0; i < numParticles; i++) {
			*     data.push({
			*       position: createVector(random(width), random(height)),
			*       velocity: createVector(random(-1, 1), random(-1, 1)),
			*     });
			*   }
			*   return data;
			* }
			* ```
			*
			* @method set
			* @for p5.StorageBuffer
			* @beta
			* @webgpu
			* @webgpuOnly
			* @param {Number} index The zero-based index of the element to update.
			* @param {Number|Object} value The new value. Pass a number for float
			*   buffers, or a plain object matching the original struct layout for
			*   struct buffers.
			*/
			set(index, value) {
				const device = this._renderer.device;
				if (this._schema !== null) {
					if (typeof value !== "object" || value === null || Array.isArray(value)) throw new Error("set() expects a plain object matching the original struct format for this buffer");
					const { stride } = this._schema;
					const byteOffset = index * stride;
					if (byteOffset + stride > this.size) throw new Error(`set() index ${index} is out of bounds for this buffer (buffer holds ${Math.floor(this.size / stride)} elements)`);
					const packed = this._renderer._packStructArray([value], this._schema);
					device.queue.writeBuffer(this.buffer, byteOffset, packed.buffer, 0, stride);
				} else {
					if (typeof value !== "number") throw new Error("set() expects a number for this float buffer");
					const byteOffset = index * 4;
					if (byteOffset + 4 > this.size) throw new Error(`set() index ${index} is out of bounds for this buffer (buffer holds ${Math.floor(this.size / 4)} floats)`);
					device.queue.writeBuffer(this.buffer, byteOffset, new Float32Array([value]));
				}
			}
		}
		/**
		* A block of data that shaders can read from, and compute shaders can also
		* write to. This is only available in WebGPU mode.
		*
		* Note: <a href="#/p5/createStorage">`createStorage()`</a> is the recommended
		* way to create an instance of this class.
		*
		* @class p5.StorageBuffer
		* @beta
		* @webgpu
		* @webgpuOnly
		*/
		p5.StorageBuffer = StorageBuffer;
		class StorageList {
			constructor(buffer, lengthOffset, maxCapacity, renderer, schema = null, initialCount = 0) {
				this._isStorageList = true;
				this.buffer = buffer;
				this._lengthOffset = lengthOffset;
				this.maxCapacity = maxCapacity;
				this._renderer = renderer;
				this._schema = schema;
				this._stride = schema ? schema.stride : 4;
				this._cpuLength = initialCount;
			}
			/**
			* Empties the list.
			*
			* @method clear
			* @for p5.StorageList
			* @beta
			* @webgpu
			* @webgpuOnly
			*/
			clear() {
				this._cpuLength = 0;
				const encoder = this._renderer.device.createCommandEncoder();
				encoder.clearBuffer(this.buffer, this._lengthOffset, 4);
				this._renderer._pendingCommandEncoders.push(encoder.finish());
				this._renderer._hasPendingDraws = true;
			}
			/**
			* Appends one element to the list. This can be called from your sketch's
			* JavaScript or from within a <a href="#/p5/buildComputeShader">compute shader.</a> Use this to seed a list
			* before any compute shaders run. Calling `push()` after a GPU compute pass
			* that has already modified the list will produce undefined ordering.
			*
			* For a float list, pass a number. For a struct list, pass a plain object
			* whose properties match the schema.
			*
			* ```js example
			* let positions;
			* let drawShader;
			* const COUNT = 5;
			*
			* async function setup() {
			*   await createCanvas(200, 200, WEBGPU);
			*
			*   positions = createStorageList(COUNT, { pos: createVector(0, 0) });
			*   for (let i = 0; i < COUNT; i++) {
			*     positions.push({
			*       pos: createVector(
			*         random(-1, 1) * width / 2,
			*         random(-1, 1) * height / 2
			*       )
			*     });
			*   }
			*
			*   drawShader = buildMaterialShader(() => {
			*     let data = uniformStorage(positions);
			*     worldInputs.begin();
			*     worldInputs.position.xy += data[instanceIndex].pos;
			*     worldInputs.end();
			*   });
			*
			*   describe('Five circles placed at random positions.');
			* }
			*
			* function draw() {
			*   background(220);
			*   noStroke();
			*   shader(drawShader);
			*   instances(positions).circle(0, 0, 20);
			* }
			* ```
			*
			* You can also use `push()` from compute shaders. This approach can often
			* be faster as no data needs to transfer from the CPU to the GPU.
			*
			* ```js example
			* let particles, nextParticles;
			* let removeOld, emitNew;
			* let drawParticles;
			* const MAX_PARTICLES = 300;
			*
			* async function setup() {
			*   await createCanvas(200, 200, WEBGPU);
			*
			*   const schema = { position: createVector(0, 0), velocity: createVector(0, 0), life: 0 };
			*   particles = createStorageList(MAX_PARTICLES, schema);
			*   nextParticles = createStorageList(MAX_PARTICLES, schema);
			*
			*   // Seed an initial burst from JavaScript so something is visible on frame 1.
			*   for (let i = 0; i < 20; i++) {
			*     let angle = random(TWO_PI);
			*     particles.push({
			*       position: createVector(0, 0),
			*       velocity: createVector(cos(angle) * 2, sin(angle) * 2 - 2.5),
			*       life: random(0.5, 1.0)
			*     });
			*   }
			*
			*   removeOld = buildComputeShader(() => {
			*     let src = uniformStorage(() => particles);
			*     let dst = uniformStorage(() => nextParticles);
			*     if (index.x < src.length) {
			*       let p = src[index.x];
			*       p.velocity.y += 0.08;
			*       p.position += p.velocity;
			*       p.life -= 0.02;
			*       if (p.life > 0) {
			*         dst.push(p);
			*       }
			*     }
			*   });
			*
			*   emitNew = buildComputeShader(() => {
			*     let dst = uniformStorage(() => nextParticles);
			*     let angle = random() * TWO_PI;
			*     dst.push({
			*       position: [mouseX, mouseY] - [width, height] / 2,
			*       velocity: [cos(angle), sin(angle) - 2.5],
			*       life: 1.0
			*     });
			*   });
			*
			*   drawParticles = buildMaterialShader(() => {
			*     let particleData = uniformStorage(() => particles);
			*     let p = particleData[instanceIndex];
			*     worldInputs.begin();
			*     worldInputs.position.xy += p.position;
			*     worldInputs.end();
			*     finalColor.begin();
			*     finalColor.set([1, p.life * 0.4, 0, p.life]);
			*     finalColor.end();
			*   });
			*
			*   describe('Orange particles emitting from the cursor, falling with gravity.');
			* }
			*
			* function draw() {
			*   background(0);
			*   noStroke();
			*
			*   nextParticles.clear();
			*   compute(removeOld, MAX_PARTICLES);
			*   compute(emitNew, 5);
			*   [particles, nextParticles] = [nextParticles, particles];
			*
			*   shader(drawParticles);
			*   blendMode(ADD);
			*   instances(particles).circle(0, 0, 4);
			* }
			* ```
			*
			* @method push
			* @for p5.StorageList
			* @beta
			* @webgpu
			* @webgpuOnly
			* @param {Number|Object} element A number for float lists, or a plain object
			*   matching the list's schema for struct lists.
			*/
			push(element) {
				if (this._cpuLength >= this.maxCapacity) throw new Error(`StorageList is full (maxCapacity: ${this.maxCapacity})`);
				const device = this._renderer.device;
				let packed;
				if (this._schema) packed = this._renderer._packStructArray([element], this._schema);
				else {
					if (typeof element !== "number") throw new Error("Float StorageList.push() expects a number");
					packed = new Float32Array([element]);
				}
				device.queue.writeBuffer(this.buffer, this._cpuLength * this._stride, packed);
				this._cpuLength++;
				device.queue.writeBuffer(this.buffer, this._lengthOffset, new Int32Array([this._cpuLength]));
			}
			/**
			* Replaces the contents of the list with new data from JavaScript,
			* updating the element count to match.
			*
			* For a list of numbers, `update` takes in an array of numbers (or
			* a `Float32Array`.) For a list of objects, pass an array of plain
			* objects with the same properties present as when you created the list.
			*
			* @method update
			* @for p5.StorageList
			* @beta
			* @webgpu
			* @webgpuOnly
			* @param {Number[]|Float32Array|Object[]} data The new data to write.
			*/
			update(data) {
				if (this._schema) {
					if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object") throw new Error("update() expects an array of objects matching the list schema");
					if (data.length > this.maxCapacity) throw new Error(`update() data length ${data.length} exceeds maxCapacity ${this.maxCapacity}`);
					const packed = this._renderer._packStructArray(data, this._schema);
					this._renderer.device.queue.writeBuffer(this.buffer, 0, packed);
				} else {
					let typedData = data instanceof Float32Array ? data : new Float32Array(data);
					if (typedData.length > this.maxCapacity) throw new Error(`update() data length ${typedData.length} exceeds maxCapacity ${this.maxCapacity}`);
					this._renderer.device.queue.writeBuffer(this.buffer, 0, typedData);
				}
				this._cpuLength = data.length;
				this._renderer.device.queue.writeBuffer(this.buffer, this._lengthOffset, new Int32Array([this._cpuLength]));
			}
			/**
			* Reads the current contents of the list back to JavaScript.
			*
			* It returns a `Float32Array` for float lists, or an array of plain objects
			* for struct lists.
			*
			* Note: This is a GPU-to-CPU read. Calling it frequently can be slow.
			*
			* @method read
			* @for p5.StorageList
			* @beta
			* @webgpu
			* @webgpuOnly
			* @returns {Promise<Float32Array|Object[]>}
			*/
			async read() {
				const device = this._renderer.device;
				this._renderer.flushDraw();
				const totalSize = this.buffer.size;
				const stagingBuffer = device.createBuffer({
					size: totalSize,
					usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
				});
				const encoder = device.createCommandEncoder();
				encoder.copyBufferToBuffer(this.buffer, 0, stagingBuffer, 0, totalSize);
				device.queue.submit([encoder.finish()]);
				await stagingBuffer.mapAsync(GPUMapMode.READ);
				const mapped = stagingBuffer.getMappedRange();
				const length = Math.min(new DataView(mapped).getInt32(this._lengthOffset, true), this.maxCapacity);
				let result;
				const stride = this._schema ? this._schema.stride : 4;
				if (this._schema) {
					const byteLen = length * stride;
					const rawCopy = new Float32Array(byteLen / 4);
					if (byteLen > 0) rawCopy.set(new Float32Array(mapped, 0, byteLen / 4));
					result = this._renderer._unpackStructArray(rawCopy, this._schema);
				} else {
					const rawCopy = new Float32Array(length);
					if (length > 0) rawCopy.set(new Float32Array(mapped, 0, length));
					result = rawCopy;
				}
				stagingBuffer.unmap();
				stagingBuffer.destroy();
				return result;
			}
		}
		/**
		* A variable-length buffer that compute can push to and pop from, like
		* a JavaScript array.
		*
		* This is only available in WebGPU mode.
		*
		* Note: <a href="#/p5/createStorageList">`createStorageList()`</a> is the
		* recommended way to create an instance of this class.
		*
		* @class p5.StorageList
		* @beta
		* @webgpu
		* @webgpuOnly
		*/
		p5.StorageList = StorageList;
		class RendererWebGPU extends Renderer3D {
			constructor(pInst, w, h, isMainCanvas, elt) {
				super(pInst, w, h, isMainCanvas, elt);
				this.rendererType = WEBGPU;
				this._pInst.rendererType = this.rendererType;
				warnExperimental(p5, pInst, "webgpu");
				this.activeRenderPass = null;
				this.activeRenderPassEncoder = null;
				this.activeShaderOptions = null;
				this.activeShader = null;
				this.samplers = /* @__PURE__ */ new Map();
				this.uniformBufferAlignment = 256;
				this.activeUniformBuffers = [];
				this.currentUniformBuffer = void 0;
				this.uniformBufferPool = [];
				this.resettingUniformBuffers = [];
				this.dynamicEntryOffsets = /* @__PURE__ */ new Uint32Array(64);
				this.currentCanvasColorTexture = null;
				this.currentCanvasColorTextureView = null;
				this.pixelReadBuffer = null;
				this.pixelReadBufferSize = 0;
				this.strandsBackend = wgslBackend;
				this._shadersWithPools = [];
				this._geometriesWithPools = [];
				this._hasPendingDraws = false;
				this._pendingCommandEncoders = [];
				this._postSubmitCallbacks = [];
				this._retiredBuffers = [];
				this._storageBuffers = /* @__PURE__ */ new Set();
				this._tempBuffers = [];
				this._pixelReadCanvas = null;
				this._pixelReadCtx = null;
				this.mainFramebuffer = null;
				this._frameState = FRAME_STATE.PENDING;
				this.finalCamera = new Camera(this);
				this.finalCamera._computeCameraDefaultSettings();
				this.finalCamera._setDefaultCamera();
				this.depthFormat = "depth24plus-stencil8";
				this.depthTexture = null;
				this.depthTextureView = null;
			}
			async setupContext() {
				this._setAttributeDefaults(this._pInst);
				await this._initContext();
			}
			_setAttributeDefaults(pInst) {
				const defaults = {
					forceFallbackAdapter: false,
					powerPreference: "high-performance"
				};
				if (pInst._webgpuAttributes === null) pInst._webgpuAttributes = defaults;
				else pInst._webgpuAttributes = Object.assign(defaults, pInst._webgpuAttributes);
			}
			async _initContext() {
				if (!navigator.gpu) throw new Error("WebGPU is not supported by this browser.");
				this.adapter = await navigator.gpu.requestAdapter(this._webgpuAttributes);
				if (!this.adapter) throw new Error("No compatible GPU could be found for WebGPU on this device.");
				this.device = await this.adapter.requestDevice({ requiredFeatures: ["depth32float-stencil8"] }).catch(() => null);
				if (!this.device) throw new Error("WebGPU is available, but a WebGPU device could not be created on this system.");
				this.drawingContext = this.canvas.getContext("webgpu");
				if (!this.drawingContext) throw new Error("WebGPU is available, but the drawing context could not be created for this canvas.");
				this.queue = this.device.queue;
				this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();
				this.drawingContext.configure({
					device: this.device,
					format: this.presentationFormat,
					usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
					alphaMode: "premultiplied"
				});
				this.mainFramebuffer = this.createFramebuffer({ _useCanvasFormat: true });
				this._updateSize();
				this._update();
				this.flushDraw();
			}
			async _setAttributes(key, value) {
				if (typeof this._pInst._webgpuAttributes === "undefined") {
					console.log("You are trying to use setAttributes on a p5.Graphics object that does not use a WebGPU renderer.");
					return;
				}
				let unchanged = true;
				if (typeof value !== "undefined") {
					if (this._pInst._webgpuAttributes === null) this._pInst._webgpuAttributes = {};
					if (this._pInst._webgpuAttributes[key] !== value) {
						this._pInst._webgpuAttributes[key] = value;
						unchanged = false;
					}
				} else if (key instanceof Object) {
					if (this._pInst._webgpuAttributes !== key) {
						this._pInst._webgpuAttributes = key;
						unchanged = false;
					}
				}
				if (!this.isP3D || unchanged) return;
				if (!this._pInst._setupDone) {
					if (this.geometryBufferCache.numCached() > 0) {
						p5.FES.log`Sorry, Could not set the attributes, you need to call setAttributes() before calling the other drawing methods in setup()`();
						return;
					}
				}
				await this._resetContext(null, null, RendererWebGPU);
				if (this.states.curCamera) this.states.curCamera._renderer = this._renderer;
			}
			_updateSize() {
				if (!this.device || !this.depthFormat) return;
				if (this.depthTexture && this.depthTexture.destroy) {
					this.flushDraw();
					const textureToDestroy = this.depthTexture;
					this._postSubmitCallbacks.push(() => textureToDestroy.destroy());
					this.depthTextureView = null;
				}
				this.depthTexture = this.device.createTexture({
					size: {
						width: Math.ceil(this.width * this._pixelDensity),
						height: Math.ceil(this.height * this._pixelDensity),
						depthOrArrayLayers: 1
					},
					format: this.depthFormat,
					usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC
				});
				this.depthTextureView = this.depthTexture.createView();
				this.clear();
			}
			_getCanvasColorTextureView() {
				const canvasTexture = this.drawingContext.getCurrentTexture();
				if (this.currentCanvasColorTexture !== canvasTexture) {
					this.currentCanvasColorTexture = canvasTexture;
					this.currentCanvasColorTextureView = canvasTexture.createView();
				}
				return this.currentCanvasColorTextureView;
			}
			_beginActiveRenderPass() {
				if (this.activeRenderPass) return;
				const activeFramebuffer = this.activeFramebuffer();
				const colorAttachment = {
					view: activeFramebuffer ? activeFramebuffer.aaColorTexture ? activeFramebuffer.aaColorTextureView : activeFramebuffer.colorTextureView : this._getCanvasColorTextureView(),
					loadOp: "load",
					storeOp: "store",
					resolveTarget: activeFramebuffer && activeFramebuffer.aaColorTexture ? activeFramebuffer.colorTextureView : void 0
				};
				const depthTextureView = activeFramebuffer ? activeFramebuffer.aaDepthTexture ? activeFramebuffer.aaDepthTextureView : activeFramebuffer.depthTextureView : this.depthTextureView;
				const renderPassDescriptor = {
					colorAttachments: [colorAttachment],
					depthStencilAttachment: depthTextureView ? {
						view: depthTextureView,
						depthLoadOp: "load",
						depthStoreOp: "store",
						depthClearValue: 1,
						stencilLoadOp: "load",
						stencilStoreOp: "store",
						depthReadOnly: false,
						stencilReadOnly: false
					} : void 0
				};
				const commandEncoder = this.device.createCommandEncoder();
				const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
				this.activeRenderPassEncoder = commandEncoder;
				this.activeRenderPass = passEncoder;
			}
			_finishActiveRenderPass() {
				if (!this.activeRenderPass) return;
				const commandEncoder = this.activeRenderPassEncoder;
				this.activeRenderPass.end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this.activeRenderPassEncoder = null;
				this.activeRenderPass = null;
				this.activeShader = null;
				this.activeShaderOptions = null;
			}
			clear(...args) {
				if (!this.device || !this.drawingContext) return;
				const _r = args[0] || 0;
				const _g = args[1] || 0;
				const _b = args[2] || 0;
				const _a = args[3] || 0;
				if (this._frameState !== FRAME_STATE.PROMOTED && !this.activeFramebuffer()) {
					if (this._pInst.frameCount > 0) this._frameState = FRAME_STATE.UNPROMOTED;
					else this._promoteToFramebufferWithoutCopy();
				}
				this._finishActiveRenderPass();
				const commandEncoder = this.device.createCommandEncoder();
				const activeFramebuffer = this.activeFramebuffer();
				const colorAttachment = {
					view: activeFramebuffer ? activeFramebuffer.aaColorTexture ? activeFramebuffer.aaColorTextureView : activeFramebuffer.colorTextureView : this._getCanvasColorTextureView(),
					clearValue: {
						r: _r * _a,
						g: _g * _a,
						b: _b * _a,
						a: _a
					},
					loadOp: "clear",
					storeOp: "store",
					resolveTarget: activeFramebuffer && activeFramebuffer.aaColorTexture ? activeFramebuffer.colorTextureView : void 0
				};
				const depthTextureView = activeFramebuffer ? activeFramebuffer.aaDepthTexture ? activeFramebuffer.aaDepthTextureView : activeFramebuffer.depthTextureView : this.depthTextureView;
				const depthAttachment = depthTextureView ? {
					view: depthTextureView,
					depthClearValue: 1,
					depthLoadOp: "clear",
					depthStoreOp: "store",
					stencilLoadOp: "load",
					stencilStoreOp: "store"
				} : void 0;
				const renderPassDescriptor = {
					colorAttachments: [colorAttachment],
					...depthAttachment ? { depthStencilAttachment: depthAttachment } : {}
				};
				commandEncoder.beginRenderPass(renderPassDescriptor).end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
			}
			/**
			* Resets all depth information so that nothing previously drawn will
			* occlude anything subsequently drawn.
			*/
			clearDepth(depth = 1) {
				if (!this.device || !this.depthTextureView) return;
				this._finishActiveRenderPass();
				const commandEncoder = this.device.createCommandEncoder();
				const activeFramebuffer = this.activeFramebuffer();
				const depthTextureView = activeFramebuffer ? activeFramebuffer.aaDepthTexture ? activeFramebuffer.aaDepthTextureView : activeFramebuffer.depthTextureView : this.depthTextureView;
				if (!depthTextureView) return;
				const renderPassDescriptor = {
					colorAttachments: [],
					depthStencilAttachment: {
						view: depthTextureView,
						depthClearValue: depth,
						depthLoadOp: "clear",
						depthStoreOp: "store",
						stencilLoadOp: "load",
						stencilStoreOp: "store"
					}
				};
				commandEncoder.beginRenderPass(renderPassDescriptor).end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
			}
			_prepareBuffer(renderBuffer, geometry, shader) {
				const attr = shader.attributes[renderBuffer.attr];
				if (!attr) return;
				const { src, dst, size, map } = renderBuffer;
				const device = this.device;
				const buffers = this._getOrMakeCachedBuffers(geometry);
				let srcData = geometry[src];
				if (!srcData || srcData.length === 0) {
					if (renderBuffer.default) {
						srcData = geometry[src] = renderBuffer.default(geometry);
						srcData.isDefault = true;
					} else return;
				}
				if (!buffers[dst] || geometry.dirtyFlags[src] !== false) {
					const raw = map ? map(srcData) : srcData;
					const typed = this._normalizeBufferData(raw, Float32Array);
					const pooledBufferInfo = this._getVertexBufferFromPool(geometry, dst, typed.byteLength);
					const dataCopy = new typed.constructor(typed);
					pooledBufferInfo.dataCopy = dataCopy;
					device.queue.writeBuffer(pooledBufferInfo.buffer, 0, dataCopy);
					buffers[dst] = pooledBufferInfo.buffer;
					geometry.dirtyFlags[src] = false;
				}
				shader.enableAttrib(attr, size);
			}
			_disableRemainingAttributes(shader) {}
			_enableAttrib(attr) {
				const loc = attr.location;
				if (!this.registerEnabled.has(loc)) this.registerEnabled.add(loc);
			}
			_ensureGeometryBuffers(buffers, indices, indexType) {
				if (!indices) return;
				const buffer = this.device.createBuffer({
					size: Math.ceil(indices.length * indexType.BYTES_PER_ELEMENT / 4) * 4,
					usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
					mappedAtCreation: true
				});
				new indexType(buffer.getMappedRange()).set(indices);
				buffer.unmap();
				buffers.indexBuffer = buffer;
				buffers.indexBufferType = indexType === Uint32Array ? "uint32" : "uint16";
			}
			_freeBuffers(buffers) {
				const destroyIfExists = (buf) => {
					if (buf && buf.destroy) buf.destroy();
				};
				destroyIfExists(buffers.indexBuffer);
				const freeDefs = (defs) => {
					for (const def of defs) {
						destroyIfExists(buffers[def.dst]);
						buffers[def.dst] = null;
					}
				};
				freeDefs(this.buffers.stroke);
				freeDefs(this.buffers.fill);
				freeDefs(this.buffers.user);
			}
			_getValidSampleCount(requestedCount) {
				if (requestedCount <= 1) return 1;
				if (requestedCount <= 4) return 4;
				return 4;
			}
			_shaderOptions({ mode, compute, workgroupSize }) {
				if (compute) return {
					compute: true,
					workgroupSize
				};
				const activeFramebuffer = this.activeFramebuffer();
				const format = activeFramebuffer ? this._getWebGPUColorFormat(activeFramebuffer) : this.presentationFormat;
				const requestedSampleCount = activeFramebuffer ? activeFramebuffer.antialias ? activeFramebuffer.antialiasSamples : 1 : 1;
				const sampleCount = this._getValidSampleCount(requestedSampleCount);
				const depthFormat = activeFramebuffer ? activeFramebuffer.useDepth ? this._getWebGPUDepthFormat(activeFramebuffer) : void 0 : this.depthFormat;
				const drawTarget = this.drawTarget();
				const clipping = this._clipping;
				const clipApplied = drawTarget._isClipApplied;
				return {
					topology: mode === 5 ? "triangle-strip" : "triangle-list",
					blendMode: this.states.curBlendMode,
					sampleCount,
					format,
					depthFormat,
					clipping,
					clipApplied
				};
			}
			_shaderOptionsDifferent(newOptions) {
				if (!this.activeShaderOptions) return true;
				for (const key in this.activeShaderOptions) if (this.activeShaderOptions[key] !== newOptions[key]) return true;
				return false;
			}
			_initShader(shader) {
				const device = this.device;
				if (shader.shaderType === "compute") {
					shader.computeModule = device.createShaderModule({ code: shader.computeSrc() });
					shader._computePipelineCache = null;
					shader._workgroupSize = null;
					shader.getPipeline = ({ workgroupSize }) => {
						if (!shader._computePipelineCache) {
							shader._computePipelineCache = device.createComputePipeline({
								layout: shader._pipelineLayout,
								compute: {
									module: shader.computeModule,
									entryPoint: "main"
								}
							});
							shader._workgroupSize = workgroupSize;
						}
						return shader._computePipelineCache;
					};
					return;
				}
				shader.vertModule = device.createShaderModule({ code: shader.vertSrc() });
				shader.fragModule = device.createShaderModule({ code: shader.fragSrc() });
				shader._pipelineCache = /* @__PURE__ */ new Map();
				shader.getPipeline = ({ topology, blendMode, sampleCount, format, depthFormat, clipping, clipApplied }) => {
					const key = `${topology}_${blendMode}_${sampleCount}_${format}_${depthFormat}_${clipping}_${clipApplied}`;
					if (!shader._pipelineCache.has(key)) {
						const pipeline = device.createRenderPipeline({
							layout: shader._pipelineLayout,
							vertex: {
								module: shader.vertModule,
								entryPoint: "main",
								buffers: this._getVertexLayout(shader)
							},
							fragment: {
								module: shader.fragModule,
								entryPoint: "main",
								targets: [{
									format,
									blend: this._getBlendState(blendMode)
								}]
							},
							primitive: { topology },
							multisample: { count: sampleCount },
							...depthFormat ? { depthStencil: {
								format: depthFormat,
								depthWriteEnabled: !clipping,
								depthCompare: "less-equal",
								stencilFront: {
									compare: clipping ? "always" : clipApplied ? "not-equal" : "always",
									failOp: "keep",
									depthFailOp: "keep",
									passOp: clipping ? "replace" : "keep"
								},
								stencilBack: {
									compare: clipping ? "always" : clipApplied ? "not-equal" : "always",
									failOp: "keep",
									depthFailOp: "keep",
									passOp: clipping ? "replace" : "keep"
								},
								stencilReadMask: 255,
								stencilWriteMask: clipping ? 255 : 0
							} } : {}
						});
						shader._pipelineCache.set(key, pipeline);
					}
					return shader._pipelineCache.get(key);
				};
			}
			_finalizeShader(shader) {
				shader._uniformBufferGroups = [];
				shader.buffersDirty = /* @__PURE__ */ new Set();
				for (const group of shader._uniformGroups) {
					const groupUniforms = Object.values(group.uniforms);
					const rawSize = Math.max(0, ...groupUniforms.map((u) => u.offsetEnd));
					const alignedSize = Math.ceil(rawSize / 16) * 16;
					shader._uniformBufferGroups.push({
						group: group.group,
						binding: group.binding,
						cacheKey: group.group * 1e3 + group.binding,
						varName: group.varName,
						structType: group.structType,
						uniforms: groupUniforms,
						size: alignedSize,
						bufferPool: [],
						nextBufferPool: [],
						dynamic: groupUniforms.some((u) => u.name.startsWith("uModel")),
						buffersInUse: /* @__PURE__ */ new Set(),
						currentBuffer: null
					});
				}
				this._shadersWithPools.push(shader);
				const bindGroupLayouts = /* @__PURE__ */ new Map();
				const groupEntries = /* @__PURE__ */ new Map();
				const structEntries = /* @__PURE__ */ new Map();
				for (const bufferGroup of shader._uniformBufferGroups) {
					const entries = structEntries.get(bufferGroup.group) || [];
					entries.push({
						bufferGroup,
						binding: bufferGroup.binding,
						visibility: shader.shaderType === "compute" ? GPUShaderStage.COMPUTE : GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
						buffer: {
							type: "uniform",
							hasDynamicOffset: bufferGroup.dynamic
						}
					});
					structEntries.set(bufferGroup.group, entries);
				}
				for (const [group, entries] of structEntries.entries()) {
					entries.sort((a, b) => a.binding - b.binding);
					groupEntries.set(group, entries);
				}
				for (const sampler of shader.samplers) {
					const group = sampler.group;
					const entries = groupEntries.get(group) || [];
					if (!["sampler", "texture_2d<f32>"].includes(sampler.type)) throw new Error(`Unsupported texture type: ${sampler.type}`);
					entries.push({
						binding: sampler.binding,
						visibility: sampler.visibility,
						sampler: sampler.type === "sampler" ? { type: "filtering" } : void 0,
						texture: sampler.type === "texture_2d<f32>" ? {
							sampleType: "float",
							viewDimension: "2d"
						} : void 0,
						uniform: sampler
					});
					entries.sort((a, b) => a.binding - b.binding);
					groupEntries.set(group, entries);
				}
				for (const storage of shader._storageBuffers || []) {
					const group = storage.group;
					const entries = groupEntries.get(group) || [];
					entries.push({
						binding: storage.binding,
						visibility: storage.visibility,
						buffer: { type: storage.accessMode === "read" ? "read-only-storage" : "storage" },
						storage
					});
					entries.sort((a, b) => a.binding - b.binding);
					groupEntries.set(group, entries);
				}
				const groupEntriesArr = [];
				for (const [group, entries] of groupEntries) {
					const layout = this.device.createBindGroupLayout({ entries });
					bindGroupLayouts.set(group, layout);
					groupEntriesArr.push([group, entries]);
				}
				shader._groupEntries = groupEntriesArr;
				shader._bindGroupLayouts = [...bindGroupLayouts.values()];
				shader._cachedBindGroup = {};
				shader._lastDynamicBuffer = {};
				shader._pipelineLayout = this.device.createPipelineLayout({ bindGroupLayouts: shader._bindGroupLayouts });
				shader._compiled = true;
			}
			_getBlendState(mode) {
				switch (mode) {
					case BLEND: return {
						color: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one-minus-src-alpha"
						},
						alpha: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one-minus-src-alpha"
						}
					};
					case ADD: return {
						color: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one"
						},
						alpha: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one"
						}
					};
					case REMOVE: return {
						color: {
							operation: "add",
							srcFactor: "zero",
							dstFactor: "one-minus-src-alpha"
						},
						alpha: {
							operation: "add",
							srcFactor: "zero",
							dstFactor: "one-minus-src-alpha"
						}
					};
					case MULTIPLY: return {
						color: {
							operation: "add",
							srcFactor: "dst-color",
							dstFactor: "one-minus-src-alpha"
						},
						alpha: {
							operation: "add",
							srcFactor: "dst-alpha",
							dstFactor: "one-minus-src-alpha"
						}
					};
					case SCREEN: return {
						color: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one-minus-src-color"
						},
						alpha: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one-minus-src-alpha"
						}
					};
					case EXCLUSION: return {
						color: {
							operation: "add",
							srcFactor: "one-minus-dst-color",
							dstFactor: "one-minus-src-color"
						},
						alpha: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one"
						}
					};
					case REPLACE: return {
						color: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "zero"
						},
						alpha: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "zero"
						}
					};
					case SUBTRACT: return {
						color: {
							operation: "reverse-subtract",
							srcFactor: "one",
							dstFactor: "one"
						},
						alpha: {
							operation: "add",
							srcFactor: "one",
							dstFactor: "one-minus-src-alpha"
						}
					};
					case DARKEST: return {
						color: {
							operation: "min",
							srcFactor: "one",
							dstFactor: "one"
						},
						alpha: {
							operation: "min",
							srcFactor: "one",
							dstFactor: "one"
						}
					};
					case LIGHTEST: return {
						color: {
							operation: "max",
							srcFactor: "one",
							dstFactor: "one"
						},
						alpha: {
							operation: "max",
							srcFactor: "one",
							dstFactor: "one"
						}
					};
					default:
						console.warn(`Unsupported blend mode: ${mode}`);
						return;
				}
			}
			_applyColorBlend() {}
			_getVertexLayout(shader) {
				const layouts = [];
				for (const attrName in shader.attributes) {
					const attr = shader.attributes[attrName];
					if (!attr || attr.location === -1) continue;
					const renderBuffer = this.buffers[shader.shaderType].find((buf) => buf.attr === attrName) || this.buffers.user.find((buf) => buf.attr === attrName);
					if (!renderBuffer) continue;
					const { size } = renderBuffer;
					const format = this._getFormatFromSize(size);
					layouts.push({
						arrayStride: size * 4,
						stepMode: "vertex",
						attributes: [{
							shaderLocation: attr.location,
							offset: 0,
							format
						}]
					});
				}
				return layouts;
			}
			_getVertexBuffers(shader) {
				if (!shader._vertexBuffers) {
					const buffers = [];
					for (const attrName in shader.attributes) {
						const attr = shader.attributes[attrName];
						if (!attr || attr.location === -1) continue;
						const renderBuffer = this.buffers[shader.shaderType].find((buf) => buf.attr === attrName) || this.buffers.user.find((buf) => buf.attr === attrName);
						if (!renderBuffer) continue;
						buffers.push(renderBuffer);
					}
					shader._vertexBuffers = buffers;
				}
				return shader._vertexBuffers;
			}
			_getFormatFromSize(size) {
				switch (size) {
					case 1: return "float32";
					case 2: return "float32x2";
					case 3: return "float32x3";
					case 4: return "float32x4";
					default: throw new Error(`Unsupported attribute size: ${size}`);
				}
			}
			_useShader(shader, options) {}
			_updateViewport() {
				this._origViewport = {
					width: this.width,
					height: this.height
				};
				this._viewport = [
					0,
					0,
					this.width,
					this.height
				];
			}
			_createPixelsArray() {
				this.pixels = new Uint8Array(this.width * this.pixelDensity() * this.height * this.pixelDensity() * 4);
			}
			supportsTriangleFan() {
				return false;
			}
			supportsVideoUpload() {
				return this._supportsVideoUpload !== false;
			}
			textureNeedsRecreating(texture) {
				if (texture.isFramebufferTexture) return false;
				const gpuTexture = texture.textureHandle.gpuTexture;
				const data = texture._getTextureDataFromSource();
				if (!data || !data.width || !data.height) return false;
				return data.width !== gpuTexture.width || data.height !== gpuTexture.height;
			}
			viewport() {}
			zClipRange() {
				return [0, 1];
			}
			defaultNearScale() {
				return .01;
			}
			defaultFarScale() {
				return 100;
			}
			_resetBuffersBeforeDraw() {
				this._finishActiveRenderPass();
				if (this._pInst.frameCount > 0) this._frameState = FRAME_STATE.PENDING;
				const activeFramebuffer = this.activeFramebuffer();
				const commandEncoder = this.device.createCommandEncoder();
				const depthTextureView = activeFramebuffer ? activeFramebuffer.aaDepthTexture ? activeFramebuffer.aaDepthTextureView : activeFramebuffer.depthTextureView : this.depthTextureView;
				if (depthTextureView) {
					const renderPassDescriptor = {
						colorAttachments: [],
						depthStencilAttachment: {
							view: depthTextureView,
							depthClearValue: 1,
							depthLoadOp: "clear",
							depthStoreOp: "store",
							stencilLoadOp: "load",
							stencilStoreOp: "store"
						}
					};
					commandEncoder.beginRenderPass(renderPassDescriptor).end();
					this._pendingCommandEncoders.push(commandEncoder.finish());
					this._hasPendingDraws = true;
				}
			}
			/**
			* Promotes the current frame to use mainFramebuffer.
			* Copies current canvas content to mainFramebuffer, then switches to rendering there.
			* @private
			*/
			_promoteToFramebuffer() {
				if (this._frameState === FRAME_STATE.PROMOTED) return;
				if (this.activeFramebuffer()) return;
				this.flushDraw();
				this._frameState = FRAME_STATE.PROMOTED;
				const canvasTexture = this.drawingContext.getCurrentTexture();
				if (this.mainFramebuffer.width !== this.width || this.mainFramebuffer.height !== this.height) this.mainFramebuffer.resize(this.width, this.height);
				const commandEncoder = this.device.createCommandEncoder();
				commandEncoder.copyTextureToTexture({
					texture: canvasTexture,
					origin: {
						x: 0,
						y: 0,
						z: 0
					},
					mipLevel: 0
				}, {
					texture: this.mainFramebuffer.colorTexture,
					origin: {
						x: 0,
						y: 0,
						z: 0
					},
					mipLevel: 0
				}, {
					width: Math.ceil(this.width * this._pixelDensity),
					height: Math.ceil(this.height * this._pixelDensity),
					depthOrArrayLayers: 1
				});
				commandEncoder.copyTextureToTexture({
					texture: this.depthTexture,
					origin: {
						x: 0,
						y: 0,
						z: 0
					},
					mipLevel: 0
				}, {
					texture: this.mainFramebuffer.depthTexture,
					origin: {
						x: 0,
						y: 0,
						z: 0
					},
					mipLevel: 0
				}, {
					width: Math.ceil(this.width * this._pixelDensity),
					height: Math.ceil(this.height * this._pixelDensity),
					depthOrArrayLayers: 1
				});
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
				const savedModelMatrix = this.states.uModelMatrix.copy();
				this.states.uModelMatrix.set(this.states.uModelMatrix.copy());
				this.states.uModelMatrix.reset();
				this.mainFramebuffer.defaultCamera.set(this.states.curCamera);
				this.mainFramebuffer.begin();
				this.states.uModelMatrix.set(savedModelMatrix);
			}
			_promoteToFramebufferWithoutCopy() {
				if (this._frameState === FRAME_STATE.PROMOTED) return;
				if (this.mainFramebuffer.width !== this.width || this.mainFramebuffer.height !== this.height) this.mainFramebuffer.resize(this.width, this.height);
				this._frameState = FRAME_STATE.PROMOTED;
				this.flushDraw();
				const savedModelMatrix = this.states.uModelMatrix.copy();
				this.states.uModelMatrix.set(this.states.uModelMatrix.copy());
				this.states.uModelMatrix.reset();
				this.mainFramebuffer.defaultCamera.set(this.states.curCamera);
				this.mainFramebuffer.begin();
				this.states.uModelMatrix.set(savedModelMatrix);
			}
			_initializeGeometryBufferPools(geometry) {
				if (geometry._vertexBufferPools) return;
				geometry._vertexBufferPools = {};
				geometry._vertexBuffersInUse = {};
				geometry._vertexBuffersToReturn = {};
				this._geometriesWithPools.push(geometry);
			}
			_getVertexBufferFromPool(geometry, dst, size) {
				this._initializeGeometryBufferPools(geometry);
				if (!geometry._vertexBufferPools[dst]) geometry._vertexBufferPools[dst] = [];
				if (!geometry._vertexBuffersInUse[dst]) geometry._vertexBuffersInUse[dst] = [];
				if (!geometry._vertexBuffersToReturn[dst]) geometry._vertexBuffersToReturn[dst] = [];
				const pool = geometry._vertexBufferPools[dst];
				if (pool.length > 0) {
					const bufferInfo = pool.pop();
					if (bufferInfo.buffer.size >= size) {
						geometry._vertexBuffersInUse[dst].push(bufferInfo);
						return bufferInfo;
					} else this._retiredBuffers.push(bufferInfo.buffer);
				}
				const bufferInfo = {
					buffer: this.device.createBuffer({
						size,
						usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
					}),
					size,
					dataCopy: null
				};
				geometry._vertexBuffersInUse[dst].push(bufferInfo);
				return bufferInfo;
			}
			_returnVertexBuffersToPool() {
				for (const geometry of this._geometriesWithPools) if (geometry._vertexBuffersToReturn) {
					for (const [dst, buffersToReturn] of Object.entries(geometry._vertexBuffersToReturn)) if (buffersToReturn.length > 0) {
						const pool = geometry._vertexBufferPools[dst] || [];
						while (buffersToReturn.length > 0) {
							const bufferInfo = buffersToReturn.pop();
							bufferInfo.dataCopy = null;
							pool.push(bufferInfo);
						}
						geometry._vertexBufferPools[dst] = pool;
					}
				}
			}
			onReset(geometry) {
				this._markGeometryBuffersForReturn(geometry);
			}
			_markGeometryBuffersForReturn(geometry) {
				if (geometry._vertexBuffersInUse && geometry._vertexBuffersToReturn) {
					for (const [dst, buffersInUse] of Object.entries(geometry._vertexBuffersInUse)) if (buffersInUse.length > 0) {
						const buffersToReturn = geometry._vertexBuffersToReturn[dst] || [];
						while (buffersInUse.length > 0) {
							const bufferInfo = buffersInUse.pop();
							buffersToReturn.push(bufferInfo);
						}
						geometry._vertexBuffersToReturn[dst] = buffersToReturn;
					}
				}
			}
			_getUniformBufferFromPool(bufferGroup) {
				if (bufferGroup.bufferPool.length > 0) {
					const bufferInfo = bufferGroup.bufferPool.pop();
					bufferGroup.buffersInUse.add(bufferInfo);
					return bufferInfo;
				}
				const newBuffer = this.device.createBuffer({
					size: bufferGroup.size,
					usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
				});
				const newData = new Float32Array(bufferGroup.size / 4);
				const bufferInfo = {
					buffer: newBuffer,
					data: newData,
					dataView: new DataView(newData.buffer)
				};
				bufferGroup.buffersInUse.add(bufferInfo);
				return bufferInfo;
			}
			_getDynamicUniformBufferFromPool(bufferGroup) {
				let buffer;
				if (this.currentUniformBuffer && this.currentUniformBuffer.offset + bufferGroup.size < this.currentUniformBuffer.size) buffer = this.currentUniformBuffer;
				else if (this.uniformBufferPool.length > 0) {
					buffer = this.uniformBufferPool.pop();
					this.activeUniformBuffers.push(buffer);
				} else {
					const size = 10240;
					buffer = {
						dynamic: true,
						lastOffset: 0,
						offset: 0,
						size,
						buffer: this.device.createBuffer({
							size,
							usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
							mappedAtCreation: true
						}),
						uniformBuffer: this.device.createBuffer({
							size,
							usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
						})
					};
					buffer.data = new Float32Array(buffer.buffer.getMappedRange());
					buffer.dataView = new DataView(buffer.data.buffer);
					this.activeUniformBuffers.push(buffer);
				}
				this.currentUniformBuffer = buffer;
				return buffer;
			}
			_returnUniformBuffersToPool() {
				for (const shader of this._shadersWithPools) this._returnShaderBuffersToPool(shader);
			}
			_returnShaderBuffersToPool(shader) {
				if (shader._uniformBufferGroups) for (const bufferGroup of shader._uniformBufferGroups) {
					while (bufferGroup.nextBufferPool.length > 0) bufferGroup.bufferPool.push(bufferGroup.nextBufferPool.pop());
					for (const bufferInfo of bufferGroup.buffersInUse.keys()) if (bufferInfo !== bufferGroup.currentBuffer) bufferGroup.nextBufferPool.push(bufferInfo);
					bufferGroup.buffersInUse.clear();
					if (bufferGroup.currentBuffer) bufferGroup.buffersInUse.add(bufferGroup.currentBuffer);
				}
			}
			flushDraw() {
				this._finishActiveRenderPass();
				if (this._hasPendingDraws) {
					const commandsToSubmit = this._pendingCommandEncoders;
					this._pendingCommandEncoders = [];
					this._hasPendingDraws = false;
					if (this.activeUniformBuffers.length > 0) {
						const encoder = this.device.createCommandEncoder();
						for (const bufferInfo of this.activeUniformBuffers) {
							bufferInfo.buffer.unmap();
							encoder.copyBufferToBuffer(bufferInfo.buffer, bufferInfo.uniformBuffer);
						}
						commandsToSubmit.unshift(encoder.finish());
					}
					this.queue.submit(commandsToSubmit);
					const tempBuffers = this._tempBuffers;
					this._tempBuffers = [];
					if (tempBuffers.length > 0) this._postSubmitCallbacks.push(() => {
						for (const buf of tempBuffers) buf.destroy();
					});
					for (const buf of this.activeUniformBuffers) {
						buf.offset = 0;
						buf.lastOffset = 0;
						buf.buffer.mapAsync(GPUMapMode.WRITE).then(() => {
							buf.data = new Float32Array(buf.buffer.getMappedRange());
							buf.dataView = new DataView(buf.data.buffer);
							this.uniformBufferPool.push(buf);
							return buf;
						});
					}
					this.activeUniformBuffers = [];
					this.currentUniformBuffer = void 0;
					if (this._postSubmitCallbacks.length > 0) {
						const callbacks = this._postSubmitCallbacks;
						this._postSubmitCallbacks = [];
						this.device.queue.onSubmittedWorkDone().then(() => {
							for (const callback of callbacks) callback();
						});
					}
					this.currentCanvasColorTexture = null;
					this.currentCanvasColorTextureView = null;
				}
			}
			_ensurePixelReadCanvas(width, height) {
				if (!this._pixelReadCanvas) {
					this._pixelReadCanvas = document.createElement("canvas");
					this._pixelReadCtx = this._pixelReadCanvas.getContext("2d");
				}
				if (this._pixelReadCanvas.width !== width || this._pixelReadCanvas.height !== height) {
					this._pixelReadCanvas.width = width;
					this._pixelReadCanvas.height = height;
				}
				return {
					canvas: this._pixelReadCanvas,
					ctx: this._pixelReadCtx
				};
			}
			resize(w, h) {
				super.resize(w, h);
				this._hasPendingDraws = true;
				this.flushDraw();
			}
			async finishDraw() {
				this.flushDraw();
				const states = [];
				if (this._frameState === FRAME_STATE.PROMOTED) {
					while (this.activeFramebuffers.length > 0) {
						const fbo = this.activeFramebuffers.pop();
						states.unshift({
							fbo,
							diff: { ...this.states }
						});
					}
					this.flushDraw();
					this._pInst.push();
					this.states.setValue("enableLighting", false);
					this.states.setValue("activeImageLight", null);
					this._pInst.setCamera(this.finalCamera);
					this._pInst.shader(this._getBlitShader());
					this._pInst.resetMatrix();
					this._pInst.imageMode(this._pInst.CENTER);
					this._pInst.image(this.mainFramebuffer, 0, 0);
					this._pInst.pop();
					this.flushDraw();
				}
				this._returnUniformBuffersToPool();
				for (const geometry of this._geometriesWithPools) this._markGeometryBuffersForReturn(geometry);
				this.resettingUniformBuffers = [];
				this._returnVertexBuffersToPool();
				const retired = this._retiredBuffers;
				this._postSubmitCallbacks.push(() => {
					for (const buffer of retired) if (buffer && buffer.destroy) buffer.destroy();
				});
				this._retiredBuffers = [];
				if (this._frameState === FRAME_STATE.PROMOTED) for (const { fbo, diff } of states) {
					if (fbo !== this.mainFramebuffer || this._frameState !== FRAME_STATE.PROMOTED) fbo.begin();
					for (const key in diff) this.states.setValue(key, diff[key]);
				}
			}
			_drawBuffers(geometry, { mode = 4, count = 1 }) {
				const buffers = this.geometryBufferCache.getCached(geometry);
				if (!buffers) return;
				if (this._frameState === FRAME_STATE.PENDING && !this.activeFramebuffer()) this._promoteToFramebufferWithoutCopy();
				const currentShader = this._curShader;
				const instanceList = this._instanceList;
				if (instanceList) {
					this._drawBuffersIndirect(geometry, buffers, currentShader, mode, instanceList);
					return;
				}
				this._beginActiveRenderPass();
				const passEncoder = this.activeRenderPass;
				this.setupShaderBindGroups(currentShader, passEncoder, {
					mode,
					buffers
				});
				for (const buffer of currentShader._vertexBuffers || this._getVertexBuffers(currentShader)) {
					const location = currentShader.attributes[buffer.attr].location;
					const gpuBuffer = buffers[buffer.dst];
					passEncoder.setVertexBuffer(location, gpuBuffer, 0);
				}
				if (currentShader.shaderType === "fill") {
					if (buffers.indexBuffer) {
						const indexFormat = buffers.indexFormat || "uint16";
						passEncoder.setIndexBuffer(buffers.indexBuffer, indexFormat);
						passEncoder.drawIndexed(geometry.faces.length * 3, count, 0, 0, 0);
					} else passEncoder.draw(geometry.vertices.length, count, 0, 0);
				} else if (currentShader.shaderType === "text") {
					if (!buffers.indexBuffer) throw new Error("Text geometry must have an index buffer");
					const indexFormat = buffers.indexFormat || "uint16";
					passEncoder.setIndexBuffer(buffers.indexBuffer, indexFormat);
					passEncoder.drawIndexed(geometry.faces.length * 3, count, 0, 0, 0);
				}
				if (buffers.lineVerticesBuffer && currentShader.shaderType === "stroke") passEncoder.draw(geometry.lineVertices.length / 3, count, 0, 0);
				this._hasPendingDraws = true;
			}
			_drawBuffersIndirect(geometry, buffers, currentShader, mode, instanceList) {
				this._finishActiveRenderPass();
				const isIndexed = !!buffers.indexBuffer && currentShader.shaderType !== "stroke";
				const indirectBuffer = this.device.createBuffer({
					size: 20,
					usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST,
					mappedAtCreation: true
				});
				const indirectInit = new Uint32Array(indirectBuffer.getMappedRange());
				if (currentShader.shaderType === "stroke") indirectInit[0] = geometry.lineVertices ? geometry.lineVertices.length / 3 : 0;
				else if (isIndexed) indirectInit[0] = geometry.faces.length * 3;
				else indirectInit[0] = geometry.vertices.length;
				indirectBuffer.unmap();
				this._tempBuffers.push(indirectBuffer);
				const copyEncoder = this.device.createCommandEncoder();
				copyEncoder.copyBufferToBuffer(instanceList.buffer, instanceList._lengthOffset, indirectBuffer, 4, 4);
				this._pendingCommandEncoders.push(copyEncoder.finish());
				this._beginActiveRenderPass();
				const passEncoder = this.activeRenderPass;
				this.setupShaderBindGroups(currentShader, passEncoder, {
					mode,
					buffers
				});
				for (const buffer of currentShader._vertexBuffers || this._getVertexBuffers(currentShader)) {
					const location = currentShader.attributes[buffer.attr].location;
					const gpuBuffer = buffers[buffer.dst];
					passEncoder.setVertexBuffer(location, gpuBuffer, 0);
				}
				if (currentShader.shaderType === "fill") {
					if (isIndexed) {
						passEncoder.setIndexBuffer(buffers.indexBuffer, buffers.indexFormat || "uint16");
						passEncoder.drawIndexedIndirect(indirectBuffer, 0);
					} else passEncoder.drawIndirect(indirectBuffer, 0);
				} else if (currentShader.shaderType === "stroke") {
					if (buffers.lineVerticesBuffer) passEncoder.drawIndirect(indirectBuffer, 0);
				} else if (currentShader.shaderType === "text") {
					if (buffers.indexBuffer) {
						passEncoder.setIndexBuffer(buffers.indexBuffer, buffers.indexFormat || "uint16");
						passEncoder.drawIndexedIndirect(indirectBuffer, 0);
					}
				}
				this._hasPendingDraws = true;
			}
			setupShaderBindGroups(currentShader, passEncoder, shaderOptionsParams) {
				const shaderOptions = this._shaderOptions(shaderOptionsParams);
				if (shaderOptions.compute || this.activeShader !== currentShader || this._shaderOptionsDifferent(shaderOptions)) passEncoder.setPipeline(currentShader.getPipeline(shaderOptions));
				if (!shaderOptions.compute) {
					this.activeShader = currentShader;
					this.activeShaderOptions = shaderOptions;
					if (this.drawTarget()._isClipApplied && !this._clipping) passEncoder.setStencilReference(0);
					else if (this._clipping) passEncoder.setStencilReference(1);
				}
				for (const bufferGroup of currentShader._uniformBufferGroups) if (bufferGroup.dynamic) {
					const uniformBufferInfo = this._getDynamicUniformBufferFromPool(bufferGroup);
					if (currentShader._lastDynamicBuffer[bufferGroup.cacheKey] !== uniformBufferInfo) {
						currentShader._cachedBindGroup[bufferGroup.group] = void 0;
						currentShader._lastDynamicBuffer[bufferGroup.cacheKey] = uniformBufferInfo;
					}
					this._packUniformGroup(currentShader, bufferGroup.uniforms, uniformBufferInfo);
					uniformBufferInfo.lastOffset = uniformBufferInfo.offset;
					uniformBufferInfo.offset += Math.ceil(bufferGroup.size / this.uniformBufferAlignment) * this.uniformBufferAlignment;
					bufferGroup.currentDynamicBuffer = uniformBufferInfo;
					bufferGroup.lastOffset = uniformBufferInfo.lastOffset;
				} else {
					let bufferInfo;
					if (!this._hasGroupDataChanged(currentShader, bufferGroup) && bufferGroup.currentBuffer) {
						bufferInfo = bufferGroup.currentBuffer;
						bufferGroup.buffersInUse.add(bufferInfo);
					} else {
						bufferInfo = this._getUniformBufferFromPool(bufferGroup);
						this._packUniformGroup(currentShader, bufferGroup.uniforms, bufferInfo);
						this.device.queue.writeBuffer(bufferInfo.buffer, 0, bufferInfo.data.buffer, bufferInfo.data.byteOffset, bufferInfo.data.byteLength);
						currentShader.buffersDirty.delete(bufferGroup.group * 1e3 + bufferGroup.binding);
						currentShader._cachedBindGroup[bufferGroup.group] = void 0;
						bufferGroup.currentBuffer = bufferInfo;
					}
				}
				for (const sampler of currentShader.samplers) {
					const key = sampler.group * 1e3 + sampler.binding;
					if (currentShader.buffersDirty.has(key)) {
						currentShader._cachedBindGroup[sampler.group] = void 0;
						currentShader.buffersDirty.delete(key);
					}
				}
				for (const storage of currentShader._storageBuffers || []) {
					const key = storage.group * 1e3 + storage.binding;
					if (currentShader.buffersDirty.has(key)) {
						currentShader._cachedBindGroup[storage.group] = void 0;
						currentShader.buffersDirty.delete(key);
					}
				}
				for (const iter of currentShader._groupEntries) {
					const group = iter[0];
					const entries = iter[1];
					let dynamicOffsetIdx = 0;
					const bgEntries = [];
					let bindGroup = currentShader._cachedBindGroup[group];
					for (const entry of entries) {
						const bufferGroup = entry.bufferGroup;
						const uniformBufferInfo = bufferGroup?.currentBuffer || bufferGroup?.currentDynamicBuffer;
						if (uniformBufferInfo) {
							if (bufferGroup.dynamic) this.dynamicEntryOffsets[dynamicOffsetIdx++] = bufferGroup.lastOffset;
							if (!bindGroup) bgEntries.push({
								binding: entry.binding,
								resource: bufferGroup.dynamic ? {
									buffer: uniformBufferInfo.uniformBuffer,
									offset: 0,
									size: Math.ceil(bufferGroup.size / this.uniformBufferAlignment) * this.uniformBufferAlignment
								} : { buffer: uniformBufferInfo.buffer }
							});
						} else if (entry.storage && !bindGroup) {
							const uniform = currentShader.uniforms[entry.storage.name];
							if (!uniform || !uniform._cachedData || !uniform._cachedData._isStorageBuffer && !uniform._cachedData._isStorageList) throw new Error(`Storage buffer "${entry.storage.name}" not set. Use shader.setUniform("${entry.storage.name}", storageBuffer)`);
							this._checkStorageElementType(entry.storage, uniform._cachedData);
							bgEntries.push({
								binding: entry.binding,
								resource: { buffer: uniform._cachedData.buffer }
							});
						} else if (!bindGroup) bgEntries.push({
							binding: entry.binding,
							resource: entry.uniform.type === "sampler" ? (entry.uniform.textureSource.texture || this._getEmptyTexture()).getSampler() : (entry.uniform.texture || this._getEmptyTexture()).textureHandle.view
						});
					}
					const layout = currentShader._bindGroupLayouts[group];
					if (!bindGroup) bindGroup = this.device.createBindGroup({
						layout,
						entries: bgEntries
					});
					currentShader._cachedBindGroup[group] = bindGroup;
					if (dynamicOffsetIdx === 0) passEncoder.setBindGroup(group, bindGroup);
					else passEncoder.setBindGroup(group, bindGroup, this.dynamicEntryOffsets, 0, dynamicOffsetIdx);
				}
				return passEncoder;
			}
			_packField(field, value, floatView, dataView, baseOffset) {
				if (value === void 0) return;
				if (value?.isVector) value = value.values.length !== value.dimensions ? value.values.slice(0, value.dimensions) : value.values;
				else if (value?.isColor) value = value._getRGBA([
					1,
					1,
					1,
					1
				]);
				const byteOffset = baseOffset + field.offset;
				if (field.baseType === "u32") {
					if (field.size === 4) dataView.setUint32(byteOffset, value, true);
					else for (let i = 0; i < value.length; i++) dataView.setUint32(byteOffset + i * 4, value[i], true);
				} else if (field.baseType === "i32") {
					if (field.size === 4) dataView.setInt32(byteOffset, value, true);
					else for (let i = 0; i < value.length; i++) dataView.setInt32(byteOffset + i * 4, value[i], true);
				} else if (field.packInPlace) {
					const base = byteOffset / 4;
					floatView[base + 0] = value[0];
					floatView[base + 1] = value[1];
					floatView[base + 2] = value[2];
					floatView[base + 4] = value[3];
					floatView[base + 5] = value[4];
					floatView[base + 6] = value[5];
					floatView[base + 8] = value[6];
					floatView[base + 9] = value[7];
					floatView[base + 10] = value[8];
				} else if (field.size === 4) floatView.set([value], byteOffset / 4);
				else floatView.set(value, byteOffset / 4);
			}
			_packUniformGroup(shader, groupUniforms, bufferInfo) {
				const data = bufferInfo.data;
				const dataView = bufferInfo.dataView;
				const offset = bufferInfo.offset || 0;
				for (const uniform of groupUniforms) {
					const fullUniform = shader.uniforms[uniform.name];
					if (!fullUniform || fullUniform.isSampler) continue;
					this._packField(fullUniform, fullUniform._mappedData, data, dataView, offset);
				}
			}
			_hasGroupDataChanged(shader, bufferGroup) {
				if (!bufferGroup.currentBuffer) return true;
				return shader.buffersDirty.has(bufferGroup.group * 1e3 + bufferGroup.binding);
			}
			_parseStruct(shaderSource, structName) {
				const structMatch = shaderSource.match(new RegExp(`struct\\s+${structName}\\s*\\{([^\\}]+)\\}`));
				if (!structMatch) throw new Error(`Can't find a struct definition for ${structName}`);
				const structBody = structMatch[1];
				const elements = {};
				let match;
				let index = 0;
				let offset = 0;
				const elementRegex = /(?:@location\((\d+)\)\s+)?(\w+):\s*([^\n]+?),?\n/g;
				const baseAlignAndSize = (type) => {
					if ([
						"f32",
						"i32",
						"u32",
						"bool"
					].includes(type)) return {
						align: 4,
						size: 4,
						items: 1,
						baseType: type
					};
					if (/^vec[2-4](<f32>|f)$/.test(type)) {
						const n = parseInt(type.match(/^vec([2-4])/)[1]);
						const size = 4 * n;
						return {
							align: n === 2 ? 8 : 16,
							size,
							items: n,
							baseType: "f32"
						};
					}
					if (/^vec[2-4]<(i32|u32)>$/.test(type)) {
						const n = parseInt(type.match(/^vec([2-4])/)[1]);
						const baseType = type.match(/^vec[2-4]<(i32|u32)>$/)[1];
						const size = 4 * n;
						return {
							align: n === 2 ? 8 : 16,
							size,
							items: n,
							baseType
						};
					}
					if (/^mat[2-4](?:x[2-4])?(<f32>|f)$/.test(type)) {
						if (type[4] === "x" && type[3] !== type[5]) throw new Error("Non-square matrices not implemented yet");
						const dim = parseInt(type[3]);
						const align = dim === 2 ? 8 : 16;
						return {
							align,
							size: Math.ceil(dim * 4 / align) * align * dim,
							pack: dim === 3 ? (data) => [
								...data.slice(0, 3),
								...data.slice(3, 6),
								...data.slice(6, 9)
							] : void 0,
							packInPlace: dim === 3,
							items: dim * dim,
							baseType: "f32"
						};
					}
					if (/^array<.+>$/.test(type)) {
						const [, subtype, rawLength] = type.match(/^array<(.+),\s*(\d+)>/);
						const length = parseInt(rawLength);
						const { align: elemAlign, size: elemSize, items: elemItems, pack: elemPack = (data) => [...data], baseType: elemBaseType } = baseAlignAndSize(subtype);
						const stride = Math.ceil(elemSize / elemAlign) * elemAlign;
						const pack = (data) => {
							const result = [];
							for (let i = 0; i < data.length; i += elemItems) {
								const elemData = elemPack(data.slice(i, elemItems));
								result.push(...elemData);
								for (let j = 0; j < stride / 4 - elemData.length; j++) result.push(0);
							}
							return result;
						};
						return {
							align: elemAlign,
							size: stride * length,
							items: elemItems * length,
							pack,
							baseType: elemBaseType
						};
					}
					throw new Error(`Unknown type in WGSL struct: ${type}`);
				};
				while ((match = elementRegex.exec(structBody)) !== null) {
					const [, location, name, type] = match;
					const { size, align, pack, packInPlace, baseType } = baseAlignAndSize(type);
					offset = Math.ceil(offset / align) * align;
					const offsetEnd = offset + size;
					elements[name] = {
						name,
						location: location ? parseInt(location) : void 0,
						index,
						type,
						size,
						offset,
						offsetEnd,
						pack,
						packInPlace,
						baseType
					};
					index++;
					offset = offsetEnd;
				}
				return elements;
			}
			_mapUniformData(uniform, data) {
				if (uniform.pack) return uniform.pack(data);
				return data;
			}
			_getShaderAttributes(shader) {
				const mainMatch = /fn main\(.+:\s*([^\s)]+)/.exec(shader._vertSrc);
				if (!mainMatch) throw new Error("Can't find `fn main` in vertex shader source");
				const inputType = mainMatch[1];
				return this._parseStruct(shader.vertSrc(), inputType);
			}
			getUniformMetadata(shader) {
				const uniformGroups = [];
				const uniformVarRegex = /@group\((\d+)\)\s+@binding\((\d+)\)\s+var<uniform>\s+(\w+)\s*:\s*(\w+);/g;
				let match;
				const src = shader.shaderType === "compute" ? shader.computeSrc() : shader.vertSrc();
				while ((match = uniformVarRegex.exec(src)) !== null) {
					const [, groupNum, binding, varName, structType] = match;
					const bindingIndex = parseInt(binding);
					const uniforms = this._parseStruct(src, structType);
					uniformGroups.push({
						group: parseInt(groupNum),
						binding: bindingIndex,
						varName,
						structType,
						uniforms
					});
				}
				if (uniformGroups.length === 0 && shader.shaderType !== "compute") throw new Error("Expected at least one uniform struct bound to @group(0)");
				const allUniforms = {};
				for (const group of uniformGroups) for (const [uniformName, uniformData] of Object.entries(group.uniforms)) allUniforms[uniformName] = {
					...uniformData,
					group: group.group,
					binding: group.binding,
					varName: group.varName
				};
				shader._uniformGroups = uniformGroups;
				const samplers = {};
				const samplerRegex = /@group\((\d+)\)\s*@binding\((\d+)\)\s*var\s+(\w+)\s*:\s*(texture_2d<f32>|sampler);/g;
				const storageBuffers = {};
				const storageRegex = /@group\((\d+)\)\s*@binding\((\d+)\)\s*var<storage,\s*(read|read_write)>\s+(\w+)\s*:\s*(array<[\w<>, ]+>|atomic<\w+>|\w+)/g;
				const structUniformBindings = {};
				for (const g of uniformGroups) structUniformBindings[g.group + "," + g.binding] = true;
				for (const [src, visibility] of [
					[shader.vertSrc(), GPUShaderStage.VERTEX],
					[shader.fragSrc(), GPUShaderStage.FRAGMENT],
					[shader.computeSrc ? shader.computeSrc() : null, GPUShaderStage.COMPUTE]
				]) {
					if (!src) continue;
					let match;
					while ((match = samplerRegex.exec(src)) !== null) {
						const [, group, binding, name, type] = match;
						const groupIndex = parseInt(group);
						const bindingIndex = parseInt(binding);
						if (structUniformBindings[groupIndex + "," + bindingIndex]) continue;
						const key = `${groupIndex},${bindingIndex}`;
						samplers[key] = {
							visibility: (samplers[key]?.visibility || 0) | visibility,
							group: groupIndex,
							binding: bindingIndex,
							name,
							type,
							isSampler: true,
							noData: type === "sampler"
						};
					}
					for (const sampler of Object.values(samplers)) if (sampler.type.startsWith("texture")) {
						const samplerName = sampler.name + "_sampler";
						const samplerNode = Object.values(samplers).find((s) => s.name === samplerName);
						if (!samplerNode) throw new Error(`Every shader texture needs an accompanying sampler. Could not find sampler ${samplerName} for texture ${sampler.name}`);
						samplerNode.textureSource = sampler;
					}
					while ((match = storageRegex.exec(src)) !== null) {
						const [, group, binding, accessMode, name, bindingType] = match;
						const elementType = bindingType.match(/^array<(.+?)(?:,\s*\d+)?>$/)?.[1] ?? bindingType;
						const groupIndex = parseInt(group);
						const bindingIndex = parseInt(binding);
						const key = `${groupIndex},${bindingIndex}`;
						const existing = storageBuffers[key];
						const finalAccessMode = existing?.accessMode === "read_write" || accessMode === "read_write" ? "read_write" : accessMode;
						storageBuffers[key] = {
							visibility: (existing?.visibility || 0) | visibility,
							group: groupIndex,
							binding: bindingIndex,
							name,
							accessMode: finalAccessMode,
							isStorage: true,
							type: "storage",
							elementType,
							expectedArrayType: this._storageArrayTypeFor(elementType)
						};
					}
				}
				shader._storageBuffers = Object.values(storageBuffers);
				shader._storageBuffersByName = {};
				for (const storage of shader._storageBuffers) shader._storageBuffersByName[storage.name] = storage;
				return [
					...Object.values(allUniforms).sort((a, b) => a.index - b.index),
					...Object.values(samplers),
					...Object.values(storageBuffers)
				];
			}
			getNextBindingIndex({ vert, frag, compute }, group = 0) {
				const bindingRegex = /@group\((\d+)\)\s*@binding\((\d+)\)/g;
				let maxBindingIndex = -1;
				const sources = [];
				if (vert) sources.push([vert, GPUShaderStage.VERTEX]);
				if (frag) sources.push([frag, GPUShaderStage.FRAGMENT]);
				if (compute) sources.push([compute, GPUShaderStage.COMPUTE]);
				for (const [src] of sources) {
					let match;
					while ((match = bindingRegex.exec(src)) !== null) {
						const [, groupIndex, bindingIndex] = match;
						if (parseInt(groupIndex) === group) maxBindingIndex = Math.max(maxBindingIndex, parseInt(bindingIndex));
					}
				}
				return maxBindingIndex + 1;
			}
			updateUniformValue(shader, uniform, data) {
				if (uniform.isSampler) uniform.texture = data instanceof Texture ? data : this.getTexture(data);
				else if (!data?._isStorageBuffer) uniform._mappedData = this._mapUniformData(uniform, uniform._cachedData);
				else if (shader._storageBuffersByName) this._checkStorageElementType(shader._storageBuffersByName[uniform.name], data);
				shader.buffersDirty.add(uniform.group * 1e3 + uniform.binding);
			}
			_updateTexture(uniform, tex, shader) {
				if (this.textureNeedsRecreating(tex)) {
					tex = this.getTexture(tex.src);
					uniform.texture = tex;
					shader.buffersDirty.add(uniform.group * 1e3 + uniform.binding);
				}
				tex.update();
			}
			bindTexture(tex) {}
			unbindTexture(tex) {}
			_unbindFramebufferTexture(uniform) {}
			createTexture({ width, height, format = "rgba8unorm", usage }) {
				const gpuTexture = this.device.createTexture({
					size: [Math.max(1, width), Math.max(1, height)],
					format,
					usage: usage || GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
				});
				return {
					gpuTexture,
					view: gpuTexture.createView()
				};
			}
			uploadTextureFromSource({ gpuTexture }, source) {
				const isVideo = source instanceof HTMLVideoElement;
				if (isVideo && source.readyState < 2) return;
				try {
					this.queue.copyExternalImageToTexture({ source }, { texture: gpuTexture }, [source.videoWidth || source.width, source.videoHeight || source.height]);
				} catch (e) {
					if (isVideo && e instanceof TypeError) {
						this._supportsVideoUpload = false;
						return;
					}
					throw e;
				}
				this._hasPendingDraws = true;
				this.flushDraw();
			}
			uploadTextureFromData({ gpuTexture }, data, width, height) {
				this.queue.writeTexture({ texture: gpuTexture }, data, {
					bytesPerRow: width * 4,
					rowsPerImage: height
				}, {
					width,
					height,
					depthOrArrayLayers: 1
				});
				this._hasPendingDraws = true;
				this.flushDraw();
			}
			setTextureParams(_texture) {}
			getSampler(texture) {
				const key = `${texture.minFilter}_${texture.magFilter}_${texture.wrapS}_${texture.wrapT}`;
				if (this.samplers.has(key)) return this.samplers.get(key);
				const constantMapping = {
					[NEAREST]: "nearest",
					[LINEAR]: "linear",
					[CLAMP]: "clamp-to-edge",
					[REPEAT]: "repeat",
					[MIRROR]: "mirror-repeat"
				};
				const sampler = this.device.createSampler({
					magFilter: constantMapping[texture.magFilter],
					minFilter: constantMapping[texture.minFilter],
					addressModeU: constantMapping[texture.wrapS],
					addressModeV: constantMapping[texture.wrapT]
				});
				this.samplers.set(key, sampler);
				return sampler;
			}
			bindTextureToShader(_texture, _sampler, _uniformName, _unit) {}
			deleteTexture({ gpuTexture }) {
				this._postSubmitCallbacks.push(() => gpuTexture.destroy());
			}
			_getLightShader(useTextureMaps = false) {
				const cacheKey = useTextureMaps ? "_defaultLightShaderWithMaps" : "_defaultLightShader";
				if (!this[cacheKey]) this[cacheKey] = new Shader(this, materialVertexShader({ useTextureMaps }), materialFragmentShader({ useTextureMaps }), {
					vertex: {
						"void beforeVertex": "() {}",
						"Vertex getObjectInputs": "(inputs: Vertex) { return inputs; }",
						"Vertex getWorldInputs": "(inputs: Vertex) { return inputs; }",
						"Vertex getCameraInputs": "(inputs: Vertex) { return inputs; }",
						"void afterVertex": "() {}"
					},
					fragment: {
						"void beforeFragment": "() {}",
						"Inputs getPixelInputs": "(inputs: Inputs) { return inputs; }",
						"vec4f combineColors": `(components: ColorComponents) {
                var rgb = vec3<f32>(0.0);
                rgb += components.diffuse * components.baseColor;
                rgb += components.ambient * components.ambientColor;
                rgb += components.specular * components.specularColor;
                rgb += components.emissive;
                return vec4<f32>(rgb, components.opacity);
              }`,
						"vec4f getFinalColor": "(color: vec4<f32>, texCoord: vec2<f32>) { return color; }",
						"void afterFragment": "() {}"
					}
				});
				return this[cacheKey];
			}
			_getColorShader() {
				if (!this._defaultColorShader) this._defaultColorShader = new Shader(this, colorVertexShader, colorFragmentShader, {
					vertex: {
						"void beforeVertex": "() {}",
						"Vertex getObjectInputs": "(inputs: Vertex) { return inputs; }",
						"Vertex getWorldInputs": "(inputs: Vertex) { return inputs; }",
						"Vertex getCameraInputs": "(inputs: Vertex) { return inputs; }",
						"void afterVertex": "() {}"
					},
					fragment: {
						"void beforeFragment": "() {}",
						"vec4<f32> getFinalColor": "(color: vec4<f32>, texCoord: vec2<f32>) { return color; }",
						"void afterFragment": "() {}"
					}
				});
				return this._defaultColorShader;
			}
			_getLineShader() {
				if (!this._defaultLineShader) this._defaultLineShader = new Shader(this, lineDefs + lineVertexShader, lineDefs + lineFragmentShader, {
					vertex: {
						"void beforeVertex": "() {}",
						"StrokeVertex getObjectInputs": "(inputs: StrokeVertex) { return inputs; }",
						"StrokeVertex getWorldInputs": "(inputs: StrokeVertex) { return inputs; }",
						"StrokeVertex getCameraInputs": "(inputs: StrokeVertex) { return inputs; }",
						"void afterVertex": "() {}"
					},
					fragment: {
						"void beforeFragment": "() {}",
						"Inputs getPixelInputs": "(inputs: Inputs) { return inputs; }",
						"vec4<f32> getFinalColor": "(color: vec4<f32>, texCoord: vec2<f32>) { return color; }",
						"bool shouldDiscard": "(outside: bool) { return outside; };",
						"void afterFragment": "() {}"
					}
				});
				return this._defaultLineShader;
			}
			_getFontShader() {
				if (!this._defaultFontShader) this._defaultFontShader = new Shader(this, fontVertexShader, fontFragmentShader);
				return this._defaultFontShader;
			}
			_getBlitShader() {
				if (!this._defaultBlitShader) this._defaultBlitShader = new Shader(this, blitVertexShader, blitFragmentShader);
				return this._defaultBlitShader;
			}
			_adjustDimensions(width, height) {
				return {
					adjustedWidth: width,
					adjustedHeight: height
				};
			}
			_applyClip() {
				const commandEncoder = this.device.createCommandEncoder();
				const activeFramebuffer = this.activeFramebuffer();
				const depthTextureView = activeFramebuffer ? activeFramebuffer.aaDepthTexture ? activeFramebuffer.aaDepthTextureView : activeFramebuffer.depthTextureView : this.depthTextureView;
				if (!depthTextureView) return;
				const renderPassDescriptor = {
					colorAttachments: [],
					depthStencilAttachment: {
						view: depthTextureView,
						stencilLoadOp: "clear",
						stencilStoreOp: "store",
						stencilClearValue: 0,
						depthReadOnly: true,
						stencilReadOnly: false
					}
				};
				commandEncoder.beginRenderPass(renderPassDescriptor).end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
			}
			_unapplyClip() {}
			_clearClipBuffer() {
				this._finishActiveRenderPass();
				const commandEncoder = this.device.createCommandEncoder();
				const activeFramebuffer = this.activeFramebuffer();
				const depthTextureView = activeFramebuffer ? activeFramebuffer.aaDepthTexture ? activeFramebuffer.aaDepthTextureView : activeFramebuffer.depthTextureView : this.depthTextureView;
				if (!depthTextureView) return;
				const renderPassDescriptor = {
					colorAttachments: [],
					depthStencilAttachment: {
						view: depthTextureView,
						stencilLoadOp: "clear",
						stencilStoreOp: "store",
						stencilClearValue: 1,
						depthReadOnly: true,
						stencilReadOnly: false
					}
				};
				commandEncoder.beginRenderPass(renderPassDescriptor).end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
			}
			_applyStencilTestIfClipping() {}
			uniformNameFromHookKey(key) {
				return key.slice(0, key.indexOf(":"));
			}
			populateHooks(shader, src, shaderType) {
				if (!src.includes("fn main")) return src;
				src = src.replace(/\/\/ @p5 (ifdef|ifndef) (\w+)\s+(\w+)\n((?:(?!\/\/ @p5)(?:.|\n))*)\/\/ @p5 endif/g, (_, condition, hookType, hookName, body) => {
					const target = condition === "ifdef";
					if ((!!shader.hooks.modified.vertex[`${hookType} ${hookName}`] || !!shader.hooks.modified.fragment[`${hookType} ${hookName}`]) === target) return body;
					else return "";
				});
				let [preMain, main, postMain] = src.split(/((?:@(?:vertex|fragment|compute)\s*(?:@workgroup_size\([^)]+\)\s*)?)?fn main[^{]+\{)/);
				const getBuiltinParamName = (mainSrc, builtinName) => {
					const match = new RegExp(`@builtin\\s*\\(\\s*${builtinName}\\s*\\)\\s*(\\w+)\\s*:`).exec(mainSrc);
					return match ? match[1] : null;
				};
				const ensureBuiltinParam = (mainSrc, builtinName, fallbackName, typeName) => {
					const existingName = getBuiltinParamName(mainSrc, builtinName);
					if (existingName) return {
						mainSrc,
						argName: existingName
					};
					const hasParams = /\(\s*\S/.test(mainSrc);
					return {
						mainSrc: mainSrc.replace(/\)\s*(->|\{)/, `${hasParams ? ", " : ""}@builtin(${builtinName}) ${fallbackName}: ${typeName}) $1`),
						argName: fallbackName
					};
				};
				const getMainStructParameter = (mainSrc) => {
					const match = /fn main\s*\(\s*(\w+)\s*:\s*(\w+)/.exec(mainSrc);
					if (!match) return null;
					return {
						inputName: match[1],
						structName: match[2]
					};
				};
				const getStructBuiltinFieldName = (structName, builtinName) => {
					const structMatch = new RegExp(`struct\\s+${structName}\\s*\\{([^}]*)\\}`, "s").exec(preMain);
					if (!structMatch) return null;
					const fieldMatch = new RegExp(`@builtin\\s*\\(\\s*${builtinName}\\s*\\)\\s*(\\w+)\\s*:`, "s").exec(structMatch[1]);
					return fieldMatch ? fieldMatch[1] : null;
				};
				const appendHookParams = (params, additionalParams) => {
					if (additionalParams.length === 0) return params;
					const hasParams = !/^\(\s*\)$/.test(params);
					return `${params.slice(0, -1)}${hasParams ? ", " : ""}${additionalParams.join(", ")})`;
				};
				let hookExtraParams = [];
				let hookExtraArgs = [];
				if (shaderType === "vertex") {
					const ensuredInstance = ensureBuiltinParam(main, "instance_index", "instanceID", "u32");
					main = ensuredInstance.mainSrc;
					const ensuredVertex = ensureBuiltinParam(main, "vertex_index", "_p5VertexId", "u32");
					main = ensuredVertex.mainSrc;
					hookExtraParams = ["instanceID: u32", "_p5VertexId: u32"];
					hookExtraArgs = [ensuredInstance.argName, ensuredVertex.argName];
				} else if (shaderType === "fragment") {
					let fragmentPositionArg = getBuiltinParamName(main, "position");
					if (!fragmentPositionArg) {
						const mainStructParam = getMainStructParameter(main);
						if (mainStructParam) {
							const positionField = getStructBuiltinFieldName(mainStructParam.structName, "position");
							if (positionField) fragmentPositionArg = `${mainStructParam.inputName}.${positionField}`;
						}
					}
					if (!fragmentPositionArg) {
						const ensuredPosition = ensureBuiltinParam(main, "position", "_p5FragPos", "vec4<f32>");
						main = ensuredPosition.mainSrc;
						fragmentPositionArg = ensuredPosition.argName;
					}
					hookExtraParams = ["_p5FragPos: vec4<f32>"];
					hookExtraArgs = [fragmentPositionArg];
				} else if (shaderType === "compute") {
					const ensuredGlobalId = ensureBuiltinParam(main, "global_invocation_id", "_p5GlobalId", "vec3<u32>");
					main = ensuredGlobalId.mainSrc;
					hookExtraParams = ["_p5GlobalId: vec3<u32>"];
					hookExtraArgs = [ensuredGlobalId.argName];
				}
				let hookUniformFields = "";
				for (const key in shader.hooks.uniforms) {
					if (key.endsWith(": sampler2D")) continue;
					hookUniformFields += `  ${key},\n`;
				}
				if (hookUniformFields) {
					const nextBinding = this.getNextBindingIndex({
						vert: shaderType === "vertex" ? preMain + (shader.hooks.vertex?.declarations ?? "") + shader.hooks.declarations : shader._vertSrc,
						frag: shaderType === "fragment" ? preMain + (shader.hooks.fragment?.declarations ?? "") + shader.hooks.declarations : shader._fragSrc,
						compute: shaderType === "compute" ? preMain + (shader.hooks.compute?.declarations ?? "") + shader.hooks.declarations : shader._computeSrc
					}, 0);
					const hookUniformsDecl = `
// Hook Uniforms (from .modify())
struct HookUniforms {
${hookUniformFields}}

@group(0) @binding(${nextBinding}) var<uniform> hooks: HookUniforms;
`;
					const replaced = preMain.replace(/(@group\(0\)\s+@binding)/, `${hookUniformsDecl}\n$1`);
					if (replaced === preMain) preMain = preMain + "\n" + hookUniformsDecl;
					else preMain = replaced;
				}
				if (shader.hooks.varyingVariables && shader.hooks.varyingVariables.length > 0) {
					let nextLocationIndex = this._getNextAvailableLocation(preMain, shaderType);
					let varyingMembers = "";
					for (const varyingVar of shader.hooks.varyingVariables) {
						const member = `@location(${nextLocationIndex++}) ${varyingVar},`;
						varyingMembers += member + "\n";
					}
					if (shaderType === "vertex") preMain = preMain.replace(/struct\s+VertexOutput\s+\{([^}]*)\}/, (match, body) => `struct VertexOutput {${body}\n${varyingMembers}}`);
					else if (shaderType === "fragment") preMain = preMain.replace(/struct\s+FragmentInput\s+\{([^}]*)\}/, (match, body) => `struct FragmentInput {${body}\n${varyingMembers}}`);
				}
				if (shader.hooks.varyingVariables && shader.hooks.varyingVariables.length > 0) {
					let varyingDeclarations = "";
					for (const varyingVar of shader.hooks.varyingVariables) {
						const [varName, varType] = varyingVar.split(":").map((s) => s.trim());
						varyingDeclarations += `var<private> ${varName}: ${varType};\n`;
					}
					preMain += varyingDeclarations;
					if (shaderType === "vertex") {
						let copyStatements = "";
						for (const varyingVar of shader.hooks.varyingVariables) {
							const [varName] = varyingVar.split(":").map((s) => s.trim());
							copyStatements += `  OUTPUT_VAR.${varName} = ${varName};\n`;
						}
						const returnMatch = postMain.match(/return\s+(\w+)\s*;/);
						if (returnMatch) {
							const outputVarName = returnMatch[1];
							copyStatements = copyStatements.replace(/OUTPUT_VAR/g, outputVarName);
							postMain = postMain.replace(/(return\s+\w+\s*;)/g, `${copyStatements}  $1`);
						}
					} else if (shaderType === "fragment") {
						let initStatements = "";
						for (const varyingVar of shader.hooks.varyingVariables) {
							const [varName] = varyingVar.split(":").map((s) => s.trim());
							initStatements += `  ${varName} = INPUT_VAR.${varName};\n`;
						}
						const mainStructParam = getMainStructParameter(main);
						if (mainStructParam) {
							const inputVarName = mainStructParam.inputName;
							initStatements = initStatements.replace(/INPUT_VAR/g, inputVarName);
							postMain = initStatements + postMain;
						}
					}
				}
				if (shader.hooks.instanceIDVarying) {
					const { declaration, source, interpolation } = shader.hooks.instanceIDVarying;
					const nextLocIndex = this._getNextAvailableLocation(preMain, shaderType);
					const interpAttr = interpolation ? ` @interpolate(${interpolation})` : "";
					const [varName] = declaration.split(":").map((s) => s.trim());
					const structMember = `@location(${nextLocIndex})${interpAttr} ${declaration},`;
					if (shaderType === "vertex") {
						preMain = preMain.replace(/struct\s+VertexOutput\s+\{([^}]*)\}/, (match, body) => `struct VertexOutput {${body}\n${structMember}}`);
						preMain += `var<private> ${declaration};\n`;
						postMain = `\n  ${varName} = ${source};\n` + postMain;
						const returnMatch = postMain.match(/return\s+(\w+)\s*;/);
						if (returnMatch) {
							const outputVarName = returnMatch[1];
							postMain = postMain.replace(/(return\s+\w+\s*;)/g, `${outputVarName}.${varName} = ${varName};\n  $1`);
						}
					} else if (shaderType === "fragment") {
						preMain = preMain.replace(/struct\s+FragmentInput\s+\{([^}]*)\}/, (match, body) => `struct FragmentInput {${body}\n${structMember}}`);
						preMain += `var<private> ${declaration};\n`;
						const mainStructParam = getMainStructParameter(main);
						if (mainStructParam) postMain = `\n  ${varName} = ${mainStructParam.inputName}.${varName};\n` + postMain;
					}
				}
				let hooks = "";
				let defines = "";
				if (shader.hooks.declarations) hooks += shader.hooks.declarations + "\n";
				if (shader.hooks[shaderType] && shader.hooks[shaderType].declarations) hooks += shader.hooks[shaderType].declarations + "\n";
				for (const hookDef in shader.hooks.helpers) {
					const [hookType, hookName] = hookDef.split(" ");
					const [, params, body] = /^(\([^)]*\))((?:.|\n)*)$/.exec(shader.hooks.helpers[hookDef]);
					if (hookType === "void") hooks += `fn ${hookName}${params}${body}\n`;
					else hooks += `fn ${hookName}${params} -> ${hookType}${body}\n`;
				}
				for (const hookDef in shader.hooks[shaderType]) {
					if (hookDef === "declarations") continue;
					const [hookType, hookName] = hookDef.split(" ");
					defines += `const AUGMENTED_HOOK_${hookName} = ${shader.hooks.modified[shaderType][hookDef] ? "true" : "false"};\n`;
					let [, params, body] = /^(\([^)]*\))((?:.|\n)*)$/.exec(shader.hooks[shaderType][hookDef]);
					params = appendHookParams(params, hookExtraParams);
					if (hookType === "void") hooks += `fn HOOK_${hookName}${params}${body}\n`;
					else hooks += `fn HOOK_${hookName}${params} -> ${hookType}${body}\n`;
				}
				if (hookExtraArgs.length > 0) {
					const addHookArgs = (src) => {
						const insertions = [];
						let searchIdx = 0;
						let m;
						while ((m = /HOOK_\w+\(/.exec(src.slice(searchIdx))) !== null) {
							const openParen = searchIdx + m.index + m[0].length - 1;
							let pos = openParen + 1;
							let nesting = 1;
							let hasParams = false;
							while (pos < src.length && nesting > 0) {
								if (src[pos] === "(") nesting++;
								else if (src[pos] === ")") {
									nesting--;
									if (nesting === 0) break;
								} else if (/\S/.test(src[pos])) hasParams = true;
								pos++;
							}
							insertions.push({
								pos,
								hasParams
							});
							searchIdx = openParen + 1;
						}
						insertions.sort((a, b) => b.pos - a.pos);
						let result = src;
						for (const { pos, hasParams } of insertions) {
							const insertion = (hasParams ? ", " : "") + hookExtraArgs.join(", ");
							result = result.slice(0, pos) + insertion + result.slice(pos);
						}
						return result;
					};
					preMain = addHookArgs(preMain);
					postMain = addHookArgs(postMain);
				}
				return preMain + "\n" + defines + hooks + main + postMain;
			}
			_getNextAvailableLocation(shaderSource, shaderType) {
				let maxLocation = -1;
				const structName = shaderType === "vertex" ? "VertexOutput" : "FragmentInput";
				const structMatch = shaderSource.match(new RegExp(`struct\\s+${structName}\\s*\\{([^}]*)\\}`, "s"));
				if (structMatch) {
					const locationMatches = structMatch[1].matchAll(/@location\((\d+)\)/g);
					for (const match of locationMatches) {
						const locationNum = parseInt(match[1]);
						if (locationNum > maxLocation) maxLocation = locationNum;
					}
				}
				return maxLocation + 1;
			}
			getShaderHookTypes(shader, hookName) {
				const wgslToDataType = {
					f32: DataType.float1,
					"vec2<f32>": DataType.float2,
					"vec3<f32>": DataType.float3,
					"vec4<f32>": DataType.float4,
					vec2f: DataType.float2,
					vec3f: DataType.float3,
					vec4f: DataType.float4,
					i32: DataType.int1,
					"vec2<i32>": DataType.int2,
					"vec3<i32>": DataType.int3,
					"vec4<i32>": DataType.int4,
					bool: DataType.bool1,
					"vec2<bool>": DataType.bool2,
					"vec3<bool>": DataType.bool3,
					"vec4<bool>": DataType.bool4,
					"mat2x2<f32>": DataType.mat2,
					"mat3x3<f32>": DataType.mat3,
					"mat4x4<f32>": DataType.mat4,
					"texture_2d<f32>": DataType.sampler2D
				};
				let fullSrc = shader._vertSrc;
				let body = shader.hooks.vertex[hookName];
				if (!body) {
					body = shader.hooks.fragment[hookName];
					fullSrc = shader._fragSrc;
				}
				if (!body) {
					body = shader.hooks.compute[hookName];
					fullSrc = shader._computeSrc;
				}
				if (!body) throw new Error(`Can't find hook ${hookName}!`);
				const nameParts = hookName.split(/\s+/g);
				const functionName = nameParts.pop();
				const returnType = nameParts.pop();
				const returnQualifiers = [...nameParts];
				const parameterMatch = /\(([^)]*)\)/.exec(body);
				if (!parameterMatch) throw new Error(`Couldn't find function parameters in hook body:\n${body}`);
				const structProperties = (structName) => {
					const structDefMatch = new RegExp(`struct\\s+${structName}\\s*{([^}]*)}`).exec(fullSrc);
					if (!structDefMatch) return void 0;
					const properties = [];
					for (const fieldSrc of structDefMatch[1].split(",")) {
						const trimmed = fieldSrc.trim();
						if (!trimmed) continue;
						const fieldMatch = /(?:@location\([^)]*\)\s*)?(\w+)\s*:\s*([^,\s]+)/.exec(trimmed);
						if (!fieldMatch) continue;
						const name = fieldMatch[1];
						let typeName = fieldMatch[2];
						const dataType = wgslToDataType[typeName] || null;
						const typeProperties = structProperties(typeName);
						properties.push({
							name,
							type: {
								typeName,
								qualifiers: [],
								properties: typeProperties,
								dataType
							}
						});
					}
					return properties;
				};
				const parameters = parameterMatch[1].split(",").map((paramString) => {
					const trimmed = paramString.trim();
					if (!trimmed) return null;
					const parts = trimmed.split(":").map((s) => s.trim());
					if (parts.length !== 2) return null;
					const name = parts[0];
					let typeName = parts[1];
					if (typeName.includes("texture_2d")) typeName = "texture_2d<f32>";
					const dataType = wgslToDataType[typeName] || null;
					const properties = structProperties(typeName);
					return {
						name,
						type: {
							typeName,
							qualifiers: [],
							properties,
							dataType
						}
					};
				}).filter(Boolean);
				const returnDataType = wgslToDataType[returnType] || null;
				return {
					name: functionName,
					returnType: {
						typeName: returnType,
						qualifiers: returnQualifiers,
						properties: structProperties(returnType),
						dataType: returnDataType
					},
					parameters
				};
			}
			_ensurePixelReadBuffer(requiredSize) {
				if (!this.pixelReadBuffer || this.pixelReadBufferSize < requiredSize) {
					if (this.pixelReadBuffer) {
						this.flushDraw();
						this.pixelReadBuffer.destroy();
					}
					const bufferSize = Math.max(requiredSize, this.pixelReadBufferSize * 2);
					this.pixelReadBuffer = this.device.createBuffer({
						size: bufferSize,
						usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
					});
					this.pixelReadBufferSize = bufferSize;
				}
				return this.pixelReadBuffer;
			}
			_alignBytesPerRow(bytesPerRow) {
				return Math.ceil(bytesPerRow / 256) * 256;
			}
			defaultFramebufferAlpha() {
				return true;
			}
			defaultFramebufferAntialias() {
				return this._pInst._webgpuAttributes?.antialias !== false;
			}
			supportsFramebufferAntialias() {
				return true;
			}
			createFramebufferResources(framebuffer) {}
			validateFramebufferFormats(framebuffer) {
				if (![
					"unsigned-byte",
					"float",
					"half-float"
				].includes(framebuffer.format)) {
					console.warn("Unknown Framebuffer format. Please use UNSIGNED_BYTE, FLOAT, or HALF_FLOAT. Defaulting to UNSIGNED_BYTE.");
					framebuffer.format = UNSIGNED_BYTE;
				}
				if (framebuffer.useDepth && !["unsigned-int", "float"].includes(framebuffer.depthFormat)) {
					console.warn("Unknown Framebuffer depth format. Please use UNSIGNED_INT or FLOAT. Defaulting to FLOAT.");
					framebuffer.depthFormat = FLOAT;
				}
			}
			recreateFramebufferTextures(framebuffer) {
				this.flushDraw();
				if (framebuffer.colorTexture && framebuffer.colorTexture.destroy) {
					const tex = framebuffer.colorTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
					framebuffer.colorTextureView = null;
				}
				if (framebuffer.aaColorTexture && framebuffer.aaColorTexture.destroy) {
					const tex = framebuffer.aaColorTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
					framebuffer.aaColorTextureView = null;
				}
				if (framebuffer.depthTexture && framebuffer.depthTexture.destroy) {
					const tex = framebuffer.depthTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
					framebuffer.depthTextureView = null;
				}
				if (framebuffer.aaDepthTexture && framebuffer.aaDepthTexture.destroy) {
					const tex = framebuffer.aaDepthTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
					framebuffer.aaDepthTextureView = null;
				}
				const baseDescriptor = {
					size: {
						width: framebuffer.width * framebuffer.density,
						height: framebuffer.height * framebuffer.density,
						depthOrArrayLayers: 1
					},
					format: this._getWebGPUColorFormat(framebuffer)
				};
				const colorTextureDescriptor = {
					...baseDescriptor,
					usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | (framebuffer._useCanvasFormat ? GPUTextureUsage.COPY_DST : 0),
					sampleCount: 1
				};
				framebuffer.colorTexture = this.device.createTexture(colorTextureDescriptor);
				framebuffer.colorTextureView = framebuffer.colorTexture.createView();
				if (framebuffer.antialias) {
					const aaColorTextureDescriptor = {
						...baseDescriptor,
						usage: GPUTextureUsage.RENDER_ATTACHMENT,
						sampleCount: this._getValidSampleCount(framebuffer.antialiasSamples)
					};
					framebuffer.aaColorTexture = this.device.createTexture(aaColorTextureDescriptor);
					framebuffer.aaColorTextureView = framebuffer.aaColorTexture.createView();
				}
				if (framebuffer.useDepth) {
					const depthBaseDescriptor = {
						size: {
							width: framebuffer.width * framebuffer.density,
							height: framebuffer.height * framebuffer.density,
							depthOrArrayLayers: 1
						},
						format: this._getWebGPUDepthFormat(framebuffer)
					};
					const depthTextureDescriptor = {
						...depthBaseDescriptor,
						usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | (framebuffer._useCanvasFormat ? GPUTextureUsage.COPY_DST : 0),
						sampleCount: 1
					};
					framebuffer.depthTexture = this.device.createTexture(depthTextureDescriptor);
					framebuffer.depthTextureView = framebuffer.depthTexture.createView();
					if (framebuffer.antialias) {
						const aaDepthTextureDescriptor = {
							...depthBaseDescriptor,
							usage: GPUTextureUsage.RENDER_ATTACHMENT,
							sampleCount: this._getValidSampleCount(framebuffer.antialiasSamples)
						};
						framebuffer.aaDepthTexture = this.device.createTexture(aaDepthTextureDescriptor);
						framebuffer.aaDepthTextureView = framebuffer.aaDepthTexture.createView();
					}
				}
				this._clearFramebufferTextures(framebuffer);
			}
			_clearFramebufferTextures(framebuffer) {
				this._finishActiveRenderPass();
				const commandEncoder = this.device.createCommandEncoder();
				const colorAttachment = {
					view: framebuffer.aaColorTexture ? framebuffer.aaColorTextureView : framebuffer.colorTextureView,
					loadOp: "clear",
					storeOp: "store",
					clearValue: {
						r: 0,
						g: 0,
						b: 0,
						a: 0
					},
					resolveTarget: framebuffer.aaColorTexture ? framebuffer.colorTextureView : void 0
				};
				const depthStencilAttachment = framebuffer.aaDepthTexture || framebuffer.depthTexture ? {
					view: framebuffer.aaDepthTexture ? framebuffer.aaDepthTextureView : framebuffer.depthTextureView,
					depthLoadOp: "clear",
					depthStoreOp: "store",
					depthClearValue: 1,
					stencilLoadOp: "clear",
					stencilStoreOp: "store",
					depthReadOnly: false,
					stencilReadOnly: false
				} : void 0;
				const renderPassDescriptor = {
					colorAttachments: [colorAttachment],
					depthStencilAttachment
				};
				commandEncoder.beginRenderPass(renderPassDescriptor).end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
			}
			_getFramebufferColorTextureView(framebuffer) {
				if (framebuffer.colorTexture) return framebuffer.colorTextureView;
				return null;
			}
			createFramebufferTextureHandle(framebufferTexture) {
				const src = framebufferTexture;
				let renderer = this;
				return {
					get view() {
						return renderer._getFramebufferColorTextureView(src.framebuffer);
					},
					get gpuTexture() {
						return src.framebuffer.colorTexture;
					}
				};
			}
			_jsValueToWgslType(value) {
				if (typeof value === "number") return "f32";
				if (value?.isVector) {
					if (value.dimensions === 2) return "vec2f";
					if (value.dimensions === 3) return "vec3f";
					if (value.dimensions === 4) return "vec4f";
					throw new Error(`Unsupported vector dimension ${value.dimensions} for struct storage field`);
				}
				if (value?.isColor) return "vec4f";
				if (Array.isArray(value)) {
					if (value.length === 2) return "vec2f";
					if (value.length === 3) return "vec3f";
					if (value.length === 4) return "vec4f";
					throw new Error(`Unsupported array length ${value.length} for struct storage field`);
				}
				throw new Error(`Unsupported value type ${typeof value} for struct storage field`);
			}
			_inferStructSchema(firstElement) {
				const entries = Object.entries(firstElement);
				if (!p5.disableFriendlyErrors) {
					for (const [name, value] of entries) if (value !== null && typeof value === "object" && !Array.isArray(value) && !value?.isVector && !value?.isColor) p5._friendlyError(`The "${name}" property in your storage data contains a nested object. Make sure you only use properties with numbers, arrays of numbers, or p5.Vector.`, "createStorage");
				}
				const structBody = `{\n${entries.map(([name, value]) => `  ${name}: ${this._jsValueToWgslType(value)},`).join("\n")}\n}`;
				const elements = this._parseStruct(`struct _Tmp ${structBody}`, "_Tmp");
				let maxEnd = 0;
				let maxAlign = 1;
				return {
					fields: entries.map(([name, value]) => {
						const el = elements[name];
						maxEnd = Math.max(maxEnd, el.offsetEnd);
						const align = el.size <= 4 ? 4 : el.size <= 8 ? 8 : 16;
						maxAlign = Math.max(maxAlign, align);
						const kind = value?.isVector ? "vector" : value?.isColor ? "color" : void 0;
						return {
							name,
							baseType: el.baseType,
							size: el.size,
							offset: el.offset,
							packInPlace: el.packInPlace ?? false,
							dim: el.size / 4,
							kind
						};
					}),
					stride: Math.ceil(maxEnd / maxAlign) * maxAlign,
					structBody
				};
			}
			_packStructArray(data, schema) {
				const { fields, stride } = schema;
				const totalBytes = Math.max(data.length * stride, 16);
				const alignedBytes = Math.ceil(totalBytes / 16) * 16;
				const buffer = new ArrayBuffer(alignedBytes);
				const floatView = new Float32Array(buffer);
				const dataView = new DataView(buffer);
				for (let i = 0; i < data.length; i++) {
					const item = data[i];
					const baseOffset = i * stride;
					for (const field of fields) this._packField(field, item[field.name], floatView, dataView, baseOffset);
				}
				return floatView;
			}
			_unpackStructArray(floatView, schema) {
				const { fields, stride } = schema;
				const dataView = new DataView(floatView.buffer);
				const count = Math.floor(floatView.byteLength / stride);
				const result = [];
				for (let i = 0; i < count; i++) {
					const item = {};
					const baseOffset = i * stride;
					for (const field of fields) {
						const byteOffset = baseOffset + field.offset;
						const n = field.size / 4;
						if (field.baseType === "u32") {
							if (n === 1) item[field.name] = dataView.getUint32(byteOffset, true);
							else item[field.name] = Array.from({ length: n }, (_, j) => dataView.getUint32(byteOffset + j * 4, true));
						} else if (field.baseType === "i32") {
							if (n === 1) item[field.name] = dataView.getInt32(byteOffset, true);
							else item[field.name] = Array.from({ length: n }, (_, j) => dataView.getInt32(byteOffset + j * 4, true));
						} else {
							const idx = byteOffset / 4;
							if (n === 1) item[field.name] = floatView[idx];
							else {
								const values = Array.from(floatView.slice(idx, idx + n));
								if (field.kind === "vector") item[field.name] = this._pInst.createVector(...values);
								else if (field.kind === "color") {
									const maxes = this.states.colorMaxes[this.states.colorMode];
									item[field.name] = this._pInst.color(values[0] * maxes[0], values[1] * maxes[1], values[2] * maxes[2], values[3] * maxes[3]);
								} else item[field.name] = values;
							}
						}
					}
					result.push(item);
				}
				return result;
			}
			/**
			* Resolves the WGSL element type a shader declares for a storage buffer
			* into the typed array that reads it back correctly, unwrapping
			* `atomic<T>` to `T`. Returns undefined for types we can't check.
			* @private
			*/
			_storageArrayTypeFor(elementType) {
				if (!elementType) return void 0;
				return STORAGE_ARRAY_TYPES[elementType.replace(/^atomic<(\w+)>$/, "$1")];
			}
			/**
			* Warns when the typed array a storage buffer was created with doesn't
			* match the element type the shader declares for it, since the bytes
			* would otherwise be silently reinterpreted.
			*
			* Both call sites run every frame, so the result is cached on the buffer:
			* after the first check this costs a property read and a comparison, and
			* any warning is only ever logged once.
			* @private
			*/
			_checkStorageElementType(parsedStorage, storageBuffer) {
				if (p5.disableFriendlyErrors) return;
				const expected = parsedStorage?.expectedArrayType;
				if (!expected) return;
				if (storageBuffer._isStorageList) return;
				if (storageBuffer._checkedArrayType === expected) return;
				storageBuffer._checkedArrayType = expected;
				if (storageBuffer._schema !== null) return;
				if (storageBuffer._arrayType === expected) return;
				p5._friendlyError(`The storage buffer "${parsedStorage.name}" is declared as array<${parsedStorage.elementType}> in the shader, but it was created with a ${storageBuffer._arrayType.name}. Create it with a ${expected.name} instead so the values are read back correctly.`, "createStorage");
			}
			createStorage(dataOrCount) {
				const device = this.device;
				if (Array.isArray(dataOrCount) && dataOrCount.length > 0 && typeof dataOrCount[0] === "object" && !Array.isArray(dataOrCount[0])) {
					if (!p5.disableFriendlyErrors && dataOrCount.length > 1) {
						const firstKeys = Object.keys(dataOrCount[0]);
						let warned = false;
						for (let i = 1; i < dataOrCount.length; i++) {
							const el = dataOrCount[i];
							const elKeys = Object.keys(el);
							if (!(firstKeys.length === elKeys.length && firstKeys.every((k, j) => k === elKeys[j]))) {
								p5._friendlyError(`Element ${i} has different fields than element 0. All elements should have the same properties.`, "createStorage");
								break;
							}
							for (const key of firstKeys) {
								const firstType = this._jsValueToWgslType(dataOrCount[0][key]);
								const elType = this._jsValueToWgslType(el[key]);
								if (firstType !== elType) {
									p5._friendlyError(`The "${key}" property of element ${i} has type ${elType} but element 0 has type ${firstType}. Proporties should have the same type across all elements.`, "createStorage");
									warned = true;
									break;
								}
							}
							if (warned) break;
						}
					}
					const schema = this._inferStructSchema(dataOrCount[0]);
					const packed = this._packStructArray(dataOrCount, schema);
					const size = packed.byteLength;
					const buffer = device.createBuffer({
						size,
						usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
						mappedAtCreation: true
					});
					new Float32Array(buffer.getMappedRange()).set(packed);
					buffer.unmap();
					const storageBuffer = new StorageBuffer(buffer, size, this, schema, Float32Array, dataOrCount.length);
					this._storageBuffers.add(storageBuffer);
					return storageBuffer;
				}
				let size, initialData;
				if (typeof dataOrCount === "number") {
					size = dataOrCount * 4;
					initialData = new Float32Array(dataOrCount);
				} else {
					if (ArrayBuffer.isView(dataOrCount) && !(dataOrCount instanceof DataView)) initialData = dataOrCount;
					else if (Array.isArray(dataOrCount)) initialData = new Float32Array(dataOrCount);
					else throw new Error("createStorage expects a number or array/TypedArray");
					size = initialData.byteLength;
				}
				const ArrayType = initialData.constructor;
				size = Math.ceil(size / 16) * 16;
				const buffer = device.createBuffer({
					size,
					usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
					mappedAtCreation: initialData.length > 0
				});
				if (initialData.length > 0) {
					new ArrayType(buffer.getMappedRange()).set(initialData);
					buffer.unmap();
				}
				const storageBuffer = new StorageBuffer(buffer, size, this, null, ArrayType, initialData.length);
				this._storageBuffers.add(storageBuffer);
				return storageBuffer;
			}
			createStorageList(maxCapacity, schemaOrData) {
				const device = this.device;
				let schema = null;
				let initialCount = 0;
				let initialDataPacked = null;
				if (Array.isArray(schemaOrData) && schemaOrData.length > 0 && typeof schemaOrData[0] === "object" && !Array.isArray(schemaOrData[0])) {
					schema = this._inferStructSchema(schemaOrData[0]);
					initialDataPacked = this._packStructArray(schemaOrData, schema);
					initialCount = schemaOrData.length;
				} else if (schemaOrData !== void 0 && typeof schemaOrData === "object" && !Array.isArray(schemaOrData)) schema = this._inferStructSchema(schemaOrData);
				const lengthOffset = maxCapacity * (schema ? schema.stride : 4);
				const totalSize = Math.max(Math.ceil((lengthOffset + 4) / 16) * 16, 16);
				const buffer = device.createBuffer({
					size: totalSize,
					usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
					mappedAtCreation: true
				});
				const mapped = buffer.getMappedRange();
				if (initialDataPacked !== null) new Float32Array(mapped).set(initialDataPacked);
				new Int32Array(mapped, lengthOffset, 1).set([initialCount]);
				buffer.unmap();
				const storageList = new StorageList(buffer, lengthOffset, maxCapacity, this, schema, initialCount);
				this._storageBuffers.add(storageList);
				return storageList;
			}
			_getWebGPUColorFormat(framebuffer) {
				if (framebuffer.format === "float") return framebuffer.channels === RGBA ? "rgba32float" : "rgba32float";
				else if (framebuffer.format === "half-float") return framebuffer.channels === RGBA ? "rgba16float" : "rgba16float";
				else {
					if (framebuffer._useCanvasFormat) return this.presentationFormat;
					return framebuffer.channels === RGBA ? "rgba8unorm" : "rgba8unorm";
				}
			}
			_getWebGPUDepthFormat(framebuffer) {
				if (framebuffer._useCanvasFormat) return this.depthFormat;
				if (framebuffer.useStencil) return framebuffer.depthFormat === "float" ? "depth32float-stencil8" : "depth24plus-stencil8";
				else return framebuffer.depthFormat === "float" ? "depth32float" : "depth24plus";
			}
			_deleteFramebufferTexture(texture) {
				this.flushDraw();
				const handle = texture.rawTexture();
				if (handle.texture && handle.texture.destroy) {
					const tex = handle.texture;
					this._postSubmitCallbacks.push(() => tex.destroy());
				}
				this.textures.delete(texture);
			}
			deleteFramebufferTextures(framebuffer) {
				this._deleteFramebufferTexture(framebuffer.color);
				if (framebuffer.depth) this._deleteFramebufferTexture(framebuffer.depth);
			}
			deleteFramebufferResources(framebuffer) {
				this.flushDraw();
				if (framebuffer.colorTexture && framebuffer.colorTexture.destroy) {
					const tex = framebuffer.colorTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
				}
				if (framebuffer.depthTexture && framebuffer.depthTexture.destroy) {
					const tex = framebuffer.depthTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
				}
				if (framebuffer.aaDepthTexture && framebuffer.aaDepthTexture.destroy) {
					const tex = framebuffer.aaDepthTexture;
					this._postSubmitCallbacks.push(() => tex.destroy());
				}
			}
			getFramebufferToBind(framebuffer) {}
			updateFramebufferTexture(framebuffer, property) {}
			bindFramebuffer(framebuffer) {}
			framebufferYScale() {
				return 1;
			}
			async readFramebufferPixels(framebuffer) {
				this.flushDraw();
				const width = framebuffer.width * framebuffer.density;
				const height = framebuffer.height * framebuffer.density;
				const bytesPerPixel = 4;
				const unalignedBytesPerRow = width * bytesPerPixel;
				const alignedBytesPerRow = this._alignBytesPerRow(unalignedBytesPerRow);
				const bufferSize = alignedBytesPerRow * height;
				const stagingBuffer = this.device.createBuffer({
					size: bufferSize,
					usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
				});
				const commandEncoder = this.device.createCommandEncoder();
				commandEncoder.copyTextureToBuffer({
					texture: framebuffer.colorTexture,
					origin: {
						x: 0,
						y: 0,
						z: 0
					},
					mipLevel: 0,
					aspect: "all"
				}, {
					buffer: stagingBuffer,
					bytesPerRow: alignedBytesPerRow,
					rowsPerImage: height
				}, {
					width,
					height,
					depthOrArrayLayers: 1
				});
				this.device.queue.submit([commandEncoder.finish()]);
				await stagingBuffer.mapAsync(GPUMapMode.READ, 0, bufferSize);
				const mappedRange = stagingBuffer.getMappedRange(0, bufferSize);
				let result;
				if (alignedBytesPerRow === unalignedBytesPerRow) {
					result = new Uint8Array(mappedRange.slice(0, width * height * bytesPerPixel));
					stagingBuffer.unmap();
				} else {
					result = new Uint8Array(width * height * bytesPerPixel);
					const mappedData = new Uint8Array(mappedRange);
					for (let y = 0; y < height; y++) {
						const srcOffset = y * alignedBytesPerRow;
						const dstOffset = y * unalignedBytesPerRow;
						result.set(mappedData.subarray(srcOffset, srcOffset + unalignedBytesPerRow), dstOffset);
					}
					stagingBuffer.unmap();
				}
				this._ensurePixelsAreRGBA(framebuffer, result);
				return result;
			}
			async readFramebufferPixel(framebuffer, x, y) {
				this.flushDraw();
				const alignedBytesPerRow = this._alignBytesPerRow(4);
				const bufferSize = alignedBytesPerRow;
				const stagingBuffer = this._ensurePixelReadBuffer(bufferSize);
				const commandEncoder = this.device.createCommandEncoder();
				commandEncoder.copyTextureToBuffer({
					texture: framebuffer.colorTexture,
					origin: {
						x,
						y,
						z: 0
					}
				}, {
					buffer: stagingBuffer,
					bytesPerRow: alignedBytesPerRow
				}, {
					width: 1,
					height: 1,
					depthOrArrayLayers: 1
				});
				this.device.queue.submit([commandEncoder.finish()]);
				await stagingBuffer.mapAsync(GPUMapMode.READ, 0, bufferSize);
				const mappedRange = stagingBuffer.getMappedRange(0, bufferSize);
				const pixelData = new Uint8Array(mappedRange);
				const result = [
					pixelData[0],
					pixelData[1],
					pixelData[2],
					pixelData[3]
				];
				this._ensurePixelsAreRGBA(framebuffer, result);
				stagingBuffer.unmap();
				return result;
			}
			async readFramebufferRegion(framebuffer, x, y, w, h) {
				this.flushDraw();
				const width = w * framebuffer.density;
				const height = h * framebuffer.density;
				const bytesPerPixel = 4;
				const unalignedBytesPerRow = width * bytesPerPixel;
				const alignedBytesPerRow = this._alignBytesPerRow(unalignedBytesPerRow);
				const bufferSize = alignedBytesPerRow * height;
				const stagingBuffer = this._ensurePixelReadBuffer(bufferSize);
				const commandEncoder = this.device.createCommandEncoder();
				commandEncoder.copyTextureToBuffer({
					texture: framebuffer.colorTexture,
					mipLevel: 0,
					origin: {
						x: x * framebuffer.density,
						y: y * framebuffer.density,
						z: 0
					}
				}, {
					buffer: stagingBuffer,
					bytesPerRow: alignedBytesPerRow
				}, {
					width,
					height,
					depthOrArrayLayers: 1
				});
				this.device.queue.submit([commandEncoder.finish()]);
				await stagingBuffer.mapAsync(GPUMapMode.READ, 0, bufferSize);
				const mappedRange = stagingBuffer.getMappedRange(0, bufferSize);
				let pixelData;
				if (alignedBytesPerRow === unalignedBytesPerRow) pixelData = new Uint8Array(mappedRange.slice(0, width * height * bytesPerPixel));
				else {
					pixelData = new Uint8Array(width * height * bytesPerPixel);
					const mappedData = new Uint8Array(mappedRange);
					for (let y = 0; y < height; y++) {
						const srcOffset = y * alignedBytesPerRow;
						const dstOffset = y * unalignedBytesPerRow;
						pixelData.set(mappedData.subarray(srcOffset, srcOffset + unalignedBytesPerRow), dstOffset);
					}
				}
				this._ensurePixelsAreRGBA(framebuffer, pixelData);
				const region = new Image(width, height);
				region.imageData = region.canvas.getContext("2d").createImageData(width, height);
				region.imageData.data.set(pixelData);
				region.pixels = region.imageData.data;
				region.updatePixels();
				if (framebuffer.density !== 1) region.pixelDensity(framebuffer.density);
				stagingBuffer.unmap();
				return region;
			}
			updateFramebufferPixels(framebuffer) {
				const width = framebuffer.width * framebuffer.density;
				const height = framebuffer.height * framebuffer.density;
				const bytesPerPixel = 4;
				const expectedLength = width * height * bytesPerPixel;
				if (!framebuffer.pixels || framebuffer.pixels.length !== expectedLength) throw new Error("The pixels array has not been set correctly. Please call loadPixels() before updatePixels().");
				this.device.queue.writeTexture({ texture: framebuffer.colorTexture }, framebuffer.pixels, {
					bytesPerRow: width * bytesPerPixel,
					rowsPerImage: height
				}, {
					width,
					height,
					depthOrArrayLayers: 1
				});
			}
			_ensurePixelsAreRGBA(framebuffer, result) {
				if (framebuffer._useCanvasFormat && this.presentationFormat === "bgra8unorm") this._convertBGRtoRGB(result);
			}
			_convertBGRtoRGB(pixelData) {
				for (let i = 0; i < pixelData.length; i += 4) {
					const temp = pixelData[i];
					pixelData[i] = pixelData[i + 2];
					pixelData[i + 2] = temp;
				}
			}
			async loadPixels() {
				this._promoteToFramebuffer();
				await this.mainFramebuffer.loadPixels();
				this.pixels = this.mainFramebuffer.pixels.slice();
			}
			async get(x, y, w, h) {
				this._promoteToFramebuffer();
				return this.mainFramebuffer.get(x, y, w, h);
			}
			filter(...args) {
				if (!this.activeFramebuffer()) this._promoteToFramebuffer();
				return super.filter(...args);
			}
			baseFilterShader() {
				if (!this._baseFilterShader) this._baseFilterShader = new Shader(this, baseFilterVertexShader, baseFilterFragmentShader, {
					vertex: {},
					fragment: { "vec4<f32> getColor": `(inputs: FilterInputs, canvasContent: texture_2d<f32>, canvasContent_sampler: sampler) -> vec4<f32> {
                return textureSample(tex, tex_sampler, inputs.texCoord);
              }` },
					hookAliases: { getColor: ["filterColor"] }
				});
				return this._baseFilterShader;
			}
			baseComputeShader() {
				if (!this._baseComputeShader) this._baseComputeShader = new Shader(this, baseComputeShader, { compute: { "void iteration": "(index: vec3<i32>) {}" } });
				return this._baseComputeShader;
			}
			_createImageLightShader(type) {
				if (type === "diffused") return this._pInst.createShader(imageLightVertexShader, imageLightDiffusedFragmentShader);
				else if (type === "specular") return this._pInst.createShader(imageLightVertexShader, imageLightSpecularFragmentShader);
				throw new Error(`Unknown imageLight shader type: ${type}`);
			}
			_createMipmapTexture(levels) {
				return new MipmapTexture(this, levels, {});
			}
			_prepareMipmapData(size, mipLevels) {
				const textureDescriptor = {
					size: {
						width: size,
						height: size,
						depthOrArrayLayers: 1
					},
					mipLevelCount: mipLevels,
					format: "rgba8unorm",
					usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
				};
				return {
					gpuTexture: this.device.createTexture(textureDescriptor),
					size,
					mipLevels,
					format: "rgba8unorm"
				};
			}
			_accumulateMipLevel(framebuffer, mipmapData, mipLevel, width, height) {
				this.flushDraw();
				const commandEncoder = this.device.createCommandEncoder();
				const sourceTexture = framebuffer.color.rawTexture().texture;
				commandEncoder.copyTextureToTexture({
					texture: sourceTexture,
					origin: {
						x: 0,
						y: 0,
						z: 0
					}
				}, {
					texture: mipmapData.gpuTexture,
					mipLevel,
					origin: {
						x: 0,
						y: 0,
						z: 0
					}
				}, {
					width,
					height,
					depthOrArrayLayers: 1
				});
				this.device.queue.submit([commandEncoder.finish()]);
			}
			_finalizeMipmapTexture(mipmapData) {
				return new MipmapTexture(this, mipmapData, {});
			}
			createMipmapTextureHandle({ gpuTexture, format, dataType, width, height }) {
				return {
					texture: gpuTexture,
					view: gpuTexture.createView(),
					glFormat: format || "rgba8unorm",
					glDataType: dataType || "uint8"
				};
			}
			compute(shader, x, y = 1, z = 1) {
				if (shader.shaderType !== "compute") throw new Error("compute() can only be called with a compute shader");
				this._finishActiveRenderPass();
				if (!shader._compiled) shader.init();
				shader.setDefaultUniforms();
				shader.setUniform("uTotalCount", [
					x,
					y,
					z
				]);
				const WORKGROUP_SIZE_X = 8;
				const WORKGROUP_SIZE_Y = 8;
				const WORKGROUP_SIZE_Z = 1;
				const totalIterations = x * y * z;
				const MAX_THREADS_PER_DIM = 524280;
				let px = x;
				let py = y;
				let pz = z;
				if (x > MAX_THREADS_PER_DIM || y > MAX_THREADS_PER_DIM || z > MAX_THREADS_PER_DIM || totalIterations > 1024 && y === 1 && z === 1) {
					px = Math.ceil(Math.sqrt(totalIterations));
					py = Math.ceil(totalIterations / px);
					pz = 1;
				}
				const workgroupCountX = Math.ceil(px / WORKGROUP_SIZE_X);
				const workgroupCountY = Math.ceil(py / WORKGROUP_SIZE_Y);
				const workgroupCountZ = Math.ceil(pz / WORKGROUP_SIZE_Z);
				shader.setUniform("uPhysicalCount", [
					workgroupCountX * WORKGROUP_SIZE_X,
					workgroupCountY * WORKGROUP_SIZE_Y,
					workgroupCountZ * WORKGROUP_SIZE_Z
				]);
				const commandEncoder = this.device.createCommandEncoder();
				const passEncoder = commandEncoder.beginComputePass();
				this.setupShaderBindGroups(shader, passEncoder, {
					compute: true,
					workgroupSize: [
						WORKGROUP_SIZE_X,
						WORKGROUP_SIZE_Y,
						WORKGROUP_SIZE_Z
					]
				});
				passEncoder.dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
				passEncoder.end();
				this._pendingCommandEncoders.push(commandEncoder.finish());
				this._hasPendingDraws = true;
			}
		}
		p5.RendererWebGPU = RendererWebGPU;
		p5.renderers[WEBGPU] = p5.RendererWebGPU;
		fn.setAttributes = async function(key, value) {
			return this._renderer._setAttributes(key, value);
		};
	}
	if (typeof p5 !== "undefined") rendererWebGPU(p5, p5.prototype);
	//#endregion
	//#region src/webgpu/index.js
	function webgpu_default(p5) {
		p5.registerAddon(rendererWebGPU);
	}
	//#endregion
	return webgpu_default;
})();
