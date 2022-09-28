'use strict';
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const inputGuess = document.querySelector('.guess');
const questionNumber = document.querySelector('.number');
const changingText = document.querySelector('.message');
const scoreValue = document.querySelector('.score');
const highscore = document.querySelector('.highscore')

let number = Math.trunc(Math.random() * 20 ) +1;
let score = 20;


btnCheck.addEventListener('click', function() {
    let guess = inputGuess.value;
    if (!guess) {
        changingText.innerHTML = 'Please, type a number.';
    } else if (guess > number) {
        changingText.innerHTML = 'Too high!!!';
        score--;
        if (score < 1) {
            document.body.style.backgroundColor = 'red';
            changingText.innerHTML = 'Game over!'
            scoreValue.textContent = 0;
        }
        scoreValue.innerText = score;
    } else if (guess < number) {
        changingText.innerHTML = 'Too low !!!';
        score--;
        if (score < 1) {
            document.body.style.backgroundColor = 'red';
            changingText.innerHTML = 'Game over!'
            scoreValue.textContent = 0;
        }
        scoreValue.innerText = score;
    } else if (guess == number) {
        changingText.innerHTML = 'Spot On!!!';
        document.body.style.backgroundColor = 'green';
        highscore.innerText = score;

    }
});

btnAgain.addEventListener('click', function () {
    score = 20;
    document.body.style.backgroundColor = '#222';
    changingText.innerHTML = 'Start guessing...';
    scoreValue.innerText = 20;
    number = Math.trunc(Math.random() * 20 ) +1;
});


