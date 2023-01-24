function easterCompetition(params) {
    let count = Number(params[0]);
    let totalPoints = 0;
    let bakerWithMostPoints = "";
    let mostPoints = 0;
    let index = 1;
    for (let i = 1; i <= count; i++) {
        let bakerName = params[index];
        index++;
        let points = params[index];
        while (points !== "Stop") {
            points = Number(params[index]);
            totalPoints += points;
            index++;
            points = params[index];
        }
        console.log(`${bakerName} has ${totalPoints} points.`);
        if (totalPoints > mostPoints) {
            mostPoints = totalPoints;
            bakerWithMostPoints = bakerName;
            console.log(`${bakerWithMostPoints} is the new number 1!`)
        }
        totalPoints = 0;
        index++;
    }
    console.log(`${bakerWithMostPoints} won competition with ${mostPoints} points!`);
}
easterCompetition([
    "2", 
    "Chef Angelov", 
    "9", "9", "9", "Stop", 
    "Chef Rowe", 
    "10", "10", "10", "10", "Stop"])