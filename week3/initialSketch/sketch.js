let clickX = 0;
let clickY = 0;
let clicked = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(250, 220, 80);

  rectMode(CENTER);

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

  // repeat TVs
  for (let x = 100; x < width; x += 150) {

    for (let y = 100; y < height; y += 150) {

      // rotation
      let angle = ((x - 100) + (y - 100)) / 100;
      angle = angle * (rotationTime / 30);

      // distance from mouse click
      let distance = dist(x, y, clickX, clickY);

      push();

      translate(x, y);
      rotate(angle);

      // TV body
      fill(220, 95, 110);
      rect(0, 0, 100, 90, 3);

      // TV screen
      if (clicked == true && distance < 170) {
        fill(150, 205, 220);
      } else {
        fill(85, 145, 180);
      }

      rect(0, -6, 90, 68, 2);

      // timer on the first TV
      if (x == 100 && y == 100) {
        fill(250, 220, 80);
        textAlign(CENTER, CENTER);
        textSize(28);
        text(timeLeft, 0, -6);
      }

      // button
      fill(245, 235, 215);
      ellipse(31, 35, 5);

      // red light
      fill(210, 55, 65);
      ellipse(41, 35, 3);

      pop();
    }
  }
}

function mousePressed() {
  clickX = mouseX;
  clickY = mouseY;
  clicked = true;
}