let humanScore = 0;
let computerScore = 0;

function getComputerChoice(rock, paper, scissors) {
  rock = Math.random();
  paper = Math.random();
  scissors = Math.random();

  if (rock > paper && rock > scissors) {
    choice = "rock";
  } else if (paper > rock && paper > scissors) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter one of the following values: paper, rock or scissors",
  );
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
