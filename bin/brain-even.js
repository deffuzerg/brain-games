#!/usr/bin/env node
import readlineSync from 'readline-sync';
const questions = (n = 1, name) => {
    if (n <= 3) {
    const number = Math.round(Math.random() * 100);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number} `);

    if (answer !== isEven) {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}')`);
    }
    else if (answer === isEven) {
        console.log('Correct!');
        return questions(n + 1, name);
    }
};
return console.log(`Congratulations, ${name}`);
};

const isEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    questions(1, name);
};
isEven();