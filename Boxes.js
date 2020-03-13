class Box {
    constructor(x, y, width, height){

        var options = {
            'friction': 0.3,
            'restitution': 0.5,
            'density': 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options),
        this.width = width,
        this.height = height,

        World.add(world, this.body);
    }

    display(){
       var angle = this.body.angle
       var pos = this.body.position
       
      
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill(255);
         rect(0, 0, this.width, this.height);
         //rect(pos.x, pos.y, this.width, this.height);
         pop();
        


    }

}