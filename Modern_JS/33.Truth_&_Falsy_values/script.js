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

//checking for empty array
const posts = [];

if (posts.length > 0) {
  console.log('List posts');
} else {
  console.log('No posts');
}

//checking for empty object
const user = {};

if (Object.keys(user).length > 0) {
  console.log('list user');
} else {
  console.log('no user');
}

//Loose equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
