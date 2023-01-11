function shopping(input) {

    let budget = Number(input[0])
    let n = Number(input[1])
    let m = Number(input[2])
    let p = Number(input[3])

    let sumN = n * 250
    let sumM = m * (sumN * 0.35)
    let sumP = p * (sumN * 0.10)

    let allSum = sumM + sumN + sumP
    let rest = 0

    if ( n > m ) {
        let rebat = allSum * 0.15
        allSum = allSum - rebat
    }

    if ( allSum <= budget ) {
        rest = budget - allSum
        console.log(`You have ${rest.toFixed(2)} leva left!`)
    } else {
        rest = allSum - budget
        console.log(`Not enough money! You need ${rest.toFixed(2)} leva more!`)
    }
}

shopping(["920.45", "3", "1", "1"]) 