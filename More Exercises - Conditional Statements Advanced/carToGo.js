function carToGo(params) {
    let budget = Number(params[0]);
    let season = params[1];
    let typeCar = "";
    let car = "";
    let total = 0;
    if (budget <= 100) {
        typeCar = "Economy class";
        if (season === "Summer") {
            car = "Cabrio";
            total = budget * 0.35;
        } else if (season === "Winter") {
            car = "Jeep";
            total = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        typeCar = "Compact class";
        if (season === "Summer") {
            car = "Cabrio";
            total = budget * 0.45;
        } else if (season === "Winter") {
            car = "Jeep";
            total = budget * 0.80;
        }
    } else if (budget > 500) {
        typeCar = "Luxury class";
        car = "Jeep";
        total = budget * 0.90;
    }
    console.log(`${typeCar}`);
    console.log(`${car} - ${total.toFixed(2)}`)
}
carToGo(["450", "Summer"])

/*
Вход 
    Входът се чете от конзолата и се състои от два реда: 
    Първи ред – Бюджет – реално число в интервала [10.00...10000.00] 
    Втори ред –  Сезон – текст "Summer" или "Winter" 

Изход 
    На конзолата трябва да се отпечатат два реда. 
    
    Първи ред – "{Вид на класа}" 
        "Economy class", "Compact class" или "Luxury class" 
    
    Втори ред – "{Вид на колата} - {цена на колата}" 
        Видът на колата – "Cabrio" или "Jeep" 
    
    Цената трябва да е форматирана до втория знак след запетаята 
 */