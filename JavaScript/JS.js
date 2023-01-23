// Arrays vi behöver

// Array för ord
var countries = ["FINLAND","NEDERLÄNDERNA","BELGIEN","BULGARIEN","SPANIEN","IRLAND","ITALIEN","ÖSTERRIKE","GREKLAND","KROATIEN","CYPERN","LETTLAND","LITAUEN","LUXENBURG","MALTA","PORTUGAL","POLEN","FRANKRIKE","RUMÄNIEN","SVERIGE","TYSKLAND","SLOVAKIEN","SLOVENIEN","DANMARK","TJECKIEN","UNGERN","ESTLAND"];

// Array för bokstäver
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];

// Array för gissade bokstäver
var guessedChars = [];

// Array för kvarstående bokstäver
var availableChars = [];

// Array för korrekt ord
var correctWord = [];

// Array för korrekta bokstäver
var correctChars = [];

// Array för antal försök/kroppsdelar 
var hangman = [];


//funktion för att slumpa fram ett ord från countries listan

function randomizeWord (listOfWords) {
    var randomWord = Math.floor(Math.random() * countries.length);
    console.log(countries[randomWord]);
}
 randomizeWord()