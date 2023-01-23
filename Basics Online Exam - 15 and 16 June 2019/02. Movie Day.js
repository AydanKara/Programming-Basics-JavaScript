function movieDay(params) {
    let snapshotTime = Number(params[0]);
    let numberScenes = Number(params[1]);
    let sceneDuration = Number(params[2]);
    let preparation = snapshotTime * 0.15;
    let shootTime = numberScenes * sceneDuration;
    let requiredTime = preparation + shootTime;
    if (requiredTime <= snapshotTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(snapshotTime - requiredTime)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${requiredTime - snapshotTime} minutes.`);
    }
}
movieDay(["120", 

    "10", 
    
    "11"])