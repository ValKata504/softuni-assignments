function idk(budget, season) {
  let place;
  let bnb;

  if (budget <= 100) {
    place = "Bulgaria";
  } else if (budget <= 1000) {
    place = "Balkans";
  } else {
    place = "Europe";
  }

  switch (place) {
    case "Bulgaria":
      if (season == "summer") {
        budget *= 0.3;
        bnb = "Camp";
      } else {
        budget *= 0.7;
        bnb = "Hotel";
      }
      break;
    case "Balkans":
      if (season == "summer") {
        budget *= 0.4;
        bnb = "Camp";
      } else {
        budget *= 0.8;
        bnb = "Hotel";
      }
      break;
    case "Europe":
      budget *= 0.9;
      bnb = "Hotel";
      break;
  }
  console.log(`Somewhere in ${place}`)
  console.log(`${bnb} - ${budget.toFixed(2)}`)
}
idk(50,
"summer")
