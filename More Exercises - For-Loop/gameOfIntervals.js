function gameOfIntervals(params) {
    let turns = Number(params[0]);
    let result = 0;
    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To50 = 0;
    let invalid = 0;
    let currentResult = 0;

    for (let index = 1; index < params.length; index++) {
        let number = Number(params[index]);
        if (number >= 0 && number < 10) {
            currentResult = number * 0.2;
            result += currentResult;
            from0To9++;
        } else if (number >= 10 && number <= 19) {
            currentResult = number * 0.3;
            result += currentResult;
            from10To19++;
        } else if (number >= 20 && number <= 29) {
            currentResult = number * 0.4;
            result += currentResult;
            from20To29++;
        } else if (number >= 30 && number <= 39) {
            result += 50;
            from30To39++;
        } else if (number >= 40 && number <= 50) {
            result += 100;
            from40To50++;
        } else {
            result /= 2;
            invalid++;
        }
    }
    console.log(`${result.toFixed(2)}`)
    console.log(`From 0 to 9: ${(from0To9 * 100 / turns).toFixed(2)}%`)
    console.log(`From 10 to 19: ${(from10To19 * 100 / turns).toFixed(2)}%`)
    console.log(`From 20 to 29: ${(from20To29 * 100 / turns).toFixed(2)}%`)
    console.log(`From 30 to 39: ${(from30To39 * 100 / turns).toFixed(2)}%`)
    console.log(`From 40 to 50: ${(from40To50 * 100 / turns).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(invalid * 100 / turns).toFixed(2)}%`)
}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"])
//                 0    1    2    3     4    5   6    7    8    9   10
//                     100 / 50 /25/  34,2/37,8/37,8/137,8/237,8/287,8/295,8
/*
От  0 до  9 à 20 % от числото 
От 10 до 19 à 30 % от числото 
От 20 до 29 à 40 % от числото 
От 30 до 39 à 50 точки 
От 40 до 50 à 100 точки 

Невалидно число à резултата се дели на 2 
Изход 

Да се отпечата на конзолата 7 реда: 
    1ви ред: "{Краен резултат}" 
    2ри ред: "From 0 to 9: {процент в интервала}%" 
    3ти ред: "From 10 to 19: {процент в интервала}%" 
    4ти ред: "From 20 to 29: {процент в интервала}%" 
    5ти ред: "From 30 to 39: {процент в интервала}%" 
    6ти ред: "From 40 to 50: {процент в интервала}%" 
    7ми ред: "Invalid numbers: {процент в интервала}%"  
Всички числа трябва да са форматирана до вторият знак след запетаята.
*/