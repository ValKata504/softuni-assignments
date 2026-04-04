function trip(people, nights, transportCards, tickets) {
let nightsPrice = nights * 20
let transportPrice = transportCards * 1.60
let ticketsPrice = tickets * 6
let pricePerPerson = nightsPrice + transportPrice + ticketsPrice
let priceForGroup = pricePerPerson * people
finalPrice = priceForGroup * 1.25
console.log(finalPrice.toFixed(2))
}
trip(20, 14, 30, 6,)