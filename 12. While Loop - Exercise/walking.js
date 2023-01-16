function walking(params) {
    let target = 10000;
    let totalSteps = 0;
    let index = 0;
    let command = params[index];

    while (command !== "Going home") {
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - target} steps over the goal!`);
            break;
        }
        index++;
        command = params[index];
    }
    if (command === "Going home") {
        index++;
        let stepsToHome = Number(params[index]);
        totalSteps += stepsToHome;
        if (totalSteps >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - target} steps over the goal!`);
        } else {
            console.log(`${target - totalSteps} more steps to reach goal.`)
        }
    }
}
walking(["1500", 

"300", 

"2500", 

"3000", 

"Going home", 

"200"])