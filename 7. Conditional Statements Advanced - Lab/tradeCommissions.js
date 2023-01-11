function tradeCommissions(input) {
    let town = input[0];
    let s = Number(input[1]);
    let commissions = 0;

    if (town == "Sofia") {
        if (s >= 0 && s <= 500){
            commissions = s * 0.05;
        } else if (s > 500 && s <= 1000) {
            commissions = s * 0.07;
        } else if (s > 1000 && s <= 10000) {
            commissions = s * 0.08;
        } else if (s > 10000) {
            commissions = s * 0.12;
        }
    } else if (town == "Varna"){
        if (s >= 0 && s <= 500){
            commissions = s * 0.045;
        } else if (s > 500 && s <= 1000) {
            commissions = s * 0.075;
        } else if (s > 1000 && s <= 10000) {
            commissions = s * 0.10;
        } else if (s > 10000) {
            commissions = s * 0.13;
        }
    } else if (town == "Plovdiv"){
        if (s >= 0 && s <= 500){
            commissions = s * 0.055;
        } else if (s > 500 && s <= 1000) {
            commissions = s * 0.08;
        } else if (s > 1000 && s <= 10000) {
            commissions = s * 0.12;
        } else if (s > 10000) {
            commissions = s * 0.145;
        }
    }
    if (commissions > 0){
        console.log(commissions.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions(["Kaspichan", "-50"]) 

/*
Търговски комисионни 

Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите: 

Град     0 ≤ s ≤ 500 | 500 < s ≤ 1 000 | 1 000 < s ≤ 10 000 | s > 10 000 

Sofia        5%               7%                 8%              12% 

Varna       4.5%            7.5%                10%              13% 

Plovdiv     5.5%              8%                12%             14.5% 

Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява 
и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка.
При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".  

Примерен вход и изход 

        вход             изход                 вход               изход        

(["Sofia", "1500"])      120.00     (["Plovdiv", "499.99"])     27.50    
(["Varna", "3874.50"])   387.45     (["Kaspichan", "-50"])      error 

 
*/