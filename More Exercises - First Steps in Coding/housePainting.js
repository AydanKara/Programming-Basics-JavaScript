function housePainting(params) {
    let x = Number(params[0]);  // височината на къщата
    let y = Number(params[1]);  // дължината на страничната стена
    let h = Number(params[2]);  // височината на триъгълната стена на прокрива

    // Walls
    let areaSideWall = x * y;
    let areaWindow = 1.5 * 1.5;
    let areaAllSides = (2 * areaSideWall) - (2 * areaWindow);
    let areaFrontBackWall = Math.pow(x, 2);
    let areaDoor = 1.2 * 2;
    let totalAreaFrontBack = (2 * areaFrontBackWall) - areaDoor;
    let totalAreaWalls = areaAllSides + totalAreaFrontBack;
    let greenPaint = totalAreaWalls / 3.4;
    console.log(greenPaint.toFixed(2));
    // Roof
    let areaRoofSides = 2 * (x * y);
    let areaRoofFrontBack = 2 * ((x * h) / 2);
    let totalAreaRoof = areaRoofSides + areaRoofFrontBack;
    let redPaint = totalAreaRoof / 4.3;
    console.log(redPaint.toFixed(2));

}
housePainting(["6", "10", "5.2"])

/* 
СТЕНИ 
    Страничната стена е с площ – 6*10 = 60; 
    Прозорецът е с площ = 1.5*1.5 = 2.25; 
    Двете страници са общо – 2*60 - 2*2.25 = 115.5; 
    Задната стена – 6*6 = 36; Вход: 1.2*2 = 2.4 
    Общо предна и задна – 2*36 - 2.4 = 69.6 
    ОБЩА ПЛОЩ: 115.5 + 69.6 = 185.1 м2 
    Зелена боя = 185.1 / 3.4 = 54.44 литра 

ПОКРИВ 
    Двата правоъгълника на покрива – 2 * (6*10) = 120 
    Двата триъгълниците – 2 * (6*5.2 / 2) = 2 * 15.6 = 31.2 
    ОБЩА ПЛОЩ: 120 + 31.2 = 151.2 м2 
    Червена боя = 151.2 / 4.3 = 35.16 литра 

Изход 

Да се отпечатат на конзолата две числа всяко на нов ред: 
    Литрите зелена боя 
    Литритe червена боя 
Форматирани до вторият знак след десетичната запетая. 
*/