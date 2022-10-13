'use strict';

const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//starting condition
let scores = [0, 0];
player0Score.innerHTML = 0;
player1Score.innerHTML = 0;
diceEl.classList.add('hidden');
let activePlayer = 0;


let currentScore = 0;

//roll dice function
btnRoll.addEventListener('click', function(){
    let roll = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${roll}.png`;

    if (roll !== 1) {
        currentScore += roll;
        document.querySelector(`#current--${activePlayer}`).innerHTML = currentScore;
    } else {
        document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});