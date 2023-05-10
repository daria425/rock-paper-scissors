const myArray=[
    "rock",
    "paper",
    "scissors"
];

function computerChoice() {
const randomIndex= Math.floor(Math.random()*myArray.length);
const choice = myArray[randomIndex];
return choice;}

function playRound(computerSelection, playerSelection) {
    console.log(computerSelection);
    if (computerSelection===playerSelection.toLowerCase()) {
        return draw;}
    else if (computerSelection==="rock"&&playerSelection.toLowerCase()==="scissors") {return computerWin;}
    else if (computerSelection==="rock"&&playerSelection.toLowerCase()==="paper") {return playerWin;}
    else if (computerSelection==="paper"&&playerSelection.toLowerCase()==="rock") {return computerWin;}
    else if (computerSelection==="paper"&&playerSelection.toLowerCase()==="scissors") {return playerWin;}
    else if (computerSelection==="scissors"&&playerSelection.toLowerCase()==="paper") {return computerWin}
    else if (computerSelection==="scissors"&&playerSelection.toLowerCase()==="rock") {return playerWin;}
    else {return false}}
 
    const playerWin='Player wins round';
    const computerWin='Computer wins round';
    const draw="Its a draw!";

    let playerPoints=0;
let computerPoints=0;



for(let i=0;i<=5;i++) {function game() {
let playerSelection= prompt('rock, paper,scissors?',);
const computerSelection=computerChoice();
let result=playRound(computerSelection, playerSelection);
console.log(score(result));
alert(result + "//" + " " + "Your score:" + playerPoints + "|" + "Computer score:" + computerPoints);
return result;
}

console.log(game());}
winner();

function score (result) {
    if (result===playerWin){
     playerPoints++;
     console.log(playerPoints, computerPoints);
     return {playerPoints, computerPoints}}
     else if (result===computerWin) {
        computerPoints++;
    console.log(playerPoints, computerPoints)
    return {playerPoints, computerPoints}}
    else {console.log(playerPoints, computerPoints);
        return {playerPoints,computerPoints}}};  



function winner() {
    if (playerPoints==computerPoints) {
        alert ('no winner :/');
    }
    else if (playerPoints>computerPoints) {
        alert ('u have won :)');}
    else if (playerPoints<computerPoints) {
        alert ('u lost :(')
    }
}



//console.log(computerChoice());

  


    //console.log(computerChoice());}
//paper beats rock
//rock beats scissors
//scissors beat paper
//Pseudocode: Player inputs choice into prompt window, computer makes choice. 
//If the player choice was paper and computer choice was rock, message displayed: You lose!
//