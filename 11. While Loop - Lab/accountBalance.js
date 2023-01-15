function accountBalance(params) {
    let index = 0;
    let sum = params[index];
    let totalSum = 0;

    while (sum !== "NoMoreMoney") {

        let currentSum = Number(sum);

        if (currentSum < 0) {
            console.log("Invalid operation!");
            break;
        }
        totalSum += currentSum;
        console.log(`Increase: ${currentSum.toFixed(2)}`);
        index++;
        sum = params[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])