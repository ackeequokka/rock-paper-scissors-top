function getComputerChoice(rock, paper, scissors) {
  rock = Math.random();
  paper = Math.random();
  scissors = Math.random();

  if (rock > paper && rock > scissors) {
    result = "rock";
  } else if (paper > rock && paper > scissors) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}

console.log(getComputerChoice());
