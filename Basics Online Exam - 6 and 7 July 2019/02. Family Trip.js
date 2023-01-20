function familyTrip(params) {
    let budget = Number(params[0]);
    let nights = Number(params[1]);
    let pricePerNight = Number(params[2]);
    let additionalCosts = Number(params[3]);

    if (nights > 7) {
        pricePerNight *= 0.95;
    }
    let totalPrice = nights * pricePerNight;
    let total = totalPrice + (budget * (additionalCosts / 100));

    if (total <= budget) {
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50", "8", "100", "2"])

/*
8 нощувки > 7, следователно има 5% отстъпка от цената за нощувка, която е 100лв. 
5% от 100 е 5 лв. -> 100 – 5 -> 95 лв. за нощувка след отстъпката, 8 нощувки по 95лв. -> 760 лв. 

2% от бюджета е предвиден за допълнителни разходи. 2% от 800.50 е 16.01 лв. 

760 + 16.01 = 776.01 <= 800.50, следователно парите са им достатъчни 
и след почивката се връщат със 800.50 – 776.01 = 24.49 лв.   */