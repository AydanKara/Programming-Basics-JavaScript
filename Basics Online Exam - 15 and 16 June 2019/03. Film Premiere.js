function filmPremiere(params) {
    let movie = params[0];
    let packet = params[1];
    let ticket = Number(params[2]);
    let total = 0;
    switch (movie) {
        case "John Wick":
            switch (packet) {
                case "Drink": total += ticket * 12; break;
                case "Popcorn": total += ticket * 15; break;
                case "Menu": total += ticket * 19; break;
            }
            break;
        case "Star Wars":
            switch (packet) {
                case "Drink": total += ticket * 18; break;
                case "Popcorn": total += ticket * 25; break;
                case "Menu": total += ticket * 30; break;
            }
            break;
        case "Jumanji":
            switch (packet) {
                case "Drink": total += ticket * 9; break;
                case "Popcorn": total += ticket * 11; break;
                case "Menu": total += ticket * 14; break;
            }
            break;
    }
    if (movie === "Star Wars" && ticket >= 4) {
        total *= 0.70;
    } else if (movie === "Jumanji" && ticket === 2) {
        total *= 0.85;
    }
    console.log(`Your bill is ${total.toFixed(2)} leva.`);
}
filmPremiere(["John Wick", "Drink", "6"])