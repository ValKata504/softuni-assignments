function skiTrip(days, roomType, rating) {
    let nights = days - 1;
    let pricePerNight = 0;

    // Цена на нощувка
    switch (roomType) {
        case "room for one person":
            pricePerNight = 18;
            break;
        case "apartment":
            pricePerNight = 25;
            break;
        case "president apartment":
            pricePerNight = 35;
            break;
    }

    let total = nights * pricePerNight;

    // Намаления според дни
    if (roomType === "apartment") {
        if (days < 10) {
            total *= 0.70; // -30%
        } else if (days <= 15) {
            total *= 0.65; // -35%
        } else {
            total *= 0.50; // -50%
        }
    } else if (roomType === "president apartment") {
        if (days < 10) {
            total *= 0.90; // -10%
        } else if (days <= 15) {
            total *= 0.85; // -15%
        } else {
            total *= 0.80; // -20%
        }
    }
    // room for one person няма отстъпка

    // Оценка
    if (rating === "positive") {
        total *= 1.25; // +25%
    } else if (rating === "negative") {
        total *= 0.90; // -10%
    }

    console.log(total.toFixed(2));
}