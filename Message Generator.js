// random message generator by Kammeron Hairston.

const luckyNumberGenerator = () => { // generates numbers for Lucky Numbers
    const luckyNumbers = [];

    while (luckyNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 69);

        luckyNumbers.push(randomNumber);        
    }

    return luckyNumbers;
}