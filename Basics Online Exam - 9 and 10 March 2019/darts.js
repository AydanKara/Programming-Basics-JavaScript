function darts(params) {

    let player = params[0];
    let startPoints = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let index = 1;
    let command = params[index];

    while (command !== "Retire") {
        let shot = params[index];
        let points = Number(params[++index]);
        switch (shot) {
            case "Single": points = points * 1; break;
            case "Double": points = points * 2; break;
            case "Triple": points = points * 3; break;
        }
        startPoints -= points;
        if (startPoints < 0) {
            unsuccessfulShots++;
            startPoints += points;
        } else if (startPoints > 0) {
            successfulShots++;
        } else {
            successfulShots++;
            console.log(`${player} won the leg with ${successfulShots} shots.`);
            return;
        }
        command = params[++index];
    }
    console.log(`${player} retired after ${unsuccessfulShots} unsuccessful shots.`)
}
darts([
    "Rob Cross",
    "Triple", 
    "20", 
    "Triple", 
    "20", 
    "Triple", 
    "20", 
    "Triple", 
    "20", 
    "Double", 
    "20", 
    "Triple", 
    "20", 
    "Double", 
    "5", 
    "Triple", 
    "10", 
    "Double", 
    "6", 
    "Retire", 
])