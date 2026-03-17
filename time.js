function clock(hours, minutes) {
    minutes += 15
    if (minutes >= 60) {
        minutes = minutes - 60
        hours = hours + 1
    }
    if (hours >= 24) {
        hours = 0
    }
    if (minutes < 10) {

        console.log(`${hours}:0${minutes}`)
    }
    else console.log(`${hours}:${minutes}`)
}
clockcock(23, 50)