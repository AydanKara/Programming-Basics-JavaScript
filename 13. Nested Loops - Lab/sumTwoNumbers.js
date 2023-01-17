function sumTwoNumbers(params) {
    let startNumber = Number(params[0]);
    let endNumber = Number(params[1]);
    let n = Number(params[2]);
    let counterFirstMatch = 0;
    let counter = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        for (let j = startNumber; j <= endNumber; j++) {
            counter++;
            if (i + j == n) {
                counterFirstMatch = counter;
                console.log(`Combination N:${counterFirstMatch} (${i} + ${j} = ${n})`);
                return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${n}`);
}
sumTwoNumbers(["1", "10", "5"]) 