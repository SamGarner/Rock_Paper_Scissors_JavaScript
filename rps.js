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

let get_user_selection = () =>  prompt("Enter your choice: 'rock', 'paper', or 'scissors':");

get_user_selection()
