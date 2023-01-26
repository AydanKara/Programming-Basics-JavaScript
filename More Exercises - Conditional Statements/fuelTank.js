function fuelTank(input) {
    let fuel = input[0].toLowerCase();
    let tank = Number(input[1]);

    if (fuel === "diesel" || fuel === "gasoline" || fuel === "gas") {
        if (tank >= 25) {
            console.log(`You have enough ${fuel}.`)
        } else if (tank < 25) {
            console.log(`Fill your tank with ${fuel}!`)
        }
    } else {
        console.log(`Invalid fuel!`)
    }
}
fuelTank(["Gas", "25"])



    
       /* switch(fuel) {
            case "Diesel":
            case "Gasoline":
            case "Gas":
                console.log(`You have enough ${fuel}.`)
            break;
            default:
                console.log(`Invalid fuel!`);
                break;
        }
    }

fuelTank(["Diesel","10"])

/*
Резервоар за гориво 
Напишете програма, която познава дали резервоара на едно превозно средство има нужда от презареждане на горивото или не. 
От конзолата се четат два реда – текст и реално число, на първия ред се чете типа на горивото 
– текст с възможности: "Diesel", "Gasoline" или "Gas", а на втория литрите гориво, които има в резервоара. 
    Ако литрите гориво са повече или равни на 25, на конзолата да се отпечата "You have enough {вида на горивото}.", 
    ако са по-малко от 25, да се отпечата "Fill your tank with {вида на горивото}!". 
    В случай, че бъде въведено гориво, различно от посоченото, да се отпечата "Invalid fuel!". 
Примерен вход и изход 
Вход          Diesel 10                        Gasoline  40                 Gas  25             Kerosene 200 
Изход   Fill your tank with diesel!        You have enough gasoline.    You have enough gas.    Invalid fuel! 

Насоки: потърсете информация за вложени условни конструкции. */