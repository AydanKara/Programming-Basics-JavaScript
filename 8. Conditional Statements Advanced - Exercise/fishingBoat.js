function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisher = Number(input[2]);

    let rentPrice = 0;

    switch (season) {
        case "Spring": rentPrice = 3000; break;
        case "Summer": rentPrice = 4200; break;
        case "Autumn": rentPrice = 4200; break;
        case "Winter": rentPrice = 2600; break;
    }
    if (fisher <= 6) {
        rentPrice = rentPrice * 0.90;
    } else if (fisher <= 11) {
        rentPrice = rentPrice * 0.85;
    } else if (fisher > 11) {
        rentPrice = rentPrice * 0.75;
    }
    if (fisher % 2 == 0 && season !== "Autumn") {
        rentPrice = rentPrice * 0.95;
    }
    if (budget >= rentPrice) {
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]) 

/*
"Spring", "Summer", "Autumn", "Winter"
Лодка за риболов 

Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. 
Цената за наемане на кораба зависи от сезона и броя рибари. 

Цената зависи от сезона: 
    Цената за наем на кораба през пролетта е  3000 лв. 
    Цената за наем на кораба през лятото и есента е  4200 лв. 
    Цената за наем на кораба през зимата е  2600 лв. 

В зависимост от броя си групата ползва отстъпка: 
    Ако групата е до 6 човека включително  –  отстъпка от 10%. 
    Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%. 
    Ако групата е от 12 нагоре  –  отстъпка от 25%.  

Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка.  

Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари.  

Вход 

Приемат се 3 аргумента: 
Бюджет на групата – цяло число в интервала [1…8000] 
Сезон –  текст : "Spring", "Summer", "Autumn", "Winter" 
Брой рибари – цяло число в интервала [4…18] 

Изход 

Да се отпечата на конзолата един ред: 
Ако бюджетът е достатъчен: "Yes! You have {останалите пари} leva left." 
Ако бюджетът НЕ Е достатъчен: "Not enough money! You need {сумата, която не достига} leva." 
Сумите трябва да са форматирани с точност до два знака след десетичната запетая. 


Вход      (["3000", "Summer", "11"]) 

Изход      Not enough money! You need 570.00 leva. 

Обяснения     Лятото риболовния туризъм струва 4200 лв., 11 рибари ползват 15% отстъпка -> 4200 - 15% = 3570 лв., 
                нечетен брой са и не ползват допълнителна отстъпка,. 
                3000 <= 3570, следователно не им достигат 570.00 лв. 

Вход        (["3600", "Autumn", "6"]) 

Изход       Not enough money! You need 180.00 leva.

Вход        (["2000", "Winter", "13"]) 

Изход       Yes! You have 50.00 leva left. 


*/