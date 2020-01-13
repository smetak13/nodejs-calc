const calculator = require('./classes/calculator');

(function init() {
  const number1 = calculator.getNumber('first');
  const operator = calculator.getOperator();
  const number2 = calculator.getNumber('second');
  const result = calculator.calculate(number1, number2, operator);
  return calculator.writeResult(result);
})();
