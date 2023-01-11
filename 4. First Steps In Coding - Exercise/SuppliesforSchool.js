function SuppliesforSchool(input) {
    let packagespencil = Number(input[0]) 
    let packagesmarker = Number(input[1])
    let cleaner = Number(input[2])
    let rabatpercent = Number(input[3])

    let pricepencil = 5.80
    let pricemarker = 7.20
    let pricecleaner = 1.20

    let pencilfullprice = packagespencil * pricepencil
    let markerfullprice = packagesmarker * pricemarker
    let cleanerfullprice = cleaner * pricecleaner
    let fullmaterialprice = pencilfullprice + markerfullprice + cleanerfullprice
    let rabat = fullmaterialprice * (rabatpercent/100)
    let rabatPrice = fullmaterialprice - rabat
    
    console.log(rabatPrice)
}

SuppliesforSchool(["2", "3", "4", "25"]) 