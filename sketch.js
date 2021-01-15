const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





var  divison = []
var divisonHeight = 300



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  for(var k = 0 ; k<=width ; k=k+ 80){
    divison.push(new Divison(k,divisonHeight/2,10,divisonHeight))
  }
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  drawSprites();
}