function moonTrip(speed, fuelPer100) {
    let distanceOneWay = 384400;
    let totalDistance = distanceOneWay * 2;

    let time = totalDistance / speed + 3;
    let totalTime = Math.ceil(time);

    let fuelNeeded = (totalDistance / 100) * fuelPer100;

    console.log(totalTime);
    console.log(fuelNeeded);
}
moonTrip(10000, 5)