function uniquePINCodes(params) {
    let first = Number(params[0]);
    let second = Number(params[1]);
    let third = Number(params[2]);
    for (let i = 1; i <= first; i++) {
        for (let j = 1; j <= second; j++) {
            for (let k = 1; k <= third; k++) {
                if (i % 2 === 0 && k % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7)) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}
uniquePINCodes([
    "3",
    "5",
    "5"])
