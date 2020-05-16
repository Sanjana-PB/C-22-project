var bullet , wall ;
var speed , weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,50);

  bullet = createSprite(50,200,70,70);

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = ("black");
}

function draw() {
  background(255,255,255);  

bullet.velocityX = speed;
bullet.weight = weight;

if(wall.x - bullet.x < (bullet.width + wall.width)/3){
    
    bullet.velocityX = 00;

    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness) ;

    if(damage > 10){
      bullet.shapeColor = color(255,0,0);
    }

    if(damage <10){
      bullet.shapeColor = color(0,255,0);
    }
    
  }

  hasCollided();

  drawSprites();
}

function hasCollided(){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}