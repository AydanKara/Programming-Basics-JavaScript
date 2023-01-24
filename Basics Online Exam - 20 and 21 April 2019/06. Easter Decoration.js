function easterDecoration(params) {
    let client = Number(params[0]);
    let products = 0;
    let bill = 0;
    let totalBill = 0;
    let index = 1;

    for (let i = 1; i <= client; i++) {
        let buy = params[index];
        while (buy !== "Finish") {
            switch (buy) {
                case "basket": products++; bill += 1.5; break;
                case "wreath": products++; bill += 3.8; break;
                case "chocolate bunny": products++; bill += 7; break;
            }
            index++;
            buy = params[index];
        }
        if (products % 2 === 0) {
            bill *= 0.8;
        }
        console.log(`You purchased ${products} items for ${bill.toFixed(2)} leva.`);
        totalBill += bill;
        bill = 0;
        products = 0;
        index++;
    }
    let averageBill = totalBill / client;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}
easterDecoration([
    "2",
    "basket", 
    "wreath", 
    "chocolate bunny", 
    "Finish", 
    "wreath", 
    "chocolate bunny", 
    "Finish" ])
