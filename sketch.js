function setup() {
  createCanvas(640, 480);
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
}