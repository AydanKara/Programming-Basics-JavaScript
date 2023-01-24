function easterParty(params) {
    let guests = Number(params[0]);
    let envelopePricePerson = Number(params[1]);
    let desiBudget = Number(params[2]);
    let cakePrice = desiBudget * 0.1;

    if (guests >= 10 && guests <= 15) {
        envelopePricePerson *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        envelopePricePerson *= 0.8;
    } else if (guests > 20) {
        envelopePricePerson *= 0.75;
    }

    let total = guests * envelopePricePerson + cakePrice;

    if (total >= desiBudget) {
        console.log(`No party! ${(total - desiBudget).toFixed(2)} leva needed.`);
    } else {
        console.log(`It is party time! ${(desiBudget - total).toFixed(2)} leva left.`);
    }
}
easterParty(["18", "30", "450"])
