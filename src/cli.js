import readlineSync from 'readline-sync';
const question = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};
export default question;