function fruitShop(input) {
    let fruit = input[0].toLowerCase();
    let day = input[1].toLowerCase();
    let quantity = Number(input[2]);
    let price = 0;
    if (day == "saturday" || day == "sunday") {
        if (fruit == "banana") price = 2.70;
        else if (fruit == "apple") price = 1.25;
        else if (fruit == "orange") price = 0.90;
        else if (fruit == "grapefruit") price = 1.60;
        else if (fruit == "kiwi") price = 3.00;
        else if (fruit == "pineapple") price = 5.60;
        else if (fruit == "grapes") price = 4.20;
    }
    else if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
        if (fruit == "banana") price = 2.50;
        else if (fruit == "apple") price = 1.20;
        else if (fruit == "orange") price = 0.85;
        else if (fruit == "grapefruit") price = 1.45;
        else if (fruit == "kiwi") price = 2.70;
        else if (fruit == "pineapple") price = 5.50;
        else if (fruit == "grapes") price = 3.85;
    }
    if (price > 0) {
        console.log((price * quantity).toFixed(2));
    } else {
        console.log("error");
    }
}

fruitShop(["tomato", "Monday", "0.5"])  

/*
            вход                        изход                

(["apple", "Tuesday", "2"])             2.40 
(["orange", "Sunday", "3"])             2.70 
(["kiwi", "Monday", "2.5"])             6.75 
(["grapes", "Saturday", "0.5"])         2.10 
(["tomato", "Monday", "0.5"])           error 

*/