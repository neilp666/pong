var pX, pY, pW, pH, pV

function setup() {
  createCanvas(640, 480);
  pW = 20
  pH = 100
  pX = 0
  pY = height/2
  pV = 0 // paddle's velocity
}

function draw() {
  // colour of the line
  background (0)
  // size and thickness of the line
  stroke(255)
  strokeWeight(1)

  // add lines for the net
  for (var i = 0; i < height/10; i++) {
    line(width/2, height/10*i, width/2, height/20 + height/10*i)
  }

  // update paddle's position
  pY = pY + pV
  // limit paddle's position
  if (pY < pH/2) {
    pY = pH/2
  }

  if (pY > height - pH/2) {
    pY = height - pH/2
  }
  // fill the area with white color
  fill(255)
  // Draw a rectangle: x, y width, height
  rect(pX, pY - pH/2, pW, pH)
}

  // create function when users presses keys

function keyPressed() {
  if(key == 'w') {
    pV = -4
  }
  if(key == 's') {
    pV = 4
  }
}