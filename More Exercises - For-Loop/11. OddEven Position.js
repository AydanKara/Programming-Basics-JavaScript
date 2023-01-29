function oddEvenPosition(params) {
    let n = Number(params[0]);
    let index = 1;
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let number = Number(params[index]);
        if (i % 2 == 0) {
            evenSum += number;
            if (number > evenMax) {
                evenMax = number;
            }
            if (number < evenMin) {
                evenMin = number;
            }
        } else {
            oddSum += number;
            if (number > oddMax) {
                oddMax = number;
            }
            if (number < oddMin) {
                oddMin = number;
            }
        }
        index++;
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin == Number.MAX_SAFE_INTEGER) {
        console.log(`OddMin=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if (oddMax == Number.MIN_SAFE_INTEGER) {
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenMin == Number.MAX_SAFE_INTEGER) {
        console.log(`EvenMin=No,`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }
    if (evenMax == Number.MIN_SAFE_INTEGER) {
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
oddEvenPosition([
"1", 
"1"])
/*
"OddSum=" + {сума на числата на нечетни позиции}, 
"OddMin=" + { минимална стойност на числата на нечетни позиции } / {“No”}, 
"OddMax=" + { максимална стойност на числата на нечетни позиции } / {“No”}, 
"EvenSum=" + { сума на числата на четни позиции }, 
"EvenMin=" + { минимална стойност на числата на четни позиции } / {“No”}, 
"EvenMax=" + { максимална стойност на числата на четни позиции } / {“No”} */