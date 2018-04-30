# Objects

Methods to create objects
- Object Literal syntax 
`js
 const circle = {
 radius:1,
 location:{
  x:1,
  y:1
 },
 draw: function(){
  console.log("draw")
 }
}; //Object Literal syntax
// Has 3 members radius, Location, Draw.
// Properties are radius and location
// While draw is a property. 
`
 - if a object has one or more methods it is called object has behaviour. If a object has behaviour it is not advisable to use Object Literal Method
- Factory or Constructor Method
 - Factory
   `
   function createCirle(radius){
 return{
  radius,
  draw: function(){
   console.log('draw')
  }
 };
}
   `
   if key and value are same we can drop assignment as in above code.

   `function createCirle(radius){
 return{
  radius,
  draw: function(){
   console.log('draw')
  }
 };
}
const  circle = createCirle(1);
circle.draw();
` 


