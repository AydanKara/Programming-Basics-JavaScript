function footballLeague(params) {
    let capacity = Number(params[0]);
    let fansCount = Number(params[1]);
    let allFansPercent = fansCount / capacity * 100;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let index = 2; index < params.length; index++) {
        let sector = params[index];
        switch (sector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }
    console.log(`${(sectorA / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fansCount * 100).toFixed(2)}%`);
    console.log(`${allFansPercent.toFixed(2)}%`);
}
footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"])

/*
Процентът на феновете в сектор А 

Процентът на феновете в сектор Б 

Процентът на феновете в сектор В 

Процентът на феновете в сектор Г 

Процентът на всички фенове, спрямо капацитета на стадиона. 
*/