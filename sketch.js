var bullet, wall;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(1500,400);
  bullet = createSprite(50, 200, 70, 20);
  wall = createSprite(1200, 200, thickness, 200);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background(0,0,0);
  wall.shapeColor=color(80,80,80);
 
  bullet.velocityX = speed;

  hasCollided(bullet,wall);
  
  if(damage < 10)
     {
       wall.shapeColor="green";
       text("WALL EFFECTIVE",200,200);
       text("Speed is " + Math.round(speed),200,220);
       text("Weight is " + Math.round(weight),200,240);
       text("Damage is " + Math.round(damage),200,260);
     }
  else if(damage >= 10)
     {
      wall.shapeColor="red";
      text("WALL INEFFECTIVE",200,200);
      text("Speed is " + Math.round(speed),200,220);
      text("Weight is " + Math.round(weight),200,240);
      text("Damage is " + Math.round(damage),200,260);
     }

  drawSprites();

}
function hasCollided(bullet,wall)
{
  if((bullet.x - wall.x < bullet.width/2 + wall.width/2)&&
  (wall.x - bullet.x < bullet.width/2 + wall.width/2)&&
  (bullet.y - wall.y < bullet.height/2 + wall.height/2)&&
  (wall.y - bullet.y < bullet.height/2 + wall.height/2))
  {
     damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
     bullet.velocityX = 0;

     
  }
}