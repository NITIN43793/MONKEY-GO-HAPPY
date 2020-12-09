
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground, invisibleGround;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(100,440,40,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2
  
  ground = createSprite(600,450,2000,20);
  ground.x = ground.width /2;
  ground.velocityX = -7
  
  invisibleGround = createSprite(300,460,600,2);
  invisibleGround.visible = false;
}


function draw() {
console.log(monkey.y);
  background(220);
  text("Score: "+ score, 500,50);
  
   score = score + Math.round(getFrameRate()/60);
    
   
    if(keyDown("space")&& monkey.y >= 378) {
        monkey.velocityY = -16 ;
    }
    
    monkey.velocityY = monkey.velocityY + 0.9
  
    obstacles();
    bananas();
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
     var SurvivalTime=0;
     stroke("white");
     textSize(20);
     fill("white")
     text   
  
    monkey.collide(ground);
  
  
    drawSprites();     
  
}

function obstacles(){
 if (frameCount % 85 === 0){
    obstacle = createSprite(600,440,40,20);
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.scale = 0.15
    obstacle.velocityX = -7
    obstacle.collide(invisibleGround);
    obstacle.lifetime = 80
   
    obstacle.depth =monkey.depth;
    monkey.depth = monkey.depth + 1;
   
 }
}

function bananas(){
   if (frameCount % 85 === 0){
    banana = createSprite(600,300,40,20);
    banana.addImage("banana", bananaImage)
    banana.scale = 0.1
    banana.velocityX = -7
    banana.collide(obstacle);
    banana.lifetime = 80
    
   
 }
}
