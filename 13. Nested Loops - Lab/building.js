function building(params) {
    let floorCounter = Number(params[0]);
    let roomsCounter = Number(params[1]);

    for (let floor = floorCounter; floor > 0; floor--) {
        let result = "";
        for (let room = 0; room < roomsCounter; room++) {
            if (floor === floorCounter) {
                result += `L${floor}${room} `
            } else if (floor % 2 !== 0) {
                result += `A${floor}${room} `
            } else {
                result += `O${floor}${room} `
            }
        }
        console.log(result)
    }
}
building(["6", "4"]) 