function easterLunch(params) {
    let sweetBread = Number(params[0]);
    let eggshells = Number(params[1]);
    let cookieKilograms = Number(params[2]);
    let sweetBreadPrice = sweetBread * 3.2;
    let eggsPrice = eggshells * 4.35;
    let cookiesPrice = cookieKilograms * 5.4;
    let eggDyeCost = eggshells * 12 * 0.15;
    let total = sweetBreadPrice + eggsPrice + cookiesPrice + eggDyeCost;
    console.log(total.toFixed(2));
}
easterLunch(["3", "2", "3"])

