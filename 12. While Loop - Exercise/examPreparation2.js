function examPreparation(params) {

    let allowFail = Number(params[0]);
    let index = 1;
    let scoreSum = 0;
    let numberProblems = 0;
    let failProblems = 0;
    let lastProblem = "";

    while (failProblems < allowFail) {
        let problem = params[index];
        if (problem === "Enough") {
            index -= 2;
            lastProblem = params[index];
            let avgScore = scoreSum / numberProblems;
            console.log(`Average score: ${avgScore.toFixed(2)}`);
            console.log(`Number of problems: ${numberProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        index++;
        let problemGrade = Number(params[index]);
        index++;
        scoreSum += problemGrade;
        numberProblems++;
        if (problemGrade <= 4) {
            failProblems++;
        }
    }
    if (failProblems === allowFail) {
        console.log(`You need a break, ${failProblems} poor grades.`);
    }
}
examPreparation(["2", 

"Income", 

"3", 

"Game Info", 

"6", 

"Best Player", 

"4"]) 