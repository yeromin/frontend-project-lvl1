import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const greetingMessage = 'May I have your name?\n';
const userName = readlineSync.question(greetingMessage);

export default userName;
