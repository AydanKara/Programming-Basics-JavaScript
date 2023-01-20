function poolDay(params) {
    let people = Number(params[0]);
    let entranceFee = Number(params[1]);
    let sunLounger = Number(params[2]);
    let umbrella = Number(params[3]);

    let totalEntranceFee = people * entranceFee;
    let total = (totalEntranceFee + (Math.ceil(people * 0.75) * sunLounger) + (Math.ceil(people * 0.5) * umbrella)).toFixed(2);
    console.log(`${total} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"])

/*21 човека по 5.50 лв. такса вход е 115.50 лв. 

75% от 21 човека са 16, следователно трябват 16 шезлонга, които са на цена от 4.40лв. -> 16 * 4.40 = 70.40 лв. 

50% от 21 човека са 11, следователно трябват 11 чадъра, които са на цена от 6.20лв. -> 11 * 6.20 = 68.20 лв. 

Крайната цена е: 115.50 + 70.40 + 68.20 = 254.10  */