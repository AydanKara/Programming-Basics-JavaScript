function bills(params) {
    let mount = Number(params[0]);
    let totalElectricity = 0;
    let water = mount * 20;
    let internet = mount * 15;
    let average = 0;
    let totalOther = 0;

    for (let index = 1; index <= mount; index++) {
        let electricity = Number(params[index]);
        totalElectricity += electricity;
        let other = (electricity + 20 + 15) * 1.2;
        totalOther += other;
    }
    average = (totalElectricity + water + internet + totalOther) / mount;
    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`)
    console.log(`Water: ${water.toFixed(2)} lv`)
    console.log(`Internet: ${internet.toFixed(2)} lv`)
    console.log(`Other: ${totalOther.toFixed(2)} lv`)
    console.log(`Average: ${average.toFixed(2)} lv`)

}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])

/*
Месечни разходи 

Напишете програма която да пресмята средният разход за месец на семейство за даден период време. 
За всеки месец разходите са следните: 
    За ток – всеки месец е различен, ще се чете от конзолата 
    за вода – 20 лв. 
    за интернет – 15 лв. 
    за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%. 
    За всеки разход трябва да се пресметне колко общо е платено за всички месеци. 

Вход 
        Входът се чете от конзолата: 
             Първи ред – месеците за които се търси средният разход – цяло число в интервала [1...100] 
             За всеки месец – сметката за ток – реално число в интервала [1.00...1000.00] 

Изход 
Да се отпечата на конзолата 5 реда: 
1ви ред: "Electricity: {ток за всички месеци} lv" 
2ри ред: "Water: {вода за всички месеци} lv" 
3ти ред: "Internet: {интернет за всички месеци} lv" 
4ти ред: "Other: {други за всички месеци} lv" 
5ти ред: "Average: {средно всички разходи за месец} lv" 
Всички числа трябва да са форматирана до вторият знак след запетаята. 
*/