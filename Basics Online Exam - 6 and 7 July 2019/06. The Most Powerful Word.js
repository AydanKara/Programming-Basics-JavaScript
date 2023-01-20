function theMostPowerfulWord(params) {
    let mostPowerfulWord = "";
    let maxPower = 0;
    let index = 0;
    let command = params[index];

    while (command !== "End of words") {
        let sum = 0;
        for (let i = 0; i < command.length; i++) {
            let charCode = command[i].charCodeAt(0);
            sum += charCode;
        }
        let wordLength = command.length;
        let command2 = command.toLowerCase();
        if (command2[0] == 'a' || command2[0] == 'e' || command2[0] == 'i' ||
            command2[0] == 'o' || command2[0] == 'u' || command2[0] == 'y') {
            sum *= wordLength;
        } else {
            Math.floor(sum /= wordLength);
        }
        if (sum > maxPower) {
            maxPower = sum;
            mostPowerfulWord = command;
        }
        command = params[++index];
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${maxPower}`)
}
theMostPowerfulWord
([
    "The", 
    "Most", 
    "Powerful", 
    "Word", 
    "Is", 
    "Experience", 
    "End of words" 
])