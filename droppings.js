class Droppings{
    constructor(x, y) {
        var options = {
             isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.body = Bodies.circle(x, y, 10, options);
       
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0, 0, 10, 10);
        pop();
      }
}
