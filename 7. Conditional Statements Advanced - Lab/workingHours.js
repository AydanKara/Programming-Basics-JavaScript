function workingHours(input) {
   let hours = Number(input[0]);
   let day = input[1];

   if ( hours >= 10 && hours <= 18){
    if ( day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday"){
        console.log("open");
    } else if (day === "Sunday"){
        console.log("closed");
    }
    } else {
        console.log("closed");
    }

}
workingHours(["11", "Sunday"])

/*
Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен, 
като работното време на офисът е от 10-18 часа, от понеделник до събота включително. 

Примерен вход и изход 

       вход          изход |        вход            изход  |         вход              изход 
                           |                               |
(["11", "Monday"])   open  |  (["19", "Friday"])   closed  |   (["11", "Sunday"])     closed 


*/