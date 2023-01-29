function logistics(params) {
    let loadCount = Number(params[0]);
    let total = 0;
    let averageTon = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;

    for (let index = 1; index < params.length; index++) {
        let loadTon = Number(params[index]);
        if (loadTon < 4) {
            total += loadTon;
            let busTon = loadTon * 200;
            averageTon += busTon;
            busTon = 0;
            bus += loadTon;
        } else if (loadTon <= 11) {
            total += loadTon;
            let truckTon = loadTon * 175;
            averageTon += truckTon;
            truckTon = 0;
            truck += loadTon;
        } else {
            total += loadTon;
            let trainTon = loadTon * 120;
            averageTon += trainTon;
            train += loadTon;
        }
    }
    console.log(`${(averageTon / total).toFixed(2)}`);
    console.log(`${(bus / total * 100).toFixed(2)}%`);
    console.log(`${(truck / total * 100).toFixed(2)}%`);
    console.log(`${(train / total * 100).toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"])