function job(hour, weekday) {
    switch(weekday) {
        case("Monday"):
        case("Tuesday"):
        case("Wednesday"):
        case("Thursday"):
        case("Friday"):
        case("Saturday"):
        if (hour >= 10 && hour <= 18) {
        console.log("open")
        }
        else
        console.log("closed")
        break;
        default:
        console.log("closed")
        break;
    }
}
job(19, "Monday")