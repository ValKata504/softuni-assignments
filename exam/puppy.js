function pupp(input) {
  let foodKg = Number(input[0]);
  let totalFoodGrams = foodKg * 1000;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === "Adopted") {
      break;
    }
    totalFoodGrams -= Number(input[i]);
  }

  if (totalFoodGrams >= 0) {
    console.log(`Food is enough! Leftovers: ${totalFoodGrams} grams.`);
  } else {
    console.log(`Food is not enough. You need ${Math.abs(totalFoodGrams)} grams more.`);
  }
}
pupp(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);