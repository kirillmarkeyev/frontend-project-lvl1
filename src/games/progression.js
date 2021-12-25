import {
  getRandomInRange, commonGameLogic,
} from '../index.js';

const description = 'What number is missing in the progression?';

const roundGenerator = () => {
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
  // Определение позиции пропущенного элемента
  const missingPlace = getRandomInRange(0, arrLength - 1);
  // Запись значения пропущенного элемента в переменную
  const rightAnswer = arr[missingPlace];
  // Замена числа на '..'
  arr[missingPlace] = '..';
  // Трансформация массива в строку
  const question = arr.join(' ');
  // Используем массив, чтобы функция возвращала сразу два значения
  return [question, String(rightAnswer)];
};

export default () => {
  commonGameLogic(description, roundGenerator);
};
