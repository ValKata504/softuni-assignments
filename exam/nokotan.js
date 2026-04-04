function shika(days, foodInKG, deer1, deer2, deer3) {
let deer1Food = days * deer1
let deer2Food = days * deer2
let deer3Food = days * deer3
totalFoodNeeded = deer1Food + deer2Food + deer3Food

if(totalFoodNeeded <= foodInKG) {
    console.log(`${Math.floor(foodInKG - totalFoodNeeded)} kilos of food left.`)
}
else {console.log(`${Math.ceil(totalFoodNeeded - foodInKG)} more kilos of food are needed.`)}
}
shika(5, 10, 2.1, 0.8, 11)