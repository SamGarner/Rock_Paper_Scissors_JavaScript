// let prompt = require('prompt')
let prompt = require('prompt-sync')();

choices = ['rock', 'paper', 'scissors']

// update to camel case
let computerPlay = (choices) => {
  random_index = calcRandomIndex(choices)
  return choices[random_index]
}

// update to camel case
let calcRandomIndex = (choices) => {
  return Math.floor(choices.length * Math.random())
}

// update to camel case
let getPlayerSelection = () =>  prompt("Enter your choice: 'rock', 'paper', or 'scissors':").toLowerCase();

let playRound = () => {
  playerChoice = getPlayerSelection()
  computerSelection = computerPlay(choices)
  announceRoundResult(playerChoice, computerSelection)
}

let getWinner = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock') {
    return computerSelection === 'scissors' ? 'player' : 'computer'
  }
  else if (playerSelection === 'scissors') {
    return computerSelection === 'paper' ? 'player' : 'computer'
  }
  else { // player === 'paper'
    return computerSelection === 'rock' ? 'player' : 'computer'
  }
}

let announceRoundResult = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {       // parentheses issue resolved
    announceDraw(playerSelection, computerSelection)
  }
  else {
    announceRoundWinner(playerSelection, computerSelection);
  }
}

let announceDraw = (playerSelection, computerSelection) => {
  console.log(`${playerSelection} matches ${playerSelection}`)
  console.log("It's a draw!")
}

let announceRoundWinner = (playerSelection, computerSelection) => {
  winner = getWinner(playerSelection, computerSelection)
    if (winner === 'player') {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else {
      console.log(`You lose. ${computerSelection} beats ${playerSelection}`)
    }
}

let game = () => {
  let round = 1;
  while (round < 6) {
    playRound();
    round += 1;
  }
}

game();