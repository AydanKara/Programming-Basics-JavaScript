function footballTournament(params) {
    let teamName = params[0];
    let matches = Number(params[1]);
    let index = 2;
    let totalMatches = 0;
    let win = 0;
    let draw = 0;
    let lost = 0;

    if (matches === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else {
        for (let i = 1; i <= matches; i++) {
            let matchResult = params[index];
            if (matchResult === "W") {
                win++;
            } else if (matchResult === "D") {
                draw++;
            } else if (matchResult === "L") {
                lost++;
            }
            index++;
        }
        console.log(`${teamName} has won ${(win * 3) + (draw * 1)} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${win}`);
        console.log(`## D: ${draw}`);
        console.log(`## L: ${lost}`);
        console.log(`Win rate: ${(win * 100 / matches).toFixed(2)}%`);
    }
}
footballTournament([
    "Liverpool",
    "10", 
    "W", 
    "D", 
    "D", 
    "W", 
    "L", 
    "W", 
    "D", 
    "D", 
    "W", 
    "W"
])