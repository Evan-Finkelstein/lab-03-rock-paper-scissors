
const resultSpan = document.querySelector('#result-span');
const winSpan = document.querySelector('#wins-span');
const drawSpan = document.querySelector('#draws-span');
const lossSpan = document.querySelector('#losses-span');
const restartSpan = document.querySelector('#restart-span');
let wins = 0;
let draws = 0;
let losses = 0;
let restarts = 0;

export function computersPick(){
    const randomNumber = Math.ceil(Math.random() * 3);
    let computersThrow;

    if(randomNumber === 1){
        computersThrow = 'rock';
    }
    if(randomNumber === 2){
        computersThrow = 'paper';
    }
    if (randomNumber === 3){
        computersThrow = 'scissors';
    }
    return computersThrow;

}

export function rockPaperScissors(){
const thrownValue = computersPick();
const checkedRadioButton = document.querySelector(':checked');
const userThrow = checkedRadioButton.value;

if(userThrow === thrownValue){
    draws++;
    resultSpan.textContent= 'You tied!';
    drawSpan.textContent = draws;
} 
if(userThrow === 'rock' && thrownValue === 'paper'){
    losses++;
    resultSpan.textContent= 'Rock loses to scissors  : ( ';
    lossSpan.textContent = losses;
} 
if (userThrow === 'paper'  && thrownValue === 'scissors'){
    losses++;
    resultSpan.textContent= 'Paper loses to rock  : (';
    lossSpan.textContent = losses;
} 
if(userThrow === 'scissors' && thrownValue === 'rock'){
    losses++;
    resultSpan.textContent = 'Scissors lose to rock  : (';
    lossSpan.textContent = losses;
} 
if(userThrow === 'rock' && thrownValue === 'scissors'){
    wins++;
    resultSpan.textContent= 'Rock beats scissors!';
    winSpan.textContent = wins;
} 
if(userThrow === 'paper' && thrownValue === 'rock'){
    wins++;
    resultSpan.textContent= 'Paper beats rock!';
    winSpan.textContent = wins;
} 
if(userThrow === 'scissors' && thrownValue === 'paper'){
    wins++;
    resultSpan.textContent= 'Scissors beat paper!';
    winSpan.textContent = wins;

} }

export function reset(){
wins = 0;
losses = 0;
draws = 0;
winSpan.textContent = 0;
lossSpan.textContent = 0;
drawSpan.textContent = 0;
restarts++;
restartSpan.textContent = restarts;
}