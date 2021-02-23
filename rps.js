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
let getPlayerSelection = () =>  prompt("Enter your choice: 'rock', 'paper', or 'scissors':");

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {       // parentheses issue resolved
    console.log(`${playerSelection} matches ${playerSelection}`)
    console.log("It's a draw!")
  }
  else {
    winner = getWinner(playerSelection, computerSelection)
    if (winner === 'player') {
      console.log(`${playerSelection} beats ${computerSelection}`)
    }
    else {
      console.log(`${computerSelection} beats ${playerSelection}`)
    }
    console.log(`${winner} wins!`)
    // break
  }
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

playerChoice = getPlayerSelection()
computerSelection = computerPlay(choices)
playRound(playerChoice, computerSelection)
