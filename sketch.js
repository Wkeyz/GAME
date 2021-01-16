var whale,whaleImg,kid1,kid2,kid3,alien1,alien2,alien3;
var kid=[];
var bg;
var background;
var aliens=[];

function preload(){
bg=loadImage("bg.png");
whale=loadImage("whale.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  background = createSprite(displayWidth/2,displayHeight/2,1000,2000);
background.addImage(bg);
background.scale=0.1; 
  
  
  
}

function draw() {
  
//background(bg);

  drawSprites();
}