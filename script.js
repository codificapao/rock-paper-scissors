// function playGame() {
//     function getPlayerSelection() {
//         // GET input selection
//         let inputPlayerSelection = prompt('Input your choice'); 
//         //INIT firstChar to GET inputPlayerSelection to CALL charAt string method RETURNING the first index toUpperCase
//         let firstChar = inputPlayerSelection.charAt(0).toUpperCase();
//         // INIT nextChar to GET inputPlayerSelection to CALL slice method RETURNING the second index up to last index toLowerCase
//         let nextChar = inputPlayerSelection.slice(1).toLowerCase();
//         // INIT finalWord to GET firstChar string to CALL concat method RETURNING the string nextChar 
//         let finalWord = firstChar.concat(nextChar);
//         // RETURN finalWord;
//         return finalWord;
//     }
    
//     function getComputerSelection() {
//         let computerChoices = ['Rock', 'Paper', 'Scissors'];
//         let randomChoices = Math.floor(Math.random() * computerChoices.length);
//         let finalChoice = computerChoices[randomChoices];
//         return finalChoice;    
//     }  


//     function playerRound(playerSelection, computerSelection) {
//         let gameResult;
//         if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
//             gameResult = `You win! ${playerSelection} beats ${computerSelection}`;
//         } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
//             gameResult = `You win! ${playerSelection} beats ${computerSelection}`;
//         } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
//             gameResult = `You win! ${playerSelection} beats ${computerSelection}`;
//         } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
//             gameResult = `You loose! ${computerSelection} beats ${playerSelection}`;
//         } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
//             gameResult = `You loose! ${computerSelection} beats ${playerSelection}`;
//         } else if(playerSelection === 'Rock' && computerSelection ==='Paper') { 
//             gameResult = `You loose! ${computerSelection} beats ${playerSelection}`;
//         } else {
//             gameResult = `It's a tie both players pick ${playerSelection} and ${computerSelection}`;
//         }
//         return gameResult;
//     }   

//     let playerSelection = getPlayerSelection();
//     let computerSelection = getComputerSelection();
//     return playerRound(playerSelection, computerSelection);
    
// }

// console.log(playGame());

function getComputerSelection() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let randomChoices = Math.floor(Math.random() * computerChoices.length);
    let finalChoice = computerChoices[randomChoices];
    return finalChoice;    
}  
function getPlayerSelection() {
    // GET input selection
    let inputPlayerSelection = prompt('Input your choice'); 
    //INIT firstChar to GET inputPlayerSelection to CALL charAt string method RETURNING the first index toUpperCase
    let firstChar = inputPlayerSelection.charAt(0).toUpperCase();
    // INIT nextChar to GET inputPlayerSelection to CALL slice method RETURNING the second index up to last index toLowerCase
    let nextChar = inputPlayerSelection.slice(1).toLowerCase();
    // INIT finalWord to GET firstChar string to CALL concat method RETURNING the string nextChar 
    let finalWord = firstChar.concat(nextChar);
    // RETURN finalWord;
    return finalWord;
}   

function playGame() {
    let playerOne = 0;
    let playerTwo = 0;
    for(let i = 1; i <= 5; i++) {
        console.log(`Round ${i}! Fight!`);
            let playerSelection = getPlayerSelection();
            let computerSelection = getComputerSelection();
            if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
                playerOne += 1;
                console.log(`Player one wins: ${playerSelection} beats ${computerSelection}`); 
            } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
                playerOne += 1;
                console.log(`Player one wins: ${playerSelection} beats ${computerSelection}`);
            } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
                playerOne += 1;
                console.log(`Player one wins: ${playerSelection} beats ${computerSelection}`);
            } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
                playerTwo += 1;
                console.log(`Player two wins: ${playerSelection} beats ${computerSelection}`);
            } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
                playerTwo += 1;
                console.log(`Player two wins: ${playerSelection} beats ${computerSelection}`);
            } else if(playerSelection === 'Rock' && computerSelection ==='Paper') {
                playerTwo += 1;
                console.log(`Player two wins: ${playerSelection} beats ${computerSelection}`);
            } else {
            console.log(`It's a tie both players pick ${playerSelection} and ${computerSelection}`);
            }
        console.log(`Score Board \n Player1: ${playerOne} \n Player2: ${playerTwo}`);
    }
}

console.log(playGame());
