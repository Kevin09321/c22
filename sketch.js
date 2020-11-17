const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball, ground;
var myEngine, myWorld;

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var boxOptions = {
    isStatic : true
  }

  var ballOptions = {
    restitution : 0.8
  }

  ball = Bodies.circle(200,200,30,ballOptions);
  World.add(myWorld,ball);

  ground = Bodies.rectangle(200,380,400,10,boxOptions);
  World.add(myWorld,ground);

}

function draw() {
  background(0);  
  
  Engine.update(myEngine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,10);
}