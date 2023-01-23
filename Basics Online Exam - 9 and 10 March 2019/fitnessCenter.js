function fitnessCenter(params) {
    let gymVisitors = Number(params[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let totalWorkOut = 0;
    let totalProtein = 0;

    for (let index = 1; index < params.length; index++) {
        let activity = params[index];
        switch (activity) {
            case "Back": back++; totalWorkOut++; break;
            case "Chest": chest++; totalWorkOut++; break;
            case "Legs": legs++; totalWorkOut++; break;
            case "Abs": abs++; totalWorkOut++; break;
            case "Protein shake": proteinShake++; totalProtein++; break;
            case "Protein bar": proteinBar++; totalProtein++; break;
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(totalWorkOut / gymVisitors * 100).toFixed(2)}% - work out`);
    console.log(`${(totalProtein / gymVisitors * 100).toFixed(2)}% - protein`);
}
fitnessCenter([
    "10",
    "Back", 
    "Chest", 
    "Legs", 
    "Abs", 
    "Protein shake", 
    "Protein bar", 
    "Protein shake", 
    "Protein bar", 
    "Legs", 
    "Abs" 
])

/*За всеки един посетител на отделен ред – дейността във фитнеса – текст 
("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")  */