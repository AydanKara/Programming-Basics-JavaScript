function cake(params) {
    let width = Number(params[0]);
    let length = Number(params[1]);
    let totalPieces = width * length;
    let numberPieces = 0;
    let index = 2;
    let command = params[index];

    while (command !== "STOP") {
        let takenPiece = Number(command);
        numberPieces += takenPiece;
        if (numberPieces >= totalPieces) {
            console.log(`No more cake left! You need ${numberPieces - totalPieces} pieces more.`);
            break;
        }
        index++;
        command = params[index];
    }
    if (command === "STOP" && totalPieces >= numberPieces) {
        console.log(`${totalPieces - numberPieces} pieces are left.`);
    }
}
cake(["10", 

"10", 

"20", 

"20", 

"20", 

"20", 

"21"]) 