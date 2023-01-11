function timeMinutes (input) {

    let hours = Number(input[0])
    let minutes = Number(input[1])

    let time = hours * 60 + minutes + 15

    let totalHours = Math.floor( time / 60)
    let totalMinutes = time % 60

    if ( totalHours > 23 ) {
        totalHours = 0
    }

    if ( totalMinutes < 10 ) {
        console.log(`${totalHours}:0${totalMinutes}`)
    } else {
        console.log(`${totalHours}:${totalMinutes}`)
    }
}

timeMinutes (["1", "46"])

