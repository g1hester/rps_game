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
   input = input.toLowerCase();
    return input;
}



function playRound (playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    

    if (playerSelection === "rock") {
        return "Tie game!";
    } else {return "Try again, noob!";

    }
}


console.log(playRound());



