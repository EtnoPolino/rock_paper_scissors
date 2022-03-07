# rock_paper_scissors

first javascript programm built from scratch. The idea is to develop a rock paper scissors game against the computer.

function computerplay :
    plan : there will be an constant array with the only 3 possibility of rock, paper or scissor
           then i'll take the length of my array and generated a random number within from 0 to my array length
           since that number generated will be the index of my array, then, i'll just print array with that index on the console.log

    peudocode : 
        - declaration of our constant variable "computeChoice" array of string R, P, S.
        - declaration of our constant variable "randomIndex" a random number generated from 0 to array length
        - return our array "computeChoice" with our randomIndex.

function playerRound : 
    plan :
        - if playerSelection is rock and computerSelection is paper
          then return "You lose ! Paper beats Rocks"
        - if playerSelection is rock and computerSelection is scissors
          then return "You win ! Rock beats Scissors"
        - if playerSelection is paper and computerSelection is rock
          then return "You win ! Paper beats Rocks"
        - if playerSelection is paper and computerSelection is scissors
          then return "You lose ! Scissors beats Rock"
        - if playerSelection is scissors and computerSelection is rock
          then return "You lose ! Rock beats Scissors"
        - if playerSelection is scissors and computerSelection is paper
          then return "You win ! Scissors beats Paper"
        else
            we return it's a tie.


