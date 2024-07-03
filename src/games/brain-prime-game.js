
import { questions } from "../index.js";

const isPrime = (number) => {
    if (number <= 1) {
        return 'no';
    }
    let pr = 0;
    for (let i = 2; i <= number; i += 1) {
        if (number % i === 0) {
            pr += 1;
        }
    }
    return pr > 2 ? 'no': 'yes';
};
const rule = 'Answer "Yes" if given number is prime. Otherwise answer "no".';

const getQandA = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isPrime(question);
    return [question.toString(), correctAnswer];
};

const primeGame = () => {
    questions(rule, getQandA);
};

export {primeGame};