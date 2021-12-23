import readlineSync from 'readline-sync';

import {
  userWelcome, gameDescription, rounds, getRandomInRange, userCongratulate, userGreeting,
} from '../index.js';

export default () => {
  const description = 'What number is missing in the progression?';
  userWelcome();
  const userName = readlineSync.question('May I have your name? ');
  userGreeting(userName);
  gameDescription(description);
  for (let i = 0; i < rounds; i += 1) {
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
    const progression = arr.join(' ');
    console.log(`Question: ${progression}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  } userCongratulate(userName);
};
