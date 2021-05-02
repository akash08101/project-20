var tom,jerry,tomImg,jerryImg;
var bg,bgImg;
var tomHappy,jerryHappy;
var jerryTease;
var catMoving;
function preload() {
    //load the images here
tomImg=loadAnimation("images\cat1.png");
jerryImg=loadAnimation("images\mouse1.png");
bgImg=loadImage("images\garden.png");
tomHappy=loadAnimation("images\cat4.png");
jerryHappy=loadAnimation("images\mouse4.png");
jerryTease=loadAnimation("images\mouse2.png","images\mouse3.png");
catMoving=loadAnimation("images\cat2.png","images\cat3.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    tom=createSprite(10,200,20,20);
    tom.addAnimation("..",tomImg);
   jerry=createSprite(380,200,20,20);
jerry.addAnimation("..",jerryImg);
    bg=createSprite(200,200,20,20);
    bg.addImage("..",bgImg);
}

function draw() {

    background("images\garden.png");
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.addAnimation("..",tomHappy);
tom.changeAnimation("..",tomHappy);
jerry.addAnimation('..',jerryHappy);
jerry.changeAnimation("..",jerryHappy);

}
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("right")){
    tom.x=tom.x+2;
jerry.addAnimation("..",jerryTease);
jerry.changeAnimation("..",jerryTease);
tom.addAnimation("..",catMoving);
tom.changeAnimation("..",catMoving);
}

}
