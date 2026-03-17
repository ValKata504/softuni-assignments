function store(item, city, amount) {
        let coffee;
        let water;
        let beer;
        let sweets;
        let peanuts;

    switch(city) {
        case "Sofia":
        coffee = 0.50;
        water = 0.80;
        beer = 1.2;
        sweets = 1.45;
        peanuts = 1.60;
        break;

        case "Plovdiv":
        coffee = 0.40;
        water = 0.70;
        beer = 1.15;
        sweets = 1.30;
        peanuts = 1.50;
        break;

        case "Varna":
        coffee = 0.45;
        water = 0.70;
        beer = 1.1;
        sweets = 1.35;
        peanuts = 1.55;
        break;
    }

    switch(item) {
        case "coffee":
        price = coffee;
        break;
        case "water":
        price = water;
        break;
        case "beer":
        price = beer;
        break;
        case "sweets":
        price = sweets
        break;
        case "peanuts":
        price = peanuts
        break;
    }
    shopping = price * amount
    console.log(shopping)
}
store("coffee", "Varna", 2)