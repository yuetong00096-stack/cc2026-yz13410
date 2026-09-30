let bDoExportSvg = false;
let myRandomSeed = 12345;
let patternMode = 0;

let regenerateButton, exportSvgButton;

function setup() {
  createCanvas(595, 770);
  noFill();
  UI();
  setSvgGroupByStrokeColor(true);
}

function draw() {
  clear();
  background(255);
  randomSeed(myRandomSeed);

  if (bDoExportSvg) {
    beginRecordSvg(this, "CirclePattern_" + myRandomSeed + ".svg");
  }

  myDrawing();

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}

function myDrawing() {
  stroke(0);
  strokeWeight(1);
  noFill();

  // circle pattern
  if (patternMode == 0) {
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
  if (patternMode == 1) {
    let cols = 4;
    let rows = 5;
    let spacing = random(65, 90);

    let startX = width / 2 - ((cols - 1) * spacing) / 2;
    let startY = height / 2 - ((rows - 1) * spacing) / 2;

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        push();

        translate(startX + x * spacing, startY + y * spacing);

        let s = random(0.45, 1.15);
        scale(s);

        drawCircles();
        pop();
      }
    }
  }

  // free pattern
  if (patternMode == 2) {
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
      circle(i * moveX, i * moveY, size + i * gap);
    }
  }
}

function regenerate() {
  myRandomSeed = round(millis());
  patternMode = (patternMode + 1) % 3;
}

function initiateSvgExport() {
  bDoExportSvg = true;
}

function UI() {
  regenerateButton = createButton("Regenerate");
  regenerateButton.position(0, height);
  regenerateButton.mousePressed(regenerate);

  exportSvgButton = createButton("Export SVG");
  exportSvgButton.position(120, height);
  exportSvgButton.mousePressed(initiateSvgExport);
}