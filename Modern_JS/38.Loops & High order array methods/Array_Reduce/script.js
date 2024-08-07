const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// using forloop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 140 },
  { id: 3, name: 'Product 3', price: 150 },
];

const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice);
