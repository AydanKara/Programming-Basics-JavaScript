function easterGuests(params) {
    let guests = Number(params[0]);
    let budget = Number(params[1]);
    let easterBreadCounts = Math.ceil(guests / 3);
    let eggsCounts = guests * 2;
    let easterBreadPrice = easterBreadCounts * 4;
    let eggsPrice = eggsCounts * 0.45;
    let total = easterBreadPrice + eggsPrice;

    if (total <= budget) {
        console.log(`Lyubo bought ${easterBreadCounts} Easter bread and ${eggsCounts} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`);
    }
}
easterGuests(["10", "35"])