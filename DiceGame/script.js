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

//btn to hold/add classes
btnHold.addEventListener('click', function(){
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
 

    if (scores[activePlayer] >= 19) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
        btnHold.disabled = true;
        btnRoll.disabled = true;
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

//btn to reset the game
btnNew.addEventListener('click', function(){
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    player0Score.innerHTML = 0;
    player1Score.innerHTML = 0;
    diceEl.classList.add('hidden');
    btnHold.disabled = false;
    btnRoll.disabled = false;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
});