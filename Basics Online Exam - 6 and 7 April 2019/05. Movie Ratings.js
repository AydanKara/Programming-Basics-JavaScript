function movieRatings(params) {
    let movieCount = Number(params[0]);
    let highestRating = Number.MIN_VALUE;
    let lowestRating = Number.MAX_VALUE;
    let total = 0;
    let counter = 0;
    let highestMovie = "";
    let lowestMovie = "";
    let index = 1;

    for (let i = 1; i <= movieCount; i++) {
        let movie = params[index];
        let rating = Number(params[++index]);
        total += rating;
        counter++;
        if (rating > highestRating) {
            highestMovie = movie;
            highestRating = rating
        } else if (rating < lowestRating) {
            lowestMovie = movie;
            lowestRating = rating;
        }
        index++;
    }
    let averageRating = total / counter;
    console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
movieRatings([
"5", 
"A Star is Born", 
"7.8", 
"Creed 2", 
"7.3", 
"Mary Poppins", 
"7.2", 
"Vice", 
"7.2", 
"Captain Marvel", 
"7.1" 
])