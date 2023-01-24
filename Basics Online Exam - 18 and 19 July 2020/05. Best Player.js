function bestPlayer(params) {
    let index = 0;
    let command = params[index];
    let goals = 0;
    let bestPlayer = "";

    while (command !== "END") {
        let player = command;
        let scoredGoals = Number(params[++index]);
        if (scoredGoals > goals) {
            bestPlayer = player;
            goals = scoredGoals;
        }
        if (goals >= 10) {
            break;
        }
        command = params[++index];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`)
    }
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])