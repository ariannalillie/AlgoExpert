// Return name of winning team
// You recieve 3 point every time you win

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  currentBestTeam = '';
  let scores = {[currentBestTeam]: 0};

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
  }

  // loop through results array and competitions arr to see which team won



};

// Represents all of the competitions in the tournament
let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]

// Represents the winner of each of the competitions
// (0 means away team won, 1 means home team won)
let results = [0, 0, 1]

console.log(tournamentWinner(competitions, results)) // Should return python as they won twice
