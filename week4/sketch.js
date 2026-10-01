let exportSVG = false;
let seed = 12345;
let mode = 0;

let newButton;
let saveButton;

function setup() {
  createCanvas(595, 770);
  noFill();

  UI();
  setSvgGroupByStrokeColor(true);
}

function draw() {

  background(255);

  randomSeed(seed);

  if (exportSVG) {
    beginRecordSvg(this, "MY Pattern_" + seed + ".svg");
  }

  myDrawing();

  if (exportSVG) {
    endRecordSvg();
    exportSVG = false;
  }
}

function myDrawing() {
  stroke(0);
  strokeWeight(1);
  noFill();

  // circle pattern
  if (mode == 0) {
    let count = floor(random(10, 19));
    let radius = random(80, 175);

    push();

    setCenter(width / 2, height / 2);

    polarDrawCallback(count, 20, radius, function() {
      let s = random(0.45, 1.3);

      scale(s);
      drawCircles();
    });

    pop();
  }

  // square pattern
 if (mode == 1) {
  let cols = 4;
  let rows = 5;
  let spacing = random(65, 90);

  let startX = width / 2 - ((cols - 1) * spacing) / 2;
  let startY = height / 2 - ((rows - 1) * spacing) / 2;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      push();

      translate(
        startX + i * spacing,
        startY + j * spacing
      );

      let s = random(0.45, 1.15);
      scale(s);

      drawCircles();

      pop();
    }
  }
}

  // free pattern
  if (mode == 2) {
    let count = floor(random(12, 23));

    for (let i = 0; i < count; i++) {
      let x = random(55, width - 55);
      let y = random(55, height - 55);

      push();

      translate(x, y);

      let s = random(0.4, 1.35);
      scale(s);

      drawCircles();

      pop();
    }
  }
}

function drawCircles() {
  let rings = floor(random(1, 11));
  let size = random(20, 55);
  let gap = random(5, 12);

  let moveX = random(-2.5, 2.5);
  let moveY = random(-2.5, 2.5);

  for (let i = 0; i < rings; i++) {
    if (i == 0 || random(1) > 0.15) {
      circle(
        i * moveX,
        i * moveY,
        size + i * gap
      );
    }
  }
}

function regenerate() {
  seed = round(millis());
  mode = (mode + 1) % 3;
}

function saveSVG() {
  exportSVG = true;
}

function UI() {
  newButton = createButton("Regenerate");
  newButton.position(0, height);
  newButton.mousePressed(regenerate);

  saveButton = createButton("Export SVG");
  saveButton.position(120, height);
  saveButton.mousePressed(saveSVG);
}