function foodDelivery(input) {

    let chikenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegiMenus = Number(input[2]);

    let chikenMenusPrice = chikenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegiMenusPrice = vegiMenus * 8.15;
    
    let allMenuPrice = chikenMenusPrice + fishMenusPrice + vegiMenusPrice;
    let dessertPrice = allMenuPrice * 0.2;

    let fullPrice = allMenuPrice + dessertPrice + 2.5;

    console.log(fullPrice)

}

foodDelivery(["2", "4", "3"])