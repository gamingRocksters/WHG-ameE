var gameState = 0; 
var ask = prompt("What is your name: ");
var start, start2, bg;
var wall1, wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var ding, dong1,dong2,dong3,dong4;



function setup(){
 
createCanvas(400,400);





start = createSprite(44,191,50,40);
start.shapeColor = "#ff828b"
start2 = createSprite(336,191,50,40);
start2.shapeColor = "#ff828b"
bg = createSprite(190,190,245,140)
bg.shapeColor = "#ffb2b7"

 wall1 = createSprite(190,120,250,3);
 wall2 = createSprite(190,260,250,3);
 wall3 = createSprite(67,145,3,50);
 wall4 = createSprite(67,235,3,50);
 wall5 = createSprite(313,145,3,50);
 wall6 = createSprite(313,235,3,50);
 wall7 = createSprite(41,170,50,3);
 wall8 = createSprite(41,210,50,3);
 wall9 = createSprite(337,210,50,3);
 wall10 = createSprite(337,170,50,3);
 wall11 = createSprite(18,190,3,40);
 wall12 = createSprite(361,190,3,40);

 ding = createSprite(40,190,13,13);
ding.shapeColor = "#c10037";

 dong1 = createSprite(100,130,10,10);
dong1.shapeColor = "red";
 dong2 = createSprite(215,130,10,10);
dong2.shapeColor = "red";
 dong3 = createSprite(165,250,10,10);
dong3.shapeColor = "red";
 dong4 = createSprite(270,250,10,10);
dong4.shapeColor = "red";

dong1.velocityY = 8;
 dong2.velocityY = 8;
 dong3.velocityY = -8;
 dong4.velocityY = -8; 

 count = 0;
//shape color for walls
wall1.shapeColor = "black";
wall2.shapeColor = "black";
wall3.shapeColor = "black";
wall4.shapeColor = "black";
wall5.shapeColor = "black";
wall6.shapeColor = "black";
wall7.shapeColor = "black";
wall8.shapeColor = "black";
wall9.shapeColor = "black";
wall10.shapeColor = "black";
wall11.shapeColor = "black";
wall12.shapeColor = "black";

death = "Use arrow keys to move";



}

function draw() {
background("#f6cafe")


fill("black");
textSize(25);
text( ask +" / Death: " + count,110,100);
text(death ,40,344);

dong1.bounceOff(wall1);
dong1.bounceOff(wall2);
dong2.bounceOff(wall1);
dong2.bounceOff(wall2);
dong3.bounceOff(wall1);
dong3.bounceOff(wall2);
dong4.bounceOff(wall1);
dong4.bounceOff(wall2);


if(keyDown("right")){
  ding.x = ding.x + 2;
}
if(keyDown("left")){
  ding.x = ding.x - 2;
}

if(ding.isTouching(wall11)||
   ding.isTouching(wall12)||
   ding.isTouching(dong1)||
   ding.isTouching(dong2)||
   ding.isTouching(dong3)||
   ding.isTouching(dong4))
{
   ding.x = 40;
   ding.y = 190;
   count = count + 1;
}
if(ding.isTouching(start2)){
  death = "You Win..Take a SS to prove.."
}

if(count === 10){
  ding.destroy();
  dong1.destroy();
  dong2.destroy();
  dong3.destroy();
  dong4.destroy();
  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  wall7.destroy();
  wall8.destroy();
  wall9.destroy();
  wall10.destroy();
  wall11.destroy();
  wall12.destroy();
  start.destroy();
  start2.destroy();
  bg.destroy();
  death = "You Lose...To restart click below.."
}
drawSprites();

}




