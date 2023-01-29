function hospital(params) {
    let days = Number(params[0]);
    let tPatients = 0;
    let unPatients = 0;
    let doctors = 7;
    let untreated = 0;
    let treated = 0;

    for (let index = 1; index < params.length; index++) {
        if (index % 3 === 0) {
            if (untreated > treated) {
                doctors++;
            }
        }
        let patients = Number(params[index]);
        if (patients <= doctors) {
            tPatients += patients;
            treated += tPatients;
            tPatients = 0;
        } else {
            treated += doctors;
            unPatients = patients - doctors;
            untreated += unPatients;
            unPatients = 0;
        }
    }
    console.log(`Treated patients: ${treated}.`)
    console.log(`Untreated patients: ${untreated}.`)
}
hospital(["4", "7", "27", "9", "1"])

/*
    За даден период от време, всеки ден в болницата пристигат пациенти за преглед.
     Тя разполага първоначално със 7 лекари. 
     Всеки лекар може да преглежда само по един пациент на ден, но понякога има недостиг на лекари,
      затова останалите пациенти се изпращат в други болници.
      Всеки трети ден, болницата прави изчисления и ако броят на непрегледаните пациенти
       е по-голям от броя на прегледаните, се назначава още един лекар. 
      Като назначаването става преди да започне приемът на пациенти за деня. 
        Напишете програма, която изчислява за дадения период броя на прегледаните и непрегледаните пациенти. 
    
        На първия ред – периода, за който трябва да направите изчисления.
        На следващите редове(равни на броят на дните) – броя пациенти, които пристигат за преглед за текущия ден.

Изход 
    Да се отпечатат на конзолата 2 реда : 
         На първия ред: "Treated patients: {брой прегледани пациенти}." 
         На втория ред: "Untreated patients: {брой непрегледани пациенти}." 
*/