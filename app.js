// import functions and grab DOM elements
import { rockPaperScissors } from './utils.js';
import { computersPick } from './computers-pick.js';

const resultSpan = document.querySelector('#result-span');
const winSpan = document.querySelector('#wins-span');
const drawSpan = document.querySelector('#draws-span');
const lossSpan = document.querySelector('#losses-span');
const restartSpan = document.querySelector('#restart-span');
let wins = 0;
let draws = 0;
let losses = 0;
let restarts = 0;


const playButton = document.querySelector('#play-button');
const refreshButton = document.querySelector('#reset-button');

// initialize state

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const checkedRadioButton = document.querySelector(':checked');
    const userThrow = checkedRadioButton.value;
    const computers = computersPick();
    const result = rockPaperScissors(userThrow, computers);
    if (result === 'loss'){
        losses++;
        resultSpan.textContent = 'You lose  : ( ';
        lossSpan.textContent = losses;
    }
    if (result === 'win'){
        wins++;
        resultSpan.textContent = 'You win  : ( ';
        winSpan.textContent = wins;
    }
    if (result === 'draw'){
        draws++;
        resultSpan.textContent = 'It\'s a draw!  : ( ';
        drawSpan.textContent = draws;
    }
});

refreshButton.addEventListener('click', reset);

function reset(){
    wins = 0;
    draws = 0;
    losses = 0;

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    drawSpan.textContent = draws;
    restarts++;
    restartSpan.textContent = restarts;
}
