function movieStars(params) {
    let actorsBudget = Number(params[0]);
    let currentBudget = 0;
    let index = 1;
    let command = params[index];

    while (command !== "ACTION") {
        let actor = command;
        if (actor.length > 15) {
            actorsBudget *= 0.8;
        } else {
            let currentBudget = Number(params[++index]);
            actorsBudget -= currentBudget;
        }
        if (actorsBudget <= 0) {
            console.log(`We need ${(currentBudget - actorsBudget).toFixed(2)} leva for our actors.`);
            return;
        }
        command = params[++index];
    }
    console.log(`We are left with ${(actorsBudget).toFixed(2)} leva.`);
}
movieStars([
    "170000", 
    "Ben Affleck", 
    "40000.50", 
    "Zahari Baharov", 
    "80000", 
    "Tom Hanks", 
    "2000.99",
    "ACTION"
])