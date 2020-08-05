const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 395, 800, 10);
    platform1 = new Ground(300, 250, 200, 10);
    platform2 = new Ground(595, 300, 200, 10);
    player = new Stone(63, 180, 30);
    box1 = new Box(219, 220, 40, 40);
    box2 = new Box(259, 220, 40, 40);
    box3 = new Box(299, 220, 40, 40);
    box4 = new Box(339, 220, 40, 40);
    box5 = new Box(379, 220, 40, 40);
    box6 = new Box(238, 168, 40, 40);
    box7 = new Box(278, 168, 40, 40);
    box8 = new Box(318, 168, 40, 40);
    box9 = new Box(358, 168, 40, 40);
    box10 = new Box(256, 130, 40, 40);
    box11 = new Box(296, 130, 40, 40);
    box12 = new Box(336, 130, 40, 40);
    box13 = new Box(274, 96, 40, 40);
    box14 = new Box(314, 96, 40, 40);
    box15 = new Box(293, 60, 40, 40);
    box16 = new Box(515, 263, 40, 40);
    box17 = new Box(555, 263, 40, 40);
    box18 = new Box(595, 263, 40, 40);
    box19 = new Box(635, 263, 40, 40);
    box20 = new Box(675, 263, 40, 40);
    box21 = new Box(535, 223, 40, 40);
    box22 = new Box(575, 223, 40, 40);
    box23 = new Box(615, 223, 40, 40);
    box24 = new Box(655, 223, 40, 40); 
    box25 = new Box(555, 143, 40, 40);
    box26 = new Box(595, 143, 40, 40);
    box27 = new Box(635, 143, 40, 40);
    box28 = new Box(575, 105, 40, 40);
    box29 = new Box(615, 105, 40, 40);
    box30 = new Box(595, 65, 40, 40);
    string = new Chain(player.body, {x:63, y:180});  
  }

function draw() {
  background(0, 0, 0);  
  Engine.update(engine);
  console.log("mouseX: "+mouseX);
  console.log("mouseY: "+mouseY);
  ground.display();
  platform1.display();
  platform2.display();
  player.display();
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
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();   
}

function mouseDragged(){
  Matter.Body.setPosition(player.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  string.fly();
}