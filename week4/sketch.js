let bDoExportSvg = false;
let myRandomSeed = 12345;

let regenerateButton;
let exportSvgButton;

let DPI = 70;
let PAGE_W = 8.5 * DPI;
let PAGE_H = 11 * DPI;

let mode = 0;//Pattern mode: 0 circle, 1 grid, 2 free


function setup() {
  createCanvas(PAGE_W, PAGE_H);

  UI();

  noFill();

  setSvgGroupByStrokeColor(true);
}


function draw() {

  clear();

  randomSeed(myRandomSeed);

  background(255);

  if (bDoExportSvg == true) {
    beginRecordSvg(
      this,
      "myOutput_" + month() + day() + year() + "_" + myRandomSeed + ".svg"
    );
  }

  myDrawing();

  if (bDoExportSvg == true) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}


function myDrawing() {

  stroke(0);//Set stroke color to black
  strokeWeight(1);//Set stroke weight to 1
  noFill();


  // circle pattern
  if (mode == 0) {

    let count = floor(random(10, 19));//Set number of circles
    let radius = random(80, 175);//Set radius of circles

    push();

    setCenter(width / 2, height / 2);//Set center for polar drawing

    polarDrawCallback(count, 20, radius, drawPolarCircle);
    //polarDrawCallback is from the third example in the class template folder.
    //It is not shown on the p5.Polar website, but is included in the example files.

    pop();
  }


  // grid pattern
  if (mode == 1) {

    let cols = 4;
    let rows = 5;
    let spacing = random(65, 90);//Set spacing between circles

    let startX = width / 2 - ((cols - 1) * spacing) / 2;//Calculate starting X position
    let startY = height / 2 - ((rows - 1) * spacing) / 2;//Calculate starting Y position

    for (let i = 0; i < cols; i++) {//Loop through columns

      for (let j = 0; j < rows; j++) {//Loop through rows

        push();

        translate(
          startX + i * spacing,
          startY + j * spacing
        );//Move to each position in the grid

        let s = random(0.45, 1.15);//Set random scale
        scale(s);

        drawCircles();//Draw circles at each grid position

        pop();
      }
    }
  }


  // free pattern
  if (mode == 2) {

    let count = floor(random(12, 23));//Set number of circles

    for (let i = 0; i < count; i++) {

      let x = random(55, width - 55);//Set random X position
      let y = random(55, height - 55);//Set random Y position

      push();

      translate(x, y);//Move to random position

      let s = random(0.4, 1.35);//Set random scale
      scale(s);

      drawCircles();//Draw circles at random position

      pop();
    }
  }
}


function drawPolarCircle() {

  let s = random(0.45, 1.3);//Set random scale

  scale(s);

  drawCircles();
}


function drawCircles() {

  let rings = floor(random(1, 11));//Set number of rings
  let size = random(20, 55);//Set size of the first ring
  let gap = random(5, 12);//Set gap between rings

  let moveX = random(-2.5, 2.5);//Set random movement in X direction
  let moveY = random(-2.5, 2.5);//Set random movement in Y direction

  for (let i = 0; i < rings; i++) {

    if (i == 0 || random(1) > 0.15) {

      circle(
        i * moveX,
        i * moveY,
        size + i * gap
      );//Draw each ring with movement and size variation
    }
  }
}


function regenerate() {

  myRandomSeed = round(millis());

  mode = (mode + 1) % 3;//Cycle through pattern modes: 0, 1, 2
}


function initiateSvgExport() {

  bDoExportSvg = true;
}


function UI() {

  regenerateButton = createButton('Regenerate');
  regenerateButton.position(0, height);
  regenerateButton.mousePressed(regenerate);

  exportSvgButton = createButton('Export SVG');
  exportSvgButton.position(120, height);
  exportSvgButton.mousePressed(initiateSvgExport);
}