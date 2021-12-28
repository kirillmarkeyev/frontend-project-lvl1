import commonGameLogic from '../index.js';

import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundGenerator = () => {
  const question = getRandomInRange(1, 100);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, rightAnswer];
};

const evenGame = () => {
  commonGameLogic(description, roundGenerator);
};

export default evenGame;
