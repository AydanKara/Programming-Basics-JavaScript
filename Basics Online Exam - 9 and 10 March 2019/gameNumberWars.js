function gameNumberWars(params) {
    let firstPlayer = params[0];
    let secondPlayer = params[1];
    let index = 2;
    let command = params[index];
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while (command !== "End of game") {
        let firstPlayerCard = Number(params[index]);
        let secondPlayerCard = Number(params[++index]);
        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else {
            console.log("Number wars!");
            firstPlayerCard = Number(params[++index]);
            secondPlayerCard = Number(params[++index]);
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayer} is winner with ${firstPlayerPoints} points`)
            } else if (secondPlayerCard > firstPlayerCard) {
                console.log(`${secondPlayer} is winner with ${secondPlayerPoints} points`)
            }
            return;
        }
        command = params[++index];
    }
    console.log(`${firstPlayer} has ${firstPlayerPoints} points`);
    console.log(`${secondPlayer} has ${secondPlayerPoints} points`);
}
gameNumberWars([
        "Aleks",
        "Georgi",
        "4",
        "5",
        "3",
        "2",
        "4",
        "3",
        "4",
        "4",
        "5",
        "2"])

        /*
        Aleks 

Georgi 

4 

5 

3 

2 

4 

3 

4 

4 

5 

2 
        */