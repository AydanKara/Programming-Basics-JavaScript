function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
        switch (season) {
            case "summer": budget = budget * 0.3;
                console.log(`Camp - ${budget.toFixed(2)}`);
                break;
            case "winter": budget = budget * 0.7;
                console.log(`Hotel - ${budget.toFixed(2)}`);
                break;
        }
    } else if (budget <= 1000) {
        console.log("Somewhere in Balkans");
        switch (season) {
            case "summer": budget = budget * 0.4;
                console.log(`Camp - ${budget.toFixed(2)}`);
                break;
            case "winter": budget = budget * 0.8;
                console.log(`Hotel - ${budget.toFixed(2)}`);
                break;
        }
    } else if (budget > 1000) {
        console.log("Somewhere in Europe");
        budget = budget * 0.9;
        console.log(`Hotel - ${budget.toFixed(2)}`);
    }
}
journey(["50", "summer"])

/*
Пътешествие 

Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон. 
Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи. 
Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. 
Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще почива в хотел. 

Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета:  
    При 100лв. или по-малко – някъде в България 
        Лято – 30% от бюджета 
        Зима – 70% от бюджета 
    При 1000лв. или по малко – някъде на Балканите 
        Лято – 40% от бюджета 
        Зима – 80% от бюджета 
При повече от 1000лв. – някъде из Европа 
При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета. 

Вход 

Приемат се 2 аргумента : 
Първи– Бюджет, реално число в интервала [10.00...5000.00]. 
Втори–  Един от двата възможни сезона: "summer" или "winter" 

Изход 

На конзолата трябва да се отпечатат два реда. 
    Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe" 
    Втори ред – "{Вид почивка} – {Похарчена сума}" 
    Почивката може да е между "Camp" и "Hotel" 
    Сумата трябва да е закръглена с точност до вторият знак след запетаята. 

 Примерен вход и изход 

вход        (["50", "summer"])        (["75", "winter"])        (["312", "summer"])     (["678.53", "winter"])      (["1500", "summer"]) 

изход       Somewhere in Bulgaria     Somewhere in Bulgaria     Somewhere in Balkans    Somewhere in Balkans        Somewhere in Europe 
            Camp - 15.00              Hotel - 52.50             Camp - 124.80           Hotel - 542.82              Hotel - 1350.00 

*/