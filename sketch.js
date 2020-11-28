
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var peper,ground;
var img,img1;
function preload()
{
img1=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	peper=new ball(150,680,35);
ground=new Ground(0,700,1900,20);
box1=new dustbin(600,680,90,20)
box2=new dustbin(560,650,20,90)
box3=new dustbin(655,650,20,90)
img=createSprite(0,0,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box3.display();
  peper.display();
  img.x=peper.x;
  img.y=peper.y;
  img.addImage(img1);
img.scale=0.3
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(peper.body,peper.body.position,{x:43,y:-43});
	}
}


