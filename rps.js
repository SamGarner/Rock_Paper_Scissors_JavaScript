// let prompt = require('prompt')
let prompt = require('prompt-sync')();

choices = ['rock', 'paper', 'scissors']

let computerPlay = (choices) => {
  random_index = calc_random_index(choices)
  return choices[random_index]
}

let calc_random_index = (choices) => {
  return Math.floor(choices.length * Math.random())
}

let get_user_selection = () =>  { 
  // // prompt.start()
  // user_choice = prompt.get("Enter your choice: 'rock', 'paper', or 'scissors':")
  let user_choice = prompt("Enter your choice: 'rock', 'paper', or 'scissors':");
  return user_choice
}

get_user_selection()
