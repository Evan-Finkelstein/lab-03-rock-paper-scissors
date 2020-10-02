
export function computersPick(){
    const randomNumber = Math.ceil(Math.random() * 3);
    let computersThrow;

    if (randomNumber === 1){
        computersThrow = 'rock';
    }
    if (randomNumber === 2){
        computersThrow = 'paper';
    }
    if (randomNumber === 3){
        computersThrow = 'scissors';
    }
    return computersThrow;
}
