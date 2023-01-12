function characterSequence(params) {
    let text = params[0];

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        console.log(letter);
    }
}
characterSequence(["ice cream"])