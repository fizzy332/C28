
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy1;
var lol;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

  ground=createSprite(630,590,2000,20);
  lol=createSprite(200,200,20,20);
  boy1=new boy(ground.body,lol.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   boy1.display();
   lol.display();

  drawSprites();
 
}



