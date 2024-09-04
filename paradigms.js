// compiled/interpreter
// managed languages/ non-managed language
// procedural / functional / oop

const arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let index = 0; index < arr.length; index++) {
   const num = arr[index];
   sum += num;
}

console.log(`The sum of ${arr} is ${sum}`);


let total = arr.reduce(function (prev, curr) {
   return prev + curr
}, 0)

console.log(`The sum of ${arr} is ${total}`);


class Adder {
   
   total(arr) {
      let total = arr.reduce(function (prev, curr) {
         return prev + curr
      }, 0)
      
      console.log(`The sum of ${arr} is ${total}`);
   }
}


const adder = new Adder()

adder.total([4, 5, 1, 10, 40])