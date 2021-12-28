import commonGameLogic from '../index.js';

import getRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  // Создание пустого массива
  const arr = [];
  // Генерация длины массива
  const arrLength = getRandomInRange(5, 10);
  // Генерация первого элемента прогрессии
  const firstElement = getRandomInRange(0, 10);
  // Генерация шага прогрессии
  const progressionStep = getRandomInRange(2, 5);
  // Добавление членов прогрессии в массив
  let currentElement = firstElement;
  for (let j = 0; j < arrLength; j += 1) {
    arr.push(currentElement);
    currentElement += progressionStep;
  }
  // Возвращаем прогрессию в виде строки
  return arr.join(' ');
};

const roundGenerator = () => {
  // Трансформация строки в массив
  const arrOfProgression = getProgression().split(' ');
  // Определение позиции пропущенного элемента в массиве
  const missingPlace = getRandomInRange(0, arrOfProgression.length - 1);
  // Запись значения пропущенного элемента в переменную
  const rightAnswer = arrOfProgression[missingPlace];
  // Замена числа на '..'
  arrOfProgression[missingPlace] = '..';
  // Трансформация массива в строку
  const question = arrOfProgression.join(' ');
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, String(rightAnswer)];
};

const gameProgression = () => {
  commonGameLogic(description, roundGenerator);
};

export default gameProgression;
