class Pendulum{
    constructor(x,y,color){
        var options={
          friction:0,
          restitution:1,
          density:1,
          frictionAir:0,
          slop:1,
          inertia:Infinity
          }
      this.body=Bodies.rectangle(x,y,80,80,options); 
      this.x=x;
      this.y=y;
      this.color=color;
      World.add(world,this.body)  
    }
    display(){
      var angle = this.body.angle;
      var position = this.body.position;
      push();
      translate(position.x,position.y);
      rotate(angle);
      stroke(250);
      strokeWeight(2);
      fill(this.color);
      ellipse(0,0,80,80);
      pop();
    } 

}