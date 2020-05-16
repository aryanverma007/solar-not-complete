var sun  ,planet ,x = 45,y = 45;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(255,255,255);  
  planet2 = ellipse(350, 350, 63, 65);
  planet3 = ellipse(600, 650, 87, 85);
  planet = ellipse(200,200,60,60);
  sun = ellipse(400, 200, x, y);

  x = x+1;
  y = y+1;
  

 

  drawSprites();
}