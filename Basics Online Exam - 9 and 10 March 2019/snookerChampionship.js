function snookerChampionship(Input) {
    let stage = Input[0];
    let ticketType = Input[1];
    let ticketCount = Input[2];
    let photo = Input[3];
    let ticketPrice = 0;
    let total = 0;

    switch (stage) {
        case "Quarter final":
            switch (ticketType) {
                case "Standard": ticketPrice += 55.50; break;
                case "Premium": ticketPrice += 105.20; break;
                case "VIP": ticketPrice += 118.90; break;
            } break;
        case "Semi final":
            switch (ticketType) {
                case "Standard": ticketPrice += 75.88; break;
                case "Premium": ticketPrice += 125.22; break;
                case "VIP": ticketPrice += 300.40; break;
            } break;
        case "Final":
            switch (ticketType) {
                case "Standard": ticketPrice += 110.10; break;
                case "Premium": ticketPrice += 160.66; break;
                case "VIP": ticketPrice += 400; break;
            } break;
    }
    total = ticketPrice * ticketCount;
    if (total > 4000) {
        total *= 0.75;
        console.log(total.toFixed(2));
    } else if (total > 2500 && photo === "Y") {
        total *= 0.90;
        ticketCount *= 40;
        total += ticketCount;
        console.log(total.toFixed(2));
    } else if (total > 2500 && photo === "N") {
        total *= 0.90;
        console.log(total.toFixed(2));
    } else if (photo === "Y") {
        ticketCount *= 40;
        total += ticketCount;
        console.log(total.toFixed(2));
    } else {
        console.log(total.toFixed(2));
    }


}
snookerChampionship(["Final", "Premium", "1", "Y"])

/*
if (photo === "Y") {
            ticketCount *= 40;
            total += ticketCount;
        }
*/