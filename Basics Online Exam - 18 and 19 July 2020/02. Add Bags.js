function addBags(params) {
    let luggageOver20Kg = Number(params[0]);
    let baggageKilograms = Number(params[1]);
    let daysToTravel = Number(params[2]);
    let bags = Number(params[3]);

    let priceLuggage = 0;
    if (baggageKilograms < 10) {
        priceLuggage = luggageOver20Kg * 0.2;
    } else if (baggageKilograms >= 10 && baggageKilograms <= 20) {
        priceLuggage = luggageOver20Kg * 0.5;
    } else {
        priceLuggage = luggageOver20Kg;
    }
    if (daysToTravel > 30) {
        priceLuggage *= 1.10;
    } else if (daysToTravel >= 7 && daysToTravel <= 30) {
        priceLuggage *= 1.15;
    } else if (daysToTravel < 7) {
        priceLuggage *= 1.40;
    }
    let total = priceLuggage * bags;
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}
addBags([
"63.80", 
"23", 
"3", 
"1"
]) 

