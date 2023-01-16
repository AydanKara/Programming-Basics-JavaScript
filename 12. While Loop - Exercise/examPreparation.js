function examPreparation(params) {

    let allowFail = Number(params[0]);
    let index = 1;
    let problem = params[index];
    index++;
    let scoreSum = 0;
    let numberProblems = 0;
    let failProblems = 0;

    while (problem !== "Enough") {
        let problemGrade = Number(params[index]);
        scoreSum += problemGrade;
        numberProblems++;
        index++;
        problem = params[index];
        index++;
        if (problemGrade <= 4) {
            failProblems++;
            if (failProblems === allowFail) {
                break;
            }
        }
    }
    if (failProblems === allowFail) {
        console.log(`You need a break, ${failProblems} poor grades.`);
    } else {
        index -= 3;
        problem = params[index];
        let avgScore = scoreSum / numberProblems;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberProblems}`);
        console.log(`Last problem: ${problem}`);
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]) 