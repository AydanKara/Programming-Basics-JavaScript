function moving(params) {
    let width = Number(params[0]);
    let length = Number(params[1]);
    let height = Number(params[2]);
    let freeSpace = width * length * height;
    let totalBoxes = 0;
    let index = 3;
    let command = params[index];

    while (command !== "Done") {
        let currentBox = Number(command);
        totalBoxes += currentBox;
        if (totalBoxes > freeSpace) {
            console.log(`No more free space! You need ${totalBoxes - freeSpace} Cubic meters more.`);
            break;
        }
        index++;
        command = params[index];
    }
    if (command === "Done" && freeSpace > totalBoxes) {
        console.log(`${freeSpace - totalBoxes} Cubic meters left.`);
    }
}
moving(["10",  

"10", 

"2", 

"20", 

"20", 

"20", 

"20", 

"122"]) 