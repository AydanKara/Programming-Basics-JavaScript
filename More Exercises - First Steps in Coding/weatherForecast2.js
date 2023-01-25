function weatherForecast2(params) {
    let degrees = Number(params[0]);

    if (degrees >= 5 && degrees < 12) {
        console.log("Cold");
    } else if (degrees >= 12 && degrees < 15) {
        console.log("Cool");
    } else if (degrees >= 15 && degrees <= 20) {
        console.log("Mild");
    } else if (degrees > 20 && degrees < 26) {
        console.log("Warm");
    } else if (degrees >= 26 && degrees <= 35) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}
weatherForecast2(["0"])

/*

Градуси         Време 
26.00 - 35.00   Hot 
20.1 - 25.9     Warm 
15.00 - 20.00   Mild 
12.00 - 14.9    Cool 
5.00 - 11.9     Cold 




*/