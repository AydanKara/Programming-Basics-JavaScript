function graduation(params) {

    let name = params[0];
    let index = 1;
    let sumGrades = 0;
    let grades = 1;
    let excluded = 0;

    while (grades <= 12) {
        let currentGrade = Number(params[index]);
        index++;
        if (currentGrade >= 4) {
            sumGrades += currentGrade;
            grades++;
        } else {
            excluded++;
            break;
        }
    }
    let avgGrades = sumGrades / 12;
    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${avgGrades.toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]) 

/*
средната оценка
името на ученика
ако годишната му оценка е по-голяма или равна на 4.00
Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва
като се отпечатва името на ученика и в кой клас бива изключен.
При успешно завършване на 12-ти клас да се отпечата :  
    "{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}" 
    В случай, че ученикът е изключен от училище, да се отпечата: 
    "{име на ученика} has been excluded at {класа, в който е бил изключен} grade" 
    Стойността трябва да бъде форматирана до втория знак след десетичната запетая.  
*/