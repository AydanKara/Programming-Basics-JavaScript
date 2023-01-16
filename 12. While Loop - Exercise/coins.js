function coins(params) {
    let change = Number(params[0]);
    let coin = Math.floor(change * 100);
    let counter = 0;

    while (coin > 0) {
        if (coin >= 200) {
            coin -= 200;
            counter++;
        } else if (coin >= 100) {
            coin -= 100;
            counter++;
        } else if (coin >= 50) {
            coin -= 50;
            counter++;
        } else if (coin >= 20) {
            coin -= 20;
            counter++;
        } else if (coin >= 10) {
            coin -= 10;
            counter++;
        } else if (coin >= 5) {
            coin -= 5;
            counter++;
        } else if (coin >= 2) {
            coin -= 2;
            counter++;
        } else if (coin >= 1) {
            coin -= 1;
            counter++;
        }
    }
    console.log(counter);
}
coins(["1.23"])