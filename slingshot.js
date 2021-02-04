class Slingshot{
    constructor(bird,pointB){
        var options={
        bodyA:bird,
        pointB:pointB,
        stiffness:0.04,
        length:10
        
        }
        this.pointB=pointB
        this.slingshot= Constraint.create(options)
        World.add(world,this.slingshot)
        
    }

    attach(bird){
        this.slingshot.bodyA=bird;
    }

    fly(){
        this.slingshot.bodyA=null
    }
    display(){
        if(this.slingshot.bodyA){
            var A= this.slingshot.bodyA.position
            var B= this.pointB
            strokeWeight(3);
            line(A.x,A.y,B.x,B.y)
        
        }
        
    }
}