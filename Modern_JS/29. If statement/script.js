if (true) {
  console.log('true');
}

// if (false) {
//   console.log('false');
// }

const x = 15;
const y = 10;

if (x > y) {
  console.log(`${x} > ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`z is ${z}`);
}

//Shorthand if
if (x > y) console.log(`${x} > ${y}`), console.log('This is true');
else console.log('this is false');
