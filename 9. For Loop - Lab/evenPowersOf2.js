function evenPowersOf2(params) {
    let n = Number(params[0]);

    for (let i = 0; i <= n; i += 2) {
        if (i % 2 == 0) {
            console.log(2 ** i);
        }
    }
}
evenPowersOf2(["10"])