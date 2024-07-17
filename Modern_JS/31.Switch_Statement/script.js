const d = new Date(2022, 2, 10, 18, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not jan, feb or march');
}

switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;
  case hour < 18:
    console.log('Good afternoon');
    break;
  default:
    console.log('Good night');
}
