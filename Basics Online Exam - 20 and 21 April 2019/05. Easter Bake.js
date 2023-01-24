function easterBake(params) {
    let count = Number(params[0]);
    let sugar = 0;
    let flour = 0;
    let maxSugar = 0;
    let maxFlour = 0;
    let index = 1;

    for (let i = 1; i <= count; i++) {
        let usedSugar = Number(params[index]);
        let usedFlour = Number(params[++index]);
        if (usedSugar > maxSugar) {
            maxSugar = usedSugar;
        }
        if (usedFlour > maxFlour) {
            maxFlour = usedFlour;
        }
        sugar += usedSugar;
        flour += usedFlour;
        index++;
    }
    let sugarPacket = sugar / 950;
    let flourPacket = flour / 750;
    console.log(`Sugar: ${Math.ceil(sugarPacket)}`);
    console.log(`Flour: ${Math.ceil(flourPacket)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["3", "400", "350", "250", "300", "450", "380"])