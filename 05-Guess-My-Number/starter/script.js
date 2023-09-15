'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').vale);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🤪 This is The Correct number!!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent =
      'Too high number, try again!';
    score = score - 1; // ot its equivalent score --;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low number!!';
    score = score - 1; // ot its equivalent score --;
    document.querySelector('.score').textContent = score;
  }
});
