
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var fan;
var wall;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var fan_optiions ={
 isStatic: true
  };

  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
 
  fan = Bodies.rectangle(100,200,100,20,fan_optiions);
  World.add(world,fan);

  wall = Bodies.rectangle(300,150,70,20,ground_options);
  World.add(world,wall);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  Matter.Body.rotate(fan,angle);
  push();
  translate(fan.position.x,fan.position.y);
rotate(angle);
  rect(0,0,100,20);
pop()
angle=angle+0.1

rect(wall.position.x,wall.position.y,70,20);

  
  
}

