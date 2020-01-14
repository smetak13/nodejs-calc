const calculator = require('./classes/calculator');

(function init(isFirstTime = true) {
  if (isFirstTime) {
    calculator.writeWelcomeMessage();
  }

  const number1 = calculator.getNumber('first');
  const operator = calculator.getOperator();
  const number2 = calculator.getNumber('second');
  const result = calculator.calculate(number1, number2, operator);

  calculator.writeResult(result);
  if (calculator.shouldStartAgain()) return init(false);
})();
