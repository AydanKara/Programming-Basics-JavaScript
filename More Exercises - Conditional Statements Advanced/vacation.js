function vacation(params) {
    let budget = Number(params[0]);
    let season = params[1];
    let accommodation = "";
    let location = "";

    if (budget <= 1000) {
        accommodation = "Camp";
        if (season === "Summer") {
            location = "Alaska"
            budget *= 0.65;
        } else if (season === "Winter") {
            location = "Morocco";
            budget *= 0.45;
        }
    } else if (budget > 1000 && budget <= 3000) {
        accommodation = "Hut";
        if (season === "Summer") {
            location = "Alaska"
            budget *= 0.80;
        } else if (season === "Winter") {
            location = "Morocco";
            budget *= 0.60;
        }
    } else if (budget > 3000) {
        accommodation = "Hotel";
        budget *= 0.90;
        if (season === "Summer") {
            location = "Alaska"
        } else if (season === "Winter") {
            location = "Morocco";
        }
    }
    console.log(`${location} - ${accommodation} - ${budget.toFixed(2)}`)
}
vacation(["800", "Summer"])

/*
Ваканция 
Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, локацията и мястото на настаняване за ваканция.
Сезоните са лято и зима – "Summer" и "Winter". Локациите са – "Alaska" и "Morocco". 
Възможните места за настаняване – "Hotel", "Hut" или "Camp". 
Вход 
    Входът се чете от конзолата и се състои от два реда: 
    Първи ред – Бюджет – реално число в интервала [10.00...10000.00] 
    Втори ред –  Сезон – текст "Summer" или "Winter" 

Изход 
    На конзолата трябва да се отпечатат един ред. 
    "{локацията} – {мястото за настаняване} – {цената}" 
    Цената трябва да е форматирана до вторият знак след десетичната запетая.
*/