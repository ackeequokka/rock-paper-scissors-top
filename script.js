let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rock = Math.random();
  let paper = Math.random();
  let scissors = Math.random();

  if (rock > paper && rock > scissors) {
    return 3;
  } else if (paper > rock && paper > scissors) {
    return 2;
  } else {
    return 1;
  }
}

function getHumanChoice() {
  return prompt(
    "Please enter one of the following values: paper, rock or scissors",
  );
}

function compareChoice(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    roundResult = "tie";
  } else {
    if (humanChoice < 3) {
      if (computerChoice - humanChoice == 1) {
        roundResult = "win";
      } else {
        roundResult = "loose";
      }
    } else {
      if (humanChoice - compareChoice == 2) {
        roundResult = "win";
      } else {
        roundResult = "loose";
      }
    }
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
