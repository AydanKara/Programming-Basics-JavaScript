function traveling2(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let minBudget = Number(input[index]);
        let savedMoney = 0;
        while (savedMoney < minBudget) {
            index++;
            let command2 = input[index];
            if (command2 === "End") {
                return;
            }
            let money = Number(command2);
            savedMoney += money;
        }
        console.log(`Going to ${command}!`);
        index++;
        command = input[index];
        index++;
    }
}
    /*
    string input = "";
            while ((input = Console.ReadLine()) != "End")
            {
                double minBudget = double.Parse(Console.ReadLine());
                double savedMoney = 0;
                while (savedMoney < minBudget)
                {
                    double money = double.Parse(Console.ReadLine());
                    savedMoney += money;
                }
                Console.WriteLine($"Going to {input}!");
            }
        }
    }
}
    */

traveling2([
    "Greece", 
    "1000", 
    "200", 
    "200", 
    "300", 
    "100", 
    "150", 
    "240", 
    "Spain", 
    "1200", 
    "300", 
    "500", 
    "193", 
    "423", 
    "End"]) 