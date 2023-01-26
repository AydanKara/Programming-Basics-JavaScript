function truckDriver(params) {
    let season = params[0];
    let mountKm = Number(params[1]);
    let wage = 0;

    if (mountKm <= 5000) {
        switch(season) {
            case "Spring":  
            case "Autumn": wage = mountKm * 0.75; break;
            case "Summer": wage = mountKm * 0.90; break;
            case "Winter": wage = mountKm * 1.05; break;
        }
    } else if (mountKm > 5000 && mountKm <= 10000) {
        switch(season) {
            case "Spring":  
            case "Autumn": wage = mountKm * 0.95; break;
            case "Summer": wage = mountKm * 1.10; break;
            case "Winter": wage = mountKm * 1.25; break;
        }
    } else if (mountKm > 10000 && mountKm <= 20000) {
        wage = mountKm * 1.45;
    }
    wage = 4 * (wage * 0.90);
    console.log(wage.toFixed(2));
}
truckDriver(["Summer", "3455"])

/*
Напишете програма която пресмята колко пари ще изкара шофьор на ТИР за един сезон. 
На входа програмата получава през кой сезон ще работи шофьора, както и колко километра на месец ще кара. 
Един сезон е 4 месеца. Според зависи сезона и броя километри на месец ще му се заплаща различна сума на километър:


                                Пролет/Есен        Лято            Зима 
км на месец <= 5000             0.75 лв./км     0.90 лв./км     1.05 лв./км 
5000 < км на месец <= 10000     0.95 лв./км     1.10 лв./км     1.25 лв./км 
10000 < км на месец <= 20000        1.45 лв./км – за който и да е сезон 
След като са извадени 10% за данъци се отпечатват останалите пари. 

Вход  
    Първи ред – Сезон – текст "Spring", "Summer", "Autumn" или "Winter" 
    Втори ред –  Километри на месец – реално число в интервала [10.00...20000.00] 
Изход 
    На конзолата трябва да се отпечатат едно число: 
    Заплатата на шофьора след данъците, форматирана до втория знак след десетичната запетая. 
*/