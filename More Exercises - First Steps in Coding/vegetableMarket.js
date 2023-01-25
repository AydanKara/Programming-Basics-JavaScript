function vegetableMarket(input) {

    let kgVegetables = Number(input[0])
    let kgFruit = Number(input[1])
    let totalVegetables = Number(input[2])
    let totalFruits = Number(input[3])

    let n = kgVegetables * totalVegetables
    let m = kgFruit * totalFruits
    let total = n + m
    let totalEuro = total / 1.94

    console.log(totalEuro.toFixed(2))
}

vegetableMarket(['0.194', '19.4', '10', '10'])