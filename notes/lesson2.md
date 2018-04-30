# Objects

Methods to create objects
- Object Literal syntax 
  ```javascript
  const circle = {
   radius:1,
   location:{
    x:1,
    y:1
    },
    draw: function(){
     console.log("draw")
    }
    };
     //Object Literal syntax
     // Has 3 members radius, Location, Draw.
     // Properties are radius and location
     // While draw is a property. 
     ```
  - if a object has one or more methods it is called object has behaviour. If a object has behaviour it is not advisable to use Object Literal Method
   - Factory or Constructor Method
 
 - Factory
   ```javascript
   function createCirle(radius){
    return{
     radius
     draw: function(){
   console.log('draw')
   }
   };
   }
   ```
    - if key and value are same we can drop assignment as in above code.
    - if we returns a object it is called a factory function     
   ```javascript
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
    ```
  - Constructor Syntax
    ```javascript
       // Factory Method
     function createCirle(radius) {
         return {
             radius,
             draw: function() {
                 console.log('draw')
             }
         };
     }
     const circle = createCirle(1);
     circle.draw();

     // Construction Function
     function Circle(radius) {
         this.radius = radius;
         this.draw = function() {
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
    ```
