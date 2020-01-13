const readlineSync = require('readline-sync');

const getNumber = order => {
  const number = readlineSync.question(`Write your ${order} number: `);
  return parseInt(number);
};

const getOperator = () => {
  const operator = readlineSync.question('Write your operator: ');
  return operator;
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      break;
  }
};

const writeResult = result => {
  console.log(`Result is: ${result}`);
};

const number1 = getNumber('first');
const operator = getOperator();
const number2 = getNumber('second');
const result = calculate(number1, number2, operator);
writeResult(result);
