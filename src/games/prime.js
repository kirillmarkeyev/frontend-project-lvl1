import readlineSync from 'readline-sync';

import {
  userWelcome, gameDescription, rounds, getRandomInRange, userCongratulate, userGreeting,
} from '../index.js';

const isPrime = (num) => {
  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  } return true;
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  userWelcome();
  const userName = readlineSync.question('May I have your name? ');
  userGreeting(userName);
  gameDescription(description);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomInRange(3, 50);
    const rightAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  } userCongratulate(userName);
};
