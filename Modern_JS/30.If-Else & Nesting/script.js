const d = new Date(10, 30, 2022, 9, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log('Good morning');
} else if (hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('good night');
}

//Nested If
if (hour < 12) {
  console.log('Good morning');
  if (hour === 6) {
    console.log('Wake up');
  }
} else if (hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('good night');
  if (hour >= 20) {
    console.log('zzzzzzzzz');
  }
}
if (hour >= 7 && hour < 15) {
  console.log('work time');
}
