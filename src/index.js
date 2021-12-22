export const userWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const userGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const userCongratulate = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const gameDescription = (description) => {
  console.log(description);
};

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const rounds = 3;
