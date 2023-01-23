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
    console.log(`Tihomir failed at ${startTarget}cm after ${jumpsCounter} jumps.`);
}
highJump(["231", 

"235", 

"212", 

"213", 

"228", 

"229", 

"230", 

"235"]) 

/**
 * започва тренировката 30см по-ниско от целта
 * има право на 3 скока
 * успешен над височината на летвата
 * При успешен скок се вдига с 5 сантиметра.
 * При 3 неуспешни скока на една и съща височина, тренировката приключва с неуспех.
 * При достигане на желаната височина и нейното успешно прескачане, тренировката приключва с успех.
 */