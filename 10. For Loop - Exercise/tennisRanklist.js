function tennisRankList(params) {
    let tournamentsCount = Number(params[0]);
    let startPoints = Number(params[1]);
    let totalPoints = 0;
    let winner = 0;

    for (let index = 2; index < params.length; index++) {
        let stage = params[index];
        switch (stage) {
            case "W":
                totalPoints += 2000;
                winner++;
                break;
            case "F":
                totalPoints += 1200;
                break;
            case "SF":
                totalPoints += 720;
                break;
        }
    }
    let finalPoints = startPoints + totalPoints;
    let averagePoints = totalPoints / tournamentsCount;
    let winnerPercent = (winner / tournamentsCount) * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winnerPercent.toFixed(2)}%`);
}
tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]) 