'use strict';
/*
console.log(document.querySelector ('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const $score = document.querySelector('.score');
const $body = document.querySelector('body');
const $number = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const loseGame = function () {
    displayMessage('💥 You lost the game!');
    $score.textContent = 0;
    $body.style.backgroundColor = '#FF0000';
  };

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When number is under 0 or higher than 21
  } else if (guess < 0 || guess > 21) {
    displayMessage('The number must be between 1 and 20!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    $body.style.backgroundColor = '#60B347';
    $number.style.width = '30rem';
    $number.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      $score.textContent = score;
    } else {
      loseGame();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  $body.style.backgroundColor = '#222222';
  displayMessage('Start guessing...');
  $number.style.width = '15rem';
  $score.textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
