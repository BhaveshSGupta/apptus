# Functions are Objects
Every function is a object. Every function has some predefined methods and arguments
- functionName.name
- functionName.length
- functionName.constructor -> f Function(){}

Every function is a object in javascript.
As function as objects it would a constructor which would create them. This constructor goes by name Function(){}
```javascript
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log("draw");
  }
}

const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function(){
  console.log("draw");
}
`);

const circle = new Circle1(1);

const another = new Circle(1);
```
Here we have declared a function circle and we have create a circle1 method using a Function constructor. The main difference here is that it create a object with anonymous function
- to check above code in 

https://youtu.be/PFmuCDHHpwk?t=27m58s