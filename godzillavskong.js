function kong(budget, count, price) {
    let decor = budget * 0.10
    if (count >= 150) {
        price *= 0.9
    }
    
    let totalprice = decor + count * price
    
    if (totalprice <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalprice).toFixed(2)} leva left.`)
    }

    else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalprice - budget).toFixed(2)} leva more.`)
    }
}
kong(20000, 120, 55,5)
kong(9587.88, 222, 55.68)