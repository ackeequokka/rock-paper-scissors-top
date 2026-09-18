let humanScore = 0;
let computerScore = 0;

// Returns randomized computer's choice as a number
// Scissors = 1, paper = 2, rock = 3
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

// Gets human choice via prompt
function getHumanChoice() {
  return prompt(
    "Please enter one of the following values: paper, rock or scissors",
  );
}

// Compares computer's and player's values once both are converted to numbers, defines the winner, returns the result
function compareChoice(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "tie";
  } else {
    if (humanChoice < 3) {
      if (computerChoice - humanChoice == 1) {
        return "win";
      } else {
        return "lose";
      }
    } else {
      if (humanChoice - compareChoice == 2) {
        return "win";
      } else {
        return "lose";
      }
    }
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = convertHumanChoice();
  roundResult = compareChoice(humanChoice, computerChoice);
  changeScore(computerChoice, humanChoice);
  return roundResult;
}

function changeScore(computerChoice, humanChoice) {
  if (roundResult == "win") {
    humanScore = humanScore + 1;
    console.log("You won! Your score is " + humanScore);
  } else if (roundResult == "lose") {
    computerScore = computerScore + 1;
    console.log("You won! Your score is " + computerScore);
  } else {
    console.log("It's a tie. Score was not changed");
  }
}

// Converts human choice from prompt to a number, which is passed to comparison function
function convertHumanChoice() {
  let humanChoice = getHumanChoice();
  if (humanChoice == "rock") {
    return 3;
  } else if (humanChoice == "paper") {
    return 2;
  } else {
    return 1;
  }
}

playRound();
