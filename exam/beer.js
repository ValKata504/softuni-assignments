function beer(name, budget, beers, chips) {
    let beerPrice = 1.2 * beers
    let chipsPricePerPack = beerPrice * 0.45
    let chipsPrice = Math.ceil(chipsPricePerPack * chips)
    let totalCost = beerPrice + chipsPrice

    if(totalCost <= budget) {
        console.log(`${name} bought a snack and has ${(budget - totalCost).toFixed(2)} leva left.`)
    }
        else if(totalCost > budget) {
        console.log(`${name} needs ${(totalCost - budget).toFixed(2)} more leva!`)
    }
}
beer("George", 10, 2, 3)
