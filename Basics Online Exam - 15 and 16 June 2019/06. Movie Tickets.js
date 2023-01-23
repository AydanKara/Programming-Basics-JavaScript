function movieTickets(params) {
    let a1 = Number(params[0]);
    let a2 = Number(params[1]);
    let n = Number(params[2]);

    for (let symbol1 = a1; symbol1 <= a2 - 1; symbol1++) {
        for (let symbol2 = 1; symbol2 <= n - 1; symbol2++) {
            for (let symbol3 = 1; symbol3 <= n / 2 - 1; symbol3++) {
                if (symbol1 % 2 == 1 && (symbol2 + symbol3 + symbol1) % 2 == 1) {
                    console.log(`${String.fromCharCode(symbol1)}-${symbol2}${symbol3}${symbol1}`);
                }
            }
        }
    }
}
movieTickets(["71", "74", "6"])