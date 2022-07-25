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
    
    while (input == null) {
        input = prompt( "Please enter rock, paper, or scissors");
    }
    
    input = input.toLowerCase();//converts player's input into lowercase letters - this needs to come after the "while" check for null
    
    return input;
}


function playRound (playerSelection, computerSelection) {
    playerSelection = playerChoice(); //can move these variable into the global scope if needed
    computerSelection = computerChoice();
    console.log(`Player selected: ${playerSelection}`);//You must console.log "playerSelection" variable instead of playerChoice(), because running playerChoice() function will trigger another input prompt
    console.log(`Computer selected: ${computerSelection}`);
    
    if (playerSelection === computerSelection) {
        return "Tie game!";} else if 
        ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")){
            return "Player Wins!";
        } else {return "Computer Wins!";}
}

console.log(playRound());



