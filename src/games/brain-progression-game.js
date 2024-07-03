import { questions } from "../index.js";
const rule = 'What number is missing in the progression';
const getQandA = () => {
const startNumber = Math.floor(Math.random() * 100);
let currentNumber = startNumber;
let progression = '';
for (let i = 0, j = 0; j < Math.floor(Math.random() * ((10 - 5))) + 5; i += progression.length) {
    if (j === 0) {
        progression = `${startNumber}`;
        j += 1;
    }
    else if (j > 0) {
        currentNumber = currentNumber + 2;
        progression = `${progression} ${currentNumber}`;
        j += 1;
    }
};
const sp = progression.split(' ');
sp[Math.floor(Math.random() * sp.length)] = '..';

const question = sp.join(' ');

let correctAnswer;

for (let i = 0; i < sp.length; i += 1) {
    if (sp[i] === '..') {
        if (sp[i - 1] !== undefined){
        correctAnswer = parseInt(sp[i - 1]) + 2;
        }
        correctAnswer = parseInt(sp[i + 1]) - 2;
    }
};
return [question, correctAnswer.toString()];
};
const progression = () => {
    questions(rule, getQandA);
};

export {progression};