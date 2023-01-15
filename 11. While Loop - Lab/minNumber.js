function maxNumber(params) {

    let n = params[0];
    let min = Number.MAX_SAFE_INTEGER;
    let index = 1;

    while (n !== "Stop") {
        let currentN = Number(n);

        if (currentN < min) {
            min = currentN;
        }

        n = params[index];
        index++;
    }
    console.log(min);
}
maxNumber(["100", "99", "800", "70", "Stop"]) 