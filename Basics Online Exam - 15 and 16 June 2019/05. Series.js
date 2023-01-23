function series(params) {
    let budget = Number(params[0]);
    let seriesCount = Number(params[1]);
    let sum = 0;
    for (let index = 2; index < params.length; index++) {
        let seriesName = params[index];
        let seriesPrice = Number(params[++index]);
        if (seriesName === "Thrones") {
            sum += seriesPrice * 0.5;
        } else if (seriesName === "Lucifer") {
            sum += seriesPrice * 0.6;
        } else if (seriesName === "Protector") {
            sum += seriesPrice * 0.7;
        } else if (seriesName === "TotalDrama") {
            sum += seriesPrice * 0.8;
        } else if (seriesName === "Area") {
            sum += seriesPrice * 0.9;
        } else {
            sum += seriesPrice;
        }
    }
    if (budget >= sum) {
        console.log(`You bought all the series and left with ${(budget - sum).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(sum - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"])