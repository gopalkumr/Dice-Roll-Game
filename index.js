let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", function () {
  let diceNum = Math.floor(Math.random() * 6 + 1);

  if (player1Turn === true) {
    player1Dice.textContent = diceNum;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    player1Score = player1Score + diceNum;
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Dice.textContent = diceNum;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
    player2Score = player2Score + diceNum;
    player2Scoreboard.textContent = player2Score;
  }

  if (player1Score >= 20) {
    message.textContent = "player 1 has won!! 🎉";
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = "player 2 has won!! 🎊";
    showDisplayButton();
  }
  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  console.log("reset");
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  message.textContent = "player 1 turn";
  player1Score = 0;
  player2Score = 0;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Turn = true;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Dice.classList.add("active");
  player2Dice.classList.remove("active");
}
