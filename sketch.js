var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";

  movingRect = createSprite(300, 200, 10, 50);
  movingRect.shapeColor = "yellow";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "yellow";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "yellow";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "yellow";
}

function draw() {
  background("red");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(movingRect.x-fixedRect.x);

  if(myIsTouching(movingRect, gameObject3)){
    gameObject3.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else{
    gameObject3.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  drawSprites();
}

