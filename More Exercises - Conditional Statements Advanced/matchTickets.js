function matchTickets(params) {
    let budget = Number(params[0]);
    let category = params[1];
    let group = Number(params[2]);
    let transport = 0;

    let vip = 499.99 * group;
    let normal = 249.99 * group;

    if (group >= 1 && group < 5) {
        transport = budget * 0.75;
    } else if (group >= 5 && group < 10) {
        transport = budget * 0.6;
    } else if (group >= 10 && group < 25) {
        transport = budget * 0.5;
    } else if (group >= 25 && group < 50) {
        transport = budget * 0.4;
    } else if (group >= 50) {
        transport = budget * 0.25;
    }
    let rest = budget - transport;

    switch (category) {
        case "VIP":
            if (vip <= rest) {
                rest = rest - vip;
                console.log(`Yes! You have ${rest.toFixed(2)} leva left.`)
            } else {
                rest = vip - rest;
                console.log(`Not enough money! You need ${rest.toFixed(2)} leva.`)
            } break;
        case "Normal":
            if (normal <= rest) {
                rest = rest - normal;
                console.log(`Yes! You have ${rest.toFixed(2)} leva left.`)
            } else {
                rest = normal - rest;
                console.log(`Not enough money! You need ${rest.toFixed(2)} leva.`)
            } break;
    }
}
matchTickets(["30000", "VIP", "49"])

/*
От 1 до 4 – 75% от бюджета. 
От 5 до 9 – 60% от бюджета. 
От 10 до 24 – 50% от бюджета. 
От 25 до 49 – 40% от бюджета. 
50 или повече – 25% от бюджета. 
*/