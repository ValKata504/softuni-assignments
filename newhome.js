function home(flower, amount, budget) {
    let price;
    let total;

    switch(flower) {
        case "Roses":
        price = 5
        if(amount > 80) {
        price *= 0.9
        }
        break;
        case "Dahlias":
        price = 3.8
        if(amount > 90) {
        price *= 0.85
        }
        break;
        case "Tulips":
        price = 2.8
        if(amount > 80)
        price *= 0.85
        break;
        case "Narcissus":
        price = 3
        if(amount < 120) {
        price *= 1.15
        }
        break;
        case "Gladiolus":
        price = 2.5
        if(amount < 80) {
        price *= 1.2
        }
        break;
    }
    total = price * amount
    if(total > budget) {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
    else {
        console.log(`Hey, you have a great garden with ${amount} ${flower} and ${(budget - total).toFixed(2)} leva left.`)
    }
}
home("Roses",

55,

250)