function cinema(weekday) {
    let ticketprice

    switch(weekday) {
        case "Monday":
        case "Tuesday":
        case "Friday":
        ticketprice = 12
        break;
        case "Wednesday":
        case "Thursday":
        ticketprice = 14
        break;
        case "Saturday":
        case "Sunday":
        ticketprice = 16
        break;
    }
    console.log(ticketprice)
}
cinema("Monday")