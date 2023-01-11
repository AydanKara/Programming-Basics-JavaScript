function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            price = quantity * 2.50;
        } else if (fruit === "apple") {
            price = quantity * 1.20;
        } else if (fruit === "orange") {
            price = quantity * 0.85;
        } else if (fruit === "grapefruit") {
            price = quantity * 1.45;
        } else if (fruit === "kiwi") {
            price = quantity * 2.70;
        } else if (fruit === "pineapple") {
            price = quantity * 5.50;
        } else if (fruit === "grapes") {
            price = quantity * 3.85;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            price = quantity * 2.70;
        } else if (fruit === "apple") {
            price = quantity * 1.25;
        } else if (fruit === "orange") {
            price = quantity * 0.90;
        } else if (fruit === "grapefruit") {
            price = quantity * 1.60;
        } else if (fruit === "kiwi") {
            price = quantity * 3.00;
        } else if (fruit === "pineapple") {
            price = quantity * 5.60;
        } else if (fruit === "grapes") {
            price = quantity * 4.20;
        }
    }
    if (price > 0) {
        console.log(price.toFixed(2))
    } else {
        console.log("error")
    }
}
fruitShop(["tomato", "Monday", "0.5"])

/*
Магазин за плодове през работните дни работи на следните цени: 

плод    banana  apple  orange   grapefruit  kiwi    pineapple   grapes 
цена    2.50    1.20   0.85     1.45        2.70    5.50        3.85 

Събота и неделя магазинът работи на по-високи цени: 

плод banana     apple   orange  grapefruit  kiwi    pineapple    grapes 
цена 2.70       1.25    0.90    1.60        3.00    5.60         4.20 

Напишете функция, която получава аргументи:
плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
и количество (число) и пресмята цената според цените от таблиците по-горе. 
Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. 
При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".  

Примерен вход и изход 

            вход                        изход                

(["apple", "Tuesday", "2"])             2.40 
(["orange", "Sunday", "3"])             2.70 
(["kiwi", "Monday", "2.5"])             6.75 
(["grapes", "Saturday", "0.5"])         2.10 
(["tomato", "Monday", "0.5"])           error 

*/