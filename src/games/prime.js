import {
  getRandomInRange, commonGameLogic,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  } return true;
};

const roundGenerator = () => {
  const question = getRandomInRange(3, 50);
  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, rightAnswer];
};

export default () => {
  commonGameLogic(description, roundGenerator);
};
