function multiplyBy2(params) {

    for (let index = 0; index < params.length; index++) {
        let num = Number(params[index]);
        if (num >= 0) {
            console.log(`Result: ${(num * 2).toFixed(2)}`)
        } else {
            console.log(`Negative number!`);
            break;
        }

    }
}
multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20" ])