import readlineSync from 'readline-sync';
    const questions = (rule, answers) => {
    console.log('Welcome to the Brain-Games!');
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello ${name}`);
    console.log(rule);
    
    for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = answers();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`Your answer: `);
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        }
        else {
            return console.log(`'${userAnswer}' is wrong ;( Correct answer was '${correctAnswer}')`);
        }
    }
    return console.log(`Congratulation ${name}`);
};
export {questions};