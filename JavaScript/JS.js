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

let wrongChars = [
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

let guessedWrongChars = [];

// Sträng för korrekt ord
let correctWord = '';

// Array för antal försök/kroppsdelar
let hangman = [
  'scaffold',
  'head',
  'body',
  'arms',
  'legs'
];

let wrongGuesses = 0;

let input = '';

// Tracka keypress hela tiden. Uppdatera senaste bokstav
document.addEventListener('keydown', (event) => {
    if (wrongGuesses < 5) {
        if (window.event) {
          input = event.key.toUpperCase();
          numOfGuesses++;
          console.log('Num of guesses ', numOfGuesses);
        }
      
        compareInput(input, correctChars);
        renderGuessedChars();
        checkGuessed();
        generateWrongGuessedChars();
        
        
        console.log('WRONG CHAR LIST: ', wrongChars);
        console.log('GUESSED CHAR LIST: ', guessedChars);
        console.log('GUESSED WRONG : ', guessedWrongChars);
        console.log('FELGISSNINGAR: ', wrongGuesses);
        generateHangman()
        checkIfItsGameOver()
      };

    })

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
    let isCorrect = false;
    // Testar varje GISSAD bokstav på ALLA plaster från CORRECT.
    for (let j = 0; j < guessedChars.length; j++) {
      if (guessedChars[j] === correctChars[i]) {
        updateCorrectChar(i);
        isCorrect = true;
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
    let allLi = document.querySelectorAll(".word li")
    allLi.forEach((li) =>{
        li.remove()
    })
  correctChars.forEach((char) => {
    let listItem = document.createElement('li');
    template.appendChild(listItem);
  });
}

// Ta bort alla CORRECT bokstäver från ALPHABET.
function generateWrongChars() {
  correctChars.forEach((bokstav) => {
    for (let i = 0; i < wrongChars.length; i++) {
      if (bokstav === wrongChars[i]) {
        wrongChars.splice(i, 1);
      }
    }
  });
}

function generateWrongGuessedChars() {
  // Kopiera värdet till guessedWrongChars
  guessedWrongChars = [];
  guessedChars.forEach((char) => {
    guessedWrongChars.push(char);
  });

  // Kollar efter matching mot CORRECT
  correctChars.forEach((char) => {
    for (let i = 0; i < guessedWrongChars.length; i++) {
      if (char === guessedWrongChars[i]) {
        guessedWrongChars.splice(i, 1);
      }
    }
  });

  // Felgissningar är total längden av bokstäver i WRONG GUESSED.
  wrongGuesses = guessedWrongChars.length;
}

generateWrongChars();
renderInitialCorrectTemplate();


// generera hangmans delar

function generateHangman() {
    for (let i = 0; i < wrongGuesses; i++) {
        document.querySelector('figure').classList.add(`${hangman[i]}`)
        console.log("antal kroppsdelar", i);
    }
}

// spelet är över vid vinst

// när alla rätt bokstäver är gissade

function buttonStartNewGame () {
    let button = document.createElement("button");
    button.addEventListener("click", ()=> {
        startAgain ()
        document.querySelector("button").remove()
    })
    button.innerText = "Start a new game";
    document.querySelector("main").appendChild(button)
}

function gameOver () {
    let text = document.createElement("h2");
    text.innerText = "Game over!";
    document.querySelector("main").insertAdjacentElement("afterbegin", text)
}

function checkIfItsGameOver () {
if (wrongGuesses >= 5) {
    buttonStartNewGame()
    gameOver()
}
}

function startAgain () {
    guessedChars = [];
    availableChars = [];
    correctChars = [];
    wrongGuesses = 0;
    document.querySelector("h2").remove()
    document.querySelector("figure").className = "";
    renderGuessedChars()
    randomizeWord()
    renderInitialCorrectTemplate()
}

