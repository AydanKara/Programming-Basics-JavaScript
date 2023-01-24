function aluminumJoinery(params) {
    let windows = Number(params[0]);
    let typeWindows = params[1];
    let delivery = params[2];
    let price = 0;
    if (windows < 10) {
        console.log("Invalid order");
        return;
    }
    switch (typeWindows) {
        case "90X130": price = windows * 110;
            if (windows > 60) {
                price *= 0.92;
            } else if (windows > 30) {
                price *= 0.95;
            }
            break;
        case "100X150": price = windows * 140;
            if (windows > 80) {
                price *= 0.90;
            } else if (windows > 40) {
                price *= 0.94;
            }
            break;
        case "130X180": price = windows * 190;
            if (windows > 50) {
                price *= 0.88;
            } else if (windows > 20) {
                price *= 0.93;
            }
            break;
        case "200X300": price = windows * 250;
            if (windows > 50) {
                price *= 0.86;
            } else if (windows > 25) {
                price *= 0.91;
            }
            break;
    }
    if (delivery === "With delivery") {
        price += 60;
    }
    if (windows >= 99) {
        price *= 0.96;
    }
    console.log(`${price.toFixed(2)} BGN`);
}
aluminumJoinery
([
    "105",  
    "100X150", 
    "With delivery"
])  






