function trekkingMania(params) {
    let groupCount = Number(params[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let total = 0;

    for (let index = 1; index < params.length; index++) {
        let currentGroup = Number(params[index]);
        total += currentGroup;
        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup <= 25) {
            kilimandjaro += currentGroup;
        } else if (currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }
    console.log(`${((musala / total) * 100).toFixed(2)}%`);
    console.log(`${((monblan / total) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / total) * 100).toFixed(2)}%`);
    console.log(`${((k2 / total) * 100).toFixed(2)}%`);
    console.log(`${((everest / total) * 100).toFixed(2)}%`);
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]) 

/*
Изкачващи Мусала: 6 / 326 * 100 = 1.84% 
Според размера на групата, катерачите ще изкачват различни върхове. 
    Група до 5 човека – изкачват Мусала 
    Група от 6 до 12 човека – изкачват Монблан 
    Група от 13 до 25 човека – изкачват Килиманджаро 
    Група от 26 до 40 човека –  изкачват К2 
    Група от 41 или повече човека – изкачват Еверест 

Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх. 
От конзолата се четат поредица от числа, всяко на отделен ред: 
    На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000] 
    За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000] 
*/