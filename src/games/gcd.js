import readlineSync from 'readline-sync';

import {
  userWelcome, gameDescription, rounds, getRandomInRange, userCongratulate, userGreeting,
} from '../index.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    if (b === 0) {
      return a;
    } return gcd(b, a % b);
  }
  if (b > a) {
    if (a === 0) {
      return b;
    } return gcd(a, b % a);
  }
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  userWelcome();
  const userName = readlineSync.question('May I have your name? ');
  userGreeting(userName);
  gameDescription(description);
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandomInRange(1, 30);
    const secondNumber = getRandomInRange(1, 30);
    const rightAnswer = gcd(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
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
