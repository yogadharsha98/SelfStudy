// alert('Hi There');

// console.log(window.innerWidth);

const x = 100;

console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'In function');
}

run();

if (true) {
  console.log(x, 'in blog');
}

function add() {
  const y = 50;
  console.log(x + y);
}

add();
