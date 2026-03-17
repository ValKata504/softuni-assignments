function swimming(secondsR, metres, speed) {
  timeNeeded = metres * speed;
  delay = Math.floor(metres / 15) * 12.5;
  timeNeeded += delay;
    //console.log(timeNeeded);

    if (secondsR <= timeNeeded) {
        console.log(`No, he failed! He was ${(timeNeeded - secondsR).toFixed(2)} seconds slower.`)
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`);
    }
}
swimming(10464, 1500, 20,);
