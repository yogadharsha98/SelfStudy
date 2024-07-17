const x = 100;

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

if (true) {
  const a = 500;
  let b = 300;
  var c = 200;
}

console.log(c); // var is not block scope

function run() {
  var d = 100;
}

run();
// console.log(d); //var is function scope
