import readlineSync from 'readline-sync';

import {
  userWelcome, gameDescription, rounds, getRandomInRange, userCongratulate, userGreeting,
} from '../index.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  } const maxDivisor = a > b ? b : a;
  for (let divisor = maxDivisor; divisor > 1; divisor -= 1) {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
  } return 1;
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
