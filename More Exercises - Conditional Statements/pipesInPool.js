function pipesInPool(params) {
    let volume = Number(params[0]);
    let p1 = Number(params[1]);
    let p2 = Number(params[2]);
    let hours = Number(params[3]);
    let filledP1 = hours * p1;
    let filledP2 = hours * p2;
    let totalFilled = filledP1 + filledP2;
    let totalFilledPercent = (filledP1 + filledP2) * 100 / volume;
    let p1Procent = (filledP1 * 100) / totalFilled;
    let p2Procent = (filledP2 * 100) / totalFilled;
    if (totalFilled <= volume) {
        console.log(`The pool is ${totalFilledPercent.toFixed(2)}% full. Pipe 1: ${p1Procent.toFixed(2)}%. Pipe 2: ${p2Procent.toFixed(2)}%.`)
    } else {
        let overflows = Math.abs(volume - totalFilled);
        console.log(`For ${hours} hours the pool overflows with ${overflows} liters.`)

    }

}
pipesInPool(["100", "100", "100", "2.5"])