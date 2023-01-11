function newHouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowersPrice = 0;

    switch (flowerType) {
        case "Roses":
            flowersPrice = flowerCount * 5;
            if (flowerCount > 80) {
                flowersPrice = flowersPrice * 0.9;
            }
            break;
        case "Dahlias":
            flowersPrice = flowerCount * 3.8;
            if (flowerCount > 90) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case "Tulips":
            flowersPrice = flowerCount * 2.8;
            if (flowerCount > 80) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case "Narcissus":
            flowersPrice = flowerCount * 3;
            if (flowerCount < 120) {
                flowersPrice = flowersPrice * 1.15;
            }
            break;
        case "Gladiolus":
            flowersPrice = flowerCount * 2.5;
            if (flowerCount < 80) {
                flowersPrice = flowersPrice * 1.20;
            }
            break;
    }
    if (budget >= flowersPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - flowersPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]) 

/*
Нов дом 

Марин и Нели си купуват къща не далеч от София. 
Нели толкова много обича цветята, че Ви убеждава да напишете функция, 
която да изчисли колко  ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. 
Различните цветя са с различни цени.  

цвете                   Роза    Далия   Лале    Нарцис      Гладиола 
Цена на брой в лева       5      3.80   2.80       3         2.50 

Съществуват следните отстъпки: 
Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена 
Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена 
Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена 
Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15% 
Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20% 

Функцията получава 3 аргумента: 
Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus" 
Брой цветя - цяло число в интервала [10…1000] 
Бюджет - цяло число в интервала [50…2500] 

Да се отпечата на конзолата на един ред: 
Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left." 
Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more." 
Сумата да бъде форматирана до втория знак след десетичната запетая. 

Примерен вход и изход 

Вход        (["Roses", "55", "250"]) 
Изход       Not enough money, you need 25.00 leva more. 
Обяснения   Нели иска 55 броя Рози. Цената на една роза е 5лв., 
            следователно за 55 броя Нели ще трябва да плати: 55 * 5 = 275. 
            Тя обаче разполага с 250 лв. бюджет.  
            Понеже 275 > 250 , то не и достигат 25 лв. 

Вход--------(["Tulips", "88", "260"])

Изход-------Hey, you have a great garden with 88 Tulips and 50.56 leva left.

Вход ------- (["Narcissus", "119", "360"]) 

Изход--------Not enough money, you need 50.55 leva more.

 

 


 

 


 */