function Repainting(input) {

    let folioPrice = 1.50
    let paintPrice = 14.50
    let diluentPrice = 5
    let bags = 0.40

    let folio = Number(input[0])
    let paint = Number(input[1])
    let diluent = Number(input[2])
    let hours = Number(input[3])

    let tenPercentPaint = (paint*10)/100

    let sumFolio = (folio + 2) * folioPrice
    let sumPaint = (paint + tenPercentPaint) * paintPrice
    let sumDiluent = diluent * diluentPrice
    let allMaterial = sumFolio + sumPaint + sumDiluent + bags

    let sumWorker = allMaterial * 30/100 * hours
    let total = allMaterial + sumWorker
    console.log(total)

}

Repainting(["10", "11", "4", "8"])