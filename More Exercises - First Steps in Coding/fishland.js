function fishland(input) {
    let mackerelPriceKg = Number(input[0]);
    let spratsPriceKg = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let saffronKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoSum = (mackerelPriceKg * 1.6) * bonitoKg;
    let saffronPrice = (spratsPriceKg * 1.8) * saffronKg;
    let musselsSum = musselsKg * 7.5;
    let allPrice = bonitoSum + saffronPrice + musselsSum;

    console.log(allPrice.toFixed(2));

}
fishland(["6.90", "4.20", "1.5", "2.5", "1"])

/*
 

    Паламуд – 60% по-скъп от скумрията 
    Сафрид – 80% по-скъп от цацата 
    Миди – 7.50 лв. за килограм 
 */