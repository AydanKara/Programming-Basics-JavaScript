function footballResult(input) {

    let scoreOne = input[0];
    let firstTeam1 = scoreOne.substr(0, 1);
    let secondTeam1 = scoreOne.substr(2);

    let scoreTwo = input[1];
    let firstTeam2 = scoreTwo.substr(0, 1);
    let secondTeam2 = scoreTwo.substr(2);

    let scoreThree = input[2];
    let firstTeam3 = scoreThree.substr(0, 1);
    let secondTeam3 = scoreThree.substr(2);

    let teamWon = 0;
    let teamLost = 0;
    let teamDraw = 0;

    if (firstTeam1 > secondTeam1) {
        teamWon = teamWon + 1;
    } else if (firstTeam1 === secondTeam1){
        teamDraw = teamDraw + 1;
    } else {
        teamLost = teamLost + 1;
    }

    if (firstTeam2 > secondTeam2) {
        teamWon = teamWon + 1;
    } else if (firstTeam2 === secondTeam2){
        teamDraw = teamDraw + 1;
    } else {
        teamLost = teamLost + 1;
    }

    if (firstTeam3 > secondTeam3) {
        teamWon = teamWon + 1;
    } else if (firstTeam3 === secondTeam3){
        teamDraw = teamDraw + 1;
    } else {
        teamLost = teamLost + 1;
    }

    console.log(`Team won ${teamWon} games.`);
    console.log(`Team lost ${teamLost} games.`);
    console.log(`Drawn games: ${teamDraw}`);
    
}
footballResult(["2:0", "0:1", "1:1"])