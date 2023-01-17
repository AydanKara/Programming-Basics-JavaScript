function multiplicationTable() {
    for (let n = 1; n <= 10; n++) {
        for (let m = 1; m <= 10; m++) {
            console.log(`${n} * ${m} = ${n * m}`);
        }
    }
}
multiplicationTable()