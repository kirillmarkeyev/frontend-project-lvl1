export const userWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const userGreeting = (userName) => `Hello, ${userName}!`;

export const userCongratulate = (userName) => `Congratulations, ${userName}!`;

export const gameDescription = (description) => description;

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
