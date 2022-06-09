const buttons = document.querySelectorAll('main #left-side button');
const resultGame = document.querySelector('#result-game');
const Scomputer = document.querySelector('#score-computer'); //score computer
const Suser = document.querySelector('#score-player');  //score user
const resultFinal = document.querySelector('#resultat-finale');
const reset = document.querySelector('#button-reset');
let scoreComputer = 0, scoreUser = 0, scoreTie = 0;

buttons.forEach(button => {
    button.addEventListener('click', playGame)
});                       

reset.addEventListener('click', resetGame);


/* ---------------------------------------------------------------------------------------------------------------

                                                Fonctions

------------------------------------------------------------------------------------------------------------------ */

function computerplay(){
    const computeChoice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random()*computeChoice.length);
    return computeChoice[randomIndex];
}

function playGame(e){
    const computerChoice = computerplay();
    const play = playRound(e.target.id, computerChoice);
    
    if(play.includes('You win')){
        scoreUser++;
        Suser.innerText = `${scoreUser}`;
    } else if (play.includes('You lose')){
        scoreComputer++;
        Scomputer.innerText = `${scoreComputer}`;
    }

    if(scoreUser === 5 && scoreComputer < 5){
        resultGame.innerText = '...';
        resultFinal.style.color='green';
        resultFinal.innerText = `GREAT ! You won the game (^^)`;
        disableButtons()
    }else if (scoreComputer === 5 && scoreUser < 5){
        resultGame.innerText = '...';
        resultFinal.style.color='red';
        resultFinal.innerText = `TOO BAD ! You lost the game :-(`;
        disableButtons()
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === 'rock'){
        if (computerSelection === 'Scissor'){
            resultGame.innerText = 'You win ! rock beats scissor';
            return 'You win ! rock beats scissor';
        } else if (computerSelection === 'Paper'){
            resultGame.innerText = 'You lose ! paper beats rock';
            return 'You lose ! paper beats rock';
        } else{
            resultGame.innerText = 'Tie...';
            return 'Tie...';
        }
    } else if(playerSelection === 'paper'){
        if (computerSelection === 'Rock'){
            resultGame.innerText = 'You win ! paper beats rock';
            return 'You win ! paper beats rock';
        } else if (computerSelection === 'Scissor'){
            resultGame.innerText = 'You lose ! scissor beats paper';
            return 'You lose ! scissor beats paper';
        } else{
            resultGame.innerText = 'Tie...';
            return 'Tie...';
        }
    } else if(playerSelection === 'scissor'){
        if (computerSelection === 'Paper'){
            resultGame.innerText = 'You win ! scissor beats paper';
            return 'You win ! scissor beats paper';
        } else if (computerSelection === 'Rock'){
            resultGame.innerText = 'You lose ! rock beats scissor';
            return 'You lose ! rock beats scissor';
        } else{
            resultGame.innerText = 'Tie...';
            return 'Tie...';
        } 
    }
}

function disableButtons(){
    reset.disabled = false;

    buttons.forEach(button => {
        if(button.id === 'rock' || button.id === 'paper' || button.id === 'scissor'){
            button.disabled = true;
        }
    });
}

function resetGame(){
    buttons.forEach(button => {
        if(button.id === 'rock' || button.id === 'paper' || button.id === 'scissor'){
            button.disabled = false;
        }
    });

    scoreComputer = 0; 
    scoreUser = 0; 
    scoreTie = 0;

    Suser.innerText = `0`;
    Scomputer.innerText = `0`;
    resultGame.innerText = '';
    resultFinal.innerText = '';

}