function easterTrip(params) {
    let destination = params[0];
    let date = params[1];
    let nights = Number(params[2]);
    let total = 0;
    switch (destination) {
        case "France":
            if (date === "21-23") {
                total = nights * 30;
            } else if (date === "24-27") {
                total = nights * 35;
            } else if (date === "28-31") {
                total = nights * 40;
            }
            break;
        case "Italy":
            switch (date) {
                case "21-23": total = nights * 28; break;
                case "24-27": total = nights * 32; break;
                case "28-31": total = nights * 39; break;
            }
            break;
        case "Germany":
            switch (date) {
                case "21-23": total = nights * 32; break;
                case "24-27": total = nights * 37; break;
                case "28-31": total = nights * 43; break;
            }
            break;
    }
    console.log(`Easter trip to ${destination} : ${total.toFixed(2)} leva.`)
}
easterTrip(["Germany", "24-27", "5"])
