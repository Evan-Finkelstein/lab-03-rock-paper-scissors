// import functions and grab DOM elements
import { rockPaperScissors } from './utils.js'


const playButton = document.querySelector('#play-button');
const refreshButton = document.querySelector('#reset-button');
const winSpan = document.querySelector('#wins-span');
const drawSpan = document.querySelector('#draws-span');
const lossSpan = document.querySelector('#losses-span');
const restartSpan = document.querySelector('#restart-span');
let wins = 0;
let draws = 0;
let losses = 0;
let restarts = 0;
// initialize state

// set event listeners to update state and DOM




playButton.addEventListener('click', rockPaperScissors); 

refreshButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    winSpan.textContent = 0;
    lossSpan.textContent = 0;
    drawSpan.textContent = 0;
    restarts++;
    restartSpan.textContent = restarts;

})
