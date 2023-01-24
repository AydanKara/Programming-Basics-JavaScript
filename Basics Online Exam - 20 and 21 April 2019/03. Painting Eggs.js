function paintingEggs(params) {
    let eggSize = params[0];
    let eggColor = params[1];
    let batches = Number(params[2]);
    let total = 0;
    switch (eggSize) {
        case "Large":
            switch (eggColor) {
                case "Red": total = batches * 16; break;
                case "Green": total = batches * 12; break;
                case "Yellow": total = batches * 9; break;
            }
            break;
        case "Medium":
            switch (eggColor) {
                case "Red": total = batches * 13; break;
                case "Green": total = batches * 9; break;
                case "Yellow": total = batches * 7; break;
            }
            break;
        case "Small":
            switch (eggColor) {
                case "Red": total = batches * 9; break;
                case "Green": total = batches * 8; break;
                case "Yellow": total = batches * 5; break;
            }
            break;
    }
    let endPrice = total * 0.65;
    console.log(`${endPrice.toFixed(2)} leva.`);
}
paintingEggs(["Large", "Red", "7"])