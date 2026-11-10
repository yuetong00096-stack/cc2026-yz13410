let sound;
let MyAnalyzer; // Measures the volume of the music
let stars = []; // All the stars on the screen
let soundStrength = 0; // The number used for the visual changes
let starSizeScale = 1; // 1 means the original star size
let starSpeed = 0.5; // How fast the stars fall

// Pastel colors for the stars
let starColors = [
  "#F6C8D8", "#EFB5C8", "#F7D6D0", "#FFD4B8", "#F4BFA5",
  "#F8E1B8", "#F6D98F", "#E9E8A8", "#D8E6B2", "#BFDCC6",
  "#B7DCD3", "#B8DDE3", "#B8CDE8", "#AFC1E8", "#C4C5EF",
  "#D0BDEE", "#DCC7EA", "#E5CBE3", "#EECADD", "#F2CCD1"
];

// The music file takes time to load.
// async allows await, so setup waits for the music to load.
async function setup() {
  createCanvas(windowWidth, windowHeight);

  sound = await loadSound("media/1.mp3");
  sound.loop();

  // Connect the music to the volume analyzer
  MyAnalyzer = new p5.Amplitude();
  sound.connect(MyAnalyzer);

  // Start with 20 stars at different heights
  for (let i = 0; i < 20; i++) {
    stars.push(new Star(height - i * (height / 20)));
  }
}

function draw() {
  // Start at 0 for silence. If the music is playing, get its volume.
  let soundLevel = 0;

  // I learned isPlaying() from the official p5.SoundFile reference.
  if (sound.isPlaying()) {
    soundLevel = MyAnalyzer.getLevel();
  }

  // Keep the volume at 0.1 or below, so the stars do not get too large
  if (soundLevel > 0.1) {
    soundLevel = 0.1;
  }

  // Change the volume into a number from 0 to 1
  soundStrength = map(soundLevel, 0, 0.1, 0, 1);

  // The stars keep their size when quiet and can grow to twice their size
  starSizeScale = map(soundStrength, 0, 1, 1, 2);

  // Pink for louder music, blue for quieter music
  if (soundStrength > 0.5) {
    background("#D98FA6");
  } else {
    background("#8BCDEE");
  }

  // The stars start from bottom to top, so the first one leaves the screen first.
  if (stars[0].y > height + 30) {
    stars.shift();
    stars.push(new Star(-30));
  }

  // Draw every star
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
  }

  fill("white");
  noStroke();
  textSize(14);
  text("Click to play and pause the music! ", 20, 28);
}

class Star {
  constructor(y) {
    this.x = random(width);
    this.y = y;
    this.size = random(7, 11);
    this.color = random(starColors);
  }

  display() {
    // Make the star fall slowly
    this.y = this.y + starSpeed;

    push();

    // Move the drawing point to this star's position
    translate(this.x, this.y);
    noStroke();

    // Show the pastel color when the music is louder
    if (soundStrength > 0.5) {
      fill(this.color);
    } else {
      fill("#536884");
    }

    // Keep each star's random size and make it grow with the sound
    let size = this.size * starSizeScale;

    // Use p5.Polar for five points, then add a circle in the middle
    polarTriangles(5, size, size);
    circle(0, 0, size * 2);

    pop();
  }
}

function mousePressed() {
  // Click to pause or play the music
  // I learned isPlaying() from the official p5.SoundFile reference.
  if (sound.isPlaying()) {
    // I learned pause() from the official p5.SoundFile reference.
    sound.pause();
  } else {
    sound.play();
  }
}
