function fih(budget, season, people ) {
let rent

switch(season) {
    case "Spring":
    rent = 3000
    break;
    case "Summer":
    case "Autumn":
    rent = 4200
    break;
    case "Winter":
    rent = 2600
    break;
}
    if(people <=6) {
        rent *= 0.9
    }
    else if(people <= 11) {
        rent *= 0.85
    }
    else {
        rent *= 0.75
    }

    if(people % 2 === 0 && season != "Autumn") {
        rent *= 0.95
    }

    if(budget < rent) {
    console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
    }
    else{
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
    }
}
fih(2000,
"Winter",
13)