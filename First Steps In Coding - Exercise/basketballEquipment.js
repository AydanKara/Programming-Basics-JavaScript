function basketballEquipment(input) {
    
    let yearTax = Number(input[0])

    let sneakers = yearTax * 0.6;
    let suits = sneakers * 0.8;
    let ball = suits / 4;
    let accessories = ball / 5;

    let fullPrice = yearTax + sneakers + suits + ball + accessories;

    console.log(fullPrice);

}

basketballEquipment(["365"])