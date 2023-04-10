const moves = ["Rock", "Paper", "Scissors"];
const human = "Human"
const computer = "Computer";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return moves[index];
}

function playRound(playerChoice, computerChoice) {
  // Delete previous set result.
  const gameOverDiv = document.querySelector('#game-over');
  gameOverDiv.textContent = "";

  // Format the player's choice so it matches the format of `moves`.
  playerChoice = formatChoice(playerChoice);
  return determineWinner(playerChoice, computerChoice);
}

function formatChoice(choice) {
  let firstChar = choice.substr(0, 1).toUpperCase();
  let remainder = choice.substr(1).toLowerCase();
  return `${firstChar}${remainder}`;
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return null;
  if (playerChoice === moves[0]) return playRock(computerChoice);
  if (playerChoice === moves[1]) return playPaper(computerChoice);
  if (playerChoice === moves[2]) return playScissors(computerChoice);
  else return undefined;
}

function playRock(computerChoice) {
  if (computerChoice === moves[1]) return computer;
  if (computerChoice === moves[2]) return human;
  else return undefined;
}

function playPaper(computerChoice) {
  if (computerChoice === moves[0]) return human;
  if (computerChoice === moves[2]) return computer;
  else return undefined;
}

function playScissors(computerChoice) {
  if (computerChoice === moves[0]) return computer;
  if (computerChoice === moves[1]) return human;
  else return undefined;
}

function game() {
  humanScore = 0;
  computerScore = 0;

  const playerChoice = prompt("Make a move. Choices are \"rock\", \"paper\", and \"scissors\".");
  const winner = playRound(playerChoice, getComputerChoice());
  updateScores(winner);

  console.log(`Final result: Human - ${humanScore}, Computer - ${computerScore}`);
}

function updateScores(winner) {
  let message = "";

  if (winner === null) {
    message += "Round resulted in a tie.";
  } else if (winner === human) {
    message += "Human wins the round.";
    humanScore++;
  } else if (winner === computer) {
    message += "Computer wins the round.";
    computerScore++;
  } else {
    message += "Something went terribly wrong.";
  }

  message += `\r\nScores\r\nHuman ${humanScore}, Computer ${computerScore}`;
  checkGameOver(winner);
  displayRoundResult(message);
}

function checkGameOver(winner) {
  if (humanScore === 5 || computerScore === 5) {
    humanScore = 0;
    computerScore = 0;
    const gameOverDiv = document.querySelector('#game-over');
    gameOverDiv.textContent = `${winner} wins!`;
  }
}

function displayRoundResult(message) {
  const roundResult = document.querySelector('#round');
  roundResult.style['white-space'] = 'pre';
  roundResult.textContent = message;
}

// Play the round by clicking a move button.
const btns = document.querySelectorAll('.btn-grp');
btns.forEach(btn => {
  btn.addEventListener('click', function() {
    playRoundWithUpdate(btn.textContent);
  });
});

function playRoundWithUpdate(playerMove) {
  winner = playRound(playerMove, getComputerChoice());
  updateScores(winner);
}
