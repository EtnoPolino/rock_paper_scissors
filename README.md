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

    pseudocode : 
        - declaration a constante variable as an array : choice
        - declaration of our parameter playerSelection as lowercase() : lwcPlayerSelection
                select case (playerSelection)
                    case(rock) : 
                        if computerSelection equal Scissors then print "You win ! Rock beats Scissors"
                        if computerSelection equal Paper then print "You lose ! Paper beats Rocks"
                    case(paper) :
                        if computerSelection equal Rock then print "You win ! Paper beats Rock"
                        if computerSelection equal Scissors then print "You lose ! Scissors beats paper"
                    case(scissors) :
                        if computerSelection equal Paper then print "You win ! Scissors beats paper"
                        if computerSelection equal Rock then print "You lose ! Rock beats Scissors"
                    default :
                        print "it's a tie

function game() :
    plan : 
        Counting the number of game we did from 5 games in total,
        for each game played we will register in a array if we win, lose or tie
        then we will comare le length of these win, lose, tie array to determine who won the five games
            the one with the most length higher than the rest will determine who won.


    pseudocode :
        - declaration array number of games : "play"
        - declaration array of wins : "win"
        - declaration array of lose : "lose"
        - declaration array of tie : "tie"

        for i from 0 to 5 then
            - declaration the constant of computerplay
            - play the game with function playerRound
                if play contains the word "you win" then array win take value
                if play contains the word "you lose" then array lose take value
                if play contains the word "tie" then array tie take value

        if length(win) > length(lose) and length(win) > length(tie) then "you won the game"
        if length(lose) > length(win) and length(lose) > length(tie) then "you lost the game"
        if length(tie) > length(win) and length(tie) > length(lose) then "it's a tie.. no one won"

