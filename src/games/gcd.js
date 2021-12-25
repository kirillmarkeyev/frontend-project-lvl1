import {
  getRandomInRange, commonGameLogic,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const maxDivisor = a > b ? b : a;
  for (let divisor = maxDivisor; divisor > 1; divisor -= 1) {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
  } return 1;
};

const roundGenerator = () => {
  const firstNumber = getRandomInRange(1, 30);
  const secondNumber = getRandomInRange(1, 30);
  const rightAnswer = gcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, String(rightAnswer)];
};

export default () => {
  commonGameLogic(description, roundGenerator);
};
