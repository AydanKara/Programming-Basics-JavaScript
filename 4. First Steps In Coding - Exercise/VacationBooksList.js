function VacationBooksList(input) {
    let numberofpage = Number(input[0])
    let pageprohour = Number(input[1])
    let countday = Number(input[2])
    let totalTime = numberofpage / pageprohour
    let requiredtime = totalTime / countday
    console.log(requiredtime)
}

VacationBooksList(["212", "20", "2"] )