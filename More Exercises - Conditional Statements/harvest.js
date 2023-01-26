function harvest(params) {
    let x = Number(params[0]);
    let y = Number(params[1]);
    let z = Number(params[2]);
    let n = Number(params[3]);

    let totalY = x * y;
    let totalZ = (totalY / 2.5) * 0.4;

    if (totalZ < z) {
        let needed = Math.abs(totalZ - z)
        console.log(`It will be a tough winter! More ${Math.floor(needed)} liters wine needed.`)
    } else if (totalZ >= z) {
        let rest = totalZ - z;
        let totalN = (totalZ - z) / n;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalZ)} liters.`)
        console.log(`${Math.ceil(rest)} liters left -> ${Math.ceil(totalN)} liters per person.`)
    }

}
harvest(["1020", "1.5", "425", "4"])

/**
 * 
 * 1020
1.5
425
4
    1ви ред: X кв.м е лозето 
    2ри ред: Y грозде за един кв.м 
    3ти ред: Z нужни литри вино 
    4ти ред: брой работници 
 */