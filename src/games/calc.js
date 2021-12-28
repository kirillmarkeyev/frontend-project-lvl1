import commonGameLogic from '../index.js';

import getRandomInRange from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown ${operator}!`);
  }
};

const roundGenerator = () => {
  const firstNumber = getRandomInRange(1, 20);
  const secondNumber = getRandomInRange(1, 9);
  const operator = operators[getRandomInRange(0, operators.length - 1)];
  const rightAnswer = calculate(firstNumber, secondNumber, operator);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, String(rightAnswer)];
};

const calcGame = () => {
  commonGameLogic(description, roundGenerator);
};

export default calcGame;
