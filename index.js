// Factory Method
function createCirle(radius){
 return{
  radius,
  draw: function(){
   console.log('draw')
  }
 };
}
const  circle = createCirle(1);
circle.draw();

// Construction Function
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }
}
const another = new Circle(1);
// New keywords create new refereance and assign the variable to it
// if we dont add new keyword it would reference to window object which is a global object which could create a bug in application
// First it creates an empty object
// Second it set this to point to this object.
// Third it would return. When using new it would automatically return new object. We dont need to add return statement
// if we use this and new method we it refers as constructor method.