function favoriteMovie(params) {
    let index = 0;
    let command = params[index];
    let counter = 0;
    let bestValue = 0;
    let bestMovie = "";
    while (command !== "STOP") {
        let movie = command;
        counter++;
        let char = "";
        let charToAscii = 0;
        let currentValue = 0;
        let i = 0;
        while (i < movie.length) {
            char = movie.charAt(i);
            charToAscii = movie.charCodeAt(i);
            if (char === char.toUpperCase() && char !== " " && isNaN(char)) {
                charToAscii -= movie.length;
            } else if (char === char.toLowerCase() && char !== " " && isNaN(char)) {
                charToAscii -= (2 * movie.length);
            }
            currentValue += charToAscii;
            i++;
        }
        if (currentValue > bestValue) {
            bestValue = currentValue;
            bestMovie = movie;
        }
        if (counter === 7) {
            console.log(`The limit is reached.`);
            break;
        }
        command = params[++index];
    }
    console.log(`The best movie for you is ${bestMovie} with ${bestValue} ASCII sum.`)
}
favoriteMovie(["School story 2", "The maze", "Shrek 2", "Ice age", "STOP"])

// The best movie for you is School story 2 with 1013 ASCII sum.