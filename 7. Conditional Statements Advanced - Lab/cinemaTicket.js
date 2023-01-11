function cinemaTicket(input){
    let day = input[0];

    switch (day){
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log("12");
            break;
        case "Wednesday":
        case "Thursday":
            console.log("14");
            break;
        case "Saturday":
        case "Sunday":
            console.log("16");
            break;
    }
}
cinemaTicket(["Monday"])

////////////////////////////////////////////////////////////////////////////////////////////

function cinemaTicket(input){
    let day = input[0];

    if (day === "Monday" || day === "Tuesday" || day === "Friday"){
        console.log(12);
    } else if (day === "Wednesday" || day === "Thursday") {
        console.log(14);
    } else if (day === "Saturday" || day === "Sunday"){
        console.log(16);
    }
}
cinemaTicket(["Monday"])

/*
Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на билет за кино според деня от седмицата: 

Monday Tuesday Wednesday Thursday Friday Saturday Sunday 
  12      12       14        14     12       16     16 

Примерен вход и изход 

     вход     изход      вход       изход           вход         изход 
(["Monday"])   12     (["Friday"])   12         (["Sunday"])      16 

*/
