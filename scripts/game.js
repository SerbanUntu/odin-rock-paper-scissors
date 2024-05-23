const buttons = document.querySelectorAll("button");
const msg = document.querySelector(".message");
let humanScore = 0;
let computerScore = 0;

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

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  function lose() {
    msg.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    computerScore += 1;
    if(computerScore === 5) {
      msg.textContent += `
      End of game! The computer won!
      Final score - Computer:${computerScore}, Player:${humanScore}`;
      endGame();
    }
  }
  function win() {
    msg.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    humanScore += 1;
    if(humanScore === 5) {
      msg.textContent += `
      End of game! You won!
      Final score - Computer:${computerScore}, Player:${humanScore}`;
      endGame();
    }
  }
  function draw() {
    msg.textContent = `It's a draw! Both players chose ${computerChoice}!`;
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

function endGame() {
  buttons.forEach((button) => button.style.display = "none");
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play again";
  playAgain.addEventListener("click", (e) => {
    e.preventDefault();
    humanScore = 0;
    computerScore = 0;
    msg.textContent = '';
    buttons.forEach((button) => button.style.display = "inline-block");
    playAgain.remove();
  })
  document.body.appendChild(playAgain);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    playRound(capitalize(button.id), getComputerChoice());
  });
});
