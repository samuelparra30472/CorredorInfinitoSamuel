var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score = 0



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.addImage(ghostImg)
  ghost.scale = 0.4
  
  climbersGroup = new Group ()
  doorsGroup = new Group()
  invisibleBlockGroup = new Group ()
  


}

function draw() {
  background(200);
  
  if(gameState =="play"){
    if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("right")){
      ghost.x += 5
    }
    if(keyDown("left")){
      ghost.x -= 5
    }
    if(keyDown("up")){
      ghost.velocityY = -10
    }
    ghost.velocityY = ghost.velocityY +0.5
    spawObstacles()
    
    if(ghost.isTouching(invisibleBlockGroup)){
   gameState = "end"
    }

    score = score +1
  }

    if (gameState == "end"){
      tower.velocityY = 0
     ghost.velocityY = 0
     door.velocityY = 0
     climber.velocityY = 0
     invisibleBlock.velocityY = 0
     text ("fin del juego perdiste",200,200)
     textSize(200)
        
    }
    text("puntuacion:" + Math.round(score),width,100,50)
  
  
    drawSprites()
}

function spawObstacles () {
  if(frameCount%240 === 0){
   door = createSprite(50,-100)
   climber = createSprite(50,-30)
   invisibleBlock = createSprite (50,-35)
   door.addImage(doorImg)
   climber.addImage(climberImg)
   invisibleBlock.visible = false
   invisibleBlock.scale = 0.03
  door.velocityY = 1
  climber.velocityY = 1
  invisibleBlock.velocityY = 1
  door.x = Math.round(random(80,520))
  climber.x = door.x
  invisibleBlock.x = door.x

  climbersGroup.add (climber)
  doorsGroup.add (door)
  invisibleBlockGroup.add (invisibleBlock) 

  
  
  }
}