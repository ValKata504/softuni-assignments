function renovationPrice(squareMeters) {
    squareMeters = squareMeters * 7.61;
    discount = squareMeters * 0.18;
    finalPrice = squareMeters - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

renovationPrice(550)