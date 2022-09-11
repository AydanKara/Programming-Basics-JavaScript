function VacationBooksList(input) {
    let numberofpage = Number(input[0])
    let pageprohour = Number(input[1])
    let countday = Number(input[2])
    let totaltime = numberofpage/pageprohour
    let requiredtime = totaltime/countday
    console.log(requiredtime)
}

VacationBooksList(["212", "20", "2"] )