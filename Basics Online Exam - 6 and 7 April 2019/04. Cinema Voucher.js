function cinemaVoucher(params) {
    let voucher = Number(params[0]);
    let tickets = 0;
    let others = 0;
    let index = 1;
    let command = params[index];
    let price = 0;
    let firstCharacter = 0;
    let secondCharacter = 0;

    while (command !== "End") {
        if (command.length > 8) {
            firstCharacter = command[0].charCodeAt(0);
            secondCharacter = command[1].charCodeAt(0);
            price += firstCharacter + secondCharacter;
            if (price <= voucher) {
                tickets++;
            }
        } else {
            firstCharacter = command[0].charCodeAt(0);
            price += firstCharacter;
            if (price <= voucher) {
                others++;
            }
        }
        if (price > voucher) {
            break;
        }
        command = params[++index];
    }
    console.log(tickets);
    console.log(others);
}
cinemaVoucher([
    "300", 
    "Captain Marvel", 
    "popcorn", 
    "Pepsi"
])