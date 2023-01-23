function movieDestination(params) {
    let budgetMovie = Number(params[0]);
    let destination = params[1];
    let season = params[2];
    let days = Number(params[3]);
    let total = 0;

    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Summer": total += days * 40000; break;
                case "Winter": total += days * 45000; break;
            }
            break;
        case "Sofia":
            switch (season) {
                case "Summer": total += days * 12500; break;
                case "Winter": total += days * 17000; break;
            }
            break;
        case "London":
            switch (season) {
                case "Summer": total += days * 20250; break;
                case "Winter": total += days * 24000; break;
            }
            break;
    }
    if (destination === "Dubai") {
        total *= 0.70;
    } else if (destination === "Sofia") {
        total *= 1.25;
    }
    if (budgetMovie >= total) {
        console.log(`The budget for the movie is enough! We have ${(budgetMovie - total).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(total - budgetMovie).toFixed(2)} leva more!`)
    }
}
movieDestination(["400000", "Sofia", "Winter", "20"])