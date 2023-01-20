function nameGame(params) {
    let index = 0;
    let command = params[index];
    let bestPoints = 0;
    let winner = "";
    while (command !== "Stop") {
        let name = params[index];
        let points = 0;
        let n = 0;
        for (let i = 0; i < name.length; i++) {
            let number = Number(params[++index]);
            let nameChar = name.charCodeAt(n);
            if (number == nameChar) {
                points += 10;
            } else {
                points += 2;
            }
            n++;
        }
        if (points >= bestPoints) {
            bestPoints = points;
            winner = name;
        }
        command = params[++index];
    }
    console.log(`The winner is ${winner} with ${bestPoints} points!`);
}
nameGame([
    "Ivan", 
    "73", 
    "20", 
    "98", 
    "110", 
    "Ivo", 
    "80", 
    "65", 
    "87", 
    "Stop"
])

//for (let i = 0; i < name.length; i++) {
//    let number = Number(params[++index]);
//    let nameChar = name.charCodeAt(n);
//    if (number == nameChar) {
//        points += 10;
//    } else {
//        points += 2;
//    }
//    n++;
//}