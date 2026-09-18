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

console.log(getComputerChoice());
console.log(getHumanChoice());
