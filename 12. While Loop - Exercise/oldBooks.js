function oldBooks(params) {
    let book = params[0];
    let counter = 0;
    let index = 1;
    let currentBook = params[index];
    
    while (currentBook !== "No More Books") {
        if (currentBook === book) {
            break;
        } else {
            counter++;
            index++;
            currentBook = params[index];
        }
    }
    if (currentBook === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }

}
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])