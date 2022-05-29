
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//give properties to PE Body
const Body = Matter.Body;

var myengine,myworld;
var ground,ball,ground1;
var button1;

var angle=60;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  button1= createImg("up.png");
  button1.position(20,30);
  button1.size(50,50);
  button1.mouseClicked(vForce);
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(myworld,ground);

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(myworld,ball);
  
  ground1=Bodies.rectangle(100,250,100,20,ground_options);
  World.add(myworld,ground1);
  

  
}


function draw() 
{
  background(51);
  Engine.update(myengine);
  
 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //captures all new setting
  push(); 
    fill("red");
    ellipse(ball.position.x,ball.position.y,20);
  //reverts back to original setting
  pop();

  push();
    fill("green");
    rect(ground.position.x,ground.position.y,500,20);
  pop();


    Matter.Body.rotate(ground1,angle)

    push();
      fill("yellow");
      translate(ground1.position.x,ground1.position.y);
      rotate(angle);
      rect(0,0,100,20);
    pop();

  angle=angle+0.1
   
}

function vForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}
