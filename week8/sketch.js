let flowers = [];

// I want to make ten colors for the flowers and pick them randomly
let flowerColors = [
  "#C95F5A",
  "#DE786B",
  "#EAA27C",
  "#E0B353",
  "#E9CC80",
  "#D58DA9",
  "#C177A1",
  "#B5A0D6",
  "#849FD0",
  "#80B6C9"
];

// I want to make ten blue colors for the background and pick them randomly
let blueColors = [
  "#E7F1F8",
  "#D6E8F5",
  "#C6DFF0",
  "#B4D2EA",
  "#A2C4E2",
  "#91B6D8",
  "#8DAFD2",
  "#9CAED5",
  "#B0BDE2",
  "#C8D1ED"
];

let backgroundColor = "#E7F1F8";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(backgroundColor);

  // Table
  noStroke();
  fill("#DCCDBB");
  rect(0, 514, 600, 86);

  // Table line
  stroke("#B7A796");
  strokeWeight(1.5);
  line(0, 514, 600, 514);

  // Flowers
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }

  drawVase();
}

function mousePressed() {
  // I want to add one flower each time I click
  flowers.push(new Flower());

  // If there are more than ten flowers, remove the oldest one
  if (flowers.length > 10) {
    flowers.shift();
  }

  // Pick a random blue for the background
  backgroundColor = random(blueColors);
}

class Flower {
  constructor() {
    // Flower position
    this.x = random(180, 420);
    this.y = random(200, 340);

    // Stem position
    this.stemX = random(280, 320);
    this.stemY = 440;

    // Flower size and color
    this.size = random(40, 50);
    this.color = random(flowerColors);
  }

  display() {
    // Stem
    stroke("#62845B");
    strokeWeight(4);
    line(this.stemX, this.stemY, this.x, this.y);

    push();
    translate(this.x, this.y); // Move (0, 0) to this flower's center

    fill(this.color);
    stroke("#755B53");
    strokeWeight(1.6);

    // I use polarEllipses to draw five petals around the flower center
    // polarEllipses(number, widthRadius, heightRadius, distance)
    // Distance means how far each petal's center is from the flower center
    polarEllipses(
      5,
      this.size * 0.5,
      this.size * 0.5,
      this.size * 0.5
    );

    // Flower center
    fill("#E8C47C");
    stroke("#755B53");
    strokeWeight(1.7);

    // (0, 0) is the flower center after translate
    // I make the center circle's diameter 40% of this.size
    circle(0, 0, this.size * 0.4);

    pop();
  }
}

// Pink vase
function drawVase() {
  noStroke();

  // Vase outline
  fill("#8B655D");
  rect(260, 390, 80, 80, 20);
  ellipse(300, 480, 180, 160);

  // Vase body
  fill("#E6B4AE");
  rect(265, 395, 70, 80, 15);
  ellipse(300, 480, 170, 150);
}