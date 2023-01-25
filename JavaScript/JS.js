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

let hardnessLevel = 'medium';

let guessedWrongChars = [];

let easyList = [];
let mediumList = [];
let hardList = [];

function generateHardnessLevel(inputValue) {
  switch (inputValue) {
    case 'easy':
      hardnessLevel = 'easy';
      easyList = countries.filter((word) => word.length <= 5);
      return easyList;

    case 'medium':
      hardnessLevel = 'medium';
      mediumList = countries.filter(
        (word) => word.length > 5 && word.length <= 8
      );
      return mediumList;

    case 'hard':
      hardnessLevel = 'hard';
      hardList = countries.filter((word) => word.length > 8);
      return hardList;
  }
}

// Sträng för korrekt ord
let correctWord = '';

// Array för antal försök/kroppsdelar
let hangman = ['scaffold', 'head', 'body', 'arms', 'legs'];

let wrongGuesses = 0;
let wonPoints = 0;
let lostGame = 0;
let attempt = 0;
let input = '';
let gameOver = false;
let hasPopup = true;
// Tracka keypress hela tiden. Uppdatera senaste bokstav

document.addEventListener('keydown', (event) => {
  if (hasPopup === false) {
    if (gameOver === false) {
      if (window.event) {
        input = event.key.toUpperCase();
        numOfGuesses++;
        //   console.log('Num of guesses ', numOfGuesses);
      }

      compareInput(input, correctChars);
      renderGuessedChars();
      checkGuessed();
      generateWrongGuessedChars();
      countRightChars();

      // console.log('WRONG CHAR LIST: ', wrongChars);
      // console.log('GUESSED CHAR LIST: ', guessedChars);
      // console.log('GUESSED WRONG : ', guessedWrongChars);
      // console.log('FELGISSNINGAR: ', wrongGuesses);
      // console.log("rätt bokstäver; ", guessedCorrectChars);
      // console.log("NumOFCORRECT", numOfCorrect);
      console.log('lost', lostGame);
      console.log('won', wonPoints);
      console.log('tried', attempt);
      generateHangman();
      checkIfItsGameOver();
    }
  }
});

//funktion för att slumpa fram ett ord från countries listan och splitta ordet till en array
function randomizeWord(list) {
  let index = Math.floor(Math.random() * list.length);
  correctWord = list[index];

  console.log(correctWord);
  for (let i = 0; i < correctWord.length; i++) {
    correctChars.push(correctWord.charAt(i));
    console.log(correctWord.charAt(i));
  }
  console.log(correctChars);
}

randomizeWord(generateHardnessLevel(hardnessLevel)); // Startar på medium
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
    errorPopupModule('Please enter a letter from A - Ö!');
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
      errorPopupModule('Already used letter, try again!');
      match = true;
      break;
    }
  }

  if (match === false) {
    guessedChars.push(inputValue);
  }
}

let guessedCorrectChars = [];
// Hämtar varje GISSAD bokstav och jämför med CORRECT.
function checkGuessed() {
  // Loopar fram varje bokstav som finns i det rätta ordet

  for (let i = 0; i < correctChars.length; i++) {
    // Testar varje GISSAD bokstav på ALLA plaster från CORRECT.
    for (let j = 0; j < guessedChars.length; j++) {
      if (correctChars[i] === guessedChars[j]) {
        updateCorrectChar(i);
      }
    }
  }
}
let numOfCorrect = 0;

function countRightChars() {
  numOfCorrect = 0;
  for (let i = 0; i < guessedChars.length; i++) {
    console.log('correct chars:', guessedChars[i]);
    for (let j = 0; j < correctChars.length; j++) {
      console.log('correct guessed', correctChars[j]);
      if (correctChars[j] === guessedChars[i]) {
        numOfCorrect++;
      }
    }
  }
  if (numOfCorrect === correctChars.length) {
    gameWon();
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
  let allLi = document.querySelectorAll('.word li');
  allLi.forEach((li) => {
    li.remove();
  });
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
    document.querySelector('figure').classList.add(`${hangman[i]}`);
    console.log('antal kroppsdelar', i);
  }
}

// spelet är över vid vinst

// när alla rätt bokstäver är gissade

// function buttonStartNewGame() {
//   let button = document.createElement('button');
//   button.addEventListener('click', () => {
//     startAgain();
//     document.querySelector('button').remove();
//   });
//   button.innerText = 'Start a new game';
//   document.querySelector('main').appendChild(button);
// }

function gameIsOver() {
  gameOver = true;
  lostGame++;
  attempt++;
  uppdateCounters();
  looseModule();
}

function gameWon() {
  gameOver = true;
  wonPoints++;
  attempt++;
  uppdateCounters();
  winModule();
}

function checkIfItsGameOver() {
  if (wrongGuesses >= 5) {
    // buttonStartNewGame();
    gameIsOver();
  }
}

function startAgain() {
  guessedChars = [];
  availableChars = [];
  correctChars = [];
  wrongGuesses = 0;
  // document.querySelector('h2').remove();
  document.querySelector('figure').className = '';
  renderGuessedChars();
  randomizeWord(generateHardnessLevel(hardnessLevel));
  renderInitialCorrectTemplate();
  gameOver = false;
  console.log('Efter START AGAIN', hasPopup);
}

let won = document.createElement("p");
won.className = 'won'
let lost = document.createElement("p");
lost.className = "lost"
let played = document.createElement("p");
played.className = "played"
let container = document.createElement('div')
container.className = "score"
container.appendChild (won)
container.appendChild (lost)
container.appendChild (played)
document.querySelector('main').appendChild(container);
won.innerHTML = `WINS: ${wonPoints}`;
lost.innerHTML = `LOST: ${lostGame}`;
played.innerHTML = `PLAYED: ${attempt}`;

function uppdateCounters() {
  won.innerHTML = `WINS: ${wonPoints}`;
  lost.innerHTML = `LOST: ${lostGame}`;
  played.innerHTML = `PLAYED: ${attempt}`;
}

// Popup med meddelande om Vinst + Knapp som startar nytt resettat spel
function winModule() {
  let module = document.createElement('div');
  module.className = 'module';

  let card = document.createElement('div');
  card.className = 'card';

  let text = document.createElement('h2');
  text.innerHTML = 'YOU WON! <span>To start again, choose difficulty!</span>';

  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  let easyButton = document.createElement('button');
  easyButton.addEventListener('click', () => {
    generateHardnessLevel('easy');
    removeModule();
    startAgain();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateHardnessLevel('medium');
    removeModule();
    startAgain();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateHardnessLevel('hard');
    removeModule();
    startAgain();
  });
  hardButton.innerText = 'HARD';
  // document.querySelector('main').insertAdjacentElement('afterbegin', text);
  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  document.querySelector('main').appendChild(module);
}

// Popup med meddelande om Förlust + Knapp som startar nytt resettat spel
function looseModule() {
  let module = document.createElement('div');
  module.className = 'module';

  let card = document.createElement('div');
  card.className = 'card';

  let text = document.createElement('h2');
  text.innerHTML = `Game over! <span>Correct word was: ${correctWord}</span><br><span>To start again, choose difficulty!</span>`;

  let message = document.createElement('h2');
  message.innerHTML = `Game over! <span>Ordet vi sökte var: ${correctWord}</span>`;

  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  let easyButton = document.createElement('button');
  easyButton.addEventListener('click', () => {
    generateHardnessLevel('easy');
    removeModule();
    startAgain();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateHardnessLevel('medium');
    removeModule();
    startAgain();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateHardnessLevel('hard');
    removeModule();
    startAgain();
  });
  hardButton.innerText = 'HARD';

  // document.querySelector('main').insertAdjacentElement('afterbegin', text);
  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  document.querySelector('main').appendChild(module);
}

// function chooseInitiaHardnessLevel

function removeModule() {
  let module = document.querySelector('.module');
  module.remove();
  console.log('Före remove', hasPopup);
  hasPopup = false;
  console.log('Efter remove', hasPopup);
}

function startingPopup() {
  let module = document.createElement('div');
  module.className = 'module';

  let card = document.createElement('div');
  card.className = 'card';

  let text = document.createElement('h2');
  text.innerHTML = `Welcome! <span>To start a game, choose difficulty!</span>`;

  let message = document.createElement('p');
  message.className = 'diff-text';
  message.innerHTML = `Easy: 1-5 letters <br> Medium: 6-8 letters<br> Hard: 9+ letters`;

  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  let easyButton = document.createElement('button');
  easyButton.addEventListener('click', () => {
    generateHardnessLevel('easy');
    removeModule();
    startAgain();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateHardnessLevel('medium');
    removeModule();
    startAgain();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateHardnessLevel('hard');
    removeModule();
    startAgain();
  });
  hardButton.innerText = 'HARD';

  // document.querySelector('main').insertAdjacentElement('afterbegin', text);
  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(message);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  document.querySelector('main').appendChild(module);
}

function resultModule(result, correctWord) {}

function errorPopupModule(message) {
  hasPopup = true;

  let module = document.createElement('div');
  module.className = 'module';

  let card = document.createElement('div');
  card.className = 'card';

  let text = document.createElement('h2');
  text.innerHTML = `${message}`;

  let button = document.createElement('button');
  button.innerHTML = 'Close';
  button.addEventListener('click', () => {
    removeModule();
  });

  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(button);
  document.querySelector('main').appendChild(module);
}

startingPopup();
