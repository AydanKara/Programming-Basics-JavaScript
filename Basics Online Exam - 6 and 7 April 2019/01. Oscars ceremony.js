function oscarsCeremony(params) {
    let hallRent = Number(params[0]);
    let statuettesPrice = hallRent * 0.7;
    let cateringPrice = statuettesPrice * 0.85;
    let soundingPrice = cateringPrice / 2;
    let totalCost = hallRent + statuettesPrice + cateringPrice + soundingPrice;
    console.log(totalCost.toFixed(2));
}
oscarsCeremony(["3500"])