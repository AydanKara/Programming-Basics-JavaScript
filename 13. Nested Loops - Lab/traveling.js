function traveling(params) {
    let destination = params[0];
    let budget = Number(params[1]);
    let index = 2;
    let command = params[index];
    let sum = 0;

    while (sum <= budget) {
        if (destination === "End") {
            return;
        }
        let save = Number(command);
        sum += save;
        index++;
        command = params[index];
        if (sum >= budget) {
            console.log(`Going to ${destination}!`);
            sum = 0;
            destination = params[index];
            index++;
            budget = Number(params[index]);
            index++;
            command = params[index];
        }
    }
}
traveling(["France", 

"2000", 

"300", 

"300", 

"200", 

"400", 

"190", 

"258", 

"360", 

"Portugal", 

"1450", 

"400", 

"400", 

"200", 

"300", 

"300", 

"Egypt", 

"1900", 

"1000", 

"280", 

"300", 

"500", 

"End"])  