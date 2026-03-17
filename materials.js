function materials(packsOfPens, packsOfMarkers, litresOfCleaner, discount){
    let totalPens = packsOfPens * 5.80;
    // total price needed for X amount of pens
    // console.log(totalPens)
    let totalMarkers = packsOfMarkers * 7.20;
    // total price needed for X amount of markers
    // console.log(totalMarkers)
    let totalCleaner = litresOfCleaner * 1.20;
    // total price needed for X litres of cleaner
    // console.log(totalCleaner)
    let discountPercent = discount * 0.01;
    // the discount percent you get
    // console.log(discountPercent)
    let totalSum = totalPens + totalMarkers + totalCleaner
    // total sum before discount
    // console.log(totalSum)
    let totalSumDiscount = totalSum - (totalSum * discountPercent)
    // total sum after discount
    console.log(totalSumDiscount);
}
materials(2, 3, 4, 25)