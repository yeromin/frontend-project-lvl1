import startGameEngine from '../modules/game-engine.js';
import generateRandomNumber from '../modules/random-generator.js';

const GAME_RULES_MESSAGE = 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.';
const LIMIT_RANDOM_NUMBER = 100;
const MINIMAL_RANDOM_NUMBER = 2;

const isPrime = (number) => {
  let flag = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  } return flag;
};

const convertAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

function generateGameData() {
  const curTask = generateRandomNumber(MINIMAL_RANDOM_NUMBER, LIMIT_RANDOM_NUMBER);
  const curSolution = convertAnswer(curTask);
  return [curTask, curSolution];
}

export default () => startGameEngine(GAME_RULES_MESSAGE, generateGameData);
