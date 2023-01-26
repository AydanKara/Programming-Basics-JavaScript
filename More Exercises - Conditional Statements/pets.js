function pets(params) {
    let days = Number(params[0]);
    let foodLeft = Number(params[1]);
    let foodDog = Number(params[2]);
    let foodCat = Number(params[3]);
    let foodTurtle = Number(params[4]);

    let dogNeed = days * foodDog;
    let catNeed = days * foodCat;
    let turtleNeed = days * (foodTurtle / 1000);
    let totalNeed = dogNeed + catNeed + turtleNeed;
    let restFood = 0;

    if (totalNeed <= foodLeft) {
        restFood = foodLeft - totalNeed;
        console.log(`${Math.floor(restFood)} kilos of food left.`)
    } else {
        restFood = totalNeed - foodLeft;
        console.log(`${Math.ceil(restFood)} more kilos of food are needed.`)
    }


}
pets(["2","10","1","1","1200"])