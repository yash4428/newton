
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	ground2Object= new Ground(340,100,800,50)
	
	paperObject1 = new Paper(340,600,30)
	paperObject2 = new Paper(340,600,30)
	paperObject3 = new Paper(340,600,30)
	paperObject4 = new Paper(340,600,30)
	paperObject5 = new Paper(340,600,30)
chain1 = new Chain(paperObject1.body,ground2Object.body,-30*4,0)
chain2 = new Chain(paperObject2.body,ground2Object.body,-15*4,0)
chain3 = new Chain(paperObject3.body,ground2Object.body,0*4,0)
chain4 = new Chain(paperObject4.body,ground2Object.body,15*4,0)
chain5 = new Chain(paperObject5.body,ground2Object.body,30*4,0)
	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)

paperObject1.display();
ground.display();
ground2Object.display();
chain1.display();
paperObject2.display();
chain2.display();
paperObject3.display();
paperObject4.display();
paperObject5.display(); 
chain3.display();
chain4.display();
chain5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperObject1.body,paperObject1.body.position,{x:-200,y:-200});
	}
	
  }


