function skeleton(input) {

    let minControls = Number(input[0]);
    let secControls = Number(input[1]);
    let lenght = Number(input[2]);
    let sec100meters = Number(input[3]);

    let timeControl = minControls * 60 + secControls;
    let reducedTime = (lenght / 120) * 2.5;
    let timeMarin = (lenght / 100) * sec100meters - reducedTime;

    if (timeMarin <= timeControl) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${timeMarin.toFixed(3)}.`);
    } else {

        console.log(`No, Marin failed! He was ${Math.abs(timeControl - timeMarin).toFixed(3)} second slower.`);
    }
}
skeleton(["2", "12", "1200", "10"])

/*
Минути на контролата – цяло число в интервала [0…59] 
Секунди на контролата – цяло число в интервала [0…59] 
Дължината на улея в метри – реално число в интервала [0.00…50000] 
Секунди за изминаване на 100 метра – цяло число в интервала [0…1000] 

На конзолата трябва да се отпечата на един или два реда: 
Ако времето на Марин е по-малко или равно на контролата: 
"Marin Bangiev won an Olympic quota!" 
"His time is {времето на Марин в секунди}." 
Ако времето на Марин е повече от това на контролата: 
 "No, Marin failed! He was {недостигащи секунди} second slower." 
Резултатът трябва да е форматиран до третия знак след десетичния знак. 

Изчисляване на контролата в секунди: 2 * 60 + 12 => 132 секунди 
Изчисляване, колко пъти времето ще намалее: 1200 / 120 = 10 
Общо намалено време: 10 * 2.5 = 25 секунди 
Времето на Марин: (1200 / 100) * 10 – 25 = 95 секунди 
Контролно време: 132 сек., времето на Марин -95 сек. 
95 <= 132 -> Марин взима квота.
 */