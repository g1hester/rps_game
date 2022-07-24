//create rock, paper scissors, game
//computer selects choice at random
//player enters choice into browser prompt

const choices = ["rock", "paper", "scissors"];

function computerChoice(){
    return (choices[Math.floor(Math.random()*choices.length)]);
}

console.log(computerChoice());

function playRound (playerSelection, computerSelection) {
    return "You lose!"
};

playerSelection = "rock";
computerSelection = computerChoice();
if (computerSelection == "rock") {
    console.log("Tie game!");
}


