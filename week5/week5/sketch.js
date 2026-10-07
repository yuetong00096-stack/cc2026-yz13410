
const bluePalette = [
  "#91A9B3", "#849FAB", "#7795A5", "#6A8C9E",
  "#5D8296", "#52788E", "#486E85", "#3F647C",
  "#385B73", "#32526B", "#2E4963", "#2A415B",
  "#273953", "#24324B", "#212B43", "#1E243B"
]; // 16 shades of blue

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)

  angleMode(DEGREES);// Change the mode to DEGREES
  textFont("monospace");// Use a monospace font for the text
}

function draw() {
  background("#F2EDE1");

  let h = hour();
  let m = minute();
  let s = second();// Get the current hour, minute, and second

  // Seconds: 1 layer at 00 seconds, 60 layers at 59 seconds
  noStroke();

  for (let i = 0; i <= s; i++) {// Loop through the number of seconds
    let inset = i * 3.4;// Calculate the inset for each layer
    let colorIndex = i;// Use the loop index to select a color from the palette

    // Start the color cycle again after 30 layers
    if (colorIndex >= 30) {// If the color index exceeds 30, reset it to create a cycle
      colorIndex = colorIndex - 30;// Reset the color index to create a cycle
    }

    // Change from dark blue back to light blue
    if (colorIndex > 15) {// If the color index exceeds 15, reverse the order to create a gradient effect
      colorIndex = 30 - colorIndex;// Reverse the order to create a gradient effect
    }

    fill(bluePalette[colorIndex]);

    // Draw each rectangle slightly smaller
    rect(
      141 + inset,
      8 + inset,
      451 - inset * 2,
      436 - inset * 2
    );
  }

  // Hours: change the red shade every 6 hours
  if (h < 6) {
    fill("#7D171D"); // 00:00-05:59 dark red
  } else if (h < 12) {
    fill("#F16A52"); // 06:00-11:59 coral red
  } else if (h < 18) {
    fill("#E52620"); // 12:00-17:59 bright red
  } else {
    fill("#A7352B"); // 18:00-23:59 brick red
  }

  rect(0, 450, 135, 150);// Draw the red rectangle for hours

  // Minutes: fill the yellow rectangle from bottom to top
  let minuteHeight = map(m, 0, 60, 0, 136);

  fill("#EAC84F");
  rect(546, 592 - minuteHeight, 46, minuteHeight);// Draw the yellow rectangle for minutes

  // Add a leading zero to minutes and seconds below 10
  let minuteText = m;
  let secondText = s;

  if (m < 10) {
    minuteText = "0" + m;// Add a leading zero to minutes below 10
  }

  if (s < 10) {
    secondText = "0" + s;// Add a leading zero to seconds below 10
  }

  // Place the text vertically from the top-right of the left cell
  push();
  translate(108, 218);// Move the origin to the top-right of the left cell
  rotate(90);
  textAlign(LEFT, CENTER);

  fill("#202320");
  textSize(24);
  text(h + ":" + minuteText + ":" + secondText, 0, 0);

  // Date format: month.day.year
  textSize(14);
  text(month() + "." + day() + "." + year(), 0, 30);

  pop();

  // Black dividers
  stroke("#202320");
  strokeWeight(12);

  line(135, 0, 135, 600);
  line(0, 450, 600, 450);
  line(0, 195, 135, 195);
  line(67.5, 0, 67.5, 195);
  line(540, 450, 540, 600);

  // Outer border
  noFill();
  strokeWeight(8);
  rect(4, 4, 592, 592);
}