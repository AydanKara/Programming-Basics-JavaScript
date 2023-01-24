function easterEggsBattle(params) {
    let firstPlayer = Number(params[0]);
    let secondPlayer = Number(params[1]);
    let index = 2;
    let command = params[index];

    while (command !== "End") {
        let winner = command;
        if (winner === "one") {
            secondPlayer--;
        } else if (winner === "two") {
            firstPlayer--;
        }
        if (firstPlayer == 0 || secondPlayer == 0) {
            break;
        }
        index++;
        command = params[index];
    }
    if (firstPlayer == 0) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`);
    } else if (secondPlayer == 0) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`);
    } else if (command === "End") {
        console.log(`Player one has ${firstPlayer} eggs left.`);
        console.log(`Player two has ${secondPlayer} eggs left.`);
    }
}
easterEggsBattle([
    "5", 
    "4", 
    "one", 
    "two", 
    "one", 
    "two", 
    "two", 
    "End"])