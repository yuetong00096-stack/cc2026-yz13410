const bluePalette = [// 16 blue colors, from light to dark
  "#91A9B3", "#849FAB", "#7795A5", "#6A8C9E",
  "#5D8296", "#52788E", "#486E85", "#3F647C",
  "#385B73", "#32526B", "#2E4963", "#2A415B",
  "#273953", "#24324B", "#212B43", "#1E243B"
]; 


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages

  angleMode(DEGREES);
  textFont("Helvetica");
}


function draw() {
  background("#F2EDE1");

  // current time
  let h = hour();
  let m = minute();
  let s = second();


  // Seconds
  // More blue layers appear as the seconds increase
  noStroke();

  for (let i = 0; i <= s; i++) {
    let inset = i * 3.4;
    let colorIndex = i;

    // After reaching the darkest blue, start going back
    if (colorIndex >= 30) {
      colorIndex = colorIndex - 30;
    }

    if (colorIndex > 15) {
      colorIndex = 30 - colorIndex;
    }

    fill(bluePalette[colorIndex]);//Set fill color based on the current second

    // each rectangle gets smaller and moves toward the center
    rect(
      141 + inset,
      8 + inset,
      451 - inset * 2,
      436 - inset * 2
    );
  }


  // Hours
  // The red slowly changes from dark red to light red during the day
  let red1 = color("#7D171D");
  let red2 = color("#F16A52");

  // 24 hours = 1440 minutes, map the time of day from 0 to 1
  let transition = map(h * 60 + m, 0, 1440, 0, 1);

  // lerpColor reference from the Week 6 class example:
  // Extended: Transitioning between color and size
  // https://editor.p5js.org/melodyloveless/sketches/o7dNhl_ib
  fill(lerpColor(red1, red2, transition));

  rect(0, 450, 135, 150);


  // Minutes
  // the yellow part grows upward
  let minuteHeight = map(m, 0, 60, 0, 136);

  fill("#EAC84F");
  rect(546, 592 - minuteHeight, 46, minuteHeight);


  // I wanted the time to always show two digits for minutes and seconds
  let minuteText = m;
  let secondText = s;

  if (m < 10) {
    minuteText = "0" + m;
  }

  if (s < 10) {
    secondText = "0" + s;
  }


  // Time and date on the left side
  push();

  translate(108, 218);
  rotate(90);
  textAlign(LEFT, CENTER);

  fill("#202320");
  textSize(24);
  text(h + ":" + minuteText + ":" + secondText, 0, 0);

  textSize(14);
  text(month() + "." + day() + "." + year(), 0, 30);

  pop();


  // black dividers
  stroke("#202320");
  strokeWeight(12);

  line(135, 0, 135, 600);
  line(0, 450, 600, 450);
  line(0, 195, 135, 195);
  line(67.5, 0, 67.5, 195);
  line(540, 450, 540, 600);


  // outside border
  noFill();
  strokeWeight(8);
  rect(4, 4, 592, 592);
}