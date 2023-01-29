function backToThePast(params) {
    let inheritedMoney = Number(params[0]);
    let liveYear = Number(params[1]);
    let year = 18;

    for (let i = 1800; i <= liveYear; i++) {
        if (i % 2 === 0) {
            inheritedMoney -= 12000;
            year++;
        } else {
            inheritedMoney -= 12000 + 50 * year;
            year++;
        }
    }
    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`)
    }
}
backToThePast(["100000.15", "1808"])