function smallShop(input){

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    switch(city){
        case "Sofia":
            switch (product) {
                case "coffee": sum = quantity * 0.5; break;
                case "water": sum = quantity * 0.8; break;
                case "beer": sum = quantity * 1.2; break;
                case "sweets": sum = quantity * 1.45; break;
                case "peanuts": sum = quantity * 1.6; break;             
            } 
            break;
        
        case "Plovdiv":
            switch (product) {
                case "coffee": sum = quantity * 0.4; break;
                case "water": sum = quantity * 0.7; break;
                case "beer": sum = quantity * 1.15; break;
                case "sweets": sum = quantity * 1.30; break;
                case "peanuts": sum = quantity * 1.50; break;  
            }
            console.log(sum);
            break;

        case "Varna":
            switch (product) {
                case "coffee": sum = quantity * 0.45; break;
                case "water": sum = quantity * 0.7; break;
                case "beer": sum = quantity * 1.1; break;
                case "sweets": sum = quantity * 1.35; break;
                case "peanuts": sum = quantity * 1.55; break;
                
            }
            console.log(sum);
            break;
    }


}

smallShop(["coffee", "Varna", "2"])

  /*
    Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града: 
    
    град / продукт   coffee   water   beer   sweets   peanuts 
        Sofia         0.50    0.80    1.20    1.45     1.60 
        Plovdiv       0.40    0.70    1.15    1.30     1.50 
        Varna         0.45    0.70    1.10    1.35     1.55 

    Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), 
        и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град.  

    */