var spacebg, spacecraft, spacecraft1, spacecraft2, spacecraft3, spacecraft4, iss, issimg, hasDocked=false;

function preload() {
  spacebg=loadImage("spacebg.jpg")
  spacecraft1=loadImage("spacecraft1.png")
  spacecraft2=loadImage("spacecraft2.png")
  spacecraft3=loadImage("spacecraft3.png")
  spacecraft4=loadImage("spacecraft4.png")
  issimg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(200,300,50,50);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.15;
  iss=createSprite(400, 150, 50, 50);
  iss.addImage(issimg)
  iss.scale=0.5;
}

function draw() {
  background(spacebg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
  }
  if(keyDown(UP_ARROW)){
    spacecraft.addImage(spacecraft2);
    spacecraft.y=spacecraft.y-5;
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft3);
    spacecraft.x=spacecraft.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft4);
    spacecraft.x=spacecraft.x-5;
  }
  if(spacecraft.x>320 && spacecraft.y<200){
    hasDocked=true;
    textSize(50);
    text("docking successful",300,300);
    spacecraft.x=370;
    spacecraft.y=198;
  }
  drawSprites();
}