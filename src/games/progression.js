import commonGameLogic from '../index.js';

import getRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

// Чистая функция: детерминированная && не обладает побочными эффектами
const getProgression = (length, first, step) => {
  const progression = [];
  let current = first;
  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current += step;
  }
  return progression;
};

const roundGenerator = () => {
  const progressionLength = getRandomInRange(5, 10); // длина массива
  const firstElement = getRandomInRange(0, 10); // первый член прогрессии
  const progressionStep = getRandomInRange(2, 5); // шаг прогрессии
  const hiddenPlace = getRandomInRange(0, progressionLength - 1); // положение пропущенного элемента
  const arrOfProgression = getProgression(progressionLength, firstElement, progressionStep);
  const rightAnswer = arrOfProgression[hiddenPlace];
  arrOfProgression[hiddenPlace] = '..'; // замена пропущенного элемента на ..
  const question = arrOfProgression.join(' '); // трансформация массива в строку
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, String(rightAnswer)];
};

const gameProgression = () => {
  commonGameLogic(description, roundGenerator);
};

export default gameProgression;
