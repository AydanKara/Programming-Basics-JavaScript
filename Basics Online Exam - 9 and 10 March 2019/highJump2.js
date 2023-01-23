function highJump(params) {
    let target = Number(params[0]);
    let jumpsCounter = 0;
    let failedJump = 0;
    let startTarget = target - 30;
 
 
    for (let index = 1; index < params.length; index++) {
        let jump = Number(params[index]);
        jumpsCounter++;
 
        if (jump > startTarget) {
            if (startTarget >= target) {
                console.log(`Tihomir succeeded, he jumped over ${startTarget}cm after ${jumpsCounter} jumps.`);
                return;
            }
            startTarget += 5;
            failedJump = 0;
        } else {
            failedJump++;
 
            if (failedJump === 3) {
                console.log(`Tihomir failed at ${startTarget}cm after ${jumpsCounter} jumps.`);
                return;
            }
        }
    }
    console.log(`Tihomir failed at ${startTarget}cm after ${jumpsCounter} jumps.`)
}
highJump(["231", 

"205", 

"212", 

"213", 

"228", 

"229", 

"230", 

"235"]) 
