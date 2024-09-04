console.log("Hello World!");

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
  }
}

function getHumanChoice () { 
  let humanChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase()
  return humanChoice
};

let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundWinner = 'tie'
    alert("tie")
  }
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++
    roundWinner = 'human'
    alert("human wins this round")
  }
  if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'rock')
  ) {
    computerScore++
    roundWinner = 'computer'
    alert("computer wins this round")
  }
  // your code here!
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(computerChoice);
console.log(humanChoice);


playRound(humanChoice, computerChoice);




