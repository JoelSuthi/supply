var ground,box,box2,box3,paper;
var option = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,	
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(200,100,20,option);
    World.add(world,paper);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box=createSprite(500,610, 20,100);
	box.shapeColor = "yellow";
	box2 = createSprite(600,650,200,20);
	box2.shapeColor = "yellow";
	box3=createSprite(700,610,20,100);
	box3.shapeColor = "yellow";
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(50,630,50,50);
  drawSprites();
  keyPressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.Body,paper.body.position,{x:85,y:-90})

	}
}



