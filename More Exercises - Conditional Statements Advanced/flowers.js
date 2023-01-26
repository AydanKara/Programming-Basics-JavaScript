function flowers(params) {
    let chrysanthemums = Number(params[0]);
    let roses = Number(params[1]);
    let tulips = Number(params[2]);
    let season = params[3];
    let holiday = params[4];
    let total = 0;

    if (season === "Spring" || season === "Summer") {
        total = chrysanthemums * 2 + roses * 4.1 + tulips * 2.5;
    } else if (season === "Autumn" || season === "Winter") {
        total = chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15;
    }
    if (holiday === "Y") {
        total *= 1.15;
    }
    if (season === "Spring" && tulips >= 7) {
        total *= 0.95;
    } else if (season === "Winter" && roses >= 10) {
        total *= 0.90;
    }
    if (roses + tulips + chrysanthemums >= 20) {
        total *= 0.80;
    }
    console.log(`${(total + 2).toFixed(2)}`)
}
flowers(["10", "10", "10", "Autumn", "N"])