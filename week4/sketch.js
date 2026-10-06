let exportSVG = false;//Controls SVG export
let seed = 12345;
let mode = 0;//Pattern mode: 0 circle, 1 grid, 2 free


let newButton;//Regenerate button
let saveButton;//Export SVG button

function setup() {
  createCanvas(595, 770);//A4 size
  noFill();//No fill for shapes

  UI();//Create UI buttons
  setSvgGroupByStrokeColor(true);//Group SVG elements by stroke color
}

function draw() {

  background(255);

  randomSeed(seed);//Set random seed for reproducibility

  if (exportSVG) {
    beginRecordSvg(this, "MY Pattern_" + seed + ".svg");
  }//Start recording SVG output

  myDrawing();//Draw the pattern

  if (exportSVG) {
    endRecordSvg();
    exportSVG = false;
  }//Stop recording SVG output
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

    polarDrawCallback(count, 20, radius, function() {//Draw circles in polar coordinates
      let s = random(0.45, 1.3);//Set random scale for each circle

      scale(s);//Scale the circle
      drawCircles();
    });

    pop();
  }

  // square pattern
 if (mode == 1) {
  let cols = 4;
  let rows = 5;
  let spacing = random(65, 90);//Set spacing between circles

  let startX = width / 2 - ((cols - 1) * spacing) / 2;//Calculate starting X position for grid
  let startY = height / 2 - ((rows - 1) * spacing) / 2;//Calculate starting Y position for grid

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {//Loop through columns and rows to draw circles in a grid

      push();

      translate(
        startX + i * spacing,
        startY + j * spacing
      );//Translate to the position of each circle in the grid

      let s = random(0.45, 1.15);//Set random scale for each circle
      scale(s);//Scale the circle

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

function drawCircles() {//Draw concentric circles
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
      );//Draw each ring with random movement and size
    }
  }
}

function regenerate() {
  seed = round(millis());//Set new random seed based on current time
  mode = (mode + 1) % 3;//Cycle through pattern modes: 0, 1, 2
}

function saveSVG() {
  exportSVG = true;//Set exportSVG to true to trigger SVG export in the next draw cycle
}

function UI() {
  newButton = createButton("Regenerate");///Create a button to regenerate the pattern
  newButton.position(0, height);
  newButton.mousePressed(regenerate);

  saveButton = createButton("Export SVG");//Create a button to export the pattern as SVG
  saveButton.position(120, height);
  saveButton.mousePressed(saveSVG);
}