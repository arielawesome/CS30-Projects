// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let newBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  newBall = {
    x: random(width),
    y: random(height),
    diameter: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
 
}

function draw() {
  background(220);

  fill(255,0,0);
  circle(newBall.x, newBall.y, newBall.diameter);

newBall.x += newBall.dx;
newBall.y += newBall.dx;

}