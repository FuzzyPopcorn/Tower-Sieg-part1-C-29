class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingline = Constraint.create(options);
        World.add(world, this.slingline);
    }

    fly(){
        this.slingline.bodyA = null;
    }

    display(){
        if(this.slingline.bodyA){
            var pointA = this.slingline.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
}