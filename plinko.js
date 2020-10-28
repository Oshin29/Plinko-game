class Plinko{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10, options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(0,0,255);
        ellipseMode(CENTER);
        ellipse(0,0,20,20);
        pop();
    }


}