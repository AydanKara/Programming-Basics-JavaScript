function godzillaVsKong(input) {
    let budgetMovie = Number(input[0])
    let statists = Number(input[1])
    let clothingCost = Number(input[2])
    let dekorSumme = budgetMovie * 0.1
    let clothingSumme = statists * clothingCost
    if (statists > 150) {
        let statistsRebat = clothingSumme * 0.1
        clothingSumme = clothingSumme - statistsRebat
    } else {
        clothingSumme = statists * clothingCost
    }
    let allSumme = dekorSumme + clothingSumme
    let rest = 0
    if (allSumme > budgetMovie) {
        rest = allSumme - budgetMovie
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${rest.toFixed(2)} leva more.`)
    } else if (allSumme <= budgetMovie) {
        rest = budgetMovie - allSumme
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${rest.toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["15437.62", "186", "57.99"])