//create rock, paper scissors, game
//computer selects choice at random
//player enters choice into browser prompt

const choices = ["rock", "paper", "scissors"];

function game(){
    playRound();
}

function computerChoice(){
    return (choices[Math.floor(Math.random()*choices.length)]);
}

function playerChoice (){
    let input = prompt("Enter rock, paper, or scissors");
    input = input.toLowerCase();//converts player's input into lowercase letters
    return input;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    console.log(playerSelection);//You must console.log "playerSelection" variable instead of playerChoice(), because running playerChoice() function will trigger another input prompt
    
    //this is a test to ensure playerChoice is executing properly
    if (playerSelection === "rock") {
        return "Tie game!";
    } else {return "Try again, noob!";

    }
}


console.log(playRound());



