console.log("Hello World!");

const computerPlay = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * computerPlay.length);
let computerSelection = (random, computerPlay[random]);
console.log(random, computerPlay[random]);
console.log(computerSelection);

let playerSelection = prompt("Do you choose rock, paper, or scissors?").toLowerCase();



/* playerSelection win scenarios: */
if ((playerSelection === "rock") && (computerSelection === "scissors"))
    { 
      alert("Awesome! Rock beat Scissors! You won this round!");
    }
  else if((playerSelection === "paper") && (computerSelection === "rock"))
    {
      alert("Awesome! Paper beats Rock! You won this round!");
    }
  else if ((playerSelection === "scissors") && (computerSelection === "paper"))
    {
      alert("Awesome! Scissors beat Paper! You won this round!");
    }

  /* computerSelection win scenarios: */


  else if ((playerSelection === "rock") && (computerSelection === "paper"))
    { 
      alert("Nice try! Paper beats Rock! You lost this one! Better luck next time!");
    }
  else if((playerSelection === "paper") && (computerSelection === "scissors"))
    {
      alert("Nice try! Scissors beat Paper! You lost this one! Better luck next time!");
    }
  else if ((playerSelection === "scissors") && (computerSelection === "rock"))
    {
      alert("Nice try! Rock beats Scissors! You lost this one! Better luck next time!");
    }

/* draw scenarios: */

  else if ((playerSelection === "rock") && (computerSelection === "rock"))
    { 
      alert("Draw! Rock draws with Rock! Better luck next time!");
    }
  else if((playerSelection === "paper") && (computerSelection === "paper"))
    {
      alert("Draw! Paper draws with Paper! Better luck next time!");
    }
  else if ((playerSelection === "scissors") && (computerSelection === "scissors"))
    {
      alert("Draw! Scissors draw with Scissors! Better luck next time!");
    }
;