function travelAgency(params) {
    let city = params[0];
    let typePackage = params[1];
    let vip = params[2];
    let days = Number(params[3]);
    let sum = 0;

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    }
    if (city !== "Bansko" && city !== "Borovets" && city !== "Varna" && city !== "Burgas" ||
        typePackage !== "noEquipment" && typePackage !== "withEquipment" &&
        typePackage !== "noBreakfast" && typePackage !== "withBreakfast") {
        console.log("Invalid input!");
        return;
    }

    switch (city) {
        case "Bansko":
        case "Borovets":
            switch (typePackage) {
                case "withEquipment": sum = 100; break;
                case "noEquipment": sum = 80; break;
            }
        case "Varna":
        case "Burgas":
            switch (typePackage) {
                case "withBreakfast": sum = 130; break;
                case "noBreakfast": sum = 100; break;
            }
    }
    if (vip === "yes") {
        switch (typePackage) {
            case "withEquipment": sum *= 0.9; break;
            case "noEquipment": sum *= 0.95; break;
            case "withBreakfast": sum *= 0.88; break;
            case "noBreakfast": sum *= 0.93; break;
        }
    }
    if (days > 7) {
        sum *= days - 1;
    } else {
        sum *= days;
    }

    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);

}
travelAgency(["Gabrovo", "noBreakfast", "no", "3"])

/*
Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas") 

Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast") 

Притежание на VIP отстъпка - текст с възможности  "yes" или "no" 

Дни за престой - цяло число в интервала [1 … 10000]  */