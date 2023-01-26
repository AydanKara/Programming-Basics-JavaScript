function fuelTankPart2(params) {
    let fuel = params[0];
    let liters = Number(params[1]);
    let clubCard = params[2];

    let totalFuelPrice = 0;

    switch (fuel) {
        case "Gas":
            switch (clubCard) {
                case "Yes": totalFuelPrice = liters * (0.93 - 0.08); break;
                case "No": totalFuelPrice = liters * 0.93; break;
            } break;
        case "Gasoline":
            switch (clubCard) {
                case "Yes": totalFuelPrice = liters * (2.22 - 0.18); break;
                case "No": totalFuelPrice = liters * 2.22; break;
            } break;
        case "Diesel":
            switch (clubCard) {
                case "Yes": totalFuelPrice = liters * (2.33 - 0.12); break;
                case "No": totalFuelPrice = liters * 2.33; break;
            } break;
    }

    if (liters >= 20 && liters <= 25) {
        totalFuelPrice = totalFuelPrice * 0.92;
    } else if (liters > 25) {
        totalFuelPrice = totalFuelPrice * 0.90;
    }
    console.log(`${totalFuelPrice.toFixed(2)} lv.`)
}
fuelTankPart2(["Gas", "30", "Yes"])