class Bin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage ('dustbingreen.png');
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
      
    }
  };
