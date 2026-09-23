// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);

  // timer
  let seconds = floor(millis() / 1000);
  let cycleTime = seconds % 60;

  let timeLeft;
  let rotationTime;

  if (cycleTime <= 30) {
    timeLeft = 30 - cycleTime;
    rotationTime = cycleTime;
  } else {
    timeLeft = cycleTime - 30;
    rotationTime = 60 - cycleTime;
  }


  // First circle
  setCenter(width / 2, height / 2);

  // Rotate clockwise
  rotate(radians(rotationTime));

  polarDrawCallback(6, 0, 150, function() {

    // TV body
    fill(230, 55, 90);
    rect(0, 0, 100, 90, 3);

    // TV screen
    fill(255, 150, 175);
    rect(0, -6, 90, 68, 2);

    // button
    fill(255);
    ellipse(31, 35, 5);

    // red light
    fill(255, 0, 0);
    ellipse(41, 35, 3);
  });


  // Reset before drawing the second circle
  resetMatrix();

  // Second circle
  setCenter(width / 2, height / 2);

  // Rotate counterclockwise
  rotate(radians(-rotationTime));

  polarDrawCallback(10, 0, 300, function() {

    // TV body
    fill(45, 115, 220);
    rect(0, 0, 100, 90, 3);

    // TV screen
    fill(125, 190, 255);
    rect(0, -6, 90, 68, 2);

    // button
    fill(255);
    ellipse(31, 35, 5);

    // red light
    fill(255, 0, 0);
    ellipse(41, 35, 3);
  });


  // Reset before drawing the timer
  resetMatrix();

  // Timer in the center
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timeLeft, width / 2, height / 2);
}