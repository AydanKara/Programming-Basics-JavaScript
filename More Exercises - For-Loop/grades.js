function grades(params) {
    let students = Number(params[0]);
    let averageGrade = 0;
    let up5 = 0;
    let up4 = 0;
    let up3 = 0;
    let fail = 0;

    for (let index = 1; index < params.length; index++) {
        let grade = Number(params[index]);
        if (grade >= 5) {
            up5++;
            averageGrade += grade;
        } else if (grade >= 4) {
            up4++;
            averageGrade += grade;
        } else if (grade >= 3) {
            up3++;
            averageGrade += grade;
        } else if (grade >= 2) {
            fail++;
            averageGrade += grade;
        }
    }
    console.log(`Top students: ${(up5 * 100 / students).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(up4 * 100 / students).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(up3 * 100 / students).toFixed(2)}%`)
    console.log(`Fail: ${(fail * 100 / students).toFixed(2)}%`);
    console.log(`Average: ${(averageGrade / students).toFixed(2)}`)
}
grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5" ])
/*        0     1      2      3      4    5   6     7      8      9    10   */

/*
5 и повече – трима = 30% от 10 

Между 4 и 4.99 – трима = 30% от 10 

Между 3 и 3.99 – двама = 20% от 10 

Под 3 – двама = 20% от 10 

Средният успех: 3 + 2.99 + 5.68 + 3.01 + 4 + 4 + 6 + 4.50 + 2.44 + 5 = 40.62 / 10 = 4.062 
*/