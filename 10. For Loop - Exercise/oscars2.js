function oscars(input) {
 
    let nameActor = input[0];
    let points = Number(input[1]);
 
    let finalPoints = points;
 
    for (let i = 3; i <= input.length; i += 2) {
        let currentName = input[i];
        let givenPoints = Number(input[i + 1]);
        let finalJuryPoints = (currentName.length * givenPoints) / 2;
 
        finalPoints += finalJuryPoints;
 
 
        if (finalPoints < 1250.5) {
            console.log(`Sorry, ${nameActor} you need ${(1250.5 - finalPoints).toFixed(2)} more!`); break;
        }
    }
    if (finalPoints >= 1250.5) {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${finalPoints.toFixed(2)}!`);
 
    }
}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])