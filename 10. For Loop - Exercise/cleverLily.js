function cleverLily(params) {
    let age = Number(params[0]);
    let mashinePrice = Number(params[1]);
    let toyPrice = Number(params[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }
    let totalSavedMoney = savedMoney + (toysCounter * toyPrice) - stolenMoney;
    let result = Math.abs(totalSavedMoney - mashinePrice);

    if (totalSavedMoney >= mashinePrice) {
        console.log(`Yes! ${result.toFixed(2)}`)
    } else {
        console.log(`No! ${result.toFixed(2)}`)
    }
}
cleverLily(["10", "170.00", "6"]) 

/*
    Възрастта на Лили - цяло число в интервала [1...77] 
    Цената на пералнята - число в интервала [1.00...10 000.00] 
    Единична цена на играчка - цяло число в интервала [0...40] 
*/