const moves = ["Rock", "Paper", "Scissors"];

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
  if (playerChoice === computerChoice) return null;
  if (playerChoice === moves[0]) return playRock(computerChoice);
  if (playerChoice === moves[1]) return playPaper(computerChoice);
  if (playerChoice === moves[2]) return playScissors(computerChoice);
  else return undefined;
}

function playRock(computerChoice) {
  if (computerChoice === moves[1]) return "computer";
  if (computerChoice === moves[2]) return "human";
  else return undefined;
}

function playPaper(computerChoice) {
  if (computerChoice === moves[0]) return "human";
  if (computerChoice === moves[2]) return "computer";
  else return undefined;
}

function playScissors(computerChoice) {
  if (computerChoice === moves[0]) return "computer";
  if (computerChoice === moves[1]) return "human";
  else return undefined;
}
