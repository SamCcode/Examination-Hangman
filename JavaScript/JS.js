// Arrays vi behöver

// SELECT ALL - Same variable name
// Ctrl + Shift + L

// Sök sen matcha alla
// Ctrl + F  - sök
// Alt + Enter  - Markerar alla träffar på sökordet

// LIST OF SHORTCUTS VS CODE
// https://gist.github.com/cleary/d168e301429c0305c49d97907796c72d

// VARIABLER
// FUNKTIONNAMN
// KOMMENTERA FUNKTIONER
// LÄGG UT FUNKTIONER I BLOCK
// SAMLA ALLA FUNCTION CALLS PÅ BOTTEN.
// Mer text 
// Array för ord

const countries = [
  {
    word: 'FINLAND',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE AND WHITE',
    hint3: 'SAUNA',
  },
  {
    word: 'NEDERLÄNDERNA',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, WHITE AND BLUE',
    hint3: 'TULIPS',
  },
  {
    word: 'BELGIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLACK, YELLOW AND RED',
    hint3: 'CHOCOLATE',
  },
  {
    word: 'BULGARIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE WHITE, GREEN AND RED',
    hint3: 'BORDER TO ROMANIA',
  },
  {
    word: 'SPANIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND YELLOW',
    hint3: 'TO SIESTA',
  },
  {
    word: 'IRLAND',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE GREEN, WHITE AND ORANGE',
    hint3: 'GUINNESS',
  },
  {
    word: 'ITALIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE GREEN, WHITE AND RED',
    hint3: 'PIZZA',
  },
  {
    word: 'ÖSTERRIKE',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND WHITE',
    hint3: 'SKI',
  },
  {
    word: 'GREKLAND',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE AND WHITE',
    hint3: 'OLIVES',
  },
  {
    word: 'KROATIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, WHITE AND BLUE',
    hint3: 'STONY BEACHES',
  },
  {
    word: 'CYPERN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE WHITE AND ORANGE',
    hint3: 'AFRODITE',
  },
  {
    word: 'LETTLAND',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND WHITE',
    hint3: 'A EASY COUNTRY',
  },
  {
    word: 'LITAUEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE YELLOW, GREEN AND RED',
    hint3: 'KNOWN AS THE PEARL OF THE BALTIC SEA',
  },
  {
    word: 'LUXENBURG',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, WHITE AND BLUE',
    hint3: 'A TINY COUNTRY',
  },
  {
    word: 'MALTA',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND WHITE',
    hint3: 'THE FAMOUS CITY OF MDINA',
  },
  {
    word: 'PORTUGAL',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE GREEN AND RED',
    hint3: 'CRISTIANO RONALDO',
  },
  {
    word: 'POLEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND WHITE',
    hint3: 'GREAT WORKERS',
  },
  {
    word: 'FRANKRIKE',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE, WHITE AND RED',
    hint3: 'MOST TIMEZONES IN THE WORLD',
  },
  {
    word: 'RUMÄNIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE, YELLOW AND RED',
    hint3: 'RIVER DONAU RUNS THRU THIS COUNTRY',
  },
  {
    word: 'SVERIGE',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE AND YELLOW',
    hint3: 'IKEA',
  },
  {
    word: 'TYSKLAND',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLACK, RED AND YELLOW',
    hint3: 'CURRYWURST',
  },
  {
    word: 'SLOVAKIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE WHITE, BLUE AND RED',
    hint3: 'BECAME INDEPENDENT 1993',
  },
  {
    word: 'SLOVENIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE WHITE, BLUE AND RED',
    hint3: 'LAKE BLED',
  },
  {
    word: 'DANMARK',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND WHITE',
    hint3: 'PÖLSE',
  },
  {
    word: 'TJECKIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE, WHITE AND RED',
    hint3: 'BEER',
  },
  {
    word: 'UNGERN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, WHITE AND GREEN',
    hint3: 'GOULASH',
  },
  {
    word: 'ESTLAND',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE, BLACK AND WHITE',
    hint3: 'HOME OF 2000 ISLANDS',
  },
  {
    word: 'IRAK',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, WHITE AND BLACK',
    hint3: 'MEANS TWO VEINS',
  },
  {
    word: 'IRAN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE GREEN, WHITE AND RED',
    hint3: 'CARPETS',
  },
  {
    word: 'INDIEN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE ORANGE, WHITE AND GREEN',
    hint3: 'CURRY',
  },
  {
    word: 'ISRAEL',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE WHITE AND BLUE',
    hint3: 'HOME OF JERUSALEM',
  },
  {
    word: 'KINA',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED AND YELLOW',
    hint3: 'RICE',
  },
  {
    word: 'LAOS',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, BLUE AND WHITE',
    hint3: 'THE FORMER KINGDOM OF LAN XANG',
  },
  {
    word: 'NEPAL',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, BLUE AND WHITE',
    hint3: 'GOT GREAT MOUNTAINS',
  },
  {
    word: 'NORDKOREA',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BLUE, WHITE AND RED',
    hint3: 'KIM JONG-UN',
  },
  {
    word: 'QUATAR',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE BURGUNDY AND WHITE',
    hint3: 'LOVES TO SAUNA',
  },
  {
    word: 'OMAN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE RED, WHITE AND GREEN',
    hint3: 'TO SHORT TO GET A HINT',
  },
  {
    word: 'JAPAN',
    hint1: 'COUNTRY',
    hint2: 'FLAG COLORS ARE WHITE AND RED',
    hint3: 'LOVES SUSHI',
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

let difficulty = 'medium';

let easyWordsList = []; 
let mediumWordsList = [];
let hardWordsList = [];
let expertWordsList = [
  {
    word: 'aoisfhnweg',
    hint1: 'this is hard',
    hint2: 'Still trying this?..',
    hint3: 'Stop killing people',
  },
  {
    word: 'awfouohbefn',
    hint1: 'this is hard',
    hint2: 'Still trying this?..',
    hint3: 'Stop killing people',
  },
];

let input = '';

// Array för använda bokstäver
let usedCharsList = [];

// Array för kvarstående bokstäver
let availableChars = []; //Potentiellt onödig

// Sträng för korrekt ord
let correctWord = '';

// Array för korrekta bokstäver
let correctCharsList = [];

let usedWrongCharsList = [];

let numOfCorrectChars = 0;

// Array för antal försök/kroppsdelar
let hangmanParts = ['scaffold', 'head', 'body', 'arms', 'legs'];

let indexOfRandomizedWord;
let numOfGuesses = 0;
let wrongGuesses = 0;
let numOfWins = 0;
let numOfLosses = 0;
let winRate = 0;
let numOfGamesPlayed = 0;
let numOfHintClicks = 0;
let numOfHintsUsed = 0;
let numOfHangmans = 1;
let gameOver = false;
let hasPopup = true;

// Choose difficulty
function generateDifficulty(inputValue) {
  switch (inputValue) {
    case 'easy':
      difficulty = 'easy';
      easyWordsList = countries.filter((obj) => obj.word.length <= 5);
      return easyWordsList;

    case 'medium':
      difficulty = 'medium';
      mediumWordsList = countries.filter(
        (obj) => obj.word.length > 5 && obj.word.length <= 8
      );
      return mediumWordsList;

    case 'hard':
      difficulty = 'hard';
      hardWordsList = countries.filter((obj) => obj.word.length > 8);
      return hardWordsList;

    case 'expert':
      difficulty = 'expert';
      // Krävs inget filter, denna baseras inte på Countries.
      return expertWordsList;
  }
}

//funktion för att slumpa fram ett ord från countries listan och splitta ordet till en array
function randomizeWord(list) {
  let index = Math.floor(Math.random() * list.length);
  correctWord = list[index].word.toUpperCase();

  for (let i = 0; i < correctWord.length; i++) {
    correctCharsList.push(correctWord.charAt(i));
  }
  indexOfRandomizedWord = index; // För användning i andra funktioner
}

// Kollar så att användaren skriver en BOKSTAV
function checkIfInputIsAlphaChar(inputValue) {
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
    checkIfUsedChar(inputValue, usedCharsList);
  }
}

// Kollar om vi redan har använt bokstaven, annars läggs bokstaven till i GISSADE listan.
function checkIfUsedChar(inputValue, listToCheck) {
  let match = false;
  for (let i = 0; i < listToCheck.length; i++) {
    if (inputValue === listToCheck[i]) {
      errorPopupModule('Already used letter, try again!');
      match = true;
      break;
    }
  }

  if (match === false) {
    usedCharsList.push(inputValue);
  }
}

// Hämtar varje GISSAD bokstav och jämför med CORRECT.
function compareUsedAndCorrect() {
  // Loopar fram varje bokstav som finns i det rätta ordet

  for (let i = 0; i < correctCharsList.length; i++) {
    // Testar varje GISSAD bokstav på ALLA plaster från CORRECT.
    for (let j = 0; j < usedCharsList.length; j++) {
      if (correctCharsList[i] === usedCharsList[j]) {
        updateCorrectChar(i);
      }
    }
  }
}

// Räknar rätt bokstäver
function countCorrectChars() {
  numOfCorrectChars = 0;
  for (let i = 0; i < usedCharsList.length; i++) {
    for (let j = 0; j < correctCharsList.length; j++) {
      if (correctCharsList[j] === usedCharsList[i]) {
        numOfCorrectChars++;
      }
    }
  }
  if (numOfCorrectChars === correctCharsList.length) {
    gameWon();
  }
}

// Skriv ut alla AVNÄNDA BOKSTÄVER
function renderUsedChars() {
  let noMatch = document.querySelector('.nomatch');

  // Ta bort alla tidigare LI / Gissningar från UI
  let removeAll = document.querySelectorAll('.nomatch li');
  removeAll.forEach((item) => item.remove());

  // Lägg till alla senaste gissningarna till AVNÄNDA BOKSTÄVER
  usedCharsList.forEach((bokstav) => {
    let guessedList = document.createElement('li');
    guessedList.innerText = bokstav;
    noMatch.appendChild(guessedList);
  });
}

// Lägger in rätt bokstav på rätt INDEX
function updateCorrectChar(index) {
  let allListElem = document.querySelectorAll('.word li');
  allListElem[index].innerHTML = correctCharsList[index];
}

// Skapar fram lika många LI element som bokstäver i CORRECT ord.
function renderInitialCorrectTemplate() {
  let template = document.querySelector('.word');
  let allLi = document.querySelectorAll('.word li');
  allLi.forEach((li) => {
    li.remove();
  });
  correctCharsList.forEach((char) => {
    let listItem = document.createElement('li');
    template.appendChild(listItem);
  });
}

// Ta bort alla CORRECT bokstäver från ALPHABET.
function generateIncorrectChars() {
  correctCharsList.forEach((bokstav) => {
    for (let i = 0; i < wrongChars.length; i++) {
      if (bokstav === wrongChars[i]) {
        wrongChars.splice(i, 1);
      }
    }
  });
}

function generateIncorrectUsedChars() {
  // Kopiera värdet till usedWrongCharsList
  usedWrongCharsList = [];
  usedCharsList.forEach((char) => {
    usedWrongCharsList.push(char);
  });

  // Kollar efter matching mot CORRECT
  correctCharsList.forEach((char) => {
    for (let i = 0; i < usedWrongCharsList.length; i++) {
      if (char === usedWrongCharsList[i]) {
        usedWrongCharsList.splice(i, 1);
      }
    }
  });

  // Felgissningar är total längden av bokstäver i WRONG GUESSED.
  wrongGuesses = numOfHintsUsed + usedWrongCharsList.length;
}

// function calcWrongGuesses (){
//   wrongGuesses = wrongGuesses + usedWrongCharsList.length;
// }

// generera hangmans delar

function generateHangman() {
  for (let i = 0; i < wrongGuesses; i++) {
    document.querySelector('figure').classList.add(`${hangmanParts[i]}`);
  }
  
}

// spelet är över vid vinst

// när alla rätt bokstäver är gissade

// function buttonStartNewGame() {
//   let button = document.createElement('button');
//   button.addEventListener('click', () => {
//     startAgain();
//     document.querySelector('button').remove();renderUsedChars
//   });
//   button.innerText = 'Start a new game';
//   document.querySelector('main').appendChild(button);
// }

function gameIsOver() {
  gameOver = true;
  numOfLosses++;
  numOfGamesPlayed++;
  calcWinRate();
  updateResultCounters();
  loosePopupModule();
}

function gameWon() {
  gameOver = true;
  numOfWins++;
  numOfGamesPlayed++;
  calcWinRate();
  updateResultCounters();
  winPopupModule();
}

function checkIfHangmanIsDead() {
  if (wrongGuesses >= 5) {
    numOfHangmans++;
    insertAnotherHangman();
  }
}

function insertAnotherHangman() {}

function checkIfGameOver() {
  if (wrongGuesses >= 5) {
    gameIsOver();
  }
}

function startAgain() {
  usedCharsList = [];
  availableChars = [];
  correctCharsList = [];
  usedWrongCharsList = [];
  numOfHintsUsed = 0;
  wrongGuesses = 0;
  numOfHintClicks = 0;
  // document.querySelector('h2').remove();
  document.querySelector('figure').className = '';
  renderUsedChars();
  randomizeWord(generateDifficulty(difficulty));
  renderInitialCorrectTemplate();
  gameOver = false;
  resetHints();
}

function updateResultCounters() {
  let won = document.querySelector('.won');
  won.innerHTML = `WINS: ${numOfWins}`;
  let lost = document.querySelector('.lost');
  lost.innerHTML = `LOST: ${numOfLosses}`;
  let played = document.querySelector('.played');
  played.innerHTML = `PLAYED: ${numOfGamesPlayed}`;
  let winRateEle = document.querySelector('.winRate')
  winRateEle.innerHTML = `WIN RATIO: ${winRate}%`;
}

// Popup med meddelande om Vinst + Knapp som startar nytt resettat spel
function winPopupModule() {
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
    generateDifficulty('easy');
    removePopup();
    startAgain();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateDifficulty('medium');
    removePopup();
    startAgain();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateDifficulty('hard');
    removePopup();
    startAgain();
  });
  hardButton.innerText = 'HARD';

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    generateDifficulty('expert');
    removePopup();
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
function loosePopupModule() {
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
    generateDifficulty('easy');
    removePopup();
    startAgain();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateDifficulty('medium');
    removePopup();
    startAgain();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateDifficulty('hard');
    removePopup();
    startAgain();
  });
  hardButton.innerText = 'HARD';

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    generateDifficulty('expert');
    removePopup();
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

function removePopup() {
  let module = document.querySelector('.module');
  module.remove();
  hasPopup = false;
}

function newgamePopup() {
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
    generateDifficulty('easy');
    removePopup();
    startAgain();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateDifficulty('medium');
    removePopup();
    startAgain();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateDifficulty('hard');
    removePopup();
    startAgain();
  });
  hardButton.innerText = 'HARD';

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    generateDifficulty('expert');
    removePopup();
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
    removePopup();
  });

  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(button);
  document.querySelector('main').appendChild(module);
}

// DU KAN INTE HINTA PÅ SISTA FÖRSÖKET
function handleHintClick(numOfHintClicks) {
  if (numOfHintClicks < 4) {
    numOfHintsUsed++;
    wrongGuesses = numOfHintsUsed + usedWrongCharsList.length;
    generateHangman();
    checkIfGameOver();
}

  let hint = document.createElement('p');
  let hintContainer = document.querySelector('.hint-container')
  hintContainer.insertAdjacentElement('afterbegin', hint);

  let obj; // Listan som vi vill targeta

  // FÅ FRAM RÄTT OBJEKT ATT TA DATA FRÅN
  if (difficulty === 'easy') {
    obj = easyWordsList[indexOfRandomizedWord];
  } else if (difficulty === 'medium') {
    obj = mediumWordsList[indexOfRandomizedWord];
  } else if (difficulty === 'hard') {
    obj = hardWordsList[indexOfRandomizedWord];
  } else {
    obj = expertWordsList[indexOfRandomizedWord];
  }
  
  hint.innerHTML = `${Object.values(obj)[numOfHintClicks + 1]}`;
}

//Nollställ Hints
function resetHints() {
  let hints = document.querySelectorAll('.hint-container p');
  hints.forEach((item) => {
    item.remove();
  });
}

// Räknar ut win %
function calcWinRate() {
  // Vi vill inte dela på 0.
  if (numOfWins > 0) {
    winRate = Math.floor((numOfWins / numOfGamesPlayed) * 100);
  }
}

//Hint button
function generateHintButton() {
  let hintButton = document.createElement('button');
  let hintContainer = document.createElement('div');
  hintContainer.className = 'hint-container';

  document.querySelector('main').appendChild(hintButton);
  document.querySelector('main').appendChild(hintContainer);
  hintButton.innerText = 'Sacrifice a guess for a hint!';

  hintButton.addEventListener('click', (event) => {
    numOfHintClicks++;
    if (numOfHintClicks <= 3) {
      handleHintClick(numOfHintsUsed);
    }
});
}

// Scoreboard UI
function generateScoreboard() {
  let won = document.createElement('p');
  won.className = 'won';
  let lost = document.createElement('p');
  lost.className = 'lost';
  let played = document.createElement('p');
  played.className = 'played';
  let winRateEle = document.createElement('p');
  winRateEle.className = 'winRate';
  let container = document.createElement('div');
  container.className = 'score';
  container.appendChild(won);
  container.appendChild(lost);
  container.appendChild(played);
  container.appendChild(winRateEle);
  document.querySelector('main').appendChild(container);
  won.innerHTML = `WINS: ${numOfWins}`;
  lost.innerHTML = `LOST: ${numOfLosses}`;
  played.innerHTML = `PLAYED: ${numOfGamesPlayed}`;
  winRateEle.innerHTML = `WIN RATIO: ${winRate}%`;
}

// Tracka keypress hela tiden. Uppdatera senaste bokstav
document.addEventListener('keydown', (event) => {

  if (hasPopup === false) {
    if (gameOver === false) {
      if (window.event) {
        input = event.key.toUpperCase();
        numOfGuesses++;
      }

      if (difficulty === 'expert') {
        checkIfInputIsAlphaChar(input, correctCharsList);
        // renderUsedChars();
        compareUsedAndCorrect();
        generateIncorrectUsedChars();
        countCorrectChars();
        generateHangman();
        checkIfGameOver();
      } else {
        checkIfInputIsAlphaChar(input, correctCharsList);
        renderUsedChars();
        compareUsedAndCorrect();
        generateIncorrectUsedChars();
        countCorrectChars();
        generateHangman();
        checkIfGameOver();
      }
    }
  }
});

//Genererar hintknappen
generateHintButton();

//Genererar Scoreboard till UI
generateScoreboard();

//Genererar fel bokstäver baserat på 'correctWord'
generateIncorrectChars();

//Genererar blanks för det korrekta ordet
renderInitialCorrectTemplate();

//Popup för att välja svårighetsgrad
newgamePopup();

//Randomgenererar ord från 'difficulty'
randomizeWord(generateDifficulty(difficulty)); // Startar på medium


// OVERKILSSSSSSSSS
// Expert mode
// Visa antal försök kvar - Vid EXPERT skriv "Infinite, but more innocent people may suffer."

// EXPERT MODE
// Visar INTE used chars
// Efter en loss, generera ny hangmanParts men behåll tidigare.
// Visa hur många personer man dödat tills man klarat ordet! POINT / POPUP
// När ordet är klart, game won.
// Dubbla poäng vid game won

// Funktioner:
// Start expert mode
//    - Tar bort used chars UI
//    - Genererar svåra ord från Expert listan

// IF sats där antal felgissningar inte avbryter eventlistenern
//