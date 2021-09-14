function tournamentWinner(competitions, results) {
let newObj = {}
let result;

for (let i = 0; i < competitions.length; i++) {
     if (!newObj[competitions[i]]) newObj[competitions[i]] = 0
     console.log(newObj)
     for (let i = 0; i < results.length; i++) {
         if (results[i] === 0) {
             
         }

    }
}

}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]

let results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))
