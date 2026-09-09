// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "the aesthetic value of code lies in its execution, not simply its written form", source: "Geoff Cox, Alex McLean & Adrian Ward" },
  { text: "set into motion with some degree of autonomy", source: "Philip Galanter" },
  { text: "the appropriate aesthetic criteria and the locus of creativity", source: "Margaret A. Boden & Ernest A. Edmonds" },
  { text: "the description, analysis and comparison of generative artworks", source: "Alan Dorin" },
  { text: "Obscurantism is dangerous. Show us your screens", source: "Adrian Ward" },
  { text: "how people interact with the world and each other via code", source: "Alan F. Blackwell" },
  { text: "the ability to read and write processes, to engage procedural representation and aesthetics", source: "Michael Mateas" },
  { text: "Learning the language of creative coding is essential to expression in a digital medium", source: "Kylie Peppler & Yasmin Kafai" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(32);
  fill(10, 255, 10);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(255, 20, 250); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLD);
  text("'" + current.text + "'", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}