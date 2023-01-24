function easterEggs(params) {
    let count = Number(params[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let index = 1;

    for (let i = 1; i <= count; i++) {
        let command = params[index];
        switch (command) {
            case "red": red++; break;
            case "orange": orange++; break;
            case "blue": blue++; break;
            case "green": green++; break;
        }
        command = params[++index];
    }
    let color = "";
    let maxEggs = Math.max(red, orange, blue, green);
    if (maxEggs === red) {
        color = "red";
    } else if (maxEggs === orange) {
        color = "orange";
    } else if (maxEggs === blue) {
        color = "blue";
    } else if (maxEggs === green) {
        color = "green";
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${color}`);
}
easterEggs([
    "4", 
    "blue", 
    "red", 
    "blue", 
    "orange"])
    