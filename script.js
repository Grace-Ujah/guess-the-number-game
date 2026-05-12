'use strict';
/*
console.log(document.querySelector('message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🥳'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('guess').value)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const message = function(msg){
    document.querySelector('.message').textContent = msg
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

//When there is no input

    if(!guess){
message('No number!⛔')

        //When player wins
    }else if(guess === secretNumber){
        message('Correct Number!🥳');

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
 
    }else if(guess !== secretNumber){
if(score > 1){
message(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
     score--;
     document.querySelector('.score').textContent = score;
      }else{
        message('You lost the game!😔');
        document.querySelector('.score').textContent = 0;
      }
  
}
})

document.querySelector('.again').addEventListener('click', function(){
    score = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;

   message('Start guessing');
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
})