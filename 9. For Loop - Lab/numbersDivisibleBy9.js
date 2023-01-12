function numbersDivisibleBy9(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);
    let sum = 0;
    let numbers = "";

    for (let i = 0; i <= 9; i++) {
        let num1 = start[i];
        let num2 = end[i];

        if (i % 2 === 0) {
         //   sum += i;
            numbers += (num1 + num2 + " ");
        }
    }
//    console.log(`The sum: ${sum}`);
    console.log(numbers);
}
numbersDivisibleBy9(["2345", "6789"])