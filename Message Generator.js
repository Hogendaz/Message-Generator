// random message generator by Kammeron Hairston.;

//reads the Fortune Cookie Sayings.txt file and makes an array
const fs = require('fs');
const text = fs.readFileSync('./Fortune Cookie Sayings.txt').toString('utf-8');
let textByLine = text.split('\n');


//strips the messages to be just the messages
const messages = textByLine.map( val => val.replace(/\r$/, ''));


//generates a random list of lucky numbers
const luckyNumberGenerator = () => { // generates numbers for Lucky Numbers
    const luckyNumbers = [];

    while (luckyNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 69);

        luckyNumbers.push(randomNumber);        
    }

    return luckyNumbers;
}

//picks a random message from the list of messages
const messagePicker = (messages) => {
    const ranPicker = Math.floor(Math.random() * messages.length);

    return messages[ranPicker];
}


//generates a message that is formated for the user.
const messageGenerator = () => {
    const message = messagePicker(messages);
    const luckNumber = luckyNumberGenerator();
    console.log('Hello and welcome to Fortuntastic!');
    console.log(`Your Fortune is: ${message}`);
  
    console.log(`Your lucky numbers are ${luckNumber}`);
}

messageGenerator();