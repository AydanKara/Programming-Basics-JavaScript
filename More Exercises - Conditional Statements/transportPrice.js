function transportPrice(params) {
    let n = Number(params[0]);
    let tariff = params[1];
    let startFeeTaxi = 0.7;
    let dayTariffTaxi = 0.79;
    let nightTariffTaxi = 0.9;
    let priceTaxi = 0;
    let priceBus = n * 0.09;
    let priceTrain = n * 0.06;

    if (n < 20) {
        switch (tariff) {
            case "day": priceTaxi = startFeeTaxi + (n * dayTariffTaxi); break;
            case "night": priceTaxi = startFeeTaxi + (n * nightTariffTaxi); break;
        }
        console.log(priceTaxi.toFixed(2));
    } else if (n >= 20 && n < 100) {
        console.log(priceBus.toFixed(2));
    } else if (n >= 100) {
        if (priceBus < priceTrain) {
            console.log(priceBus.toFixed(2));
        } else {
            console.log(priceTrain.toFixed(2));
        }
    }
}
transportPrice(["25", "day"])