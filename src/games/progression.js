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
    const arr = [];
    const arrLength = getRandomInRange(5, 10);
    const firstElement = getRandomInRange(0, 10);
    const progressionStep = getRandomInRange(2, 5);
    let currentElement = firstElement;
    for (let j = 0; j < arrLength; j += 1) {
      arr.push(currentElement);
      currentElement += progressionStep;
    }
    const missingPlace = getRandomInRange(0, arrLength - 1);
    const rightAnswer = arr[missingPlace];
    arr[missingPlace] = '..';
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
