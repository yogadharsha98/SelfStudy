// const email = 'test@test.com';

// if (email) {
//   console.log('You passed in an email');
// }

// console.log(Boolean(email));

//falsy values
// - false
// - 0
// - "" or '' (empty string)
// -null
// - undefined
// - NaN

//truthy values
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - [] (empty array)
// - {}  (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}
