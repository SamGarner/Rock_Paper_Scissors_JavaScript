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
  winner = getWinner(playerChoice, computerSelection)
  announceRoundResult(playerChoice, computerSelection, winner)
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
  if (winner === 'draw') {
    console.log(`${playerSelection} matches ${playerSelection}. It's a draw.`)
  }
  else if (winner === 'player') {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
  }
  else {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`)
  }
}

// let updateScore = (winner, computerWins, playerWins) => {
//   if (winner === 'player') {
//     playerWins += 1
//   }
//   else if (winner === 'computer') {
//     computerWins += 1
//   }
// }

let getGameWinner = (playerWins, computerWins) => {
  return playerWins > computerWins ? 'You win' : 'The computer wins' // need return
}

let game = () => {
  let round = 1;  // move these three variables out into global scope?
  let playerWins = 0;
  let computerWins = 0;
  console.log('The best-of-five game beings now...')
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
  // console.log(`player wins: ${playerWins}`)
  // console.log(`computer wins: ${computerWins}`)
  gameWinner = getGameWinner(playerWins, computerWins)
  console.log(`${playerWins}:${computerWins} - ${gameWinner} this best-of-five game!`)
}

game();