function sleepyTomCat(params) {
    let holidays = Number(params[0]);
    let workingDays = 365 - holidays;
    let spielTime = workingDays * 63 + holidays * 127;
    let spielTimeYear = 30000;

    let diff = Math.abs(spielTime - spielTimeYear);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (spielTimeYear > spielTime) {
        console.log(`Tom sleeps well `);
        console.log(`${h} hours and ${m} minutes less for play `)
    } else {
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`)
    }
}
sleepyTomCat([113])