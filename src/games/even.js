import readlineSync from 'readline-sync';

import {
  userWelcome, gameDescription, rounds, getRandomInRange, userCongratulate, userGreeting,
} from '../index.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  userWelcome();
  const userName = readlineSync.question('May I have your name? ');
  userGreeting(userName);
  gameDescription(description);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomInRange(1, 100);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
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
