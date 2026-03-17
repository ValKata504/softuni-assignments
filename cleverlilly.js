function cleverLilly(currentLillyAge, washerPrice, toyPrice){
    let moneyFromEvenBirthdays = 0;
    let giftMoney = 10;
    let takenByBrother = 0;
    let toyCount = 0;

    for(let age = 1; age <= currentLillyAge; age++){
        if(age % 2 == 0){
            moneyFromEvenBirthdays += giftMoney;
            giftMoney += 10;
            takenByBrother += 1;
        } else toyCount++;
    }

    const toysSum = toyCount * toyPrice;
    moneyFromEvenBirthdays -= takenByBrother;

    const totalMoney = moneyFromEvenBirthdays + toysSum;

    const difference = Math.abs(totalMoney - washerPrice);

    if(totalMoney >= washerPrice){
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}
cleverLilly();