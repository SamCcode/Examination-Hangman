// Arrays vi behöver

// Array för ord
const countries = [
  'FINLAND',
  'NEDERLÄNDERNA',
  'BELGIEN',
  'BULGARIEN',
  'SPANIEN',
  'IRLAND',
  'ITALIEN',
  'ÖSTERRIKE',
  'GREKLAND',
  'KROATIEN',
  'CYPERN',
  'LETTLAND',
  'LITAUEN',
  'LUXENBURG',
  'MALTA',
  'PORTUGAL',
  'POLEN',
  'FRANKRIKE',
  'RUMÄNIEN',
  'SVERIGE',
  'TYSKLAND',
  'SLOVAKIEN',
  'SLOVENIEN',
  'DANMARK',
  'TJECKIEN',
  'UNGERN',
  'ESTLAND',
];

// Array för bokstäver
let alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'Å',
  'Ä',
  'Ö',
];

let numOfGuesses = 0;

// Array för gissade bokstäver
let guessedChars = [];

// Array för kvarstående bokstäver
let availableChars = [];

// Array för korrekta bokstäver
let correctChars = [];

// Array för korrekt ord
let correctWord = '';

// Array för antal försök/kroppsdelar
let hangman = [];

let input = '';

// Tracka keypress hela tiden. Uppdatera senaste bokstav
document.addEventListener('keydown', (event) => {
  if (window.event) {
    input = event.key.toUpperCase();
    numOfGuesses++;
    console.log('Num of guesses ', numOfGuesses);
  }

  compareInput(input, correctChars);
  console.log(guessedChars);

  console.log(input);
});

//funktion för att slumpa fram ett ord från countries listan och splitta ordet till en array

function randomizeWord(listOfWords) {
  let index = Math.floor(Math.random() * countries.length);
  correctWord = countries[index];

  console.log(correctWord);
  for (let i = 0; i < correctWord.length; i++) {
    correctChars.push(correctWord.charAt(i));
    console.log(correctWord.charAt(i));
  }
  console.log(correctChars);
}

randomizeWord();

function compareInput(inputValue) {
  // Kolla först så de skriver en bokstav
  let hasMatched = false;
  for (let i = 0; i < alphabet.length; i++) {
    if (inputValue === alphabet[i]) {
      hasMatched = true;
      break;
    }
  }
  if (!hasMatched) {
    alert('Please enter a letter from A - Ö!');
  }

  if (hasMatched) {
    checkGuessedChars(inputValue, guessedChars);
  }
}

function checkGuessedChars(inputValue, listToCheck) {
  let match = false;
  for (let i = 0; i < listToCheck.length; i++) {
    if (inputValue === listToCheck[i]) {
      alert('Already used letter, try again!');
      match = true;
      break;
    }
  }

  if (match === false) {
    guessedChars.push(inputValue);
  }
}
