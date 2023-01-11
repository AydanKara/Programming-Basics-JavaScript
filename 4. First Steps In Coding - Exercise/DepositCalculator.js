function DepositCalculator(input) {
    let deposit = Number(input[0])
    let monat = Number(input[1])
    let jarlicheZins = Number(input[2])
    let aufZinsen = deposit * (jarlicheZins/100)
    let monatZins = aufZinsen/12
    let sume = deposit + monat*monatZins
    console.log(sume)

}

DepositCalculator(["2350", "6", "7"])