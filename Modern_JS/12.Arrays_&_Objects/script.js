let x;
//Array Literal
const numbers = [12, 45, 33, 55];
const mixed = [12, 'hello', true, null];

//Array Constructor
const fruits = new Array('apple', 'orange', 'grap');

x = numbers[0] + numbers[3];

x = `fav fruit is ${fruits[1]}`;

x = numbers.length;

fruits[2] = 'pear';

// fruits.length = 2;

fruits[3] = 'banana';

fruits[fruits.length] = 'blueberry';

x = fruits;

console.log(x);
