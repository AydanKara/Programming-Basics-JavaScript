function cinema(params) {
    let hallCapacity = Number(params[0]);
    let total = 0;
    let index = 1;
    let command = params[index];
    let customerCounter = 0;
    while (command !== "Movie time!") {
        let enteringCustomers = Number(command);
        customerCounter += enteringCustomers;
        if (customerCounter > hallCapacity) {
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${total} lv.`);
            return;
        }
        if (enteringCustomers % 3 === 0) {
            total += enteringCustomers * 5 - 5;
        } else {
            total += enteringCustomers * 5;
        }
        command = params[++index];
    }
    console.log(`There are ${hallCapacity - customerCounter} seats left in the cinema.`);
    console.log(`Cinema income - ${total} lv.`);
}
cinema([
    "50", 

    "15", 
    
    "10", 
    
    "10", 
    
    "15", 
    
    "5", 
])