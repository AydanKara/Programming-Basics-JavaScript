function easterLunch(params) {
    let flourPriceKilogram = Number(params[0]);
    let flourKilogram = Number(params[1]);
    let sugarKilograms = Number(params[2]);
    let eggshells = Number(params[3]);
    let packagesYeast = Number(params[4]);
    let sugarPriceKilograms = flourPriceKilogram * 0.75;
    let eggsPriceCrust = flourPriceKilogram * 1.1;
    let yeastPricePackage = sugarPriceKilograms * 0.2;
    let flourAmount = flourPriceKilogram * flourKilogram;
    let sugarAmount = sugarPriceKilograms * sugarKilograms;
    let eggsAmount = eggsPriceCrust * eggshells;
    let yeastAmount = yeastPricePackage * packagesYeast;
    let totalAmount = flourAmount + sugarAmount + eggsAmount + yeastAmount;
    console.log(totalAmount.toFixed(2));
}
easterLunch([
    "50",
    "10", 
    "3.5", 
    "6", 
    "1"
])
