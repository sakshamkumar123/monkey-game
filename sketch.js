var PLAY=0
var END=1
var gameState=PLAY
var monkey , monkey_running
var anana ,bananaImage, obstacle, obstacleImage
var bananaGroup, stoneGroup, banana
var score, ground
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaGroup= createGroup()
  stoneGroup= createGroup()
  
}



function setup() {
  createCanvas(500,500)
  monkey=createSprite(100,300)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(300,420,600,170)
  ground.shapeColor=rgb(210,105,43)
  
  
}


function draw() {
  background("lightblue")
 if (gameState===PLAY){
  
  if (keyDown("space")){
   monkey.velocityY=-14 
  }
   
   
  if (monkey.isTouching(bananaGroup)){
       bananaGroup.destroyEach() 
  }
   
  monkey.velocityY = monkey.velocityY+1
  monkey.collide(ground)
   
   
  spawnbanana()
  spawnobstacles()
   
   if (monkey.isTouching(stoneGroup)){
    gameState=END 
    monkey.destroy()
    bananaGroup.destroyEach() 
    stoneGroup.destroyEach()
  }
   survivaltime=Math.ceil(frameCount/getFrameRate())
    
  }
  if (gameState===END){
   fill("black")
     textSize(30)
     text("Game Over",150,100) 
  }
  
  
  
  textSize(20)
  text("survival Time= "+survivaltime,330,100)
  
  drawSprites()
}


function spawnbanana(){
 if (frameCount%60===0){
   banana=createSprite(600,random(200,300),20,20)
  banana.addImage(bananaImage)
  banana.scale=0.05
   banana.velocityX=(-5-frameCount/150)
   bananaGroup.add(banana)
   banana.lifetime=200
 }
  
}
function spawnobstacles(){
   if (frameCount%100===0){
   obstacles=createSprite(600,310,20,20)
 obstacles.addImage(obstacleImage)
  obstacles.scale=0.2
   obstacles.velocityX=(-5-frameCount/150)
   obstacles.lifetime=200  
   stoneGroup.add(obstacles)
   }
}

