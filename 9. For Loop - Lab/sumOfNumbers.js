function sumOfNumbers(params) {
    let n = params[0];
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])