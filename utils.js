export function rockPaperScissors(userThrow, computer){
     
    if (userThrow === computer){
        //draws++;
        //resultSpan.textContent = 'You tied!';
        //drawSpan.textContent = draws;
        return 'draw';
    } 
    if (userThrow === 'rock' && computer === 'paper'){
       
        return 'loss';
    } 
    if (userThrow === 'paper' && computer === 'scissors'){
        //losses++;
        //resultSpan.textContent = 'Paper loses to rock  : (';
        //lossSpan.textContent = losses;
        return 'loss';
    }
    if (userThrow === 'scissors' && computer === 'rock'){
        //losses++;
        //resultSpan.textContent = 'Scissors lose to rock  : (';
        //lossSpan.textContent = losses;
        return 'loss';
    }
    if (userThrow === 'rock' && computer === 'scissors'){
        //wins++;
        //resultSpan.textContent = 'Rock beats scissors!';
        //winSpan.textContent = wins;
        return 'win';
    }
    if (userThrow === 'paper' && computer === 'rock'){
        //wins++;
        //resultSpan.textContent = 'Paper beats rock!';
        //winSpan.textContent = wins;
        return 'win';
    }
    if (userThrow === 'scissors' && computer === 'paper'){
        //wins++;
        //resultSpan.textContent = 'Scissors beat paper!';
        //winSpan.textContent = wins;
        return 'win';
    }
}
