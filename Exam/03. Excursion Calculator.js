function excursionCalculator(params) {
    let people = Number(params[0]);
    let season = params[1];
    let price = 0;
    if (season === "spring") {
        if (people <= 5) {
            price = people * 50;
        } else {
            price = people * 48;
        }
    } else if (season === "summer") {
        if (people <= 5) {
            price = people * 48.5 * 0.85;
        } else {
            price = people * 45 * 0.85;
        }
    } else if (season === "autumn") {
        if (people <= 5) {
            price = people * 60;
        } else {
            price = people * 49.5;
        }
    } else if (season === "winter") {
        if (people <= 5) {
            price = people * 86 * 1.08;
        } else {
            price = people * 85 * 1.08;
        }
    }
    console.log(`${price.toFixed(2)} leva.`)
}
excursionCalculator(["10",
"summer"])


//Second row - season - text with options - "spring", "summer", "autumn" or "winter"