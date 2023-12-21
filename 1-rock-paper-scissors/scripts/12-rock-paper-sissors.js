let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  loses : 0,
  ties : 0
};
  // default operator
updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove(); //we consider playermove as computermove because it's autoplay
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('Scissors');
});

// adding keydown to play game
document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    playGame('Rock');
  }
  else if(event.key === 'p'){
    playGame('Paper');
  }
  else if(event.key === 's'){
    playGame('Scissors');
  }
});

//1- function to play the game
function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result;
  if(playerMove === 'Scissors'){
    
    if(computerMove === 'Rock'){
      result = 'You lose.';
    }
    else if(computerMove === 'Paper'){
      result = 'You win.';
    }
    else if(computerMove === 'Scissors'){
      result = 'Tie.';
    }
    
  }else if(playerMove === 'Paper'){  

    if(computerMove === 'Rock'){
      result = 'You win.';
    }
    else if(computerMove === 'Paper'){
      result = 'Tie.';
    }
    else if(computerMove === 'Scissors'){
      result = 'You lose.';
    }

  }else if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
      result = 'Tie.';
    }
    else if(computerMove === 'Paper'){
      result = 'You lose.';
    }
    else if(computerMove === 'Scissors'){
      result = 'You win.';
    }
  }
  
  if(result === 'You win.'){
    score.wins+=1;
    //score.wins = score.wins +1;
  }
  else if (result === 'You lose.'){
    score.loses+=1;
  }
  else if(result === 'Tie.'){
    score.ties+=1;
  }
  
  localStorage.setItem('score',JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = `${result}`;   //display the result to web page using quary selector
  document.querySelector('.js-moves').innerHTML = 
  `You <img src="images/${playerMove}-emoji.png" class="move-icon" alt="yourpick">
  <img src="images/${computerMove}-emoji.png" class="move-icon" alt="computerpick">
  Computer`;  
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} Losses : ${score.loses} Ties : ${score.ties}`;
}
//2-function to pick random/computer move
function pickComputerMove(){
  const randomNumber = Math.random(); //selecting a random number between 0-1

  let computerMove;
  if (randomNumber >= 0 && randomNumber <= 1/3){
    computerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber <= 2/3){
    computerMove = 'Paper';
  }
  else if (randomNumber >= 2/3 && randomNumber <= 1){
    computerMove = 'Scissors';
  }
  
  return computerMove;
}