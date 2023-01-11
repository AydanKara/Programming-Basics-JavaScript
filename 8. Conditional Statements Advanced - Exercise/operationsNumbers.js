function operationsNumbers(input) {

    let firstN = Number(input[0]);
    let secondN = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+": result = firstN + secondN;
            if (result % 2 === 0) {
                console.log(`${firstN} ${operator} ${secondN} = ${result} - even`);
            } else {
                console.log(`${firstN} ${operator} ${secondN} = ${result} - odd`);
            }
            break;
        case "-": result = firstN - secondN;
            if (result % 2 === 0) {
                console.log(`${firstN} ${operator} ${secondN} = ${result} - even`);
            } else {
                console.log(`${firstN} ${operator} ${secondN} = ${result} - odd`);
            }
            break;
        case "*": result = firstN * secondN;
            if (result % 2 === 0) {
                console.log(`${firstN} ${operator} ${secondN} = ${result} - even`);
            } else {
                console.log(`${firstN} ${operator} ${secondN} = ${result} - odd`);
            }
            break;
        case "/":
            if (secondN === 0) {
                console.log(`Cannot divide ${firstN} by zero`);
            } else {
                console.log(`${firstN} / ${secondN} = ${(firstN / secondN).toFixed(2)}`);
            }
            break;
        case "%":
            if (secondN === 0) {
                console.log(`Cannot divide ${firstN} by zero`);
            } else {
                console.log(`${firstN} % ${secondN} = ${firstN % secondN}`);
            }
            break;
    }

}
operationsNumbers(["10", "12", "+"])

/*
Операции между числа   "+", "-", "*", "/", "%" 
Напишете функция, която получава  две цели числа (N1 и N2) и оператор, с който да се извърши дадена математическа операция с тях. 
Възможните операции са: Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%). 
При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен. 
При обикновеното деление – резултата. При модулното деление – остатъка. 
Трябва да се има предвид, че делителят може да е равен на 0(нула), а на нула не се дели. 
В този случай трябва да се отпечата специално съобщениe. 

Вход 
Приемат се 3 аргумента,: 
    N1 – цяло число в интервала [0...40 000] 
    N2 – цяло число в интервала [0...40 000] 
    Оператор – един символ измежду: "+", "-", "*", "/", "%" 

Изход 
Да се отпечата на конзолата един ред: 
    Ако операцията е събиране, изваждане или умножение: 
         "{N1} {оператор} {N2} = {резултат} – {even/odd}" 

    Ако операцията е деление: 
         "{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая 

    Ако операцията е модулно деление:  
        "{N1} % {N2} = {остатък}" 

    В случай на деление с 0(нула):  
         "Cannot divide {N1} by zero" 

Примерен вход и изход 

вход   (["10", "12", "+"])              (["10", "1", "-"])              (["7", "3", "*"]) 

изход   10 + 12 = 22 - even             10 – 1 = 9 - odd                7 * 3 = 21 - odd 

вход    (["123", "12", "/"])            (["10", "3", "%"]) 

изход    123 / 12 = 10.25               10 % 3 = 1 

вход    (["112", "0", "/"])             (["10", "0", "%"]) 

изход   Cannot divide 112 by zero       Cannot divide 10 by zero 

*/