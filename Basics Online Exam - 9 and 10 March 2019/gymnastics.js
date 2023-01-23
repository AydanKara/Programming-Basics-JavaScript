function gymnastics(input) {
    let country = input[0];
    let tool = input[1];
    let score = 0;
    let maxScore = 20;
    let restScore = 0;
    let percent = 0;


    switch (country) {
        case "Russia":
            switch (tool) {
                case "ribbon": score = 9.100 + 9.400; break;
                case "hoop": score = 9.300 + 9.800; break;
                case "rope": score = 9.600 + 9.000; break;
            }  
        break;
        case "Bulgaria":
            switch (tool) {
                case "ribbon": score = 9.600 + 9.400; break;
                case "hoop": score = 9.550 + 9.750; break;
                case "rope": score = 9.500 + 9.400; break;
            }  
        break;
        case "Italy":
            switch (tool) {
                case "ribbon": score = 9.200 + 9.500; break;
                case "hoop": score = 9.450 + 9.350; break;
                case "rope": score = 9.700 + 9.150; break;
            }  
        break;
    }
    console.log(`The team of ${country} get ${score.toFixed(3)} on ${tool}.`)
    restScore = maxScore - score;
    percent = (restScore / maxScore) * 100;
    console.log(`${percent.toFixed(2)}%`);
}
gymnastics(["Russia", "rope"])

/*
Входът се чете от конзолата и се състои от два реда: 
Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy") 
Втори ред – уред - текст ("ribbon", "hoop" или "rope") 

Уред                      Русия                 България                  Италия 
_____________________________________________________________________________________
Лента(ribbon)        Трудност: 9.100 +      Трудност: 9.600 +        Трудност: 9.200 +
                     Изпълнение: 9.400      Изпълнение: 9.400        Изпълнение: 9.500
______________________________________________________________________________________
Обръч(hoop)          Трудност: 9.300 +
                     Изпълнение: 9.800


На конзолата трябва да се отпечатат два реда: 
    Първи ред: "The team of {държава} get {обща оценка} on {уред}." 
    Втори ред:  "{процентът, който не им достига до максималния брой точки}%" 
Общата оценка да бъде форматирана до третата цифра след десетичния знак, 
а процентът да бъде форматиран до втората цифра след десетичния знак.

Вход
Bulgaria ribbon 

Изход 
The team of Bulgaria get 19.000 on ribbon. 
5.00% 

Обяснения 
Оценката на България на лента е: 9.600 + 9.400 = 19.000 
Остават: 20 – 19.000 = 1 точка до максималния брой точки, което е: (1 / 20) * 100 = 5 %   
*/