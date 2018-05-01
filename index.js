let x = 10;
let y = x;
x = 20

let m = {value:10};
let n = m;
m.value = 20


let number = 10;
function increase(number){
  number++;
}

increase(number)
console.log(number)

let number1 = {value:10};
function increase(number){
  number.value++;
}

increase(number1)
console.log(number1)
 