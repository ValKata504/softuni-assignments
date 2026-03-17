function sumSec(timeFirst, timeSecond, timeThird) {
    const totalTime = timeFirst + timeSecond + timeThird
    minutes = Math.floor(totalTime / 60)
    seconds = totalTime % 60
    if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`)
    }
    else console.log(`${minutes}:${seconds}`)
}
sumSec(35, 45, 44)