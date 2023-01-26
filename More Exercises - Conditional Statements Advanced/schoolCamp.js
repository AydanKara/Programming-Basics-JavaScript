function schoolCamp(params) {
    let season = params[0];
    let group = params[1];
    let students = Number(params[2]);
    let nights = Number(params[3]);
    let price = 0;
    let sport = "";

    switch (season) {
        case "Winter":
            if (group === "girls") {
                price = students * nights * 9.6;
                sport = "Gymnastics";
            } else if (group === "boys") {
                price = students * nights * 9.6;
                sport = "Judo";
            } else if (group === "mixed") {
                price = students * nights * 10;
                sport = "Ski";
            } break;
        case "Spring":
            if (group === "girls") {
                price = students * nights * 7.2;
                sport = "Athletics";
            } else if (group === "boys") {
                price = students * nights * 7.2;
                sport = "Tennis";
            } else if (group === "mixed") {
                price = students * nights * 9.5;
                sport = "Cycling";
            } break;
        case "Summer":
            if (group === "girls") {
                price = students * nights * 15;
                sport = "Volleyball";
            } else if (group === "boys") {
                price = students * nights * 15;
                sport = "Football";
            } else if (group === "mixed") {
                price = students * nights * 20;
                sport = "Swimming";
            } break;
    }
    if (students >= 50) {
        price *= 0.5;
    } else if (students >= 20 ) {
        price *= 0.85;
    } else if (students < 20 && students >= 10) {
        price *= 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`)

}
schoolCamp(["Winter", "mixed", "9", "15"])


/*
Вход 
От конзолата се четат 4 реда: 
    Сезонът – текст - “Winter”, “Spring” или “Summer”; 
    Видът на групата – текст - “boys”, “girls” или “mixed”; 
    Брой на учениците – цяло число в интервала [1 … 10000]; 
    Брой на нощувките – цяло число в интервала [1 … 100]. 
 */