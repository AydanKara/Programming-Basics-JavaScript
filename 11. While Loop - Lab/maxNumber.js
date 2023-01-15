function maxNumber(params) {

    let n = params[0];
    let max = Number.MIN_SAFE_INTEGER;
    let index = 1;

    while (n !== "Stop") {
        let currentN = Number(n);

        if (currentN > max) {
            max = currentN;
        }

        n = params[index];
        index++;
    }
    console.log(max);
}
maxNumber(["100", "99", "800", "70", "Stop"]) 