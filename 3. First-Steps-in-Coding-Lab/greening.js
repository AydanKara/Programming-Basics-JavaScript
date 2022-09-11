function greening(input){
    let qmeter = input[0] ;
    let priceproQm = 7.61 ;
    let fullPrice = qmeter * priceproQm ;
    let rabat = 0.18 ;
    let rabatPrice = fullPrice * rabat ;
    let finalPrice = fullPrice - rabatPrice ;
    let result = ` The final price is: ${finalPrice} lv. ` ;
    let discount = ` The discount is: ${rabatPrice} lv. `
    console.log(result) ;
    console.log(discount) ;

}

greening(["550"])