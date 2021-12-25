import {
  getRandomInRange, commonGameLogic,
} from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return result;
};

const roundGenerator = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomInRange(1, 20);
  const secondNumber = getRandomInRange(1, 9);
  const operator = operators[getRandomInRange(0, operators.length - 1)];
  const rightAnswer = calculate(firstNumber, secondNumber, operator);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, String(rightAnswer)];
};

export default () => {
  commonGameLogic(description, roundGenerator);
};
