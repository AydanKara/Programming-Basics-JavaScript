function oscars(params) {
    let actorName = params[0];
    let academyPoints = Number(params[1]);
    for (let index = 3; index < params.length; index++) {
        let evaluatorNameLength = params[index].length;
        let evaluatorPoints = Number(params[++index]);
        academyPoints += evaluatorNameLength * evaluatorPoints / 2;
        if (academyPoints > 1250.5) {
            break;
        }
    }
    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]) 
//              0           1     2         3          4        5          6       7        8           9               10
/*
                        Zahari Baharov започва с 205 точки, като 4 човека ще го оценяват. 
                        Първи е Johnny Depp  
                        => 205 + ((11 * 45) / 2) = 452.5 

    Име на актьора - текст 
    Точки от академията - 
    Брой оценяващи n -  
На следващите n-на брой реда: 
    Име на оценяващия - текст 
    Точки от оценяващия - 

Оскари 

Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса. 
Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка. 
Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две.  

Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация. 
*/