function bikeRace(params) {
    let juniorCyclists = Number(params[0]);
    let seniorCyclists = Number(params[1]);
    let typeTrack = params[2];
    let total = 0;

    switch (typeTrack) {
        case "trail":
            junniors = 5.5;
            senior = 7;
            total = juniorCyclists * junniors + seniorCyclists * senior;
            break;
        case "cross-country":
            junniors = 8;
            senior = 9.5;
            total = juniorCyclists * junniors + seniorCyclists * senior;
            if (juniorCyclists + seniorCyclists >= 50) {
                total *= 0.75;
            }
            break;
        case "downhill":
            junniors = 12.25;
            senior = 13.75;
            total = juniorCyclists * junniors + seniorCyclists * senior;
            break;
        case "road":
            junniors = 20;
            senior = 21.50;
            total = juniorCyclists * junniors + seniorCyclists * senior
            break;
    }

    console.log(`${(total *= 0.95).toFixed(2)}`)
}
bikeRace(["10", "20", "trail"])