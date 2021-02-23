'use strict';

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1
let resetButton;
guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesses:';
    }
    guesses.textContent += userGuess + '';

    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You Guessed the correct Number!';
        lastResult.style.backgroundColor = 'orange';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'The Game is Overrrrr!!!!';
        setGameOver();
    }   else {
        lastResult.textContent ='Your Answer is incorrect';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Try Again, Your guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Try Again, Your guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled =true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    
    const resetParas = document.querySelectorAll('resultsParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();


    lastResult.style.backgroundColor = 'yellow';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}