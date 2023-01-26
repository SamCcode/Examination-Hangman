// Arrays vi behöver

// SELECT ALL - Same variable name
// Ctrl + Shift + L

// LIST OF SHORTCUTS VS CODE
// https://gist.github.com/cleary/d168e301429c0305c49d97907796c72d

// Array för ord

const countries = [
  {
    country: 'FINLAND',
    flag: 'BLUE AND WHITE',
    hint: 'SAUNA',
  },
  {
    country: 'NEDERLÄNDERNA',
    flag: 'RED, WHITE AND BLUE',
    hint: 'TULIPS',
  },
  {
    country: 'BELGIEN',
    flag: 'BLACK, YELLOW AND RED',
    hint: 'CHOCOLATE',
  },
  {
    country: 'BULGARIEN',
    flag: 'WHITE, GREEN AND RED',
    hint: 'BORDER TO ROMANIA',
  },
  {
    country: 'SPANIEN',
    flag: 'RED AND YELLOW',
    hint: 'TO SIESTA',
  },
  {
    country: 'IRLAND',
    flag: 'GREEN, WHITE AND ORANGE',
    hint: 'GUINNESS',
  },
  {
    country: 'ITALIEN',
    flag: 'GREEN, WHITE AND RED',
    hint: 'PIZZA',
  },
  {
    country: 'ÖSTERRIKE',
    flag: 'RED AND WHITE',
    hint: 'SKI',
  },
  {
    country: 'GREKLAND',
    flag: 'BLUE AND WHITE',
    hint: 'OLIVES',
  },
  {
    country: 'KROATIEN',
    flag: 'RED, WHITE AND BLUE',
    hint: 'STONY BEACHES',
  },
  {
    country: 'CYPERN',
    flag: 'WHITE AND ORANGE',
    hint: 'AFRODITE',
  },
  {
    country: 'LETTLAND',
    flag: 'RED AND WHITE',
    hint: 'A EASY COUNTRY',
  },
  {
    country: 'LITAUEN',
    flag: 'YELLOW, GREEN AND RED',
    hint: 'KNOWN AS THE PEARL OF THE BALTIC SEA',
  },
  {
    country: 'LUXENBURG',
    flag: 'RED, WHITE AND BLUE',
    hint: 'A TINY COUNTRY',
  },
  {
    country: 'MALTA',
    flag: 'RED AND WHITE',
    hint: 'THE FAMOUS CITY OF MDINA',
  },
  {
    country: 'PORTUGAL',
    flag: 'GREEN AND RED',
    hint: 'CRISTIANO RONALDO',
  },
  {
    country: 'POLEN',
    flag: 'RED AND WHITE',
    hint: 'GREAT WORKERS',
  },
  {
    country: 'FRANKRIKE',
    flag: 'BLUE, WHITE AND RED',
    hint: 'MOST TIMEZONES IN THE WORLD',
  },
  {
    country: 'RUMÄNIEN',
    flag: 'BLUE, YELLOW AND RED',
    hint: 'RIVER DONAU RUNS THRU THIS COUNTRY',
  },
  {
    country: 'SVERIGE',
    flag: 'BLUE AND YELLOW',
    hint: 'IKEA',
  },
  {
    country: 'TYSKLAND',
    flag: 'BLACK, RED AND YELLOW',
    hint: 'CURRYWURST',
  },
  {
    country: 'SLOVAKIEN',
    flag: 'WHITE, BLUE AND RED',
    hint: 'BECAME INDEPENDENT 1993',
  },
  {
    country: 'SLOVENIEN',
    flag: 'WHITE, BLUE AND RED',
    hint: 'LAKE BLED',
  },
  {
    country: 'DANMARK',
    flag: 'RED AND WHITE',
    hint: 'PÖLSE',
  },
  {
    country: 'TJECKIEN',
    flag: 'BLUE, WHITE AND RED',
    hint: 'BEER',
  },
  {
    country: 'UNGERN',
    flag: 'RED, WHITE AND GREEN',
    hint: 'GOULASH',
  },
  {
    country: 'ESTLAND',
    flag: 'BLUE, BLACK AND WHITE',
    hint: 'HOME OF 2000 ISLANDS',
  },
  {
    country: 'IRAK',
    flag: 'RED, WHITE AND BLACK',
    hint: 'MEANS TWO VEINS',
  },
  {
    country: 'IRAN',
    flag: 'GREEN, WHITE AND RED',
    hint: 'CARPETS',
  },
  {
    country: 'INDIEN',
    flag: 'ORANGE, WHITE AND GREEN',
    hint: 'CURRY',
  },
  {
    country: 'ISRAEL',
    flag: 'WHITE AND BLUE',
    hint: 'HOME OF JERUSALEM',
  },
  {
    country: 'KINA',
    flag: 'RED AND YELLOW',
    hint: 'RICE',
  },
  {
    country: 'LAOS',
    flag: 'RED, BLUE AND WHITE',
    hint: 'THE FORMER KINGDOM OF LAN XANG',
  },
  {
    country: 'NEPAL',
    flag: 'RED, BLUE AND WHITE',
    hint: 'GOT GREAT MOUNTAINS',
  },
  {
    country: 'NORDKOREA',
    flag: 'BLUE, WHITE AND RED',
    hint: 'KIM JONG-UN',
  },
  {
    country: 'QUATAR',
    flag: 'BURGUNDY AND WHITE',
    hint: 'LOVES TO SAUNA',
  },
  {
    country: 'OMAN',
    flag: 'RED, WHITE AND GREEN',
    hint: 'TO SHORT TO GET A HINT',
  },
  {
    country: 'JAPAN',
    flag: 'WHITE AND RED',
    hint: 'LOVES SUSHI',
  },
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

let expertList = [
  {
    country: 'JDIOWAMDWAODWAHI',
    flag: 'Still trying this?..',
    hint: 'Stop killing people',
  },
  {
    country: 'DLPWAMONDWIDWJIQDJW',
    flag: 'Still trying this?..',
    hint: 'Stop killing people',
  },
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
      easyList = countries.filter((obj) => obj.country.length <= 5);
      return easyList;

    case 'medium':
      hardnessLevel = 'medium';
      mediumList = countries.filter(
        (obj) => obj.country.length > 5 && obj.country.length <= 8
      );
      return mediumList;

    case 'hard':
      hardnessLevel = 'hard';
      hardList = countries.filter((obj) => obj.country.length > 8);
      return hardList;

    case 'expert':
      hardnessLevel = 'expert';
      // Krävs inget filter, denna baseras inte på Countries.
      return expertList;
  }
}

// Sträng för korrekt ord
let correctWord = '';

// Array för antal försök/kroppsdelar
let hangman = ['scaffold', 'head', 'body', 'arms', 'legs'];

let wrongGuesses = 0;
let wonPoints = 0;
let lostGame = 0;
let winPercent = 0;
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
      }

      if (hardnessLevel === 'expert') {
        compareInput(input, correctChars);
        checkGuessed();
        generateWrongGuessedChars();
        countRightChars();
        generateHangman();
        checkIfItsGameOver();
      } else {
        compareInput(input, correctChars);
        renderGuessedChars();
        checkGuessed();
        generateWrongGuessedChars();
        countRightChars();
        generateHangman();
        checkIfItsGameOver();
      }
    }
  }
});

let indexOfRandomizedWord;
//funktion för att slumpa fram ett ord från countries listan och splitta ordet till en array
function randomizeWord(list) {
  let index = Math.floor(Math.random() * list.length);
  correctWord = list[index].country;

  for (let i = 0; i < correctWord.length; i++) {
    correctChars.push(correctWord.charAt(i));
  }
  indexOfRandomizedWord = index; // För användning i andra funktioner
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
    for (let j = 0; j < correctChars.length; j++) {
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
  calcWinPercent();
  updateCounters();
  looseModule();
}

function gameWon() {
  gameOver = true;
  wonPoints++;
  attempt++;
  calcWinPercent();
  updateCounters();
  winModule();
}
let numOfHangmans = 1;
function checkIfHangmanIsDead() {
  if (wrongGuesses >= 5) {
    numOfHangmans++;
    insertAnotherHangman();
  }
}

function insertAnotherHangman() {}

function checkIfItsGameOver() {
  if (wrongGuesses >= 5) {
    gameIsOver();
  }
}

function startAgain() {
  guessedChars = [];
  availableChars = [];
  correctChars = [];
  wrongGuesses = 0;
  numOfClicks = 0;
  // document.querySelector('h2').remove();
  document.querySelector('figure').className = '';
  renderGuessedChars();
  randomizeWord(generateHardnessLevel(hardnessLevel));
  renderInitialCorrectTemplate();
  gameOver = false;
  resetHints();
  createHints();
}

let won = document.createElement('p');
won.className = 'won';
let lost = document.createElement('p');
lost.className = 'lost';
let played = document.createElement('p');
played.className = 'played';
let winRatio = document.createElement('p');
winRatio.className = 'winRatio';
let container = document.createElement('div');
container.className = 'score';
container.appendChild(won);
container.appendChild(lost);
container.appendChild(played);
container.appendChild(winRatio);
document.querySelector('main').appendChild(container);
won.innerHTML = `WINS: ${wonPoints}`;
lost.innerHTML = `LOST: ${lostGame}`;
played.innerHTML = `PLAYED: ${attempt}`;
winRatio.innerHTML = `WIN RATIO: ${winPercent}%`;

function updateCounters() {
  won.innerHTML = `WINS: ${wonPoints}`;
  lost.innerHTML = `LOST: ${lostGame}`;
  played.innerHTML = `PLAYED: ${attempt}`;
  winRatio.innerHTML = `WIN RATIO: ${winPercent}%`;
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

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    generateHardnessLevel('expert');
    removeModule();
    startAgain();
  });
  expertButton.innerText = 'EXPERT';

  // document.querySelector('main').insertAdjacentElement('afterbegin', text);
  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  buttonContainer.appendChild(expertButton);
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

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    generateHardnessLevel('expert');
    removeModule();
    startAgain();
  });
  expertButton.innerText = 'EXPERT';

  // document.querySelector('main').insertAdjacentElement('afterbegin', text);
  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  buttonContainer.appendChild(expertButton);
  document.querySelector('main').appendChild(module);
}

// function chooseInitiaHardnessLevel

function removeModule() {
  let module = document.querySelector('.module');
  module.remove();
  hasPopup = false;
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

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    generateHardnessLevel('expert');
    removeModule();
    startAgain();
  });
  expertButton.innerText = 'EXPERT';

  // document.querySelector('main').insertAdjacentElement('afterbegin', text);
  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(message);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  buttonContainer.appendChild(expertButton);
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
let hintButton = document.createElement('button');
let hintContainer = document.createElement('div');
hintContainer.className = 'hint-container';

document.querySelector('main').appendChild(hintButton);
document.querySelector('main').appendChild(hintContainer);
hintButton.innerText = 'Sacrifice a guess for a hint!';
let numOfClicks = 0;

hintButton.addEventListener('click', (event) => {
  numOfClicks++;
  if (numOfClicks <= 3) {
    handleHintClick(numOfClicks);
  }
});

function createHints() {
  // hint1.innerHTML = `Hint 1: ${numOfGuesses}`;
  // hint2.innerHTML = `Hint 2: ${numOfGuesses}`;
  // hint3.innerHTML = `Hint 3: ${numOfGuesses}`;
}

// DU KAN INTE HINTA PÅ SISTA FÖRSÖKET
function handleHintClick(numOfClicks) {
  wrongGuesses++;
  generateHangman();
  checkIfItsGameOver();

  let hint = document.createElement('p');
  hintContainer.insertAdjacentElement('afterbegin', hint);

  let obj; // Listan som vi vill targeta

  // FÅ FRAM RÄTT OBJEKT ATT TA DATA FRÅN
  if (hardnessLevel === 'easy') {
    obj = easyList[indexOfRandomizedWord];
  } else if (hardnessLevel === 'medium') {
    obj = mediumList[indexOfRandomizedWord];
  } else if (hardnessLevel === 'hard') {
    obj = hardList[indexOfRandomizedWord];
  } else {
    obj = expertList[indexOfRandomizedWord];
  }

  // let hintList = document.querySelectorAll('.hint-container p');

  // GENERERA P TAGG MED RÄTT HINT
  if (numOfClicks === 1) {
    hint.innerHTML = `THE WORD IS A COUNTRY`;
  } else if (numOfClicks === 2) {
    hint.innerHTML = `COLOR OF THE FLAG: ${
      Object.values(obj)[numOfClicks - 1]
    }`;
  } else {
    hint.innerHTML = `${Object.values(obj)[numOfClicks - 1]}`;
  }

  if (hardnessLevel === 'expert') {
    if (numOfClicks === 1) {
      hint.innerHTML = `We took you for an expert..`;
    } else if (numOfClicks === 2) {
      hint.innerHTML = `COLOR OF THE FLAG: ${
        Object.values(obj)[numOfClicks - 1]
      }`;
    } else {
      hint.innerHTML = `${Object.values(obj)[numOfClicks - 1]}`;
    }
  }
}

function resetHints() {
  let hints = document.querySelectorAll('.hint-container p');
  hints.forEach((item) => {
    item.remove();
  });
}

// Räknar ut win %
function calcWinPercent() {
  // Vi vill inte dela på 0.
  if (wonPoints > 0) {
    winPercent = Math.floor((wonPoints / attempt) * 100);
  }
}

// hintContainer.removeEventListener('click', (event) => {
//   wrongGuesses++;
//   generateHangman();
//   checkIfItsGameOver();
// });

// ERROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR
// När vi genererat en HINT, så räknas inte nästkommande felgissning.
// 3 hints = 3 försök som inte loggas.

// OVERKILSSSSSSSSS
// Expert mode
// Generate win ratio in % - winPercent = (LOST / WINS) * 100
// Visa antal försök kvar - Vid EXPERT skriv "Infinite, but more innocent people may suffer."

// EXPERT MODE
// Visar INTE used chars
// Efter en loss, generera ny hangman men behåll tidigare.
// Visa hur många personer man dödat tills man klarat ordet! POINT / POPUP
// När ordet är klart, game won.

// Funktioner:
// Start expert mode
//    - Tar bort used chars UI
//    - Genererar svåra ord från Expert listan

// IF sats där antal felgissningar inte avbryter eventlistenern
//
