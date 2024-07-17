let x;

x = Math.sqrt(9);

x = Math.abs(-5);

x = Math.round(4.2);

x = Math.ceil(4.3);

x = Math.floor(4.9);

x = Math.pow(2, 3);

x = Math.min(4, 5, 7);

x = Math.max(4, 5, 6);

x = Math.random(); //(0 to 1)

x = Math.floor(Math.random() * 100 + 1); // (0 to 10)

// console.log(x);

let p;

p = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sum = p + y;
dif = p - y;
product = p * y;
quotient = p / y;
reminder = p % y;

console.log(`${p} + ${y} = ${sum}`);
console.log(`${p} - ${y} = ${dif}`);
console.log(`${p} * ${y} = ${product}`);
console.log(`${p} / ${y} = ${quotient}`);
console.log(`${p} % ${y} = ${reminder}`);
