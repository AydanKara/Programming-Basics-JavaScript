function tennisEquipment(input) {
    let priceRacket = Number(input[0]);
    let countRackets = Number(input[1]);
    let numberSneakers = Number(input[2]);

    let allPriceRacket = priceRacket * countRackets;
    let priceSneakers = (priceRacket / 6) * numberSneakers;
    let restEquipment = (allPriceRacket + priceSneakers) * 0.2;
    let total = allPriceRacket + priceSneakers + restEquipment;
    let priceDjokovic = total / 8;
    let sponsors = total * (7 / 8);
    
    console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);
}
tennisEquipment(["850", "4", "2"])

/*
                    Цената за ракетите 4 * 850 => 3400 
                    Цена за чифт маратонки 850 / 6 => 141.66 
                    Цена за всички маратонки 2 * 141.66 => 283.33 
                    Цена за останало оборудване (3400 + 283.33) * 0.2 = 736.66   
                    Обща цена = 3400 + 283.33 + 736.66 = 4420 
                    Цена за Джокович = 4420 / 8 = 552 
                    Цена за спонсорите = 4420 * 7 / 8 = 3868 
Задача 1. Оборудване за тенис 

Световният номер едно в мъжкия тенис Новак Джокович е решил да подмени оборудването, с което играе своите мачове. 
За целта той ви моли да напишете програма, която да изчисли стойността на покупките, като се има предвид, 
че той трябва да заплати 1/8 от цената, а останалите 7/8 трябва да бъдат заплатени от неговите спонсори. 
Джокович иска да закупи n на брой тенис ракети и m чифта маратонки, както и друга екипировка, 
на стойност 20% от общата цена на закупените ракети и маратонки. 
Известно е, че:	 
    1 чифт маратонки = 1/6 от цената на една тенис ракета 

Вход 
От конзолата се прочитат 3 реда: 
    Цена на една тенис ракета – реално число в интервала [0.00…100000.00] 
    Брой тенис ракети - цяло число в интервала [0…100] 
    Брой чифтове маратонки - цяло число в интервала [0…100] 
    Крайната цена се сформира от сумата от цената на ракетите, цената на маратонките и цената на останалата екипировка. 

Изход 
    На конзолата се отпечатват 2 реда: 
    "Price to be paid by Djokovic {1/8 от общата цена, закръглена към по-малкото цяло число}" 
    "Price to be paid by sponsors {7/8 от общата цена, закръглена към по-голямото цяло число}" 

Примерен вход и изход 

Вход                850, 4, 2         

Изход               Price to be paid by Djokovic 552 
                    Price to be paid by sponsors 3868    

Обяснения           Цената за ракетите 4 * 850 => 3400 
                    Цена за чифт маратонки 850 / 6 => 141.66 
                    Цена за всички маратонки 2 * 141.66 => 283.33 
                    Цена за останало оборудване (3400 + 283.33) * 0.2 = 736.66   
                    Обща цена = 3400 + 283.33 + 736.66 = 4420 
                    Цена за Джокович = 4420 / 8 = 552 
                    Цена за спонсорите = 4420 * 7 / 8 = 3868 







386 

7 

4 

Price to be paid by Djokovic 443 

Price to be paid by sponsors 3108 

 


 */