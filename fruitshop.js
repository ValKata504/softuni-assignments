function fruitshop(fruit, day, amount) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        banana = 2.5
        apple = 1.2
        orange = 0.85
        grapefruit = 1.45
        kiwi = 2.7
        pineapple = 5.5
        grapes = 3.85
            break;
        case "Saturday":
        case "Sunday":
        banana = 2.7
        apple = 1.25
        orange = 0.90
        grapefruit = 1.6
        kiwi = 3
        pineapple = 5.6
        grapes = 4.2
            break;
        default:
        console.log("error")
        return
    }

    switch(fruit) {
    case "banana":
        price = banana
        break;
    case "apple":
        price = apple
        break;
    case "orange":
        price = orange
        break;
    case "grapefruit":
        price = grapefruit
        break;
    case "kiwi":
        price = kiwi
        break;
    case "pineapple":
        price = pineapple
        break;
    case "grapes":
        price = grapes
        break;
        default:
        console.log("error")
        return
    }
    console.log((price * amount).toFixed(2))
}
fruitshop()
