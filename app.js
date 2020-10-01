// import functions and grab DOM elements
import { rockPaperScissors } from './utils.js'
import { reset } from './utils.js'


const playButton = document.querySelector('#play-button');
const refreshButton = document.querySelector('#reset-button');


// initialize state

// set event listeners to update state and DOM




playButton.addEventListener('click', rockPaperScissors); 

refreshButton.addEventListener('click', reset );

