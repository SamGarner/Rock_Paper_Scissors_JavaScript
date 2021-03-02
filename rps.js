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

let playRound = (computerWins, playerWins) => {
  playerChoice = getPlayerSelection()
  computerSelection = computerPlay(choices)
  winner = getWinner(playerChoice, computerSelection)
  announceRoundResult(playerChoice, computerSelection, winner)
  // updateScore(winner, computerWins, playerWins)
  return winner
}

let getWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'draw'
  }
  else if (playerSelection === 'rock') {
    return computerSelection === 'scissors' ? 'player' : 'computer'
  }
  else if (playerSelection === 'scissors') {
    return computerSelection === 'paper' ? 'player' : 'computer'
  }
  else { // (playerSelection === 'paper')
    return computerSelection === 'rock' ? 'player' : 'computer'
  }
}

let announceRoundResult = (playerSelection, computerSelection, winner) => {
  if (playerSelection === computerSelection) {       // parentheses issue resolved  //refacotr
    announceDraw(playerSelection, computerSelection)
  }
  else {
    announceRoundWinner(playerSelection, computerSelection, winner);
  }
}

let announceDraw = (playerSelection, computerSelection) => {
  console.log(`${playerSelection} matches ${playerSelection}`)
  console.log("It's a draw!")
}

let announceRoundWinner = (playerSelection, computerSelection, winner) => {
  // winner = getWinner(playerSelection, computerSelection)
    if (winner === 'player') {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else {
      console.log(`You lose. ${computerSelection} beats ${playerSelection}`)
    }
}

let updateScore = (winner, computerWins, playerWins) => {
  if (winner === 'player') {
    playerWins += 1
  }
  else if (winner === 'computer') {
    computerWins += 1
  }
}

let game = () => {
  let round = 1;  // move these three variables out into global scope?
  let playerWins = 0;
  let computerWins = 0;
  while (round < 6) {
    winner = playRound();
    if (winner === 'draw') {
      continue;
    }
    else {
      winner === 'player' ? playerWins += 1 : computerWins += 1;
    }
    round += 1;
  }
  console.log(`player wins: ${playerWins}`)
  console.log(`computer wins: ${computerWins}`)
}

game();