var bg,bg1
var sf,sf1
function preload(){
  bg1 = loadImage("snow1.jpg")
  sf1 = loadImage("snow5.webp")
}
function setup() {
  createCanvas(1200,600);
  bg=createSprite(600, 400, 50, 50);
  bg.addImage(bg1)
  bg.scale =2
}
function draw() {
  background(255,255,255);  

  drawSprites();
  createsnow()
}
function createsnow(){
  if(frameCount %10 ===0 ){
    sf = createSprite(Math.round(random(50,1100),375,20,20))
   sf.addImage(sf1)
   sf.scale = 0.2
   sf.velocityY = 10
}}