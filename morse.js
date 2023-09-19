const morseCodeDictionary = (value) => {
    return {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
    }[value]
}

const morseCode = (word) => {
    let arrayWord = word.split(" ");
    console.log(arrayWord)
    let decodedWord = [];
    for ( let i = 0; i < arrayWord.length; i++){
        decodedWord.push(morseCodeDictionary(arrayWord[i]))
    }
    
    return decodedWord.join("");
}

console.log(morseCode('.... . -.--   .--- ..- -.. .'));