function pcGameShop(params) {
    let n = Number(params[0]);
    let hearthstone = 0;
    let forNite = 0;
    let overWatch = 0;
    let others = 0;
    let index = 1;
    for (let i = 1; i <= n; i++) {
        let game = params[index];
        if (game === "Hearthstone") {
            hearthstone++;
        } else if (game === "Fornite") {
            forNite++;
        } else if (game === "Overwatch") {
            overWatch++;
        } else {
            others++;
        }
        index++;
    }
    console.log(`Hearthstone - ${(hearthstone * 100 / n).toFixed(2)}%`);
    console.log(`Fornite - ${(forNite * 100 / n).toFixed(2)}%`);
    console.log(`Overwatch - ${(overWatch * 100 / n).toFixed(2)}%`);
    console.log(`Others - ${(others * 100 / n).toFixed(2)}%`);
}
pcGameShop([
    "4",
    "Hearthstone", 
    "Fornite", 
    "Overwatch", 
    "Counter-Strike"
])