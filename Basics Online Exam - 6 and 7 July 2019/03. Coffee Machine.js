function coffeeMachine(params) {
    let drink = params[0];
    let sugar = params[1];
    let count = Number(params[2]);
    let sum = 0;

    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": sum = count * 0.9; break;
                case "Normal": sum = count * 1; break;
                case "Extra": sum = count * 1.2; break;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": sum = count * 1; break;
                case "Normal": sum = count * 1.2; break;
                case "Extra": sum = count * 1.6; break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without": sum = count * 0.5; break;
                case "Normal": sum = count * 0.6; break;
                case "Extra": sum = count * 0.7; break;
            }
            break;
    }
    if (sugar === "Without") {
        sum *= 0.65;
    }
    if (drink === "Espresso" && count >= 5) {
        sum *= 0.75;
    }
    if (sum > 15) {
        sum *= 0.80;
    }
    console.log(`You bought ${count} cups of ${drink} for ${sum.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino", "Normal", "13"])



