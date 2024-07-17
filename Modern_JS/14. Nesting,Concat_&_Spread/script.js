let x;

const arr1 = ['p', 'q', 'r', 's'];
const arr2 = ['a', 'b', 'c', 'd'];

// arr1.push(arr2);

// x = arr1[3];

const array = [arr1, arr2];

x = array[1][0];

x = arr1.concat(arr2);

// Spread operator (...)

x = [...arr1, ...arr2];

// Flattern Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

//Statis method on Array object
x = Array.isArray(arr);
x = Array.from('hello');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

// console.log(x);

//Array Challenges
//1.
const num = [1, 2, 3, 4, 5];

num.push(6);
num.unshift(0);
num.reverse();

// console.log(num);

//2.

const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9, 10];

//Answer 1
//const array3 = array1.slice(0, 4).concat(array2);

//Answer 2
const array3 = [...array1, ...array2];
array3.splice(4, 1);

console.log(array3);
