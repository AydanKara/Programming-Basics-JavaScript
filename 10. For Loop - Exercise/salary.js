function salary(params) {
    let salary = Number(params[1]);

    for (let index = 2; index <= params.length; index++) {
        let tab = params[index];
        switch (tab) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (salary > 0) {
        console.log(Math.floor(salary));
    }
}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])