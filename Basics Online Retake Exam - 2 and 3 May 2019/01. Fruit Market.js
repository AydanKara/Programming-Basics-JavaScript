function fruitMarket([arg1, arg2, arg3, arg4, arg5]) {
    let strawberriesPrice = Number(arg1);
    let bananasQuantity = Number(arg2);
    let orangesAmount = Number(arg3);
    let raspberriesAmount = Number(arg4);
    let strawberriesQuantity = Number(arg5);
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (0.4 * raspberriesPrice);
    let bananasPrice = raspberriesPrice - (0.8 * raspberriesPrice);
    let sumRaspberries = raspberriesAmount * raspberriesPrice;
    let sumOranges = orangesAmount * orangesPrice;
    let sumBananas = bananasQuantity * bananasPrice;
    let sumStrawberries = strawberriesQuantity * strawberriesPrice;
    let totalSum = sumRaspberries + sumOranges + sumBananas + sumStrawberries;
    console.log(totalSum.toFixed(2));
}
fruitMarket([
    "48", 
    "10",
    "3.3",
    "6.5", 
    "1.7"
])