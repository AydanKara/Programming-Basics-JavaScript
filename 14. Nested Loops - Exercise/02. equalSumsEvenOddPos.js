function equalSumsEvenOddPos(params) {
    let firstNum = Number(params[0]);
    let secondNum = Number(params[1]);
    let printLine = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                oddSum += currentDigit;
            } else {
                evenSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPos(["100000", "100050"]) 