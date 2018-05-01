function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log("draw");
  }
}

Circle.call({},1)
Circle.apply({},[])

const another = new Circle(1);