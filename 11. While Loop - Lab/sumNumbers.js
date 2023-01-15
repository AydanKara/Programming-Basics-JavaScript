function sumNumbers(params) {
    let n = Number(params[0]);
    let sum = 0;
    let index = 1;
    
    while (sum < n) {
        let currentNum = Number(params[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]) 