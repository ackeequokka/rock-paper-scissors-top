let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0;

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
    "This is round " +
      (roundPlayed + 1) +
      ". Please enter one of the following values: paper, rock or scissors",
  ).toLowerCase();
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
      if (humanChoice - computerChoice == 2) {
        return "win";
      } else {
        return "lose";
      }
    }
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  let humanChoice = convertHumanChoice();
  console.log(humanChoice);
  roundResult = compareChoice(humanChoice, computerChoice);
  changeScore(computerChoice, humanChoice);
  roundPlayed = roundPlayed + 1;
  return roundResult;
}

function changeScore() {
  if (roundResult == "win") {
    humanScore = humanScore + 1;
    console.log("You won! Your score is now " + humanScore);
    alert("You won! Your score is now " + humanScore);
  } else if (roundResult == "lose") {
    computerScore = computerScore + 1;
    console.log("You lost! Computer's score is now " + computerScore);
    alert("You lost! Computer's score is now " + computerScore);
  } else {
    console.log("It's a tie. Score was not changed ");
    alert("It's a tie. Score was not changed ");
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

function playGame() {
  humanScore = 0;
  computerScore = 0;
  roundPlayed = 0;

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    alert("You won!");
  } else if (computerScore > humanScore) {
    alert("Robot won...");
  } else {
    if (humanScore == 0 && computerScore == 0) {
      alert("You had 5 ties in row, which has a probability of 0,41%");
    } else {
      alert("It's a tie.");
    }
  }
}

playGame();
