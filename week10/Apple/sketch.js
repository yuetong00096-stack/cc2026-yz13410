let handPose;
let video;
let hands = [];

let apples = [];
// Start outside the canvas so the first finger position adds an apple
let lastAppleX = -100;
let lastAppleY = -100;

//random apple colors
let appleColors = [
  "#A82F35",
  "#D6453D",
  "#D98259",
  "#D9B858",
  "#91AD5A"
];

//directly from ml5.js handpose example
// https://docs.ml5js.org/#/reference/handpose
async function setup() {
  createCanvas(640, 480);

  handPose = await ml5.handPose();

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Check which hands are on the screen
  let rightHandFound = false;
  let leftHandFound = false;

  // The basket follows the left finger
  let basketX = 0;
  let basketY = 0;

  // Check both hands
  // HandPose gives a handedness value for each detected hand！
  // https://p5js.org/tutorials/speak-with-your-hands/#step-2---lets-understand-the-data
   for (let i = 0; i < hands.length; i++) {
    if (hands[i].handedness === "Right") {
      rightHandFound = true;

      // Get the index finger tip position, as shown in the ml5.js tutorial:
      // https://docs.ml5js.org/
      let fingerX = hands[i].index_finger_tip.x;
      let fingerY = hands[i].index_finger_tip.y;

      // Add an apple when the right finger moves
      if (dist(fingerX, fingerY, lastAppleX, lastAppleY) > 30) {
        apples.push(new Apple(fingerX, fingerY));

        lastAppleX = fingerX;
        lastAppleY = fingerY;

        if (apples.length > 25) {
          apples.shift();// Remove the oldest apple
        }
      }
    }

    // The basket follows the left finger
    //  Get the index finger tip position, as shown in the ml5.js tutorial:
    // https://docs.ml5js.org/
    if (hands[i].handedness === "Left") {
      leftHandFound = true;
      basketX = hands[i].index_finger_tip.x;
      basketY = hands[i].index_finger_tip.y;
    }
  }

  // Reset the last apple position when the right hand leaves
  if (rightHandFound === false) {
    lastAppleX = -100;
    lastAppleY = -100;
  }
  // Keep the apples that do not touch the basket
  if (leftHandFound === true) {
  let remainingApples = [];

  for (let i = 0; i < apples.length; i++) {
    // Keep this apple if it is far enough from the basket
    if (dist(apples[i].x, apples[i].y, basketX, basketY) >= 40) {
      remainingApples.push(apples[i]);
    }
  }
  // Update the apples array to only include the remaining apples
  apples = remainingApples;
}
  
  // Draw the apples
  for (let i = 0; i < apples.length; i++) {
    apples[i].display();
  }

  // Draw the basket on the left finger
  if (leftHandFound === true) {
    drawBasket(basketX, basketY);
  }
}

 // Callback function for when handPose outputs data
function gotHands(results) {
// Store the detected hands in the global variable
  hands = results;
}

class Apple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.appleWidth = random(28, 38);
    this.appleHeight = random(32, 42);
    this.color = random(appleColors);
  }

  display() {
    stroke("#292326");
    strokeWeight(2);
    fill(this.color);

    // Apple body
    ellipse(this.x, this.y, this.appleWidth, this.appleHeight);

    // Stem
    line(this.x, this.y - 13, this.x + 2, this.y - 23);

    // Leaf
    fill("#5F8747");
    ellipse(this.x + 7, this.y - 21, 10, 5);
  }
}

function drawBasket(x, y) {
  stroke("#6F4227");
  strokeWeight(2);
  fill("#C78B55");

  // Basket body
  rect(x - 30, y - 5, 60, 30, 6);

  // Basket opening
  fill("#E2AE75");
  ellipse(x, y - 5, 60, 10);

  // Words on the basket
  noStroke();
  fill("#4B2B19");
  textSize(8);
  text("Apple Basket", x - 25, y + 15);
}