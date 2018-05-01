# adding/Removing properties
we can add and remove properties to any object in javascript.
As there are no class define, we dont need to update class, instead we can added properties directly.
 ```javascript
  function Circle(radius){
    this.radius = radius;
    this.draw=function(){
      console.log('draw');
    }
  }
  const circle = new Circle(10);
  circle.location= {x:1}
 ```
----
we can access properties several ways
- using .(dot) notation
  ```javascript
  circle.location= {x:1}
  ```
- then we can using [] bracket notation to access 
  ```javascript
  circle['location']={x:1}
  ```
  - this is useful in scenario for example when you want to dynamically access location.
    ```javascript
    const propertyName = 'location';
    circle[propertyName] = {x:1}
    ```
  - another use case is when property name is not valid identifier property name with spaces and dash. We cant use dot notation to access that, But we can use bracket notation.
  ----
  delete
  - delete is use to delete property from object.
  - There are several cases when you need to send object to client in such cases you use delete to delete the details and send the object.
    ```javascript
    delete circle['location']
    ```
  - here one can use dot notation or bracket notation