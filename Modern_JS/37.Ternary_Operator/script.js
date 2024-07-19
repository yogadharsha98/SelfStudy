const age = 10;

// if(age>18){
//     console.log('You can vote')
// }else{
//     console.log('You cannot vote')
// }

// using ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(canVote2);

const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to dashboard'), '/dashboard')
//   : (alert('Access denied'), '/login');

// console.log(redirect);

// auth ? console.log('welcome to dashboard') : null;

auth && console.log('Welcome to dashboard');
