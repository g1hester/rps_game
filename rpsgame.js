//create rock, paper scissors, game
//computer selects choice at random
//player enters choice into browser prompt

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("(Scoreboard)",`Player: ${playerScore}`, `Computer: ${computerScore}`);
        } if (playerScore === computerScore){
            console.log("Tie Game - Play Again!");
        } else if (playerScore > computerScore) {
            console.log("Player Wins - Best of 5!");
        } else {console.log("Computer Wins - Skynet Prevails!");
    }
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
    playerSelection = playerChoice();
    computerSelection = computerChoice()
    console.log(`Player selected: ${playerSelection}`);
    console.log(`Computer selected: ${computerSelection}`);
    console.log(getWinner(computerSelection, playerSelection));
}

function getWinner(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        return "Tie!";} else if
        ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {playerScore = ++playerScore;
        return "Player wins the round!";
        } else 
        {computerScore = ++computerScore;
        return "Computer wins the round!";
    }
}

game();





