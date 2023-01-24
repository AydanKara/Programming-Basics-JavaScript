function easterShop(params) {
    let startingEggsAmount = Number(params[0]);
    let buy = 0;
    let rest = startingEggsAmount;
    let index = 1;
    let command = params[index];
    while (command !== "Close") {
        let buyOrFill = command;
        let count = Number(params[++index]);
        if (buyOrFill === "Buy" && count > rest) {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${rest}.`);
            return;
        }
        if (buyOrFill === "Buy") {
            buy += count;
            rest -= count;
        } else if (buyOrFill === "Fill") {
            rest += count;
        }
        command = params[++index];
    }
    console.log(`Store is closed!`);
    console.log(`${buy} eggs sold.`);
}
easterShop([
"13", 
"Buy", 
"8", 
"Fill", 
"3", 
"Buy", 
"10"])