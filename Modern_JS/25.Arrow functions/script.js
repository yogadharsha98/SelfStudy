// function add(a, b) {
//   return a + b;
// }

//Arrow function syntax
const add = (a, b) => {
  return a + b;
};

//Implicit return
const subtract = (a, b) => a - b;

const double = (a) => a * 2;
// const double = a => a * 2;

//Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (n) {
//   console.log(n);
// });

//Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 2));
console.log(double(3));
console.log(createObj());
