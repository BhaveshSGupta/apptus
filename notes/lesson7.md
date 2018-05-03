# Enumerating Properties
Enumerating Propeties mean for an object printing down all properties. There are several ways to do that 
for Example:
```javascript
function Circle(radius){
  this.radius = radius;
  this.draw=function(){
    console.log('draw');
  }
}

const circle = new Circle(10);
for (let key in circle){
  console.log(key)
}
```

here it would print the name of propeties and method. Suppose if we want to log value of the properties and value we can something as following which would print both properties and values.

```javascript
function Circle(radius){
  this.radius = radius;
  this.draw=function(){
    console.log('draw');
  }
}

const circle = new Circle(10);
 for (let key in circle){
   console.log(key,circle[key])
 }
```
Now here it would print down both properties and methods. So if we want only properties then we can do something else follows which would check the current literal is property or object and then it would log if it gets properties. So to check same we use something as type of which checks whether the thing you are iterating is fucntion or not.
```javascript
function Circle(radius){
  this.radius = radius;
  this.draw=function(){
    console.log('draw');
  }
}

const circle = new Circle(10);
for (let key in circle){
  if(typeof circle[key] !== 'function'){
     console.log(key,circle[key])
  }
}
```

Instead of using for loop there is another way to do above that is finding out all members as we did above using for loop instead we use a method called Object.keys(<object-name>); this would return an array of the members.

```javascript
function Circle(radius){
  this.radius = radius;
  this.draw=function(){
    console.log('draw');
  }
}

const circle = new Circle(10);
for (let key in circle){
  if(typeof circle[key] !== 'function'){
     console.log(key,circle[key])
  }
}
const keys = Object.keys(circle);
console.log(keys);
```
In above when we have name of all memeber as a array in keys variable we can iterate to it to find what value does it have.


Suppose if we want to find whether a object has a property or not we use in operator.
```javascript
function Circle(radius){
  this.radius = radius;
  this.draw=function(){
    console.log('draw');
  }
}

const circle = new Circle(10);
for (let key in circle){
  if(typeof circle[key] !== 'function'){
     console.log(key,circle[key])
  }
}
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
  console.log('Circle has radius')
```