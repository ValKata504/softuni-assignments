function hotelRoom(month, nights) {
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;

            if (nights > 14) {
                studioPrice *= 0.70; // -30%
            } else if (nights > 7) {
                studioPrice *= 0.95; // -5%
            }
            break;

        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            if (nights > 14) {
                studioPrice *= 0.80; // -20%
            }
            break;

        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }

    // Апартамент отстъпка
    if (nights > 14) {
        apartmentPrice *= 0.90; // -10%
    }

    let totalStudio = studioPrice * nights;
    let totalApartment = apartmentPrice * nights;

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}