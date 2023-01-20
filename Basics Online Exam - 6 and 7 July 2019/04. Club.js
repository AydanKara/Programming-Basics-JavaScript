function club(params) {
    let profit = Number(params[0]);
    let index = 1;
    let command = params[index];
    let sum = 0;
    let orderSum = 0;
    while (command !== "Party!") {
        let order = params[index];
        let orderCount = Number(params[++index]);
        orderSum = order.length * orderCount;
        if (orderSum % 2 !== 0) {
            orderSum *= 0.75;
        }
        sum += orderSum;
        if (sum >= profit) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${sum.toFixed(2)} leva.`);
            return;
        }
        command = params[++index];
    }
    console.log(`We need ${(profit - sum).toFixed(2)} leva more.`);
    console.log(`Club income - ${sum.toFixed(2)} leva.`)
}
club(["100", 
    "Sidecar", 
    "7", 
    "Mojito", 
    "5", 
    "White Russian", 
    "10"]) 