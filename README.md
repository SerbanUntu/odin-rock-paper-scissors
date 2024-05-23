# Odin Rock Paper Scissors
## About
A simple algorithm that allows you to play Rock, Paper, Scissors against the computer fully in the browser console.
## What I learned
A nice way to create a switch statement with multiple strings as inputs:
```js
switch(humanChoice + computerChoice) {
  case "RockPaper":
  case "ScissorsRock":
  case "PaperScissors":
    lose();
    break;
  //...
}
```

Another thing I learned was that newlines are respected in backtick strings without needing to add the `\n` character.

For the UI implementation: using the id of the buttons as the input values is a nice trick:
```html
<button id="rock">Rock</button>
<button id="paper">Paper</button>
<button id="scissors">Scissors</button>
```
```js
button.addEventListener("click", (e) => {
  e.preventDefault();
  playRound(capitalize(button.id), getComputerChoice());
});
```