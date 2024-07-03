import { questions } from "../index.js";

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const getQandA = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
};
const isEven = () => {
    questions(rule, getQandA);
};

export {isEven};