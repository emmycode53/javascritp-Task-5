
const playerScore1 = document.getElementById("score--0");
const playerScore2 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new'); 
const player1 = document.querySelector('.player--0'); 
const player2 = document.querySelector('.player--1'); 

const player0ELL=document.querySelector('.player--0');
const player1ELL=document.querySelector('.player--1');



let currentScore = 0;
let activePlayer = 1; 
let scores = [0, 0]; 
let gameActive = true;

playerScore1.textContent = 0;
playerScore2.textContent = 0;
currentScore1.textContent = 0;
currentScore2.textContent = 0;


const dice = document.querySelector('.dice');
dice.classList.add('hidden');


function switchPlayer() {
    currentScore = 0;
    if (activePlayer === 1) {
        currentScore1.textContent = currentScore;
        activePlayer = 2;
    } else {
        currentScore2.textContent = currentScore;
        activePlayer = 1;
        player0ELL.classList.toggle('player--active');
        player1ELL.classList.toggle('player--active');
    }

}


function checkWinner() {
    if (scores[0] >= 100) {
        player1.classList.add('player--winner');
        player1.style.backgroundColor = 'green';
        document.getElementById('name--0').textContent='player 1 is the winner';
        gameActive = false;
    } else if (scores[1] >= 100) {
        player2.classList.add('player--winner');
        document.getElementById('name--1').textContent='player 2 is the winner';
        player2.style.backgroundColor = 'green';
        gameActive = false;
    }
}


rollBtn.addEventListener('click', function() {
    if (gameActive) {
        const number = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${number}.png`;
        
        if (number === 1) {
            
    if (activePlayer === 1) {
                currentScore1.textContent = 0;
            } else {
                currentScore2.textContent = 0;
            }
            switchPlayer();
        } else {
            
            currentScore += number;
            if (activePlayer === 1) {
                currentScore1.textContent = currentScore;
            } else {
                currentScore2.textContent = currentScore;
            }
        }
    }
});


holdBtn.addEventListener('click', function() {
    if (gameActive) {
        
        if (activePlayer === 1) {
            scores[0] += currentScore;
            playerScore1.textContent = scores[0];
        } else {
            scores[1] += currentScore;
            playerScore2.textContent = scores[1];
        }
        
        
        checkWinner();

        
        if (gameActive) {
            switchPlayer();
        }
    }
});


newGameBtn.addEventListener('click', function() {
    
    scores = [0, 0];
    playerScore1.textContent = 0;
    playerScore2.textContent = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    document.getElementById('name--0').textContent='player1'
    document.getElementById('name--1').textContent='player2'
    currentScore = 0;
    activePlayer = 1;
    gameActive = true;
    dice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.style.backgroundColor = '';
    player2.style.backgroundColor = '';})

    