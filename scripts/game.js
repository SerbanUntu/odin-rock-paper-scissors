function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors? Choose one!")
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  function lose() {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
  }
  function win() {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
  }
  function draw() {
    console.log(`It's a draw! Both players chose ${computerChoice}!`);
  }
  switch(humanChoice + computerChoice) {
    case "RockPaper":
    case "ScissorsRock":
    case "PaperScissors":
      lose();
      break;
    case "PaperRock":
    case "RockScissors":
    case "ScissorsPaper":
      win();
      break;
    default:
      draw();
  }
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    playRound(capitalize(getHumanChoice()), getComputerChoice());
  }
  console.log(`End of game! ${computerScore > humanScore ? "The computer won!" : computerScore === humanScore ? "It's a draw!" : "You won!"}
Final score - Computer:${computerScore}, Player:${humanScore}`);
}

let humanScore = 0;
let computerScore = 0;

playGame();