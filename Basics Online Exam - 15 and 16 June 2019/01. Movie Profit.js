function movieProfit(params) {
    let movieName = params[0];
    let days = Number(params[1]);
    let tickets = Number(params[2]);
    let priceTicket = Number(params[3]);
    let cinemaPercent = Number(params[4]);

    let priceProDay = tickets * priceTicket;
    let income = days * priceProDay;
    let percent = income * cinemaPercent / 100;
    console.log(`The profit from the movie ${movieName} is ${(income - percent).toFixed(2)} lv.`)
}
movieProfit(["The Programmer", 

    "20", 
    
    "500", 
    
    "7.50", 
    
    "7"])