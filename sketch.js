const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 390, 800, 15);
  box1 = new Box(500, 200, 40, 40);
  box2 = new Box(500, 150, 40, 40);
  box3 = new Box(500, 100, 40, 40);
  box4 = new Box(500, 50, 40, 40);
  box5 = new Box(500, 20, 40, 40);
  box6 = new Box(550, 200, 40, 40);
  box7 = new Box(550, 150, 40, 40);
  box8 = new Box(550, 100, 40, 40);
  box9 = new Box(550, 50, 40, 40);
  box10 = new Box(550, 20, 40, 40);
  box11 = new Box(600, 200, 40, 40);
  box12 = new Box(600, 150, 40, 40);
  box13 = new Box(600, 100, 40, 40);
  box14 = new Box(600, 50, 40, 40);
  box15 = new Box(600, 20, 40, 40);

  ball = new Ball(350, 200, 100);
  rope = new Rope(ball.body, {x:350, y:70});

}

function draw(){
  Engine.update(engine);
  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  ball.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}