//create rock, paper scissors, game
//computer selects choice at random
//player enters choice into browser prompt

const choices = ["rock", "paper", "scissors"];

function computerChoice(){
    return (choices[Math.floor(Math.random()*choices.length)]);
}

function playRound (playerSelection, computerSelection) {
    return "You lose! paper beats rock";
}

playerSelection = "rock";
computerSelection = computerChoice();


console.log(playRound(playerSelection, computerSelection));