// ||= assigns the right side value only if the left is a falsy value
let a = false;

// if (!a) {
//   a = 10;
// }
// a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value

let b = 20;

b = b && 20;
b &&= 30;
console.log(b);

// ??= assigns the right side value only if the left is a null or undefined

let c = undefined;

if (c === null || c === undefined) {
  c = 80;
}

// c = c ??= 40;

// c ??= 50;

console.log(c);
