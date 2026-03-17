function examArrival(examHour, examMin, arrivalHour, arrivalMin) {
    // Превръщаме всичко в минути
    let examTime = examHour * 60 + examMin;
    let arrivalTime = arrivalHour * 60 + arrivalMin;

    let diff = arrivalTime - examTime; // положително = закъснява

    if (diff > 0) {
        console.log("Late");
    } else if (diff >= -30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    // Ако има разлика
    if (diff !== 0) {
        let absDiff = Math.abs(diff);

        let hours = Math.floor(absDiff / 60);
        let minutes = absDiff % 60;

        if (hours === 0) {
            if (diff > 0) {
                console.log(`${minutes} minutes after the start`);
            } else {
                console.log(`${minutes} minutes before the start`);
            }
        } else {
            let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

            if (diff > 0) {
                console.log(`${hours}:${formattedMinutes} hours after the start`);
            } else {
                console.log(`${hours}:${formattedMinutes} hours before the start`);
            }
        }
    }
}