function vacation(params) {
    let neededMoney = Number(params[0]);
    let availableMoney = Number(params[1]);
    let completedDays = 0;
    let seriesDays = 0;
    let index = 2;

    while (availableMoney < neededMoney) {
        completedDays++;
        let operation = params[index];
        index++;
        let sum = Number(params[index]);
        if (operation === "spend") {
            availableMoney -= sum;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            seriesDays++;
            if (seriesDays === 5) {
                console.log("You can't save the money.");
                console.log(completedDays);
                break;
            }
        } else if (operation === "save") {
            seriesDays = 0;
            availableMoney += sum;
        }
        index++;
    }
    if (availableMoney >= neededMoney){
        console.log(`You saved the money for ${completedDays} days.`);
    }
}
vacation(["250", 

"150", 

"spend", 

"50", 

"spend", 

"50", 

"save", 

"100", 

"save", 

"100"]) 