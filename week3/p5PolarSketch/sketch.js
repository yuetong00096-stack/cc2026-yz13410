// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script>

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas that fills the window
  rectMode(CENTER); // Set rectangle mode to center
}

function draw() {
  background(0); // Set background color to black

  // timer
  let seconds = floor(millis() / 1000); // Get the number of seconds since the program started
  let cycleTime = seconds % 60; // Get the current time in a 60-second cycle

  let timeLeft; // Variable to store the time left in the current cycle
  let rotationTime; // Variable to store the rotation time for the TVs

  if (cycleTime <= 30) {
    timeLeft = 30 - cycleTime;
    rotationTime = cycleTime;
  } else {
    timeLeft = cycleTime - 30;
    rotationTime = 60 - cycleTime;
  }


  // First circle
  push(); // Save the current transformation state

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

  pop(); // Restore the transformation state


  // Second circle
  push(); // Save the current transformation state

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

  pop(); // Restore the transformation state


  // Timer in the center
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timeLeft, width / 2, height / 2);
}