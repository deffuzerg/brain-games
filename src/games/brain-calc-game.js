import { questions } from "../index.js";

const rule = 'What is the result of expression?';

const getQandA = () => {
    const arr = ['+', '-', '*'];
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomOperator = arr[Math.floor(Math.random() * arr.length)];
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let correctAnswer;
    switch (randomOperator) {
        case '+': correctAnswer = randomNumber1 + randomNumber2;
        break;
        case '-': correctAnswer = randomNumber1 - randomNumber2;
        break;
        case '*': correctAnswer = randomNumber1 * randomNumber2;
        break;
    };

    return [question, correctAnswer.toString()];
};

const brainCalc = () =>{
    questions(rule, getQandA);
};

export {brainCalc};