var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(700, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1= createSprite(300,200,50,50)
  rect1.shapeColor="blue";

  rect2=createSprite(500,200,50,50)
  rect2.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if(isTouching(movingRect,rect1)){
  movingRect.shapeColor = "red";
 rect1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "blue";
  rect1.shapeColor = "blue";
}

if(isTouching(movingRect,rect2)){
  rect2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "blue";
  rect2.shapeColor = "blue";
}
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;
    }
else {
return false;
}
}