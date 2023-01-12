function multiplicationTable(params) {
    let number = Number(params[0]);

    for (let i = 1; i <= 10; i++) {
        let result = i * number;
        console.log(`${i} * ${number} = ${result}`)
    }
}
multiplicationTable(["5"])