import readlineSync from 'readline-sync';

import {
  userWelcome, gameDescription, getRandomInRange, userCongratulate, userGreeting,
} from '../index.js';

export default () => {
  const description = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const rounds = 3;
  userWelcome();
  const userName = readlineSync.question('May I have your name? ');
  userGreeting(userName);
  gameDescription(description);
  for (let i = 0; i < rounds; i += 1) {
    let rightAnswer;
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);
    const operator = operators[getRandomInRange(0, operators.length - 1)];
    switch (operator) {
      case '+':
        rightAnswer = firstNumber + secondNumber;
        break;
      case '-':
        rightAnswer = firstNumber - secondNumber;
        break;
      case '*':
        rightAnswer = firstNumber * secondNumber;
        break;
      default:
        break;
    }
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const userAnswerStr = readlineSync.question('Your answer: ');
    const userAnswer = Number(userAnswerStr);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  } userCongratulate(userName);
};
