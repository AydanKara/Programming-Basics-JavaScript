function flowerShop(params) {
    let magnolias = Number(params[0]);
    let hyacinths = Number(params[1]);
    let roses = Number(params[2]);
    let cacti = Number(params[3]);
    let giftPrice = Number(params[4]);
    let summ = magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cacti * 8;
    let profit = summ - (summ * 0.05);
    let rest = Math.abs(giftPrice - profit);
    if (giftPrice <= profit) {
        console.log(`She is left with ${Math.floor(rest)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(rest)} leva.`);
    }

}
flowerShop(["2","3","5","1","50"])

/*
Сума = 2 * 3.25 + 3 * 4 + 5 * 3.5 + 1 * 8 = 44 лева 
Данъци = 5% от 44 = 2.20. Печалба - 41.80 лева 
50 – 41.80 = 8.20 лева недостигнали
Number of magnolias 
Number of hyacinths 
Number of roses 
Number of cacti 
Gift price  
*/