// generate a random number using some rand method and assign to randNum
var randomNumber = Math.floor(Math.random()*20);
// prompt user for number and assign to num
var guessNumber = prompt('Guess a Number between 1 and 20');
// if num === randNum display user wins else dispaly you lose
if (randomNumber === guessNumber){
  alert("You guessed correctly! Here's a cookie");
} else if(guessNumber > 20 || guessNumber < 1){
  alert("Between 1 and 20 fool!");
} else {
  alert("Wrong! You suck!");
}
// put script in the index.html to display prompts

