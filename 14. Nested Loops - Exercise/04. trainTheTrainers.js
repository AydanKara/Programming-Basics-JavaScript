function trainTheTrainers(params) {
    let juryNumber = Number(params[0]);
    let index = 1;
    let command = params[index];
    let finalSumGrades = 0;
    let counter = 0;

    while (command !== "Finish") {
        counter++;
        let presentation = command;
        let sumGrades = 0;
        for (let i = 1; i <= juryNumber; i++) {
            let grade = Number(params[++index]);
            sumGrades += grade;
        }
        let avgSumGrades = sumGrades / juryNumber;
        finalSumGrades += avgSumGrades;
        console.log(`${presentation} - ${avgSumGrades.toFixed(2)}.`);
        command = params[++index];
    }
    let avgFinalSumGrades = finalSumGrades / counter;
    console.log(`Student's final assessment is ${avgFinalSumGrades.toFixed(2)}.`)
}
trainTheTrainers([
    "2", 
    "While-Loop", "6.00", "5.50", 
    "For-Loop", "5.84", "5.66", 
    "Finish"]) 