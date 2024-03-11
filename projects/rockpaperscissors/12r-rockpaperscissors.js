
let score=JSON.parse(localStorage.getItem('score')) || {
  Wins:0,
  Losses:0,
  Tie:0
  }; 


updateScore();


function pickcomputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

let isAutoPlaying=false;
let intervalId;

function autoplay(){
  if (!isAutoPlaying){
    intervalId=setInterval(function(){
      const playermove= pickcomputerMove();
      pickuserMove(playermove);
    },1000);
    isAutoPlaying=true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
  
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  pickuserMove('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  pickuserMove('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  pickuserMove('scissors')
});

document.querySelector('.auto-play').addEventListener('click',()=>{
  autoplay();
});

document.querySelector('.reset-button').addEventListener('click',()=>{
  // resetScore();
  confirmation();
});

function confirmation(){
  document.querySelector('.div-class').innerHTML=`Are you sure want to reset the score?
  <button class="yes-button">Yes</button>
  <button class="no-button">No</button>`;

  document.querySelector('.yes-button').addEventListener('click',()=>{
    resetScore();
    document.querySelector('.div-class').innerHTML='';
  });

  document.querySelector('.no-button').addEventListener('click',()=>{
    document.querySelector('.div-class').innerHTML='';
  });
}


function resetScore(){
  score.Wins=0;
  score.Losses=0;
  score.Tie=0;
  localStorage.removeItem('score');
  updateScore();
};

document.body.addEventListener('keydown',(event)=>{
  if (event.key==='r'){
    pickuserMove('rock');
  }
  else if (event.key==='p'){
    pickuserMove('paper');
  }
  else if (event.key==='s'){
    pickuserMove('scissors');
  }
  else if (event.key==='a'){
    autoplay();
  }
  else if (event.key==='Backspace'){
    confirmation();
  }
});


function pickuserMove(playerMove){
  let result='';
  const computerMove=pickcomputerMove();

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  

  if (result==='You win.'){
    score.Wins+=1;
  }
  else if(result==='You lose.'){
    score.Losses+=1;
  }
  else {
    score.Tie+=1
  }

  localStorage.setItem('score',JSON.stringify(score));

  
  updateScore();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-move').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="icon">
  <img src="images/${computerMove}-emoji.png" class="icon"> Computer`;

};
  
function updateScore(){
  document.querySelector('.js-score').innerHTML=`Wins:${score.Wins} Losses:${score.Losses} Tie:${score.Tie}`;
}

