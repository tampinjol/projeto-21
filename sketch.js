const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1;
var button2;
var basket;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  button1=createImg('right.png')
button1.position(30,340)
button1.size(40,40)
button1.mouseClicked(left_force)

button2=createImg('up.png')
button2.position(80,340)
button2.size(40,40)
button2.mouseClicked(antiGravity_force)


var ball_options= {
restution:0.75,
frictionAir:0.05
}
ball=Bodies.circle(100,300,25,ball_options)
World.add(world,ball)

var basket_options= {

  isStatic :true

}
basket=Bodies.rectangle(300,300,20,40,basket_options)


  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,25)
  rect(basket.position.x,basket.position.y,20,40)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function left_force() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0});
}
function antiGravity_force() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03});
}