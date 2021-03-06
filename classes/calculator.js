const readlineSync = require('readline-sync');

class Calculator {
  getNumber(order) {
    const number = parseInt(
      readlineSync.question(`Write your ${order} number: `)
    );
    if (isNaN(number)) {
      console.error(
        '\x1b[31m',
        'This is not a number! Please write a real number',
        '\x1b[0m'
      );
      return this.getNumber(order);
    }
    return parseInt(number);
  }

  getOperator() {
    const validOperators = ['+', '-', '*', '/'];
    const operator = readlineSync.question('Write your operator: ');
    if (!validOperators.includes(operator)) {
      console.error(
        '\x1b[31m',
        'Not a valid operator, please use some of the following: +, -, *, /',
        '\x1b[0m'
      );
      return this.getOperator();
    }
    return operator;
  }

  calculate(number1, number2, operator) {
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
  }

  writeWelcomeMessage() {
    console.log(
      '\x1b[47m',
      '\x1b[30m',
      `||____WELCOME TO SIMON'S CALCULATOR____||`,
      '\x1b[0m'
    );
  }

  writeResult(result) {
    console.log('\x1b[42m', '\x1b[30m', `Result is: ${result}`, '\x1b[0m');
  }

  shouldStartAgain() {
    const input = readlineSync.question(`Start again? (yes / no): `);
    if (input === 'yes') return true;
    else if (input === 'no') return false;
    else {
      console.error('\x1b[31m', `Please write either 'yes' or 'no'`, '\x1b[0m');
      return this.shouldStartAgain();
    }
  }
}

const calculator = new Calculator();

module.exports = calculator;
