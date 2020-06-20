const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var BackgroundImg;
function preload(){
    BackgroundImg = loadImage("bckImg.jpg");
}
function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

  
    left = new box(150, 300, 20, 140);
    right = new box(250, 300, 20, 140);
    bottom = new box(200, 380, 120, 20);
    bird1 = new bird(1000, 200);

    dustBunny = new dustbin(200, 300, 0, 0);

    floor = new ground(200, 400, 400, 20);
    floor_bird = new ground(1000, 400, 400, 20);
    
}

function draw(){
    background(BackgroundImg);
    Engine.update(engine);

    
    left.display();
    right.display();
    bottom.display();
    bird1.display();

    dustBunny.display();

    floor.display();
    floor_bird.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird1.body, {x : mouseX, y : mouseY})
}
