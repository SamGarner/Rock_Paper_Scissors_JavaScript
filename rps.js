choices = ['rock', 'paper', 'scissors']

let computerPlay = (choices) => {
  random_index = calc_random_index(choices)
  return choices[random_index]
}

let calc_random_index = (choices) => {
  return Math.floor(choices.length * Math.random())
}