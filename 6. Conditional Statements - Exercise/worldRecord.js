function worldRecord(input) {

    let rekord = Number(input[0])
    let distance = Number(input[1])
    let timeMeter = Number(input[2])

    let mustSwim = distance * timeMeter

    // На всеки 15 м. към времето му се добавят 12.5 сек.
    let watterResistance = Math.floor( distance/15 ) * 12.50
    let totalTime = mustSwim + watterResistance

    if ( totalTime < rekord ) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        let fellTime = totalTime - rekord
        console.log(`No, he failed! He was ${fellTime.toFixed(2)} seconds slower.`)
    }
}

worldRecord(["55555.67", "3017", "5.03"]) 