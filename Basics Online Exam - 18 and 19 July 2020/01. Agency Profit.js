function agencyProfit(params) {
    let airline = params[0];
    let adultTickets = Number(params[1]);
    let childTickets = Number(params[2]);
    let netPriceAdultTicket = Number(params[3]);
    let serviceFee = Number(params[4]);

    let netPriceChildTickets = netPriceAdultTicket * 0.3;
    let adultTicketPriceServiceCharge = netPriceAdultTicket + serviceFee;
    let childTicketWithServiceFee = netPriceChildTickets + serviceFee;
    let totalPrice = (childTickets * childTicketWithServiceFee) + (adultTickets * adultTicketPriceServiceCharge);
    let profit = totalPrice * 0.2;

    console.log(`The profit of your agency from ${airline} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit([
"WizzAir",
"15",
"5",
"120",
"40"])

