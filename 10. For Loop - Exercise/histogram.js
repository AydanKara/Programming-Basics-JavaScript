function histogram(input) {

    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let index = 1; index <= n; index++) {
        let arrNumber = Number(input[index]);
        if (arrNumber < 200) {
            p1++;
        } else if (arrNumber <= 399) {
            p2++;
        } else if (arrNumber <= 599) {
            p3++;
        } else if (arrNumber <= 799) {
            p4++;
        } else if (arrNumber >= 800) {
            p5++;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"])