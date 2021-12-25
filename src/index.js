import readlineSync from 'readline-sync';

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rounds = 3;

// Функции в качестве аргумента можно передавать в т.ч. и другую функцию
export const commonGameLogic = (description, roundGenerator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    /* Функция roundGenerator() возвращает массив, поэтому для присваивания значений
    переменным question и rightAnswer используем деструктуризацию */
    const [question, rightAnswer] = roundGenerator();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
