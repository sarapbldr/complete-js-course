'use strict';
/*
console.log(document.querySelector ('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const $message = document.querySelector('.message');
  const $score = document.querySelector('.score');
  const $body = document.querySelector('body');

  const loseGame = function () {
    $message.textContent = '💥 You lost the game!';
    $score.textContent = 0;
    $body.style.backgroundColor = '#FF0000';
  };

  // When there is no input
  if (!guess) {
    $message.textContent = '⛔️ No number!';

    // When number is under 0 or higher than 21
  } else if (guess < 0 || guess > 21) {
    $message.textContent = 'The number must be between 1 and 20!';

    //When player wins
  } else if (guess === secretNumber) {
    const $number = document.querySelector('.number');

    $message.textContent = '🎉 Correct Number!';
    $body.style.backgroundColor = '#60B347';
    $number.style.width = '30rem';
    $number.textContent = secretNumber;

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      $message.textContent = '📈 Too high!';
      score--;
      $score.textContent = score;
    } else {
      loseGame();
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      $message.textContent = '📉 Too low!';
      score--;
      $score.textContent = score;
    } else {
      loseGame();
    }
  }
});
