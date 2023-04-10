const moves = ["Rock", "Paper", "Scissors"];
const human = "human"
const computer = "computer";

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return moves[index];
}

function playRound(playerChoice, computerChoice) {
  // First, format the player's choice so it matches the format of `moves`.
  playerChoice = formatChoice(playerChoice);
  return determineWinner(playerChoice, computerChoice);
}

function formatChoice(choice) {
  let firstChar = choice.substr(0, 1).toUpperCase();
  let remainder = choice.substr(1).toLowerCase();
  return `${firstChar}${remainder}`;
}

function determineWinner(playerChoice, computerChoice) {
  console.log(`Human played ${playerChoice} and Computer played ${computerChoice}.`);
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
  if (winner === null) {
    console.log("Round resulted in a tie. No updates to the scores will be made.");
  } else if (winner === human) {
    console.log("Human wins the round.");
    humanScore++;
  } else if (winner === computer) {
    console.log("Computer wins the round.");
    computerScore++;
  } else {
    console.log("Something went terribly wrong. No updates to the scores will be made.");
  }
}
