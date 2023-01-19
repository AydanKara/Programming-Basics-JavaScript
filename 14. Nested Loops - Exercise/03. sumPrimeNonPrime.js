function sumPrimeNonPrime(params) {
    let prime = 0;
    let nonPrime = 0;
    let index = 0;
    let command = params[index];

    while (command !== "stop") {
        let currentCommand = Number(command);
        if (currentCommand < 0) {
            console.log(`Number is negative.`);
            index++;
            command = params[index];
            continue;
        }
        let counter = 0;
        for (let i = 2; i < currentCommand; i++) {
            if (currentCommand % i === 0) {
                counter++;
            }
            if (counter > 0) {
                break;
            }
        }
        if (counter === 0) {
            prime += currentCommand;
        } else {
            nonPrime += currentCommand;
        }
        index++;
        command = params[index];
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrimeNonPrime(["5", "3", "4", "5", "6", "7", "stop"])