
function computerplay(){
    const computeChoice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*computeChoice.length);
    return computeChoice[randomIndex];
}

function playRound(playerSelection, computerSelection){
    const lwcPlayerSelection = playerSelection.toLowerCase();

    switch(lwcPlayerSelection){        
        case "rock":
            if (computerSelection === "Scissors"){
                return "You win ! Rock beats Scissors";
 
            } else if (computerSelection === "Paper"){
                return "You lose ! Paper beats Rocks";
            } else{
                return "it's a tie...";  
            }
        case "paper":
            if (computerSelection === "Rock"){
                return "You win ! Paper beats Rock";
            } else if (computerSelection === "Scissors"){
                return "You lose ! Scissors beats paper";
            } else{
                return "it's a tie...";  
            }
        case "scissors":
            if (computerSelection === "Paper"){
                return "You win ! Scissors beats paper";
            } else if (computerSelection === "Rock"){
                return "You lose ! Rock beats Scissors";
            } else{
                return "it's a tie...";  
            }
    }
}


function game(){
    const play = [];  // the number of game played
    let scoreComputer = 0, scoreTie = 0, scoreUser = 0;


 /* doing the numbers of games */
    for (let i = 0; i < 5; i++){
        const computerSelection = computerplay();
        play[i] = playRound("SCISSORS", computerSelection);

        if (play[i].includes("You win")){
            scoreUser = scoreUser + 1;
            console.log(play[i]); 
        } else if (play[i].includes("You lose")){
            scoreComputer = scoreComputer +1;
            console.log(play[i]);
        }else{
            scoreTie = scoreTie + 1;
            console.log(play[i]); 
        }        
    }
    console.log("---------------------------------");
    if (scoreComputer > scoreUser){
        console.log(`${scoreUser} good answers against ${scoreComputer} for the computer : you lost the game`);
    } else if (scoreComputer < scoreUser){
        console.log(`${scoreUser} good answers against ${scoreComputer} for the computer : you won the game`);
    } else {
        console.log("it is a tie... whatever");
    }
 /* now we create array from win, lose, tie with non empty index.. Use of the function filter()*/
/*   const fil_win = win.filter(Boolean);
   const fil_lose = lose.filter(Boolean);
   const fil_tie = tie.filter(Boolean);

    if(fil_win.length > fil_lose.length){
        return "You won the game"; 
    } else if (fil_lose.length > fil_win.length){
        return "You lost the game";
    } else {
        return "it's a tie.. no one won";
    }*/
}

game();