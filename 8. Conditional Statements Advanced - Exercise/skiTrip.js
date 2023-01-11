function skiTrip(input) {
    let nights = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let totalPrice = 0;

    if (nights < 10) {
        switch (roomType) {
            case "room for one person": totalPrice = (nights - 1) * 18; break;
            case "apartment": totalPrice = ((nights - 1) * 25) * 0.7; break;
            case "president apartment": totalPrice = ((nights - 1) * 35) * 0.90; break;
        }
    } else if (nights >= 10 && nights <= 15) {
        switch (roomType) {
            case "room for one person": totalPrice = (nights - 1) * 18; break;
            case "apartment": totalPrice = ((nights - 1) * 25) * 0.65; break;
            case "president apartment": totalPrice = ((nights - 1) * 35) * 0.85; break;
        }
    } else if (nights > 15) {
        switch (roomType) {
            case "room for one person": totalPrice = (nights - 1) * 18; break;
            case "apartment": totalPrice = ((nights - 1) * 25) * 0.50; break;
            case "president apartment": totalPrice = ((nights - 1) * 35) * 0.8; break;
        }
    }
    switch (rating) {
        case "positive": totalPrice = totalPrice * 1.25; break;
        case "negative": totalPrice = totalPrice * 0.90; break;
    }
    console.log(totalPrice.toFixed(2));
}
skiTrip(["30", "president apartment", "negative"])

/*
Входът се чете от конзолата и се състои от три реда: 

Първи ред - дни за престой - цяло число в интервала [0...365] 
Втори ред - вид помещение - "room for one person", "apartment" или "president apartment" 
Трети ред - оценка - "positive"  или "negative" 
 */