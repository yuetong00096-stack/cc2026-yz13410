let clickX = 0;//Variable to store the X coordinate of the mouse click
let clickY = 0;//Variable to store the Y coordinate of the mouse click
let clicked = false;//Flag to track if the mouse has been clicked

function setup() {
  createCanvas(windowWidth, windowHeight);//Create a canvas that fills the window
  angleMode(DEGREES);//Set angle mode to degrees
  noFill();//No fill for shapes
}

function draw() {
  background(250, 220, 80);

  rectMode(CENTER);//Set rectangle mode to center

  // timer
  let seconds = floor(millis() / 1000);//Get the number of seconds since the program started
  let cycleTime = seconds % 60;//Get the current time in a 60-second cycle

  let timeLeft;//Variable to store the time left in the current cycle
  let rotationTime;//Variable to store the rotation time for the TVs

  if (cycleTime <= 30) {//If the current cycle time is less than or equal to 30 seconds
    timeLeft = 30 - cycleTime;//Set time left based on the current cycle time
    rotationTime = cycleTime;//Set time left and rotation time based on the current cycle time
  } else {//If the current cycle time is greater than 30 seconds
    timeLeft = cycleTime - 30;//Set time left based on the current cycle time
    rotationTime = 60 - cycleTime;//Set rotation time based on the current cycle time
  }

  // repeat TVs
  for (let x = 100; x < width; x += 150) {//Loop through the X positions to draw TVs across the width of the canvas

    for (let y = 100; y < height; y += 150) {//Loop through the Y positions to draw TVs down the height of the canvas

      // rotation
      let angle = ((x - 100) + (y - 100)) / 100;//Calculate the base rotation angle based on the position of the TV
      angle = angle * (rotationTime / 30);//Calculate the rotation angle based on the position of the TV and the rotation time

      // distance from mouse click
      let distance = dist(x, y, clickX, clickY);//Calculate the distance from the current TV position to the mouse click position

      push();

      translate(x, y);//Translate to the position of the current TV
      rotate(angle);//Rotate the TV based on the calculated angle

      // TV body
      fill(220, 95, 110);
      rect(0, 0, 100, 90, 3);//Draw the body of the TV with a rectangle

      // TV screen
      if (clicked == true && distance < 170) {//If the mouse has been clicked and the distance from the TV is less than 170 pixels
        fill(150, 205, 220);//Set the fill color for the TV screen to a different color when clicked and within range
      } else {
        fill(85, 145, 180);//Set the fill color for the TV screen to the default color
      }

      rect(0, -6, 90, 68, 2);//Draw the screen of the TV with a rectangle

      // timer on the first TV
      if (x == 100 && y == 100) {//If the current TV is the first one in the grid
        fill(250, 220, 80);
        textAlign(CENTER, CENTER);//Set text alignment to center
        textSize(28);//Set text size for the timer
        text(timeLeft, 0, -6);//Display the time left in the current cycle on the first TV
      }

      // button
      fill(245, 235, 215);
      ellipse(31, 35, 5);//Draw the button on the TV with an ellipse

      // red light
      fill(210, 55, 65);
      ellipse(41, 35, 3);//Draw the red light on the TV with an ellipse

      pop();
    }
  }
}

function mousePressed() {
  clickX = mouseX;
  clickY = mouseY;
  clicked = true;//Set the clicked flag to true when the mouse is pressed
}