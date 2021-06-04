var astro
var backgroundImg;
var bath, brush, drink, eat, gym, newGym, sleep, moving

function preload(){

  bath = loadAnimation("images/bath1.png","images/bath2.png")

  brush = loadAnimation("images/brush.png")

  drink = loadAnimation("images/drink1.png","images/drink2.png");
 
  eat = loadAnimation("images/eat1.png","images/eat2.png");
 
  gym = loadAnimation("images/gym1.png","images/gym2.png");

  newGym = loadAnimation("images/newGym1.png","images/newGym2.png");

  moving = loadAnimation("images/move.png","images/move1.png");

  sleep = loadAnimation("images/sleep.png");

  backgroundImg = loadImage("images/iss.png");

}

function setup() {

  createCanvas(600, 600);

  astro = createSprite(300,300,15,15);
  astro.addAnimation("sleep",sleep);
  astro.velocityY = 0;
  astro.velocityX = 0;
  astro.scale = 0.5;

  edges = createEdgeSprites();

}

function draw() {

  background(backgroundImg);

  fill("white");
  Text("Instructions: ",70,50)
  Text("Up Arrow key = Brushing ",70,80)
  Text("Down Arrow key = Gym exercise 1  ",70,110)
  Text("Left Arrow key = Eating ",70,140)
  Text("Right Arrow key = Bathing ",70,170)

  
  if(keyDown(LEFT_ARROW)){

    astro.changeAnimation("eat",eat)
    astro.velocityY = 0;
    astro.velocityX = 0;  
}

if(keyWentUp(LEFT_ARROW)){
    
   astro.changeAnimation("move",moving);
   astro.velocityX = 2;
   astro.velocityY = -2;
}

if(keyDown(RIGHT_ARROW)){

    astro.changeAnimation("bathing",bath)
    astro.velocityY = 0;
    astro.velocityX = 0;
}

if(keyWentUp(RIGHT_ARROW)){
    
    astro.changeAnimation("moving",moving);
    astro.velocityX = -2;
    astro.velocityY = 2;
}

if(keyDown(DOWN_ARROW)){

    astro.changeAnimation("gym",gym)
    astro.velocityY = 0;
    astro.velocityX = 0;
}

if(keyWentUp(DOWN_ARROW)){
            
    astro.changeAnimation("mov",moving);
    astro.velocityY = -2;
    astro.velocityX = 2;
}

if(keyDown(UP_ARROW)){

    astro.changeAnimation("brushing",brush)
    astro.velocityY = 0;
    astro.velocityX = 0;
}

if(keyWentUp(UP_ARROW)){
            
    astro.changeAnimation("moved",moving);
    astro.velocityY = 2;
    astro.velocityX = -2;
}


astro.bounceOff(edges);

drawSprites();

}