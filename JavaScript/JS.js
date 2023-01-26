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
    word: 'Samuelforpresident',
    hint1: 'this is hard',
    hint2: 'Still trying this?..',
    hint3: 'Stop killing people',
  },
  {
    word: 'ChristianForLordOfCode',
    hint1: 'this is hard',
    hint2: 'Still trying this?..',
    hint3: 'Stop killing people',
  },
  {
    word: 'BeratForLordOfBugs',
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
let hangmanParts = [
  'scaffold',
  'head',
  'body',
  'arms',
  'legs',
  'scaffold2',
  'head2',
  'body2',
  'arms2',
  'legs2',
];

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
let hasExtraHangman = false;

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
    if (inputValue === listToCheck[i] && difficulty === 'expert') {
      match = true;
      break;
    }
    if (inputValue === listToCheck[i] && difficulty !== 'expert') {
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

// generera hangmans delar

function generateHangman() {
  for (let i = 0; i < wrongGuesses; i++) {
    if (wrongGuesses <= 5) {
      document.querySelector('figure').classList.add(`${hangmanParts[i]}`);
    } else {
      document.querySelector('#figure2').classList.add(`${hangmanParts[i]}`);
    }
  }
}

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
  if (difficulty === 'expert') {
    if (wrongGuesses >= 10) {
      gameIsOver();
    }
  } else if (wrongGuesses >= 5) {
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
  hasExtraHangman = false;
  document.querySelector('figure').className = '';
  renderUsedChars();
  randomizeWord(generateDifficulty(difficulty));
  renderInitialCorrectTemplate();
  gameOver = false;
  resetHints();

  // Om det INTE finns en hint knapp - skapa en.
  if (!document.getElementById('hint-button')) {
    generateHintButton();
  }

  // Ta bort knappen om vi är i expert mode.
  if (difficulty === 'expert') {
    removeHintButton();
  }
}

function removeSecondHangman() {
  let figure2 = document.getElementById('figure2');
  figure2.remove();
}

function updateResultCounters() {
  let won = document.querySelector('.won');
  won.innerHTML = `WINS: ${numOfWins}`;
  let lost = document.querySelector('.lost');
  lost.innerHTML = `LOST: ${numOfLosses}`;
  let played = document.querySelector('.played');
  played.innerHTML = `PLAYED: ${numOfGamesPlayed}`;
  let winRateEle = document.querySelector('.winRate');
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
    removeSecondHangman();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateDifficulty('medium');
    removePopup();
    startAgain();
    removeSecondHangman();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateDifficulty('hard');
    removePopup();
    startAgain();
    removeSecondHangman();
  });
  hardButton.innerText = 'HARD';

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    removeHintButton();
    generateDifficulty('expert');
    removePopup();
    startAgain();
    removeSecondHangman();
  });
  expertButton.innerText = 'EXPERT';

  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  buttonContainer.appendChild(expertButton);
  document.querySelector('main').appendChild(module);
}

function removeHintButton() {
  // Om det finns en knapp - Ta bort
  if (document.getElementById('hint-button')) {
    let btn = document.getElementById('hint-button');
    btn.remove();
  }
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
    removeSecondHangman();
  });
  easyButton.innerText = 'EASY';

  let mediumButton = document.createElement('button');
  mediumButton.addEventListener('click', () => {
    generateDifficulty('medium');
    removePopup();
    startAgain();
    removeSecondHangman();
  });
  mediumButton.innerText = 'MEDIUM';

  let hardButton = document.createElement('button');
  hardButton.addEventListener('click', () => {
    generateDifficulty('hard');
    removePopup();
    startAgain();
    removeSecondHangman();
  });
  hardButton.innerText = 'HARD';

  let expertButton = document.createElement('button');
  expertButton.addEventListener('click', () => {
    removeHintButton();
    generateDifficulty('expert');
    removePopup();
    startAgain();
    removeSecondHangman();
  });
  expertButton.innerText = 'EXPERT';

  module.appendChild(card);
  card.appendChild(text);
  card.appendChild(buttonContainer);
  buttonContainer.appendChild(easyButton);
  buttonContainer.appendChild(mediumButton);
  buttonContainer.appendChild(hardButton);
  buttonContainer.appendChild(expertButton);
  document.querySelector('main').appendChild(module);
}

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
  message.innerHTML = `Easy: 1-5 letters <br> Medium: 6-8 letters<br> Hard: 9+ letters<br> Expert: Good luck......`;

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
    removeHintButton();
    generateDifficulty('expert');
    removePopup();
    startAgain();
  });
  expertButton.innerText = 'EXPERT';

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

function handleHintClick(numOfHintClicks) {
  if (numOfHintClicks < 4) {
    numOfHintsUsed++;
    wrongGuesses = numOfHintsUsed + usedWrongCharsList.length;
    generateHangman();
    checkIfGameOver();
  }

  let hint = document.createElement('p');
  let hintContainer = document.querySelector('.hint-container');
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
  hintButton.id = 'hint-button';
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

function generateNextHangman() {
  let hangman = document.createElement('figure');
  hangman.id = 'figure2';

  let container = document.querySelector('figure');
  hangman.innerHTML = `<svg width="501" height="565" viewBox="0 0 501 565" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse id="ground2" cx="250.5" cy="536" rx="250.5" ry="29" fill="black" fill-opacity="0.06"/>
    <path id="scaffold2" fill-rule="evenodd" clip-rule="evenodd" d="M85 1C85 0.447715 85.4477 0 86 0H404C404.552 0 405 0.447715 405 1V15C405 15.5523 404.552 16 404 16H199.522C199.257 16 199.002 16.1054 198.815 16.2929L101.293 113.815C101.105 114.002 101 114.257 101 114.522V530C101 530.552 100.552 531 100 531H86C85.4477 531 85 530.552 85 530V1ZM101 94.7229C101 95.6138 102.077 96.0599 102.707 95.43L180.43 17.7071C181.06 17.0771 180.614 16 179.723 16H102C101.448 16 101 16.4477 101 17V94.7229Z" fill="black"/>
    <path id="legs2" fill-rule="evenodd" clip-rule="evenodd" d="M365 385.679L365 286H362L362 388H362.134C361.759 390.439 363.447 394.38 366.612 397.949C370.684 402.54 375.66 404.777 377.726 402.945C379.792 401.112 378.166 395.905 374.093 391.314C371.033 387.863 367.462 385.743 365 385.679ZM366.554 389.143C365.811 388.809 365.345 388.71 365.079 388.685C365.072 388.952 365.115 389.427 365.357 390.204C365.861 391.818 367.035 393.905 368.856 395.958C370.678 398.012 372.61 399.426 374.151 400.12C374.894 400.453 375.361 400.553 375.626 400.577C375.634 400.311 375.591 399.835 375.348 399.058C374.844 397.445 373.67 395.358 371.849 393.304C370.028 391.251 368.096 389.836 366.554 389.143Z" fill="black"/>
    <path id="arms2" d="M359.5 195L359.464 295.747M358.256 292C360.154 293.832 359.874 299.483 357.012 302.995C354.15 306.507 350.291 307.868 348.393 306.036C346.495 304.204 347.276 299.871 350.138 296.359C353 292.847 356.358 290.168 358.256 292Z" stroke="black" stroke-width="3" stroke-linecap="round"/>
    <path id="body2" d="M361.5 168V172M361.659 287C369.486 287 375.743 280.491 375.434 272.67L371.766 179.737C371.573 174.857 367.561 171 362.677 171C357.87 171 353.893 174.74 353.599 179.538L347.898 272.369C347.411 280.3 353.712 287 361.659 287Z" stroke="black" stroke-width="3"/>
    <path id="head2" d="M405.17 151.696C405.829 151.194 405.957 150.253 405.456 149.594C404.955 148.934 404.014 148.806 403.354 149.307L405.17 151.696ZM397.065 154.087C396.405 154.588 396.277 155.529 396.778 156.189C397.28 156.848 398.221 156.976 398.88 156.475L397.065 154.087ZM399.866 149.249C399.364 148.59 398.423 148.461 397.764 148.963C397.104 149.464 396.976 150.405 397.477 151.064L399.866 149.249ZM402.257 157.354C402.758 158.013 403.699 158.142 404.359 157.64C405.018 157.139 405.147 156.198 404.645 155.539L402.257 157.354ZM400.429 166.676C399.657 166.977 399.276 167.847 399.577 168.619C399.878 169.39 400.748 169.772 401.52 169.471L400.429 166.676ZM403.238 169.663C403.69 170.358 404.619 170.555 405.313 170.104C406.008 169.653 406.205 168.724 405.754 168.029L403.238 169.663ZM347.858 134.23C344.947 155.571 359.888 175.232 381.23 178.142L381.635 175.17C361.935 172.483 348.143 154.335 350.83 134.635L347.858 134.23ZM381.23 178.142C402.571 181.053 422.232 166.112 425.142 144.77L422.17 144.365C419.483 164.065 401.335 177.857 381.635 175.17L381.23 178.142ZM425.142 144.77C428.053 123.429 413.112 103.768 391.77 100.858L391.365 103.83C411.065 106.517 424.857 124.665 422.17 144.365L425.142 144.77ZM391.77 100.858C370.429 97.947 350.768 112.888 347.858 134.23L350.83 134.635C353.517 114.935 371.665 101.143 391.365 103.83L391.77 100.858ZM403.354 149.307L397.065 154.087L398.88 156.475L405.17 151.696L403.354 149.307ZM397.477 151.064L402.257 157.354L404.645 155.539L399.866 149.249L397.477 151.064ZM356.5 9.00482L357.532 116.004L360.532 115.976L359.5 8.97589L356.5 9.00482ZM401.52 169.471C401.751 169.38 402.175 169.286 402.566 169.322C402.924 169.355 403.114 169.472 403.238 169.663L405.754 168.029C404.988 166.85 403.819 166.424 402.839 166.335C401.893 166.248 401.001 166.453 400.429 166.676L401.52 169.471Z" fill="black"/>
    </svg>`;
  container.insertAdjacentElement('afterend', hangman);
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
        if (wrongGuesses === 4 && hasExtraHangman === false) {
          generateNextHangman();
          hasExtraHangman = true;
        }
        checkIfInputIsAlphaChar(input, correctCharsList);
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
