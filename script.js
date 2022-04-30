import { allWordsArr } from './allwords.js';

const theButton = document.querySelector('button');
const all5LetterWords = allWordsArr.filter(word => word.length > 4 && word.length < 6);
var random5LtrWrdIndex;
let currentEl;
let letterIsTheSameInBoth;
let letterIsInADifferentPosition;
let firstRowBgColors = [];
let usersFullAnswer = [];

// FIND RANDOM 5 LETTER WORD
random5LtrWrdIndex = Math.floor(Math.random() * all5LetterWords.length);

var randomWord = all5LetterWords[random5LtrWrdIndex];
console.log('the answer: ' + randomWord);

let randomWordArr = randomWord.split("");
// console.log(randomWordArr);


const inputs = document.querySelectorAll('input');
var inputsArr = Array.prototype.slice.call(inputs);
var firstFiveInputsArr = inputsArr.slice(0, 5);
// console.log(firstFiveInputsArr);
inputs.forEach(e => e.addEventListener('input', inputHandler));
var keyIndex;

function inputHandler(e) {
  console.log('input 🏃🏻‍♂️')
  
  keyIndex = document.activeElement.classList.value;
  inputs[keyIndex - 1].style.backgroundColor = 'white';
  if (e.data != null) {
    if (e.data.length > 0 && e.data.length < 2) {
      let userEntry = e.data;
      console.log('keyIndex: '+ keyIndex)
      console.log('entry: ' + userEntry)
      console.log(inputs)

      // check if letter is same in both positions
      if (userEntry == randomWord[keyIndex - 1]) {
        letterIsTheSameInBoth = true;
        console.log('letterIsTheSameInBoth: ' + letterIsTheSameInBoth + ' (correct)')
        firstRowBgColors[keyIndex -1] = 'green';
        // inputs[keyIndex - 1].style.backgroundColor = 'green';
        // inputs[keyIndex - 1].style.color = 'white';
      } else {
        letterIsTheSameInBoth = false;
        console.log('letterIsTheSameInBoth: ' + letterIsTheSameInBoth + ' (wrong)')

        // check if letter is in the word, in different position
        if (randomWordArr.includes(userEntry)) {
          console.log('Letter is elsewhere in word:' + randomWordArr.includes(userEntry));
          firstRowBgColors[keyIndex -1] = 'grey';
          // inputs[keyIndex - 1].style.backgroundColor = 'grey';
        } else { // if it isn't
          firstRowBgColors[keyIndex -1] = 'white';
        }
      }

      // user submits answer-- check if in word list, then color code the letters
      theButton.addEventListener('click', () => {
        usersFullAnswer.push(userEntry);
        firstFiveInputsArr.forEach(e => e.style.backgroundColor = firstRowBgColors[e.classList.value - 1]);
        if (usersFullAnswer.length == 5) {
          console.log(usersFullAnswer);
          if (!all5LetterWords.includes(usersFullAnswer.join(''))) {
            alert('not in word list!!!')
            // start over?
          }
        }
      });
    }
  }
}


// MOVE TO NEXT INPUT AUTOMATICALLY
// const inputs = document.querySelectorAll('input');
// inputs.forEach(e => e.addEventListener('input', moveToNext));
// function moveToNext(e) {
//   // console.log('input event listener ran')

//   if (e.data.length > 0 && e.data.length < 2) {
//     // console.log('entry is 1 char: ' + e)
//     currentEl = e
//     // console.log(currentEl.path[1].children)
//   }
// }


