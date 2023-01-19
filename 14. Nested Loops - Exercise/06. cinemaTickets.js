function cinemaTickets(params) {
    let index = 0;
    let command = params[index];
    let totalTicketsCounter = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        let ticketsCounter = 0;
        index++;
        let freeSeats = Number(params[index]);
        index++;
        let ticketTyp = params[index];
        while (ticketTyp !== "End") {
            switch (ticketTyp) {
                case "student": studentTickets++; break;
                case "standard": standardTickets++; break;
                case "kid": kidTickets++; break;
            }
            ticketsCounter++;
            totalTicketsCounter++;
            if (ticketsCounter === freeSeats) {
                break;
            }
            index++;
            ticketTyp = params[index];
        }
        let fullHall = ticketsCounter / freeSeats * 100;
        console.log(`${command} - ${fullHall.toFixed(2)}% full.`);
        index++;
        command = params[index];
    }
    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentTickets / totalTicketsCounter * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTickets / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTickets / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`)
}
cinemaTickets([
    "Taxi", 
    "10", 
    "standard", 
    "kid", 
    "student", 
    "student", 
    "standard", 
    "standard", 
    "End", 
    "Scary Movie", 
    "6", 
    "student", 
    "student", 
    "student", 
    "student", 
    "student", 
    "student", 
    "Finish"
]) 