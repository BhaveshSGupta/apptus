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