function computerFirm(params) {
    let computer = Number(params[0]);
    let index = 1;
    let command = Number(params[index]);
    let rating = 0;
    let possibleSales = 0;
    let madeSales = 0;
    let ratingSum = 0;
    for (let i = 1; i <= computer; i++) {
        rating = command % 10;
        ratingSum += rating;
        possibleSales = Math.trunc(command / 10);
        if (rating === 2) {
            madeSales += possibleSales * 0;
        } else if (rating === 3) {
            madeSales += possibleSales * 0.5;
        } else if (rating === 4) {
            madeSales += possibleSales * 0.7;
        } else if (rating === 5) {
            madeSales += possibleSales * 0.85;
        } else if (rating === 6) {
            madeSales += possibleSales;
        }
        command = Number(params[++index]);
    }
    console.log(madeSales.toFixed(2));
    console.log((ratingSum / computer).toFixed(2));
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

