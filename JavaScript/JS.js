// Arrays vi behöver

// Array för ord
const countries = ["FINLAND","NEDERLÄNDERNA","BELGIEN","BULGARIEN","SPANIEN","IRLAND","ITALIEN","ÖSTERRIKE","GREKLAND","KROATIEN","CYPERN","LETTLAND","LITAUEN","LUXENBURG","MALTA","PORTUGAL","POLEN","FRANKRIKE","RUMÄNIEN","SVERIGE","TYSKLAND","SLOVAKIEN","SLOVENIEN","DANMARK","TJECKIEN","UNGERN","ESTLAND"];

// Array för bokstäver
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];

// Array för gissade bokstäver
let guessedChars = [];

// Array för kvarstående bokstäver
let availableChars = [];

// Array för korrekt ord
let correctWord = "";

// Array för korrekta bokstäver
let correctChars = [];

// Array för antal försök/kroppsdelar 
let hangman = [];


//funktion för att slumpa fram ett ord från countries listan

function randomizeWord (listOfWords) {
    let randomWord = Math.floor(Math.random() * countries.length);
    correctWord = countries[randomWord];
    for (let i =0; i < correctWord.length; i++) {
        correctChars.push(correctWord.charAt(i))
        // console.log(correctWord.charAt(i));
    }
}
 randomizeWord()
 
//  splitta ordet till bokstäver och lägga i en Array



