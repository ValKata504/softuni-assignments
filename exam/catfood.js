function catFood(input) {
  const catCount = Number(input[0]);
  let group1 = 0;
  let group2 = 0;
  let group3 = 0;
  let totalFoodGrams = 0;

  for (let i = 1; i <= catCount; i++) {
    const food = Number(input[i]);
    totalFoodGrams += food;

    if (food >= 100 && food < 200) {
      group1++;
    } else if (food >= 200 && food < 300) {
      group2++;
    } else if (food >= 300 && food <= 400) {
      group3++;
    }
  }

  const price = (totalFoodGrams / 1000) * 12.45;

  console.log(`Group 1: ${group1} cats.`);
  console.log(`Group 2: ${group2} cats.`);
  console.log(`Group 3: ${group3} cats.`);
  console.log(`Price for food per day: ${price.toFixed(2)} lv.`);
}