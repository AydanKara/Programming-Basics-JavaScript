function toyShop(input) {
   let priceHoliday = Number(input[0]);
   let puzzles = Number(input[1]);
   let dolls = Number(input[2]);
   let bears = Number(input[3]);
   let minions = Number(input[4]);
   let trucks = Number(input[5]);

   // Сума
   let summe = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
   // Брой на играчките
   let count = puzzles + dolls + bears + minions + trucks;
   // Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена.
   if (count >= 50) {
      summe = summe * 0.75; // summe = summe - summe * 0.25
   }
   // От спечелените пари трябва да се даде 10% за наема на магазина.
   summe = summe * 0.9; // summe = summe - summe * 0.1
   let diff = Math.abs( summe - priceHoliday );

   if ( summe >= priceHoliday ) {
      console.log(`Yes! ${diff.toFixed(2)} lv left.`);
   } else {
      console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
   }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])