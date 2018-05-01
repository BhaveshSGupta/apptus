# Functions are Objects
Every function is a object. Every function has some predefined methods and arguments
Following are some argument.
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
- to check above code in console try to log both variables.

Now lets check some methods for functions:
- call
  ```javascript
    Circle.call({},1)
    //First we have empty object
    //which would reference to this in function
    //And we passs arguments as comma seperated arguments
    // here empty object works similar to new keyword which is used when we create object.
    // As we had scence earlier, when we create object without using new it creates a global object on window.
    //Circle.call(window,1)
    //first argument specifies target for this.
  ```

- apply
  ```javascript
  Circle.apply({},[1,2,3]}
  // as we had scene in call arguments are passed comma seprated.
  // here instead a array is passed.
  // it is usefull when you have a array 
  ```
