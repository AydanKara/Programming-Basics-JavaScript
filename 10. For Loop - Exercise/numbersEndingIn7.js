function numbersEndingIn7(params) {
    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}
numbersEndingIn7()