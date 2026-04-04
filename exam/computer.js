function compute(month, hoursSpent, peopleInGroup, timeOfDay) {
  let pricePerHour;

  switch (month) {
    case "march":
    case "april":
    case "may":
      if ((timeOfDay = "day")) {
        pricePerHour = 10.5;
      } else {
        pricePerHour = 8.4;
      }
    case "june":
    case "july":
    case "august":
      if ((timeOfDay = "day")) {
        pricePerHour = 12.6;
      } else {
        pricePerHour = 10.2;
      }
  }
  if (peopleInGroup > 4) {
    pricePerHour *= 0.9;
  }
  if (hoursSpent >= 5) {
    pricePerHour *= 0.5;
  }

  let total = (pricePerHour * peopleInGroup) * hoursSpent
  console.log(`Price per person for one hour: ${pricePerHour}`)
  console.log(`Total cost of the visit: ${total}`)
}
compute("july", 5, 5, "night")
