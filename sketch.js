const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var pendulums=[]

function setup(){
 var canvas = createCanvas(windowWidth/2+2,windowHeight/2)
 engine = Engine.create();
 world = engine.world; 

let canvasmouse = Mouse.create(canvas.elt)
canvasmouse.pixelRatio = pixelDensity();
let options={
  mouse : canvasmouse
};

mConstraint = MouseConstraint.create(engine, options);
World.add(world,mConstraint);

ground01 = new Ground(windowWidth/4,windowHeight/8,windowWidth/2,20); 
pendulum1 = new Pendulum(42,270,rgb(20,20,100));
pendulum2 = new Pendulum(122,270,rgb(20,20,100));
pendulum3 = new Pendulum(202,270,rgb(20,20,100));
pendulum4 = new Pendulum(282,270,rgb(20,20,100));
pendulum5 = new Pendulum(362,270,rgb(20,20,100));
sling1 = new Sling(pendulum1.body,{x:42 ,y:windowHeight/8});
sling2 = new Sling(pendulum2.body,{x:122 ,y:windowHeight/8});
sling3 = new Sling(pendulum3.body,{x:202 ,y:windowHeight/8});
sling4 = new Sling(pendulum4.body,{x:282 ,y:windowHeight/8});
sling5 = new Sling(pendulum5.body,{x:362 ,y:windowHeight/8});
console.log(windowWidth)
console.log(windowHeight)
console.log(canvas);
Engine.run(engine)
}

function draw() {
 
 background(rgb(20,20,100));
 pendulum1.display();
 pendulum2.display();
 pendulum3.display();
 pendulum4.display();
 pendulum5.display();
 ground01.display();
 sling1.display();
 sling2.display();
 sling3.display();
 sling4.display();
 sling5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, { x: mouseX , y: mouseY})
}


