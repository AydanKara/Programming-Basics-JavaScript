function equalPairs(params) {
    let originalValue = Number(params[0]);
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let index = 1;
    for (let i = 0; i < originalValue; i++) {
        let number1 = Number(params[index]);
        let number2 = Number(params[++index]);
        if (i % 2 == 0) {
            sum += number1 + number2;
        } else {
            sum -= (number1 + number2);
        }
        if (i == originalValue - 2) {
            sum1 = number1 + number2;
        }
        sum2 = number1 + number2;
        index++;
    }
    let diffInSums = Math.abs(sum1 - sum2);
    if (sum == 0 || sum == sum2) {
        console.log(`Yes, value=${sum2}`);
    } else {
        console.log(`No, maxdiff=${diffInSums}`);
    }
}
equalPairs(["2","1","2","2","2"]);


/* 
            int input = int.Parse(Console.ReadLine());
            int sum = 0;
            int sum1 = 0;
            int sum2 = 0;

            for (int i = 0; i < input; i++)
            {
                int number1 = int.Parse(Console.ReadLine());
                int number2 = int.Parse(Console.ReadLine());
                if (i % 2 == 0) {
                    sum += number1 + number2;
                } else {
                    sum -= (number1 + number2);
                }
                if (i == input - 2) {
                    sum1 = number1 + number2;
                }
                sum2 = number1 + number2;

            int diffInSums = Math.Abs(sum1 - sum2);
            Console.WriteLine(sum == 0 || sum == sum2 ? $"Yes, value={sum2}" : $"No, maxdiff={diffInSums}");
*/