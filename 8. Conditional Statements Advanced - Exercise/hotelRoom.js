function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartment = 0;
    let studio = 0;

    switch (month) {
        case "May":
        case "October": studio = 50; apartment = 65;
            if (nights > 14) {
                studio = studio * 0.70;
            } else if (nights > 7) {
                studio = studio * 0.95;
            }
            break;
        case "June":
        case "September": studio = 75.20; apartment = 68.70;
            if (nights > 14) {
                studio = studio * 0.80;
            }
            break;
        case "July":
        case "August": studio = 76; apartment = 77;
            break;
    }
    if (nights > 14) {
        apartment = apartment * 0.90;
    }
    console.log(`Apartment: ${(nights * apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]) 

/*
Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. 
Цените зависят от месеца на престоя: 

    Май и октомври                      Юни и септември                       Юли и август 
Студио – 50 лв./нощувка           Студио – 75.20 лв./нощувка          Студио – 76 лв./нощувка 
Апартамент – 65 лв./нощувка      Апартамент – 68.70 лв./нощувка       Апартамент – 77 лв./нощувка 

Предлагат се и следните отстъпки: 
    За студио, при повече от 7 нощувки през май и октомври : 5% намаление. 
    За студио, при повече от 14 нощувки през май и октомври : 30% намаление. 
    За студио, при повече от 14 нощувки през юни и септември: 20% намаление. 
    За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление. 

Вход 
Получават се 2 аргумента: 
    месецът – May, June, July, August, September или October 
    броят на нощувките – цяло число в интервала [0 … 200] 

Изход 
Да се отпечатат на конзолата 2 реда: 
    На първия ред: “Apartment: {цена за целият престой} lv.” 
    На втория ред: “Studio: {цена за целият престой} lv.” 
Цената за целия престой форматирана с точност до два знака след десетичната запетая. 

Примерен вход и изход 

Вход        (["May", "15"]) 

Изход       Apartment: 877.50 lv. 
            Studio: 525.00 lv.

Обяснения   През май, при повече от 14 нощувки, намаляваме цената на студиото с 30% (50 – 15 = 35), а на апартамента – с 10% (65 – 6.5 =58.5). 
            Целият престой в апартамент – 877.50 лв. 
            Целият престой в студио – 525.00 лв. 

Вход        (["June", "14"]) 

Изход       Apartment: 961.80 lv. 
            Studio: 1052.80 lv. 

Вход        (["August", "20"]) 

Изход        Apartment: 1386.00 lv. 
             Studio: 1520.00 lv. 

*/