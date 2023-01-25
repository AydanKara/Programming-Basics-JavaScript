function maidenParty(params) {
    let bachelorettePartyPrice = Number(params[0]);
    let loveMessages = Number(params[1]);
    let waxRoses = Number(params[2]);
    let keyHolders = Number(params[3]);
    let cartoons = Number(params[4]);
    let luckySurprises = Number(params[5]);

    let amount = loveMessages * 0.60 + waxRoses * 7.20 + keyHolders * 3.60 + cartoons * 18.20 + luckySurprises * 22;
    let itemCounts = loveMessages + waxRoses + keyHolders + cartoons + luckySurprises;

    if (itemCounts >= 25) {
        amount *= 0.65;
    }
    let profit = amount * 0.9;
    if (profit >= bachelorettePartyPrice) {
        console.log(`Yes! ${(profit - bachelorettePartyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(bachelorettePartyPrice - profit).toFixed(2)} lv needed.`)
    }
}
maidenParty([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])

 /*   Amount: 20 * 0.60 + 25 * 7.20 + 30 * 3.60 + 50 * 18.20 + 10 * 22 = BGN 1430.
    Number of items: 20 + 25 + 30 + 50 + 10 = 135
    We check if there is a discount: 135 > 25 => 35% discount
    Discount: 35% from 1430 = BGN 500.50.
    Final price: 1430 – 500.50 = BGN 929.50.
    Hosting cost: 10% of BGN 929.50 = BGN 92.95.
    Profit: 929.50 – 92.95 = BGN 836.55.
    836.55 > 40.80 => 836.55 – 40.80 = BGN 795.75 remaining*/