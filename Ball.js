class Ball {
    constructor(x, y, Radius) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':0.04,
      }
      this.body = Bodies.circle(x, y, Radius, options);
      this.radius = Radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
    }
  }