function bonus(points) {
    let bonus = 0.00;
    if (points <= 100)
        bonus = 5
    else if (points <= 1000) {
        bonus = points * 0.20;
    }
    else if (points > 1000)
        bonus = points * 0.10;
    if (points % 2 == 0) {
        bonus += 1;
    }   else if (points % 10 == 5) {
        bonus += 2
    }
    console.log(bonus)
    console.log(points + bonus)
}
bonus(2703)