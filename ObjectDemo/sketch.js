// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let ballsArray = []
function setup() {
  createCanvas(windowWidth, windowHeight);
  createBall();
 
 
}

function draw() {
  background(220);

  fill(255,0,0);

  for (let i = 0; i < ballsArray.length; i++) {
  circle(ballsArray[i].x, ballsArray[i].y, ballsArray[i].diameter);
ballsArray[i].x += ballsArray[i].dx;
ballsArray[i].y += ballsArray[i].dy;
  }
}

function createBall() {
  newBall = {
    x: random(width),
    y: random(height),
    diameter: random(25, 100),
    dx: random(-2, 2),
    dy: random(-2, 2),
  };
ballsArray.push(newBall);
}
function mousePressed() {
  createBall();
  ballsArray[ballsArray.length-1].x = mouseX;
  ballsArray[ballsArray.length-1].y - mouseY;
  
}
