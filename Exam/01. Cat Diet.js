function catDiet(params) {
    let fatPercent = Number(params[0]);
    let proteinPercent = Number(params[1]);
    let carbohydratesPercent = Number(params[2]);
    let totalCalories = Number(params[3]);
    let waterContentPercent = Number(params[4]);

    let totalFatGrams = (fatPercent / 100) * totalCalories / 9;
    let totalProteinGrams = (proteinPercent / 100) * totalCalories / 4;
    let totalCarbohydratesGrams = (carbohydratesPercent / 100) * totalCalories / 4;
    let foodWeight = totalFatGrams + totalProteinGrams + totalCarbohydratesGrams;
    let caloriesPerGram = totalCalories / foodWeight;
    let waterPercent = 100 - waterContentPercent;
    let total = waterPercent / 100 * caloriesPerGram;
    console.log(total.toFixed(4));
}
catDiet([
    "60",
    "25",
    "15",
    "2500",
    "60"])

