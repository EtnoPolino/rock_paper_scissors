
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
            }
            break;
        case "paper":
            if (computerSelection === "Rock"){
                return "You win ! Paper beats Rock";
            } else if (computerSelection === "Scissors"){
                return "You lose ! Scissors beats paper";
            }
            break;
        case "scissors":
            if (computerSelection === "Paper"){
                return "You win ! Scissors beats paper";
            } else if (computerSelection === "Rock"){
                return "You lose ! Rock beats Scissors";
            }
            break;
        default :
                return "it's a tie...";  
    } 
}
