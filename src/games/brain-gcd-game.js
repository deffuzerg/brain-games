import { questions } from "../index.js";

const rule = 'Find the greatest common divisor of given numbers';

const getGCD = (n1, n2) => {
    let gcd = 1;
    for (let i = 2; i < Math.min(n1, n2); i += 1) {
        if (n1 % i === 0 & n2 % i === 0) {
            gcd = i;
        }
        else if (n1 === 0 || n2 === 0) {
            return n1 === 0 ? n2 : n1;
        }
    }
    return gcd;
};
const getQandA = () => {
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);
    const question = `${number1} ${number2}`;
    const correctAnswer = getGCD(number1, number2);
    return [question, (correctAnswer).toString()];
};

const brainGcd = () => {
    questions(rule, getQandA);
};
export {brainGcd};