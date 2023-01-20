function renovation(params) {
    let height = Number(params[0]);
    let width = Number(params[1]);
    let notPaintedPercent = Number(params[2]);
    let totalArea = height * width * 4;
    let wallsToPaint = totalArea - (totalArea * notPaintedPercent / 100);
    let index = 3;
    let command = params[index];

    while (command !== "Tired!") {
        let liters = Number(command);
        wallsToPaint -= liters;
        if (wallsToPaint === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            return;
        } else if (wallsToPaint < 0) {
            console.log(`All walls are painted and you have ${Math.abs(wallsToPaint)} l paint left!`);
            return;
        }
        command = params[++index];
    }
    console.log(`${wallsToPaint} quadratic m left.`)
}
renovation([
    "2",
    "3", 
    "25", 
    "6", 
    "7", 
    "8"
])