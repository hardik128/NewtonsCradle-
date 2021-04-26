class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness:1,
            length: 200
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y-250;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){

        if (this.sling.bodyA){     
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("#fff")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
    
}