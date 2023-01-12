function numbersWithStep3(params) {
    let n = Number(params[0]);
    
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
numbersWithStep3(["15"])