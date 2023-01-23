function basketballTournament(params) {
    let index = 0;
    let command = params[index];
    let win = 0;
    let lost = 0;
    while (command !== "End of tournaments") {
        let tournament = params[index];
        let matches = Number(params[++index]);
        let matchesCounter = 0;
        for (let i = 1; i <= matches; i++) {
            matchesCounter++;
            let firstScore = Number(params[++index]);
            let secondScore = Number(params[++index]);
            if (firstScore > secondScore) {
                win++;
                console.log(`Game ${matchesCounter} of tournament ${tournament}: win with ${firstScore - secondScore} points.`);
            } else {
                lost++;
                console.log(`Game ${matchesCounter} of tournament ${tournament}: lost with ${secondScore - firstScore} points.`);
            }
        }
        command = params[++index];
    }
    let allTournament = win + lost;
    console.log(`${(win / allTournament * 100).toFixed(2)}% matches win`)
    console.log(`${(lost / allTournament * 100).toFixed(2)}% matches lost`);
}
basketballTournament([
    "Dunkers",
    "2", 
    "75", 
    "65", 
    "56", 
    "73", 
    "Fire Girls", 
    "3", 
    "67", 
    "34", 
    "83", 
    "98", 
    "66", 
    "45", 
    "End of tournaments" 
])