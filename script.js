const myArray = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const choice = myArray[randomIndex];
  return choice;
}
let img = document.createElement("img");
function hide() {
  img.classList.add("hidden");
}
function unhide() {
  img.classList.remove("hidden");
}
function playRound(playerSelection) {
  let computerSelection = computerChoice();
  setTimeout(unhide, 500);
  if (computerSelection === "rock" && playerSelection === "rock") {
    img.src = "images/rock.png";
    document.getElementById("computer-choice").appendChild(img);
    return draw;
  } else if (computerSelection === "paper" && playerSelection === "paper") {
    img.src = "images/paper.png";
    document.getElementById("computer-choice").appendChild(img);
    return draw;
  } else if (
    computerSelection === "scissors" &&
    playerSelection === "scissors"
  ) {
    img.src = "images/scissors.png";
    document.getElementById("computer-choice").appendChild(img);
    return draw;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerPoints++;
    img.src = "images/rock.png";
    document.getElementById("computer-choice").appendChild(img);
    return computerWin;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerPoints++;
    img.src = "images/rock.png";
    document.getElementById("computer-choice").appendChild(img);
    return playerWin;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerPoints++;
    img.src = "images/paper.png";
    document.getElementById("computer-choice").appendChild(img);
    return computerWin;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerPoints++;
    img.src = "images/paper.png";
    document.getElementById("computer-choice").appendChild(img);
    return playerWin;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerPoints++;
    img.src = "images/scissors.png";
    document.getElementById("computer-choice").appendChild(img);
    return computerWin;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerPoints++;
    img.src = "images/scissors.png";
    document.getElementById("computer-choice").appendChild(img);
    return playerWin;
  } else {
    return false;
  }
}
const playerWin = "Player wins round!";
const computerWin = "Computer wins round!";
const draw = "Its a draw!";

const winnerDisplay = document.querySelector(".winner-display");
const reloadBtn = document.querySelector(".reload");
function winner() {
  if (computerPoints === 5 && playerPoints < computerPoints) {
    winnerDisplay.textContent =
      "Computer won the game, press the button to play again";
    disableBtns();
    reloadBtn.style.display = "block";
  } else if (playerPoints === 5 && playerPoints > computerPoints) {
    winnerDisplay.textContent = "You won! Press the button to play again";
    disableBtns();
    reloadBtn.style.display = "block";
  }
}
reloadBtn.addEventListener("click", function () {
  window.location.reload();
});

const resultContainer = document.getElementById("result-container");
const Buttons = document.querySelectorAll("button:not(.reload)");
console.log(Buttons);
const playerScore = document.getElementById("yours");
const computerScore = document.getElementById("computers");
Buttons.forEach((button) => {
  button.addEventListener("click", function () {
    hide();
    let result = playRound(button.value);
    setTimeout(() => {
      resultContainer.innerHTML = result;
      playerScore.textContent = `Your score: ${playerPoints}`;
      computerScore.textContent = `Computer score: ${computerPoints}`;
      winner(computerPoints, playerPoints);
    }, 500);
  });
});

function disableBtns() {
  for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].disabled = true;
  }
}
