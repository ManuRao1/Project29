const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var ground;
var  slingShot;
var ,polygon_image;

function preload(){
    polygon_image = loadImage("polygon.png");
}

function setup(){
var canvas = createCanvas(600,600);
engine = Engine.create();

    world = engine.world;

    ground = new Ground(600,600,1200,20);
    ground2 = new Ground(150, 305, 300, 170);

    box1 = new Box();
    box2 = new Box();
    box3 = new Box();
    box4 = new Box();
    box5 = new Box();
    box6 = new Box();
    box7 = new Box();
    box8 = new Box();
    box9 = new Box();
    box10 = new Box();
    box11 = new Box();
    box12 = new Box();
    box13 = new Box();
    box14 = new Box();
    box15 = new Box();
    box16 = new Box();
    box17 = new Box();
    box18 = new Box();
    box19 = new Box();
    box20 = new Box();
    box21 = new Box();
    box22 = new Box();
    box23 = new Box();
    box24 = new Box();
    box25 = new Box();

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
    slingshot = new SlingShot(this.polygon,{x:100, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
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
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();

   inageMode(CENTER)
   image(polygon_image,polygon.position.x,polygon.position.y,40,40);
}
