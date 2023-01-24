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
  renderGuessedChars();
  checkGuessed();
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
// Kollar så att användaren skriver en BOKSTAV
function compareInput(inputValue) {
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
    handleGuessedChars(inputValue, guessedChars);
  }
}

// Kollar om vi redan har använt bokstaven, annars läggs bokstaven till i GISSADE listan.
function handleGuessedChars(inputValue, listToCheck) {
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

// Hämtar varje GISSAD bokstav och jämför med CORRECT.
function checkGuessed() {
  // Loopar fram varje bokstav som finns i det rätta ordet
  for (let i = 0; i < correctChars.length; i++) {
    // Testar varje GISSAD bokstav på ALLA plaser från CORRECT.
    for (let j = 0; j < guessedChars.length; j++) {
      if (guessedChars[j] === correctChars[i]) {
        updateCorrectChar(i);
        // ÄNDRA INNERTEXT I EXISTERANDE LI ITEM
      }
    }
  }
}

// Skriv ut alla AVNÄNDA BOKSTÄVER
function renderGuessedChars() {
  let noMatch = document.querySelector('.nomatch');

  // Ta bort alla tidigare LI / Gissningar från UI
  let removeAll = document.querySelectorAll('.nomatch li');
  removeAll.forEach((item) => item.remove());

  // Lägg till alla senaste gissningarna till AVNÄNDA BOKSTÄVER
  guessedChars.forEach((bokstav) => {
    let guessedList = document.createElement('li');
    guessedList.innerText = bokstav;
    noMatch.appendChild(guessedList);
  });
}

// Lägger in rätt bokstav på rätt INDEX
function updateCorrectChar(index) {
  let allListElem = document.querySelectorAll('.word li');
  allListElem[index].innerHTML = correctChars[index];
}

// Skapar fram lika många LI element som bokstäver i CORRECT ord.
function renderInitialCorrectTemplate() {
  let template = document.querySelector('.word');

  correctChars.forEach((char) => {
    let listItem = document.createElement('li');
    template.appendChild(listItem);
  });
}

renderInitialCorrectTemplate();
