function basketball(yearlyPrice) {
    let trainers = yearlyPrice - (yearlyPrice * 0.4);
    //console.log(trainers)
    let suit = trainers - (trainers * 0.2);
    //console.log(suit);
    let ball = suit / 4;
    //console.log(suit);
    let accessories = ball / 5;
   //console.log(accessories);
    let totalPriceEquipment = yearlyPrice + trainers + suit + ball + accessories;
    console.log(totalPriceEquipment);
}
basketball(365)