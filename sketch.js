var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleBottom,obsBottom1,obsBottom2,obsBottom3,obsTop1,obsTop2,obstacleTop;

function preload(){
 bgImg=loadImage("bg.png");
 balloonImg=loadAnimation("balloon1.png","balloon2.png","balloon3.png");
 obsTop1=loadImage("obsTop1.png");
 obsTop2=loadImage("obsTop2.png");
 obsBottom1=loadImage("obsBottom1.png");
 obsBottom2=loadImage("obsBottom2.png");
 obsBottom3=loadImage("obsBottom3.png");

}

function setup(){

//background image
bg=createSprite(700,500,1,1);
bg.addImage(bgImg);
bg.scale=1.4;
//creating top and bottom grounds
bottomGround=createSprite(1500,50,1500,10);
bottomGround.visible= false;

//creating balloon     
balloon=createSprite(150,300,20,20);
balloon.addAnimation("balloon",balloonImg);
balloon.scale=0.5;



}

function draw() {
 createCanvas(1500,700); 
  background("black");
        
          //making the hot air balloon jump
          if (keyDown("space")){
            balloon.velocityY=-6
          }
          

          //adding gravity
           balloon.velocityY=balloon.velocityY+1;
   SpawnObstaclesTop();
        drawSprites();
        
}
function SpawnObstaclesTop(){
  if (World.frameCount%80===0)
  {
    obstacleTop=createSprite(1500,100,40,40);
    obstacleTop.velocityX=-4

    obstacleTop.y=Math.round(random(10,150))

    var rand=Math.round(random(1,2));
    switch(rand)
  }
}