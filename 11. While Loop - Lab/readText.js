function readText(params) {
    let index = 0;

    let currentWord = params[index];

    while (currentWord !== "Stop") {

        console.log(currentWord);
        index++;
        currentWord = params[index];
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]) 