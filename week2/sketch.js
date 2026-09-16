//First, I'll create some variable names that I'll need later.
let circleScale;
let lineAngle;
let triangleY;

let squareX;
let squareY;
let squareScale;

let bgColor;
let circleColor;
let lineColor;
let triangleColor;
let squareColor;

//Grand Budapest Hotel
let colors = [
  "#F1BB7B", // warm gold
  "#FD6467", // coral red
  "#5B1A18", // dark burgundy
  "#D67236", // burnt orange

  "#E6A0C4", // dusty pink
  "#FFD8EC", // pale pink
  "#FFA8CB", // candy pink
  "#E5000C", // bright red

  "#784283", // purple
  "#623375", // deep purple
  "#C6CDF7", // lavender blue
  "#7294D4", // blue

  "#67E8F9", // cyan
  "#507592", // muted blue
  "#5BA398", // teal
  "#285C38", // dark green

  "#DDD690", // olive yellow
  "#C9A66B", // golden brown
  "#9B8373", // taupe
  "#371E0F"  // dark brown
];


function setup() {

  createCanvas(windowWidth, windowHeight);

  // use degrees for rotation
  angleMode(DEGREES);

  //When the webpage first loads, it generates the first version of the work.

  // circle scale
  //2 is the largest scale, 0.5 is the smallest scale
  circleScale = random([0.5, 1, 1.5, 2]);


  // line rotation
  lineAngle = random(360);


  // triangle up and down
  //100 pixels up and down 
  triangleY = random(-100, 100);


  // square position
  //100 pixels away from the edges of the canvas
  squareX = random(100, width - 100);
  squareY = random(100, height - 100);

  // square scale
  //2 is the largest scale, 0.5 is the smallest scale
  squareScale = random([0.5, 1, 1.5, 2]);


  // random colors
  bgColor = random(colors);
  circleColor = random(colors);
  lineColor = random(colors);
  triangleColor = random(colors);
  squareColor = random(colors);

}



function draw() {

  background(bgColor);



  // CIRCLE transformation

  push();

  //Move the origin to the center of the canvas
  translate(width / 2, height / 2);
  // Scale the circle based on the random scale factor
  scale(circleScale);

  noStroke();
  fill(circleColor);

  //ellipse(x, y, width, height)
  // Draw the circle at the origin (which is now the center of the canvas)
  ellipse(0, 0, 150, 150);

  pop();



  // LINE rotate

  push();

  //I think 180 pixels away from the circle looks about right
  translate(width / 2 - 180, height / 2);

  rotate(lineAngle);

  stroke(lineColor);
  strokeWeight(10);

  //line(x1, y1, x2, y2)
  //line(startX, startY, endX, endY)
  line(-100, 0, 100, 0);

  pop();



  // TRIANGLE

  push();

  //The triangle is in the top-right corner
  //150 pixels away from the right edge and 150 pixels away from the top edge
  //triangleY is a random value that moves the triangle up and down
  translate(width - 150, 150 + triangleY);

  noStroke();
  fill(triangleColor);

  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(
    0, -40,
    -35, 30,
    35, 30
  );

  pop();



  // SQUARE

  push();

  //The square is in a random position on the canvas
  translate(squareX, squareY);

  // Scale the square based on the random scale factor
  scale(squareScale);

  // Set the rectangle mode to CENTER so that the square is drawn from its center
  rectMode(CENTER);

  noStroke();
  fill(squareColor);

 //rect(x, y, width, height)
 //Draw a 70 × 70 square centered at `(0, 0)`.
  rect(0, 0, 70, 70);

  pop();

}



function mousePressed() {

  //Every time you click on the canvas, a new variation should appear

  // new circle scale
  circleScale = random([0.5, 1, 1.5, 2]);


  // new line rotation
  lineAngle = random(360);


  // new triangle position
  triangleY = random(-100, 100);


  // new square position
  squareX = random(100, width - 100);
  squareY = random(100, height - 100);

  // new square scale
  squareScale = random([0.5, 1, 1.5, 2]);


  // new random colors
  bgColor = random(colors);
  circleColor = random(colors);
  lineColor = random(colors);
  triangleColor = random(colors);
  squareColor = random(colors);

}