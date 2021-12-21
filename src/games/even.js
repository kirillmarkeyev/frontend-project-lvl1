import readlineSync from 'readline-sync';

const gameDescription = (description) => description;

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const rounds = 3;
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  gameDescription(description);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomInRange(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        return;
      }
    } if (randomNumber % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        return;
      }
    }
  } console.log(`Congratulations, ${userName}!`);
};
