function dance(dancers, points, season, place) {
  let pointsWon = dancers * points;
  let charity;

  if (place == "Abroad") {
    pointsWon *= 1.5;
    if (season == "summer") {
      pointsWon *= 0.9;
    } else {
      pointsWon *= 0.85;
    }
  } else {
    if (season == "summer") {
      pointsWon *= 0.95;
    } else {
      pointsWon *= 0.92;
    }
  }
  charity = pointsWon * 0.75;
  moneyLeft = pointsWon - charity;
  moneyPerDancer = moneyLeft / dancers;
  console.log(`Charity - ${charity.toFixed(2)}`);
  console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
dance(25, 98, "winter", "Bulgaria");
