function food(chickenMenu, fishMenu, veganMenu) {
    let chickenMenuPrice = chickenMenu * 10.35;
    //console.log(chickenMenuPrice)
    let fishMenuPrice = fishMenu * 12.40;
    //console.log(fishMenuPrice)
    let veganMenuPrice = veganMenu * 8.15;
    //console.log(veganMenuPrice)
    let totalPriceFood = chickenMenuPrice + fishMenuPrice + veganMenuPrice;
    //console.log(totalPriceFood)
    let dessertPrice = totalPriceFood * 0.2;
    //console.log(dessertPrice)
    let totalOrderPrice = totalPriceFood + dessertPrice + 2.50;
    console.log(totalOrderPrice);
}
food(2, 4, 3)