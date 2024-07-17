function cal(num1, num2, op) {
  let result;

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('Invalid operator');
  }
  console.log(result);
}
cal(5, 2, '+');
cal(5, 2, '-');
cal(5, 2, '/');
cal(5, 2, '*');
cal(5, 2, '&');
